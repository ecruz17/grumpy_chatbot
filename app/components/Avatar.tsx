"use client"

import { useState } from "react"
import Image from "next/image"

export const Avatar = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 rounded-full animate-pulse">
          Loading...
        </div>
      )}
      <Image
        src="https://thispersondoesnotexist.com/"
        alt="grumpy_avatar"
        width={100}
        height={100}
        className="rounded-full"
        onLoad={() => setLoading(false)}
      />
    </>
  );
}