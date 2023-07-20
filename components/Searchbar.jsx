import React, { useState, useEffect } from "react";

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
      <section className="msearchbar1">
        <div className="msearchbar2">
          <input
            type="text"
            className={`msearchbar3 ${transitionClass}`}
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>
      </section>
    </>
  );
};

export default Searchbar;
 