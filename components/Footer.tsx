import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 flex items-center text-white justify-center p-5">
      <Image
        width={40}
        height={40}
        className="filter hue-rotate-90 rounded-full h-20 w-20 animate-pulse justify-center bg-red-500 border-black-500"
        src="/profile.png"
        alt="Profile Picture"
      />
      <p className="text-xs text-emerald-900 pl-5">
        DISCLAIMER: If you are gambling online utilizing this app, you are doing
        so completely and totally at your own risk. We are not liable for any
        losses that are incurred or problems that arise at online casinos or
        elsewhere.
      </p>
    </footer>
  );
}

export default Footer;
