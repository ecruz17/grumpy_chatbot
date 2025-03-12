"use client"

import { useState } from "react"
import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"
import { ChatMessages } from "./ChatMessages"
import { MessageBubbleProps } from "./MessageBubble"
import { getMessage } from "../services/getMessage"

export const ChatContainer = () => {
  const [messages, setMessages] = useState<MessageBubbleProps[]>([]);

  const handleSendMessage = async (
    newMessage: string,
    clearInput: () => void
  ) => {
    const updatedMessages = [...messages, { text: newMessage, isUser: true }];
    setMessages(updatedMessages);

    // Limpiar el input inmediatamente
    clearInput();

    setMessages((prev) => [...prev, { text: "Escribiendo...", isUser: false }]);

    try {
      const responseMessage = await getMessage(newMessage);

      // Replace 'Escribiendo...'
      setMessages((prev) =>
        prev.map((msg) =>
          msg.text === "Escribiendo..." ? { text: responseMessage, isUser: false } : msg
        )
      );
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.text === "Escribiendo..." ? { text: "Oops! Something went wrong.", isUser: false } : msg
        )
      );
    }
  };


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
  )
}