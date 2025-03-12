import { Avatar } from "./Avatar"

export const ChatHeader = () => {
  return (
    <div className="flex flex-row items-center gap-2 bg-slate-500 w-full p-4">
      <div className="w-10">
        <Avatar />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-white text-sm">Don Mamón</span>
        <div className="flex flex-row items-center gap-1">
          <span className="font-medium text-slate-400 text-xs">Activo</span>
          <span className="w-2 h-2 rounded-full bg-green-400"/>
        </div>
      </div>
    </div>
  )
}