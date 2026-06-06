"use client";

import { useEffect, useRef, useState } from "react";
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-200 flex items-center justify-center z-40 hover:scale-110"
        aria-label="Open chat"
      >
        <span className="text-lg font-bold">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col z-40 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
            <div>
              <h3 className="font-semibold">Rakesh's AI Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything about Rakesh</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                clearMessages();
              }}
              className="p-1 hover:bg-blue-700 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <span className="text-base">×</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
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
                        className="text-left text-xs p-2 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-900 dark:text-blue-100 transition-colors"
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
