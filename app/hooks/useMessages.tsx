"use client"

import { useState } from "react";
import { MessageBubbleProps } from "../interfaces/MessageBubbleProps";
import { getMessage } from "../services/getMessage";

export const useMessages = () => {
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
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.text === "Escribiendo..." ? { text: "Oops! Something went wrong.", isUser: false } : msg
        )
      );
      throw new Error('Error fetching chatbot response: ');
    }
  };

  return {
    messages,
    handleSendMessage
  }
}
