"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "./style.css";

const offer = [
  {
    id: 1,
    img: "menu-1.jpg",
    title: "Cappuccino Arabica",
    discount: "Get 40% Offer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
  },
  {
    id: 2,
    img: "/menu-3.jpg",
    title: "Cappuccino Arabica",
    discount: "Get 45% Offer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
  },
  {
    id: 3,
    img: "menu-1.jpg",
    title: "Cappuccino Arabica",
    discount: "Get 30% Offer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
  },
];

const page = () => {
  return (
    <section className="offer  py-20" id="offer">
      <div>
        <h2 className="text-3xl text-green-500 pb-4 text-center">Offer</h2>
        <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
          Special Offer For You
        </h1>
      </div>

      <Swiper
        spaceBetween={80}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="item-cemter"
      >
        {offer.map((item, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <div className=" flex flex-col sm:flex-row sm:px-20 px-2 relative" >
                <div className="h-[20rem]sm:h-[30rem] w-[20rem] sm:w-[40rem]">
                  <img
                    src={item.img}
                    alt=""
                    className=" h-[20rem]sm:h-[30rem] w-[20rem] sm:w-[40rem]"
                  />
                </div>

                <div className="offer__content sm:w-96 w-80 h-[26rem] sm:h-[22rem] sm:top-10 absolute sm:right-16">
                  <h3 className="offer__title">{item.title}</h3>
                  <span className="offer__discount">{item.discount}</span>

                  <p className="offer__description">{item.description}</p>
                  <a href="/" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default page;
