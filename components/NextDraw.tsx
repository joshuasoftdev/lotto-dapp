import React from "react";
import CountdownTimer from "./CountdownTimer";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import TicketPrice from "./TicketPrice";

function NextDraw() {
  const { contract } = useContract("0xd443573A28f97D8C48F6917C4B09f245A5248871");
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );

  return (
    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 bg-[url('/waves.gif')] bg-cover shadow-inner-2xl">
      <div className="stats-container bg-[url('/profile.png')] bg-auto bg-no-repeat bg-center bg-red-800 filter hue-rotate-90 shadow-inner-2xl">
        <h1 className="text-5xl text-white font-semibold text-center">
          The Next Draw
        </h1>
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">
              {currentWinningReward &&
                ethers.utils.formatEther(currentWinningReward.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="stats">
            <h2 className="text-sm">Tickets Remaing</h2>
            <p className="text-xl">{remainingTickets?.toNumber()}</p>
          </div>
        </div>
        <CountdownTimer />
      </div>
      <TicketPrice />
    </div>
  );
}

export default NextDraw;
