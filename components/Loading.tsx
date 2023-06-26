import Image from "next/image";
import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x -2 mb-10 ">
        <Image
          src="/profile.png"
          alt="banner image"
          width={80}
          height={80}
          className="filter hue-rotate-90 rounded-full animate-pulse justify-center bg-red-500 border-black-500 mb-10 mr-10"
        />
        <h1 className="text-lg text-white font-bold">Loading the TrapHouse Lotto</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
