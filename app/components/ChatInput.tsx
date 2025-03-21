"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoMdSend } from "react-icons/io";

interface Props {
  onSendMessage: (message: string, clearInput: () => void) => void;
}

export const ChatInput = ({ onSendMessage }: Props) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 100) return;
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    onSendMessage(userInput, () => setUserInput(""));
  };

  return (
    <div className="p-2 bg-transparent">
      <form onSubmit={handleSubmit} className="flex gap-1 mb-4">
        <input
          type="text"
          name="input"
          placeholder="Escribe tu mensaje aquí..."
          value={userInput}
          onChange={handleChange}
          className="p-2 border border-gray-300 bg-gray-700 rounded-2xl w-full text-white text-xs md:text-sm"
        />
        <div className="flex items-center">
          <label
            className="text-white text-[12px] absolute opacity-70 right-22"
          >Max: {userInput.length}/100
          </label>
        </div>
        <button
          type="submit"
          className={`${userInput ? 'text-white' : 'text-[#bababa]'} px-4 py-2 rounded-full cursor-pointer`}
          disabled={userInput ? false : true}
        >
          <IoMdSend
            size={25}
          />
        </button>
      </form>
    </div>
  );
};
