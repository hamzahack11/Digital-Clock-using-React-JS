
import React, { useState, useEffect } from 'react';
import "./Clock.css";


function Clock() {

  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);


  const dayNumber = time.getDate();
  const year = time.getFullYear();
  const dayName = time.toLocaleString("default", { weekday: "long" });
  const monthName = time.toLocaleString("default", { month: "long" });

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  
   
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';

    if (is24Hour) {
      
      
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

    } else{
       
      hours = hours % 12 || 12;
      hours = hours < 10 ? '0' + hours : hours; 
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      
    }
    





  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  return (
    

      <div className="container">
        <div className="digital-clock">
          <ul>
            <li className="menu-item">
              <span className="clock-formate-text">Switch Time Format</span>
              <div
                onClick={toggleTimeFormat}
                className={
                  is24Hour ? "format-switch-btn active " : "format-switch-btn "
                }
              ></div>
            </li>
          </ul>
          <div className="time">
            <span className="hour">{hours}</span>
            <span className="dots">:</span>
            <span className="minutes">{minutes}</span>
            <div className="right-side">
              <span className="period">{is24Hour ? '' : amPm}</span>
              <span className="seconds">{seconds}</span>
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

export default Clock;





