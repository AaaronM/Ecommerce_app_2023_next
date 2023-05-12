"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function DiningKitchen({ diningandKitcehn }) {
  return (
    <div className="pt-[220px] ">
      <div className="px-[30px] mt-[100px]">
        <h2 className="text-[30px] mb-3 font-thin ">
          DINING & KITCHEN FURNITURE
        </h2>
        <div className="flex justify-start gap-2 flex-wrap ">
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            in-stock living Dining furniture
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            view all Dining furniture
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Dining tables
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Dining chairs
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Bar & counter stools
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            bar carts & credenzas
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Kitchen islands
          </button>
        </div>
      </div>
      <ul className="flex flex-wrap justify-start gap-[30px] pt-[50px] px-[30px] ">
        {diningandKitcehn.map((item) => (
          <Link href={`shop_all/${item.slug}`}>
            <div>
              <Image
                src={item.image}
                className="w-[270px] h-[320px] object-fill  "
                alt={item.id}
              ></Image>
              <div>
                <p className=" uppercase text-[13px] font-primary font-light mt-2">
                  {item.name}
                </p>
                <p className="text-[14px]">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
