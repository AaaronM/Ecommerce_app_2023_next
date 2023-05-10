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

export default function Main() {
  return (
    <div>
      <div>
        <Image
          src={mainimage6}
          className=" h-[600px]  object-cover w-full"
        ></Image>
        <div className="flex flex-col justify-center items-center text-[50px]  translate-y-[-350px] text-slate-100  font-primary ">
          <h2>Refined Luxury Living</h2>
          <button
            className=" bg-slate-100 text-black text-[15px] font-thin p-2
          w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px] 
          "
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
