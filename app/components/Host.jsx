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

export default function Host() {
  return (
    <div>
      <div className="flex gap-3 p-5 translate-y-[-170px]  justify-evenly ">
        <div>
          <Image
            src={mainimage3}
            className="w-[800px] h-[400px] object-cover"
          ></Image>
          <p className=" uppercase text-dark text-[22px] text-center mt-2">
            Celebrity homes
          </p>
        </div>
        <div>
          <Image
            src={mainimage3}
            className="w-[800px] h-[400px] object-cover"
          ></Image>
          <p className=" uppercase text-dark text-[22px] text-center mt-2">
            commercial host
          </p>
        </div>
        <div>
          <Image
            src={mainimage3}
            className="w-[800px] h-[400px] object-cover"
          ></Image>
          <p className=" uppercase text-dark text-[22px] text-center mt-2">
            host program
          </p>
        </div>
      </div>
    </div>
  );
}
