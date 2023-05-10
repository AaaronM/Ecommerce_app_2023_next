"use client";
import React from "react";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

// IMG
import mainimage from "../../public/IMG/main.png";
import mainimage2 from "../../public/IMG/main2.png";
import mainimage3 from "../../public/IMG/mainimage3.png";
import mainimage4 from "../../public/IMG/mainimage4.png";
import mainimage5 from "../../public/IMG/mainimage5.png";
import mainimage6 from "../../public/IMG/mainimage6.png";
// IMG

export default function Collection() {
  return (
    <div className="flex  justify-evenly p-5 translate-y-[-120px] ">
      <div className="mr-[100px]">
        <h3 className="  text-[30px] mb-3 font-thin">TOP COLLECTIONS</h3>
        <p className="text-gray-700 font-thin">Shop our top collections now</p>
        <button
          className=" bg-dark text-slate-100 text-[15px]  p-2
          w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]  
          "
        >
          SHOP NOW
        </button>
      </div>
      <Splide
        aria-label="My Favorite Images"
        onArrowsMounted={(splide, prev, next) => {
          console.log(prev, next);
        }}
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          width: 1000,
          gap: 10,
        }}
      >
        <SplideSlide className=" h-full w-full flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_2x/public/Indulge%20in%20Nature%20%20Chapter%201%20-%20Reya.png"
            alt="Image 1"
            className="w-[500px] h-[400px] object-cover hover:bg-slate-50/50
             "
          />
          <button
            className=" bg-dark text-slate-100 text-[15px]  p-2
          w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]   
          "
          >
            SHOP NOW
          </button>
        </SplideSlide>
        <SplideSlide className=" h-full w-full flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_2x/public/opulent%20outlook%20-%20STL%20header.png"
            alt="Image 2"
            className="w-[500px] h-[400px] object-cover"
          />
          <button
            className=" bg-dark text-slate-100 text-[15px]  p-2
            w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]   
          "
          >
            SHOP NOW
          </button>
        </SplideSlide>
        <SplideSlide className=" h-full w-full flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_2x/public/nico%20sectional%20stl%20-%201.png"
            alt="Image 2"
            className="w-[500px] h-[400px] object-cover"
          />
          <button
            className=" bg-dark text-slate-100 text-[15px]  p-2
            w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]   
          "
          >
            SHOP NOW
          </button>
        </SplideSlide>
      </Splide>
    </div>
  );
}
