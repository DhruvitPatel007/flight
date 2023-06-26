"use client";
import React, { useState, useEffect } from "react";
import "../styles/mobile.css";
import "../styles/tab.css"

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
