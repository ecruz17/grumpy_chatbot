"use client"

import { useState } from "react";
import Image from "next/image";
import { LuLoaderCircle } from "react-icons/lu";

export const Avatar = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex items-center justify-center">
      {loading && (
        <span className="absolute text-xs text-white animate-pulse bg-gray-600 w-[45px] h-[45px] rounded-full flex items-center justify-center">
          <LuLoaderCircle className="animate-spin" size={20} />
        </span>
      )}
      <Image
        src="https://thispersondoesnotexist.com/"
        alt="grumpy_avatar"
        width={100}
        height={100}
        className="rounded-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
