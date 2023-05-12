import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Living({ livingroomdata }) {
  return (
    <div className="pt-[220px] ">
      <div className="px-[30px] mt-[100px]">
        <h2 className="text-[30px] mb-3 font-thin ">Living Room Furniture</h2>
        <div className="flex justify-start gap-2 flex-wrap ">
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            in-stock living room furniture
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            view all living room furniture
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Sofas
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Sectionals
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Sleeper sofa & daybeds
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            Accent Chairs
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            benches
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            ottomans, poufs & stools
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            coffee tables
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            side tables
          </button>
          <button className="border px-5 py-1 border-gray-500 uppercase text-[13px] text-gray-700 hover:translate-y-[-3px] hover:text-dark hover:border-dark  transition-all">
            console tables
          </button>
        </div>
      </div>
      <ul className="flex flex-wrap justify-start gap-[30px] pt-[50px] px-[30px] ">
        {livingroomdata.map((item) => (
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
