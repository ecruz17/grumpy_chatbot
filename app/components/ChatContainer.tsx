"use client"

import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"
import { ChatMessages } from "./ChatMessages"
import { useMessages } from "../hooks/useMessages"


export const ChatContainer = () => {
  const { messages, handleSendMessage } = useMessages();
  return (
    <>
      <ChatHeader />
      <div className="overflow-y-scroll w-full h-full">
        <ChatMessages messages={messages} />
      </div>
      <div className="w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}