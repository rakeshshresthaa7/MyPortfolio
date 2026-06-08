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
      className="flex gap-2 p-3 border-t-4 border-black bg-[#faf1d6]"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about Rakesh..."
        disabled={isLoading}
        className="flex-1 px-4 py-2 rounded-none border-4 border-black bg-white text-black placeholder:text-black/40 focus:outline-none focus:ring-0 disabled:opacity-50"
      />
      {isLoading ? (
        <button
          type="button"
          onClick={onStop}
          className="p-2 rounded-none border-4 border-black bg-[#dc2626] text-white hover:bg-[#ef4444] transition-colors"
          title="Stop"
        >
          <span className="text-base">■</span>
        </button>
      ) : (
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2 rounded-none border-4 border-black bg-[#ff8b00] text-black hover:bg-[#ff9f2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Send"
        >
          <span className="text-base">➤</span>
        </button>
      )}
    </form>
  );
};
