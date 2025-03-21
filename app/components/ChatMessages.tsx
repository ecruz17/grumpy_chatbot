"use client"

import { useId } from "react"
import { MessageBubbleProps } from "../interfaces/MessageBubbleProps";
import MessageBubble from "./MessageBubble";


interface ChatMessagesProps {
  messages: MessageBubbleProps[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => {
  
  const messageId = useId();  

  return (
    <div className="w-full p-10 flex flex-col gap-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index+messageId} text={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  )
}