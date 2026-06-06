import { useState, useCallback, useRef, useEffect } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatHistory {
  role: "user" | "assistant";
  content: string;
}

const BACKEND_URL = "https://myportfolio-backend-twua.onrender.com";

// Test backend connectivity
const testBackendConnectivity = async () => {
  try {
    console.log("Testing backend connectivity...");
    const response = await fetch(`${BACKEND_URL}/`);
    const data = await response.json();
    console.log("✅ Backend is reachable:", data);
    return true;
  } catch (err) {
    console.error("❌ Backend is NOT reachable:", err);
    return false;
  }
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Test backend on mount
  useEffect(() => {
    testBackendConnectivity();
    // Expose for manual testing
    (window as any).testBackend = testBackendConnectivity;
  }, []);

  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim()) return;

      setError(null);
      const userMessageId = `user-${Date.now()}`;

      // Add user message to UI
      setMessages((prev) => [
        ...prev,
        {
          id: userMessageId,
          role: "user",
          content: userMessage,
          timestamp: new Date(),
        },
      ]);

      setIsLoading(true);
      abortControllerRef.current = new AbortController();

      try {
        // Build chat history for the request, skipping empty assistant messages
        const history: ChatHistory[] = messages
          .map((msg) => ({
            role: msg.role,
            content: msg.content,
          }))
          .filter((item) => item.content?.trim().length > 0);

        const requestBody = {
          message: userMessage,
          history,
        };

        console.log("=== Chat Request ===");
        console.log("URL:", `${BACKEND_URL}/api/chat/stream`);
        console.log("Method: POST");
        console.log("Headers:", { "Content-Type": "application/json" });
        console.log("Body:", requestBody);
        console.log("Body (JSON):", JSON.stringify(requestBody));
        console.log("Body (Stringified - length):", JSON.stringify(requestBody).length);
        console.log("===================");

        const fetchOptions: RequestInit = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream",
          },
          body: JSON.stringify(requestBody),
          signal: abortControllerRef.current.signal,
        };

        console.log("Fetch options:", fetchOptions);

        const response = await fetch(`${BACKEND_URL}/api/chat/stream`, fetchOptions);

        console.log("Response Status:", response.status);
        console.log("Response Headers:", {
          "content-type": response.headers.get("content-type"),
          "content-length": response.headers.get("content-length"),
        });

        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const responseText = await response.text();
            console.error("Backend error response text:", responseText);
            console.error("Backend error response text length:", responseText.length);
            
            if (responseText && responseText.trim()) {
              try {
                const errorData = JSON.parse(responseText);
                console.error("Backend error response (parsed):", errorData);
                errorMessage = errorData.detail || errorData.message || JSON.stringify(errorData) || errorMessage;
              } catch {
                errorMessage = responseText;
              }
            } else {
              errorMessage = `${response.status} ${response.statusText} (Empty Response)`;
            }
          } catch (e) {
            console.error("Failed to read error response:", e);
            errorMessage = `${response.status} ${response.statusText}`;
          }
          console.error("Final error message:", errorMessage);
          throw new Error(errorMessage);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const assistantMessageId = `assistant-${Date.now()}`;
        let fullContent = "";

        console.log("📡 Starting to read streaming response...");

        // Add empty assistant message that will be updated
        setMessages((prev) => [
          ...prev,
          {
            id: assistantMessageId,
            role: "assistant",
            content: "",
            timestamp: new Date(),
          },
        ]);

        const decoder = new TextDecoder();
        let chunkCount = 0;
        let eventCount = 0;
        let rawResponse = "";
        let buffer = "";
        let pendingEventType: string | null = null;
        let pendingData = "";

        const flushEvent = () => {
          if (!pendingData.trim()) return;

          try {
            const payload = JSON.parse(pendingData);
            eventCount++;
            console.log(`✨ Event #${eventCount}:`, pendingEventType, payload);

            if (pendingEventType === "delta") {
              const chunkText = payload.content ?? payload.text;
              if (chunkText) {
                fullContent += chunkText;
                console.log(`💬 Updated content: "${fullContent}"`);
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, content: fullContent }
                      : msg
                  )
                );
              }
            } else if (pendingEventType === "error") {
              console.error("❌ Backend error event:", payload);
              throw new Error(payload.error || payload.message || "Unknown error occurred");
            }
          } catch (e) {
            console.warn("⚠️ Failed to parse event payload:", pendingData, e);
          } finally {
            pendingEventType = null;
            pendingData = "";
          }
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            if (buffer.trim()) {
              console.log("📦 Processing final buffered line:", buffer);
              const finalLines = buffer.split(/\r?\n/);
              for (const line of finalLines) {
                if (!line.trim()) continue;

                if (line.startsWith("event: ")) {
                  pendingEventType = line.slice(7).trim();
                  continue;
                }

                if (line.startsWith("data: ")) {
                  pendingData += (pendingData ? "\n" : "") + line.slice(6);
                }
              }
              flushEvent();
            }
            console.log(`✅ Stream complete. Received ${chunkCount} chunks, ${eventCount} events`);
            console.log(`📄 Raw response:\n${rawResponse}`);
            break;
          }

          chunkCount++;
          const chunk = decoder.decode(value, { stream: true });
          rawResponse += chunk;
          console.log(`📦 Chunk ${chunkCount}:`, chunk);
          buffer += chunk;
          const lines = buffer.split(/\r?\n/);
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.trim()) {
              flushEvent();
              continue;
            }

            console.log(`📝 Line: "${line}"`);

            if (line.startsWith("event: ")) {
              pendingEventType = line.slice(7).trim();
              continue;
            }

            if (line.startsWith("data: ")) {
              pendingData += (pendingData ? "\n" : "") + line.slice(6);
              continue;
            }
          }
        }
      } catch (err) {
        let errorMessage = "Failed to send message";
        
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === "string") {
          errorMessage = err;
        } else if (typeof err === "object" && err !== null) {
          errorMessage = (err as any).message || JSON.stringify(err);
        }

        if (errorMessage !== "The operation was aborted.") {
          setError(errorMessage);
          setMessages((prev) =>
            prev.filter((msg) => msg.id !== userMessageId)
          );
        }
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [messages]
  );

  const fetchSuggestions = useCallback(
    async (
      onSuccess?: (suggestions: Array<{ id: string; question: string }>) => void
    ) => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/chat/suggestions`);
        if (!response.ok) throw new Error("Failed to fetch suggestions");
        const data = await response.json();
        onSuccess?.(data);
        return data;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch suggestions";
        setError(errorMessage);
        return [];
      }
    },
    []
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    fetchSuggestions,
    stopStreaming,
  };
};
