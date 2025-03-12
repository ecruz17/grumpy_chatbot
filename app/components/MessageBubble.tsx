import React from "react";

export type MessageBubbleProps = {
  text: string;
  isUser?: boolean;
};

const MessageBubble = ({ text, isUser = false }: MessageBubbleProps) => {
  return (
  <>
    {
      isUser
        ? (
          <div
            className = {`p-3 max-w-[70%] w-fit rounded-lg rounded-br-none text-white bg-blue-500 ml-auto`}
          >
          { text }
          </div >
          )
          : (
            <div className="flex flex-row items-end gap-4">
              <span className="rounded-full w-8 h-8 text-slate-400 bg-slate-200 font-bold flex items-center justify-center">G</span>
              <div
                className={`p-3 max-w-[70%] w-fit rounded-lg rounded-bl-none text-white bg-slate-400`}
              >
                {text}
              </div>
            </div>
          )
    }
    </>
  );
};

export default MessageBubble;
