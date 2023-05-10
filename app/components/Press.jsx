import React from "react";

// IMG
import vogue from "../../public/IMG/vogue.png";
import ad from "../../public/IMG/ad.png";
import bazzar from "../../public/IMG/bazzar.png";
import forbs from "../../public/IMG/forbs.png";
import gq from "../../public/IMG/gq.png";
import Image from "next/image";

// IMG

export default function Press() {
  return (
    <div>
      <div className=" flex  justify-evenly">
        <div className="flex w-[300px] items-center gap-5   ">
          <Image src={vogue} className="h-[300px]   "></Image>

          <Image src={ad} className="h-[400px] "></Image>

          <Image src={bazzar} className="h-[100px]"></Image>

          <Image src={forbs} className="h-[100px]"></Image>

          <Image src={gq} className="h-[100px]"></Image>
        </div>
      </div>
    </div>
  );
}
