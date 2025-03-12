"use client"

import { useId } from "react"
import MessageBubble, { MessageBubbleProps } from "./MessageBubble";


interface ChatMessagesProps {
  messages: MessageBubbleProps[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => {
  
  const messageId = useId();  

  return (
    <div className="w-full p-10">
      {messages.map((msg, index) => (
        <MessageBubble key={index+messageId} text={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  )
}