import { Message } from "@/hooks/useChat";

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble = ({ message }: ChatBubbleProps) => {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex gap-2 animate-in fade-in slide-in-from-bottom-2 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[85vw] sm:max-w-xs lg:max-w-md px-4 py-3 rounded-none border-4 border-black ${
          isAssistant
            ? "bg-[#e7e7e7] text-black"
            : "bg-[#121212] text-white"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
};
