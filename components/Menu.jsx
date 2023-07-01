"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import "../styles/mobile.css";
import "../styles/tab.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Flights",
    subMenu: true,
    subMenuData: [
      { id: 1, name: "Book Flight",url:"/flight-booking" },
      { id: 2, name: "Flight Status" },
      { id: 3, name: "Group Flight Booking" },
    ],
  },
  {
    id: 2,
    name: "Shop & Dine",
    subMenu: true,
    subMenuData: [
      { id: 1, name: "Duty Free" },
    ],
  },
  { id: 3, name: "Services",subMenu:true, subMenuData: [
    { id: 1, name: "Pranam Service" },
    { id: 2, name: "Car Booking" },
    { id: 3, name: "Duty Free" },
    { id: 4, name: "Lost and found" },
    { id: 5, name: "Wi-Fi" },
    { id: 6, name: "View All" },
    
  ], url:"/services" },
  { id: 4, name: "Travelogues", subMenu:true, subMenuData:[
    { id: 1, name: "Travel"},
    { id: 2, name: "Food"},
    { id: 3, name: "Hotels"},
    
  ] },
  { id: 5, name: "Adani Rewards", url: "/rewards" },
  { id: 6, name: "Offers", url: "/offers" },
];



const Menu = ({ showCatMenu, setShowCatMenu }) => {

  const [currentSubMenuData, setCurrentSubMenuData] =useState([]);

  const handleMouseEnter = (subMenuData) => {
    setCurrentSubMenuData(subMenuData);
    setShowCatMenu(true);
  };

  const handleMouseLeave = () => {
    setCurrentSubMenuData([]);
    setShowCatMenu(false);
  };

  return (
    <div className="navMenu1">
      <ul className="navMenu2">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item.subMenu ? (
                <li
                  className="navMenu3"
                  onMouseEnter={() => handleMouseEnter(item.subMenuData)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`${item.url}`}>{item.name}</Link>
                  {showCatMenu && currentSubMenuData === item.subMenuData &&  (
                    <ul className="navMenu4">
                      {currentSubMenuData.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href={`${submenu.url}`}
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li className="navMenu5">{submenu.name}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="navMenu6">
                  <Link href={item.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
        <div className="navMenu6">
          <BiCart size={30} />
        </div>
      </ul>
    </div>
  );
};

export default Menu;
