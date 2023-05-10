import Image from "next/image";
import React from "react";

// ___IMG____
import onourrader1 from "../../../public/IMG/Cardpics/onourrader1.jpeg";
import onourrader2 from "../../../public/IMG/Cardpics/onourrader2.jpeg";
import onourrader3 from "../../../public/IMG/Cardpics/onourrader3.jpeg";
import onourrader4 from "../../../public/IMG/Cardpics/onourrader4.jpeg";
// ___IMG____

export default function OnourRader() {
  return (
    <div>
      <div className="p-2">
        <div className="relative flex  items-center">
          <p className="text-[25px] pt-[200px] pl-[40px] uppercase  font-primary font-light mb-[50px] ">
            On Our radar
          </p>
          <div className="flex-grow border-t border-gray-400 mt-[150px] ml-[20px] mr-[20px]"></div>
        </div>
        <div className="flex  justify-evenly gap-5 flex-wrap">
          <div>
            <Image
              src={onourrader1}
              className="w-[350px] h-[400px] object-fill "
            ></Image>
            <div>
              <p className="uppercase text-[18px] font-primary font-light mt-2">
                this best-selling coupe is finally <br /> back in stock
              </p>
              <button
                className=" uppercase border-b border-dark
             hover:translate-y-[-3px]  transition-all "
              >
                Shop while it's hot
              </button>
            </div>
          </div>
          <div>
            <Image
              src={onourrader2}
              className="w-[350px] h-[400px] object-fill "
            ></Image>
            <div>
              <p className="uppercase text-[18px] font-primary font-light mt-2">
                Luxury has it's day in the sun
              </p>
              <button
                className=" uppercase border-b border-dark
             hover:translate-y-[-3px]  transition-all "
              >
                Shop all outdoor
              </button>
            </div>
          </div>
          <div>
            <Image
              src={onourrader3}
              className="w-[350px] h-[400px] object-fill "
            ></Image>
            <div>
              <p className="uppercase text-[18px] font-primary font-light mt-2">
                The spring collection is here
              </p>
              <button
                className=" uppercase border-b border-dark
             hover:translate-y-[-3px]  transition-all "
              >
                Shop new arrivals
              </button>
            </div>
          </div>
          <div>
            <Image
              src={onourrader4}
              className="w-[350px] h-[400px] object-fill "
            ></Image>
            <div>
              <p className="uppercase text-[18px] font-primary font-light mt-2">
                Complimentary design services <br /> for projects of any scop
              </p>
              <button
                className=" uppercase border-b border-dark
             hover:translate-y-[-3px]  transition-all "
              >
                Book your appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
