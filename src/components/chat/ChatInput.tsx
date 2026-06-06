import { FormEvent, useState } from "react";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
  onStop?: () => void;
}

export const ChatInput = ({ onSubmit, isLoading, onStop }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSubmit(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-3 border-t border-gray-200 dark:border-gray-700"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about Rakesh..."
        disabled={isLoading}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      />
      {isLoading ? (
        <button
          type="button"
          onClick={onStop}
          className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          title="Stop"
        >
          <span className="text-base">■</span>
        </button>
      ) : (
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Send"
        >
          <span className="text-base">➤</span>
        </button>
      )}
    </form>
  );
};
