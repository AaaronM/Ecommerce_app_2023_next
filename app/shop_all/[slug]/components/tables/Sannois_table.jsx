"use client";

import React from "react";
import Image from "next/image";

export default function Sannois_table({ diningandKitcehn }) {
  return (
    <div className="pt-[220px] ">
      <div className="flex  justify-center gap-[100px] ">
        <div className="p-5">
          <Image
            src={diningandKitcehn[4].image}
            className="w-[570px] h-[620px] object-fill   "
            alt="hi"
          ></Image>
          <p className="font-light text-gray-500 pt-2">
            {diningandKitcehn[4].short_desk}
          </p>
        </div>
        <div className=" w-[500px] p-4">
          <p className="text-[30px] mb-3 font-thin">
            {diningandKitcehn[4].name}
          </p>
          <p className="border-b border-b-gray-400 pb-2 font-bold">
            {diningandKitcehn[4].price}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Details
          </p>
          <p className=" font-light text-gray-600  border-b border-b-gray-400 pb-3">
            {diningandKitcehn[4].log_desk}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Dimensions
          </p>
          <div className="border-b border-b-gray-400 pb-2">
            <p className=" font-thin"> Width: {diningandKitcehn[4].width}</p>
            <p className=" font-thin"> Depth: {diningandKitcehn[4].depth}</p>
            <p className=" font-thin"> Height: {diningandKitcehn[4].height}</p>
          </div>
          <p className=" uppercase font-semibold text-dark pb-1 pt-4">Care</p>
          <p className=" font-light text-gray-600 border-b border-b-gray-400 pb-5">
            {diningandKitcehn[4].careinstructions}
          </p>
          <div className="text-center justify-center items-center mt-2 ">
            <button className=" font-bold uppercase text-slate-100 bg-dark w-full p-2 ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
