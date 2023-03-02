import React, { useState } from "react";
import "./Clock.css";

export default function Clock() {
  let time = new Date();

  // let hour12 = new Date().getHours();


  // using State
  const [currentTime, setCurrentTime] = useState(time);

  // following state is used for toggling data-format attibute
  const [dataset, setDataSet] = useState(true);

  // following state is used for toggling className
  const [isActive, setIsActive] = useState(false);

  // following state is used for toggling className
  // const [isMenuActive, setIsMenuActive] = useState(false);

  // const [menuBtn, setMenuBtn] = useState(false);
  const [menuBtn, setMenuBtn] = useState(false);


  // following state is used for toggling 12hr to 24h
  const [hour, setHour] = useState(currentTime.getHours());

  // to get complete Time from default object Date

  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";

  // to get complete date liek day, month & year.

  var today = new Date();
  const dayNumber = today.getDate();
  const year = today.getFullYear();
  const dayName = today.toLocaleString("default", { weekday: "long" });
  const monthName = today.toLocaleString("default", { month: "long" });

  // function to update time after every 1000 mili second by using setInterval
  const updateTime = () => {
    let time = new Date();
    setCurrentTime(time);
  };

  // to change AM/PM

  function changeAM(hour) {
    if (hour >= 12) {
      period = "AM";
    }
    return (period = "PM");
  }

  // to add 0 before hour & minutes if its less than 10

  function addZero(z) {
    if (z < 10) {
      return "0" + z;
    }
    return z;
  }

  const menuBtnClickHandle = (e) => {
    // to toggle menu btn class name
    menuBtn ? setMenuBtn(false) : setMenuBtn(true);
  };



  // function that will run  to change dataset value

  const handleClick = (e) => {
    // to toggle ClassName
    isActive ? setIsActive(false) : setIsActive(true);

    // to change data-format
    dataset ? setDataSet(false) : setDataSet(true);

    // to convert Time into 24hr Clock
    var dataSetAttribute =
      e.target.attributes.getNamedItem("data-format").value;

    if (dataSetAttribute === "12") {
      // console.log(e.target.getElementsByClassName('hour').value);
      setHour(time.getHours());
    } else {
      setHour(time.getHours()-12);
    }
  };
  // to update time in every 1000 milisec we can use setInterval();
  setInterval(updateTime, 1000);

  return (
    <div className="container" >
      <div className="digital-clock">
        <i
          className="uil uil-ellipsis-v dot-menu-btn" onClick={menuBtnClickHandle}></i>

        
          <ul
            className={menuBtn ? "" : "dot-menu"} >
            <li className="menu-item">
              <span className="clock-formate-text">Switch Time Format</span>
              <div
                className={
                  isActive ? "format-switch-btn active":"format-switch-btn"
                }
                onClick={handleClick}
                data-format={dataset ? "24" : "12"}
              ></div>
            </li>
          </ul>
        <div className="time">
          <span className="hour">{addZero(hour+12)}</span>
          <span className="dots">:</span>
          <span className="minutes">{addZero(minutes)}</span>
          <div className="right-side">
            <span className="period">{changeAM(hour)}</span>
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
