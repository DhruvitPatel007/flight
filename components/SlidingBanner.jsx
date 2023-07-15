"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/tab.css";
import "../styles/mobile.css";

const SlidingBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const customDotStyles = "custom-dot";
  const customActiveDotStyles = "custom-active-dot";

  const slides = [
    {
      id: 1,
      title: "Enjoy Authentic Savings!",
      subtitle: "Up to 5,000 on flights booking using AU",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Offers/AU-Offers/Home_Page_Hero_Flight_Booking_-AU_Bank.jpg",
    },
    {
      id: 2,
      title: "Assured cabs",
      subtitle: "Get 1.5% Reward Points on every transaction",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/CabBooking/Web_cab-Booking-page.jpg",
    },
    {
      id: 3,
      title: "Fly with UPI",
      subtitle: "Use CODE UPI450 & get flat 450 off on domestic flights",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Offers/Pax-wise-Offers/Home_Page_Hero_Flight_Booking_Domestic_UPI450.jpg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="sbcontainer">
      <Carousel
        showThumbs={false}
        showStatus={false}
        itemsToShow={1}
        autoPlay={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="custom-arrow"
              style={{
                left: 0,
              }}
            >
              {"<"}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="custom-arrow"
              style={{ right: 0 }}
            >
              {">"}
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const dotStyles = isSelected
            ? customActiveDotStyles
            : customDotStyles;
          return (
            <li
              key={index}
              className={dotStyles}
              onClick={onClickHandler}
              role="button"
              tabIndex={0}
              title={`${label}: ${index}`}
              aria-label={`${label} ${index}`}
            />
          );
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div className="sb1 text_transform_uppercase">{slide.title}</div>
            <div className="sb2 text_transform_uppercase cursor_pointer">
              {slide.subtitle}
            </div>
            <img src={slide.imageUrl} className="sbimg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlidingBanner;
