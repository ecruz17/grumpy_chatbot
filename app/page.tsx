import { ChatContainer } from "./components/ChatContainer";

export default function Home() {
  return (
      <div className="flex flex-col items-center bg-gray-600 w-full md:max-w-[75%] md:rounded-lg h-full absolute">
        <ChatContainer />
      </div>  
  );
}
