import { IoHeart } from "react-icons/io5"
import { Avatar } from "./Avatar"

export const ChatHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-500 w-full p-4">
      <section className="flex flex-row gap-2 items-center">
        <div className="w-10">
          <Avatar />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-sm">Don Mamón</span>
          <div className="flex flex-row items-center gap-1">
            <span className="font-medium text-slate-400 text-xs">Activo</span>
            <span className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex flex-row text-[10px] md:text-sm text-white font-semibold items-center gap-1">
          Made with <IoHeart /> by:
          <a
            href="https://ecruz.dev"
            target="blank"
            className="text-amber-200 hover:underline"
          > {`<ecruzdev />`}</a>
        </h2>
      </section>
    </div>
  )
}