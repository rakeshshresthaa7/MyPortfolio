"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

interface Suggestion {
  id: string;
  question: string;
  answer?: string;
}

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, error, sendMessage, fetchSuggestions, stopStreaming, clearMessages } = useChat();

  // Fetch suggestions when component mounts
  useEffect(() => {
    setIsLoadingSuggestions(true);
    fetchSuggestions((data) => {
      setSuggestions(data || []);
      setIsLoadingSuggestions(false);
    }).finally(() => {
      setIsLoadingSuggestions(false);
    });
  }, [fetchSuggestions]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f8e9aa] text-black border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.22)] hover:bg-[#ffe67f] transition-all duration-200 flex items-center justify-center z-40 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[min(95vw,24rem)] h-[min(90vh,600px)] bg-[#fdf8ee] rounded-xl border-4 border-black shadow-[18px_18px_0_rgba(0,0,0,0.22)] flex flex-col z-40 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b-4 border-black bg-[#f6d76e] text-black rounded-t-xl">
            <div>
              <h3 className="font-semibold">Rakesh's AI Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything about Rakesh</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                clearMessages();
              }}
              className="p-1 rounded-none border-4 border-black bg-[#f0c33f] hover:bg-[#ffd055] transition-colors"
              aria-label="Close chat"
            >
              <span className="text-base">×</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fffdf7]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Welcome! 👋
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Ask me anything about Rakesh
                  </p>
                </div>

                {/* Suggestions */}
                {isLoadingSuggestions ? (
                  <div className="text-xs text-gray-500">Loading suggestions...</div>
                ) : suggestions.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2 w-full mt-4">
                    {suggestions.slice(0, 3).map((suggestion) => (
                      <button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion.question)}
                        className="text-left text-xs p-3 rounded-none border-4 border-black bg-[#fff3a5] hover:bg-[#ffe676] text-black transition-colors"
                      >
                        {suggestion.question}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatBubble key={message.id} message={message} />
                ))}
                {error && (
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 text-xs">
                    <p className="font-semibold">Error</p>
                    <p>{String(error)}</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <ChatInput
            onSubmit={sendMessage}
            isLoading={isLoading}
            onStop={stopStreaming}
          />
        </div>
      )}
    </>
  );
};
