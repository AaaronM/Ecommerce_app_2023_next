"use client";
import Link from "next/link";
import React, { useState } from "react";

// REACT ICONS
import { CiSearch } from "react-icons/ci";
// REACT ICONS

export default function Navbar() {
  // navbar scroll changeBackground function
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? " p-5 bg-transparent  fixed  w-full   font-light text-dark z-50 "
          : " p-5 bg-transparent  fixed  w-full   font-light text-stone-100  z-50"
      }
    >
      <div className="flex justify-between ">
        <div className="flex gap-2 justify-center items-center mt-[-50px]">
          <CiSearch className="text-[20px]" />
          <p>SEARCH</p>
        </div>
        <div className="flex flex-col   items-center ml-[50px]">
          <Link
            href="/"
            className={
              colorChange
                ? " text-dark z-50  hover:text-dark  hover:font-normal no-underline text-[45px] font-thin transition-all   "
                : " text-stone-100  z-50  border-none  hover:text-stone-100  hover:font-normal no-underline text-[45px] font-thin transition-all   "
            }
          >
            CONCEPTS
          </Link>
          <div className=" border-t font-thin ">
            <ul className="flex gap-8 text-[19px] mt-3">
              <li className=" transition-all hover:translate-y-[-5px] border-none  ">
                <Link
                  href="shop_all"
                  className={
                    colorChange
                      ? " text-dark z-50  hover:text-gold  hover:font-normal no-underline   "
                      : " text-stone-100  z-50  border-none  hover:text-gold  hover:font-normal no-underline "
                  }
                >
                  SHOP
                </Link>
              </li>
              <li className=" hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]">
                SALE
              </li>
              <li className=" hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]">
                LIFESTYLE
              </li>
              <li className=" hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]">
                DISCOVER
              </li>
              <li className=" hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]">
                SHOWROOM
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center mt-[-50px]">
          <p>USA</p>
          <p>ICON</p>
          <p>ICON</p>
        </div>
      </div>
    </nav>
  );
}
