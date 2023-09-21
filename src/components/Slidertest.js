import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


let sliderItems = [
  {
    key: 1,
    img: "/images/heros/1.png",
  },
  {
    key: 2,
    img: "/images/heros/2.png",
  },
  {
    key: 3,
    img: "/images/heros/3.png",
  },
  {
    key: 4,
    img: "/images/heros/4.png",
  },
  {
    key: 5,
    img: "/images/heros/5.png",
  }
];


const Slidertest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveIndex(next),
  };



  return (
    <div className="pt-5">
      <Slider {...settings} >
        {
          sliderItems.map((item, index) =>
            <Link key={index} href={`/diety/${item.key}`} className="parent">

              <div className={`border  w-full  rounded-md p-3    h-transition-all ${index === activeIndex
                  ? "active-img "
                  : index === (activeIndex - 1 + sliderItems.length) % sliderItems.length
                    ? "left-img"
                    : index === (activeIndex + 1) % sliderItems.length
                      ? "right-img"
                      : ""
                }`}>
                <img src={item.img} alt="img" className="w-full rounded-md md:h-[300px] h-[150px]" />
                <div className="flex justify-between">
                  <h1 className="md:text-2xl text-sm">Diety {item.key}</h1>
                  <h1 className="md:text-2xl text-sm">#{item.key}</h1>
                </div>
              </div>
            </Link>
          )
        }
      </Slider>
    </div>
  );
};

export default Slidertest;
