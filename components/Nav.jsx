
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";

const Nav = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <>
      <div
        className="nav1 first-color"
      >
        <div
          className="nav2"
        >
          <div className="nav3">
            <Link href="/">
              <Image
                src="/assets/mainlogo.webp"
                alt="Logo"
                width={70}
                height={70}
                className="navimg"
              />
            </Link>
          </div>

          <div className="nav4">
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
            <div className="nav5 white">
              <BsPerson size={30} />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Nav;
