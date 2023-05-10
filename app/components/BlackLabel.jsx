import React from "react";

// IMG
import marble1 from "../../public/IMG/marble1.jpeg";
import marble1_1 from "../../public/IMG/marble1.1.jpeg";
import marble2 from "../../public/IMG/marble2.jpeg";
import marble_2 from "../../public/IMG/marble2.1.jpeg";
import marble3 from "../../public/IMG/marble3.jpeg";
import marble3_1 from "../../public/IMG/marble3.1.jpeg";
import Image from "next/image";
// IMG

export default function BlackLabel() {
  return (
    <div>
      <h1 className="text-center font-primary ">Black Label Collection</h1>
      <div className="flex justify-center gap-5 p-5">
        <div>
          <Image src={marble1} className="h-[400px] w-[500px]"></Image>
        </div>
        <Image src={marble2} className="h-[400px] w-[500px]"></Image>
        <Image src={marble3} className="h-[400px] w-[500px]"></Image>
      </div>
    </div>
  );
}
