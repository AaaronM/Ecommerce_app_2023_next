import React from "react";
import Card from "./components/Card";
import OnourRader from "./components/OnourRader";

export default function Home() {
  return (
    <div>
      <div className=" relative">
        <h1 className="text-[35px] pt-[200px] pl-[40px] uppercase  font-primary font-light mt-2">
          Furniture
        </h1>
        <Card />
        <OnourRader />
      </div>
    </div>
  );
}
