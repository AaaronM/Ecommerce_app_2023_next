"use client";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

// IMG
import mainimage from "../../public/IMG/main.png";
import mainimage2 from "../../public/IMG/main2.png";
import mainimage3 from "../../public/IMG/mainimage3.png";
import mainimage4 from "../../public/IMG/mainimage4.png";
import mainimage5 from "../../public/IMG/mainimage5.png";
import mainimage6 from "../../public/IMG/mainimage6.png";
import Image from "next/image";
// IMG

function ShoptheLook() {
  return (
    <Carousel variant="dark" className="h-[500px] p-5">
      <Carousel.Item>
        <Image
          className="d-block w-100 "
          src={require("../../public/IMG/main.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 "
          src={require("../../public/IMG/main.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 "
          src={require("../../public/IMG/main.png")}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ShoptheLook;
