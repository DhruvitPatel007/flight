import React, { useState } from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

const Navfoot = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, href: "/", icon: AiOutlineHome, label: "Home" },
    { id: 2, href: "/services", icon: MdMenuBook, label: "Services" },
    { id: 3, href: "/travelogues", icon: CgMenuGridR, label: "Orders" },
    { id: 4, href: "/shop", icon: BiCart, label: "Cart" },
    { id: 5, href: "/shop", icon: FiMoreHorizontal, label: "More" },
  ];

  const handleClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <li className="nf1">
      {menuItems.map((item) => (
        <div key={item.id}>
          <Link href={item.href}>
            <div
              className={`nf2 ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
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
