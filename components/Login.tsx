import Image from "next/image";
import React from "react";
import { useMetamask, useAddress, ConnectWallet } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div className="bg-[#091B18] min-h-screen flex flex--col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/metamask.jpg"
          alt="Profile Picture"
          width={224}
          height={224}
          className="rounded-full animate-pulse justify-center bg-red-500 border-black-500 mb-10"
        />
        <h1 className="text-6xl text-white font-bold">Ether Supply Lotto</h1>
        <h2 className="text-white">
          Get Started By logging in with your MetaMask
        </h2>
        <button onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with MetaMask
        </button>
        <ConnectWallet />
      </div>
    </div>
  );
}

export default Login;
