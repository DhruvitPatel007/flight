"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import "../styles/tab.css";
import "../styles/mobile.css";
import { useState } from "react";

const Navfoot = () => {
  const [menuItems] = useState([
    { id: 1, href: "/", icon: AiOutlineHome, label: "Home" },
    { id: 2, href: "/services", icon: MdMenuBook, label: "Services" },
    { id: 3, href: "/travelogues", icon: CgMenuGridR, label: "Orders" },
    { id: 4, href: "/shop", icon: BiCart, label: "Cart" },
    { id: 5, href: "/shop", icon: FiMoreHorizontal, label: "More" },
  ]);

  return (
    <li className="nf1">
      {menuItems.map((item) => (
        <div key={item.id}>
          <Link href={item.href}>
            <div className="nf2">
              {<item.icon size={25} />}
              {item.label}
            </div>
          </Link>
        </div>
      ))}
    </li>
  );
};

export default Navfoot;
