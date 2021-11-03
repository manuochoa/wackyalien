import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Flip from "./flip";

function Countdown() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [launch, setLaunch] = useState(false);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = new Date(1636133400000).getTime();

  useEffect(() => {
    let interval = () => {
      setInterval(function () {
        const now = new Date().getTime();
        let distance = countDown - now;

        setDays(Math.floor(distance / day));
        setHours(
          Math.floor((distance % day) / hour).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setMinutes(
          Math.floor((distance % hour) / minute).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setSeconds(
          Math.floor((distance % minute) / second).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );

        //   do something later when date is reached
        if (distance < 0) {
          setLaunch(true);
          clearInterval(interval);
        }
      }, 0);
    };

    interval();
  }, []);

  return (
    <div
      className="container-countdown"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {launch ? (
        <h1>Whitelisted Wallets Can Mint Now!</h1>
      ) : (
        <Stack direction="row" className={"counter-item-container"}>
          <div className="flip-number">
            <div className="days">
              <Flip value={days} />
            </div>
            <h2> DAYS</h2>
          </div>
          <div className="flip-number">
            <div className="hours">
              <Flip value={hours} />
            </div>
            <h2> HOURS</h2>
          </div>
          <div className="flip-number">
            <div className="minutes">
              <Flip value={minutes} />
            </div>
            <h2> MINUTES</h2>
          </div>
          <div className="flip-number">
            <div className="seconds">
              <Flip value={seconds} />
            </div>
            <h2> SECONDS</h2>
          </div>
        </Stack>
        // <ul>
        //   <li>
        //     <span id="days">{days}</span>days
        //   </li>
        //   <li>
        //     <span id="hours">{hours}</span>Hours
        //   </li>
        //   <li>
        //     <span id="minutes">{minutes}</span>Minutes
        //   </li>
        //   <li>
        //     <span id="seconds">{seconds}</span>Seconds
        //   </li>
        // </ul>
      )}
    </div>
  );
}

export default Countdown;
