import Image from "next/image";
import React from "react";

// IMG
import mainimage from "../../public/IMG/main.png";
import mainimage2 from "../../public/IMG/main2.png";
import mainimage3 from "../../public/IMG/mainimage3.png";
import mainimage4 from "../../public/IMG/mainimage4.png";
import mainimage5 from "../../public/IMG/mainimage5.png";
import mainimage6 from "../../public/IMG/mainimage6.png";
// IMG

export default function NewArrivals() {
  return (
    <div>
      <div className="translate-y-[-100px]">
        <Image
          src={mainimage}
          className=" h-[400px]  object-cover w-full"
        ></Image>
        <div className="align-middle justify-center items-center text-center translate-y-[-200px]">
          <h2 className=" uppercase text-[35px] font-primary  text-dark  ">
            2023 Arrivals
          </h2>
          <div className="flex justify-center gap-5  text-dark text-[17px] font-light ">
            <button
              className="  uppercase border-b border-dark
             hover:translate-y-[-3px]  transition-all "
            >
              shop all new
            </button>
            <p>|</p>
            <button
              className=" uppercase border-b border-dark
             hover:translate-y-[-3px]"
            >
              shop sectionals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
