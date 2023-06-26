"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import "../styles/tab.css"
import "../styles/mobile.css"

const Navfoot = () => {
  return (
    <li className="nf1">
      <div>
        <Link href="/">
          <div className="nf2">
            <AiOutlineHome size={25} />
            Home
          </div>
        </Link>
      </div>

      <div>
        <Link href="/services">
          <div className="nf2">
            <MdMenuBook size={25} />
            Services
          </div>
        </Link>
      </div>

      <div>
        <Link href="/travelogues">
          <div className="nf2">
            <CgMenuGridR size={25} />
            Orders
          </div>
        </Link>
      </div>

      <div>
        <Link href="/shop">
          <div className="nf2">
            <BiCart size={25} />
            Cart
          </div>
        </Link>
      </div>

      <div>
        <Link href="/shop">
          <div className="nf2">
            <FiMoreHorizontal size={25} />
            More
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Navfoot;
