"use client";

import React from "react";
import Image from "next/image";

export default function Strato_sofa({ livingroomdata }) {
  return (
    <div className="pt-[220px] ">
      <div className="flex  justify-center gap-[100px] ">
        <div className="p-5">
          <Image
            src={livingroomdata[8].image}
            className="w-[570px] h-[620px] object-fill   "
            alt="hi"
          ></Image>
          <p className="font-light text-gray-500 pt-2">
            {livingroomdata[8].short_desk}
          </p>
        </div>
        <div className=" w-[500px] p-4">
          <p className="text-[30px] mb-3 font-thin">{livingroomdata[8].name}</p>
          <p className="border-b border-b-gray-400 pb-2 font-bold">
            {livingroomdata[8].price}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Details
          </p>
          <p className=" font-light text-gray-600  border-b border-b-gray-400 pb-3">
            {livingroomdata[8].log_desk}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Dimensions
          </p>
          <div className="border-b border-b-gray-400 pb-2">
            <p className=" font-thin"> Width: {livingroomdata[8].width}</p>
            <p className=" font-thin"> Depth: {livingroomdata[8].depth}</p>
            <p className=" font-thin"> Height: {livingroomdata[8].height}</p>
          </div>
          <p className=" uppercase font-semibold text-dark pb-1 pt-4">Care</p>
          <p className=" font-light text-gray-600 border-b border-b-gray-400 pb-5">
            {livingroomdata[8].careinstructions}
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
