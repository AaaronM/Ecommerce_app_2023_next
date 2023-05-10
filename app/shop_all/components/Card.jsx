import Image from "next/image";
import React from "react";

// // IMG
import mainimage from "../../../public/IMG/Cardpics/Bedroom1.jpeg";
import Link from "next/link";
// import mainimage2 from "../../public/IMG/main2.png";
// import mainimage3 from "../../public/IMG/mainimage3.png";
// import mainimage4 from "../../public/IMG/mainimage4.png";
// import mainimage5 from "../../public/IMG/mainimage5.png";
// import mainimage6 from "../../public/IMG/mainimage6.png";
// // IMG

export default function Card(props) {
  const data = [
    {
      id: 1,
      name: "Living Room Furniture",
      image: require("../../../public/IMG/Cardpics/LivingRoom1.jpeg"),
      slug: "Living_Room ",
    },
    {
      id: 2,
      name: "Dining & Kitchen Furniture  ",
      image: require("../../../public/IMG/Cardpics/DiningRoom1.jpeg"),
      slug: "Dining_Kitchen",
    },
    {
      id: 3,
      name: "Bedroom Furniture",
      image: require("../../../public/IMG/Cardpics/Bedroom1.jpeg"),
      slug: "BedRoom ",
    },
    {
      id: 4,
      name: "Storage & media Furniture",
      image: require("../../../public/IMG/Cardpics/Storage1.jpeg"),
      slug: "Storage_media ",
    },
    {
      id: 5,
      name: "Office Furniture",
      image: require("../../../public/IMG/Cardpics/Office1.jpeg"),
      slug: "Office ",
    },
    {
      id: 6,
      name: "Best Sellers",
      image: require("../../../public/IMG/Cardpics/BestSeller1.jpeg"),
      slug: "Best_Sellers",
    },
  ];

  return (
    <ul className="flex flex-wrap justify-evenly gap-[15px]  ">
      {data.map((data) => {
        return (
          <div className="flex  flex-col mt-[40px] ">
            <Link href={`shop_all/${data.slug}`} data={data}>
              <div className="flex " key={data.id}>
                <Image
                  className="w-[350px] h-[400px] object-fill "
                  src={data.image}
                  alt="First slide"
                />
              </div>
              <p className=" uppercase text-[18px] font-primary font-light mt-2">
                {data.name}
              </p>
            </Link>
          </div>
        );
      })}
    </ul>
  );
}
