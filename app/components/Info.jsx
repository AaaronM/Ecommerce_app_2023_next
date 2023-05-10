import React from "react";

// RECT ICONS
import {
  BsArrowRightSquare,
  BsCheck2Square,
  BsCaretUpSquare,
  BsCircleSquare,
} from "react-icons/bs";
// RECT ICONS

export default function Info() {
  return (
    <div>
      <div className="  translate-y-[-100px]">
        <div className="flex h-[400px] w-full gap-[100px] bg-[#7A827A]  justify-center items-center  text-center  translate">
          <div className="flex flex-col justify-center items-center ">
            <BsArrowRightSquare className="text-[65px] text-[#D9CFB8] mb-5 " />
            <div>
              <p className="text-[25px] font-thin text-[#D9CFB8] uppercase font-primary">
                Flat rate <br /> shipping
              </p>
              <p className="text-[#b4ad9c] font-primary">
                Delivery calculated per shipment{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <BsCheck2Square className="text-[65px] text-[#D9CFB8] mb-5 " />
            <div>
              <p className="text-[25px] font-thin text-[#D9CFB8] uppercase font-primary">
                14 - Day <br /> returns
              </p>
              <p className="text-[#b4ad9c] font-primary">
                Two weeks to fall in love
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <BsCaretUpSquare className="text-[65px] text-[#D9CFB8] mb-5 " />
            <div>
              <p className="text-[25px] font-thin text-[#D9CFB8] uppercase font-primary">
                Pay over <br /> time
              </p>
              <p className="text-[#b4ad9c] font-primary">
                in auto monthly installments
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <BsCircleSquare className="text-[65px] text-[#D9CFB8] mb-5 " />
            <div>
              <p className="text-[25px] font-thin text-[#D9CFB8] uppercase font-primary">
                free <br /> swatches
              </p>
              <p className="text-[#b4ad9c] font-primary">
                we encourage pickiness
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 7A827A
// D9CFB8
