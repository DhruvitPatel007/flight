"use client";
import React, { useState, useEffect } from "react";
import "../styles/mobile.css";
import "../styles/tab.css";

const Searchbar = () => {
  const placeholders = [
    'Search "Airport Services"',
    'Search "Duty Free"',
    'Search "Book Fligths"',
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass("transition-opacity");
      setTimeout(() => {
        setCurrentPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
        setTransitionClass("");
      }, 300);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className="searchbar1">
        <div className="searchbar2">
          <input
            type="text"
            className={`searchbar3 ${transitionClass}`}
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>
      </section>
    </>
  );
};

export default Searchbar;
 {/* <div className="from">
        <label className="label2">
          <span>Departure</span>
          <input type="text" className="i2" value={departDate.toISOString()} onClick={toggleDepartCalendar}/>
          {showDepartCalendar && (
            <div onBlur={toggleDepartCalendar}>
              <Calendar
                value={departDate}
                onChange={handleDepartDateChange}
                className="calendar"
                onClickDay={handleCalendarClickDay}
              />
            </div>
          )}
        </label>
      </div> */}

      {/* <div className="from-group">
        <label className="label3">
          <span className="s1">Departure</span>
          <div onClick={toggleDepartCalendar} className="i2">
            {departDate ? departDate.toDateString() : "Select Date"}
          </div>
          {showDepartCalendar && (
            <div onBlur={toggleDepartCalendar}>
              <Calendar
                value={departDate}
                onChange={handleDepartDateChange}
                className="calendar"
                onClickDay={handleCalendarClickDay}
              />
            </div>
          )}
        </label>
      </div> */}