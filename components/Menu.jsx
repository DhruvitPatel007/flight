"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import "../styles/mobile.css";
import "../styles/tab.css";

const data = [
  { id: 1, name: "Flights", subMenu: true },
  { id: 2, name: "Shop & Dine",url:"/shop" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Travelogues", url: "/travelogues" },
  { id: 5, name: "Adani Rewards", url: "/rewards" },
  { id: 6, name: "Offers", url: "/offers" },
];

const subMenuData = [
  { id: 1, name: "Book Flight" },
  { id: 2, name: "Flight Status" },
  { id: 3, name: "Group Flight Booking" },
];


const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <div className="navMenu1">
      <ul className="navMenu2">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className="navMenu3"
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  {showCatMenu && (
                    <ul className="navMenu4">
                      {subMenuData.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href="/"
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
