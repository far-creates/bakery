"use client";

import { useState } from "react";
import NavLink from "../atoms/navLink";
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFaBarsClick = () => {
    setIsOpen(true);
  };

  const handleBiXClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col items-end md:hidden">
      <button onClick={handleFaBarsClick}>
        <FaBars
          size={36}
          className={` ${
            isOpen ? "text-transparent" : "text-accent"
          } cursor-pointer `}
        />{" "}
      </button>

      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } fixed top-0 right-0  bg-btn opacity-95 w-50 h-full pr-3 pt-10 flex flex-col items-end gap-10`}
      >
        <ul className=" flex flex-col items-end text-lg text-semibold gap-4 ">
          <NavLink href="/" linkName="Home" exact={true} />
          <NavLink href="/blog" linkName="Blog" exact={false} />
          <NavLink href="/contect-us" linkName="Contact Us" exact={false} />
          <NavLink href="/services" linkName="Services" exact={false} />
        </ul>

        <button onClick={handleBiXClick} className="z-50">
          <BiX size={36} className="text-accent cursor-pointer" />{" "}
        </button>
      </div>
    </div>
  );
}
