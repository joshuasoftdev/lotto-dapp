import React, { useContext, useRef } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Countdown from "react-countdown";
import GlobalContext from "../context/GlobalContext";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function CountdownTimer() {
  const { setCountdownEnded } = useContext(GlobalContext);
  const { contract } = useContract("0xd443573A28f97D8C48F6917C4B09f245A5248871");
  const { data: expiration } = useContractRead(contract, "expiration");
  const { data: duration } = useContractRead(contract, "duration");

  // Avoid reloading timer
  const startDate = useRef(Date.now());
  // const timer = startDate.current + 5000; // 5 seconds
  const timer = startDate.current + expiration * 1000;
  // const timer = startDate.current + duration * 1000;
  //const timer = new Date(expiration * 1000);

  const renderer = ({ hours, minutes, seconds, completed }: Props) => {
    if (completed) {
      setCountdownEnded(completed);
      // console.log(completed);

      // Render a completed state
      return (
        <div>
          <h2 className="text-white text-xl text-center mb-2 animate-bounce">
            Ticket Sales have now CLOSED for this draw
          </h2>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown animate-pulse">{hours}</div>
              <div className="countdown-label">hours</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{minutes}</div>
              <div className="countdown-label">minutes</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{seconds}</div>
              <div className="countdown-label">seconds</div>
            </div>
          </div>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div>
          <h3 className="text-white text-sm mb-2 italic">Time Remaining</h3>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown shadow-xl shadow-cyan-500/50">{hours}</div>
              <div className="countdown-label">hours</div>
            </div>
            <div className="flex-1">
              <div className="countdown shadow-xl shadow-cyan-500/50">{minutes}</div>
              <div className="countdown-label">minutes</div>
            </div>
            <div className="flex-1">
              <div className="countdown shadow-xl shadow-cyan-500/50">{seconds}</div>
              <div className="countdown-label">seconds</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mt-5 mb-3">
      <div>
        {duration ? <Countdown date={timer} renderer={renderer} /> : null}
      </div>
    </div>
  );
}

export default CountdownTimer;
