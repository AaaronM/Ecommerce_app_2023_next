"use client";

import { useSearchParams } from "next/navigation";
import Living from "./components/Living";

import BedRoom from "./components/BedRoom";
import Storage from "./components/Storage";
import Office from "./components/Office";
import BestSellers from "./components/BestSellers";
import DiningKitchen from "./components/DiningKitchen";

export default function ProductPage({ params }) {
  if (params.slug === "Living_Room") {
    return <Living />;
  } else if (params.slug === "BedRoom") {
    return <BedRoom />;
  } else if (params.slug === "Storage_media") {
    return <Storage />;
  } else if (params.slug === "Office") {
    return <Office />;
  } else if (params.slug === "Best_Sellers") {
    return <BestSellers />;
  } else if (params.slug === "Dining_Kitchen") {
    return <DiningKitchen />;
  }
}
