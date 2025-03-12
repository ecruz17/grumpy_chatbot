"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { getMessage } from "../services/getMessage";

interface Props {
  onSendMessage: (message: string, clearInput: () => void) => void;
}

export const ChatInput = ({ onSendMessage }: Props) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    onSendMessage(userInput, () => setUserInput(""));
  };

  return (
    <div className="p-2 bg-slate-500">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          name="input"
          placeholder="Escribe tu mensaje aquí..."
          value={userInput}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full text-white"
        />
        <button
          type="submit"
          className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};
