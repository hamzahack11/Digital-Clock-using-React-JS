import React, { useState, useEffect } from "react";

import "./Clock.css";

function DigitalClock() {
  // to get complete date liek day, month & year.

  var today = new Date();
  const dayNumber = today.getDate();
  const year = today.getFullYear();
  const dayName = today.toLocaleString("default", { weekday: "long" });
  const monthName = today.toLocaleString("default", { month: "long" });
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var hours = today.getHours();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatTime = (time) => {
    if (timeFormat === "12") {
      hours = hours % 12 || 12;
      return "0" + hours;
    } else {
      hours = hours < 10 ? "0" + hours : hours;
      return `${hours}`;
    }
  };

  const addZero = (e) => {
    if (e < 10) {
      return (e = "0" + e);
    } else {
      return e;
    }
  };

  const [timeFormat, setTimeFormat] = useState("12");

  const handleFormatToggle = () => {
    setTimeFormat(timeFormat === "12" ? "24" : "12");
  };

  return (
    <div className="container">
      <div className="digital-clock">
        <ul>
          <li className="menu-item">
            <span className="clock-formate-text">Switch Time Format</span>
            <div
              onClick={handleFormatToggle}
              className={
                timeFormat === "12"
                  ? "format-switch-btn "
                  : "format-switch-btn active"
              }
            ></div>
          </li>
        </ul>
        <div className="time">
          <span className="hour">{formatTime(time)}</span>
          <span className="dots">:</span>
          <span className="minutes">{addZero(minutes)}</span>
          <div className="right-side">
            <span className="period">{hours >= 12 ? "" : "AM"}</span>
            <span className="seconds">{addZero(seconds)}</span>
          </div>
        </div>

        <div className="calendar">
          <span className="day-name">{dayName} :</span>
          <span className="month-name">{monthName} :</span>
          <span className="day-number">{dayNumber} :</span>
          <span className="Year">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
