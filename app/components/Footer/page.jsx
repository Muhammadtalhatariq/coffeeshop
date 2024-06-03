import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import Link from "next/link";

const timimg = [
  {
    day: "Monday",
    time: "09AM - 6PM",
  },
  {
    day: "Tuesday",
    time: "09AM - 6PM",
  },
  {
    day: "Wenesday",
    time: "09AM - 6PM",
  },
  {
    day: "Thursday",
    time: "09AM - 6PM",
  },
  {
    day: "Friday",
    time: "09AM - 6PM",
  },
  {
    day: "saturday",
    time: "09AM - 6PM",
  },
  {
    day: "sunday",
    time: "closed",
  },
];

const page = () => {
  return (
    <>
      <div
        className="bg-neutral-950 py-10 sm:px-10 px-4 text-white"
        id="Footer"
      >
        <div className="flex flex-wrap ">
          <div className=" sm:w-[35%] w-full py-6">
            <div className="p-4">
              <div className="flex items-center ">
                <SiCoffeescript size={55} />
                <h2 className="p-2 sm:text-8xl text-2xl  ">CoffeeQ</h2>
              </div>
              <p className="text-neutral-500 pt-4 leading-6 -tracking-tighter font-sans text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi laudantium tempore quaerat placeat, qui totam.
              </p>
              <div className="flex gap-3 pt-4 text-neutral-500">
                <FaPhoneAlt className="text-red-700 items-center" />
                <p>+92 1234567832</p>
              </div>
              <div className="flex gap-3 pt-4 text-neutral-500 font-sans">
                <FaLocationDot className="text-red-700 items-center" />
                <p>25/B Milford Road, New York</p>
              </div>
              <div className="flex gap-3 pt-4 text-neutral-500 font-sans">
                <IoMdMail className="text-red-700 items-center" />
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="sm:w-[20%] w-full py-6 px-4">
            <h2 className="sm:text-3xl text-xl  ">Quik Links</h2>

            <div className="flex gap-2 pt-10 text-neutral-500 font-sans items-center">
              <MdPlayArrow className="text-red-700 " />
              <Link href="#About">About Us</Link>
            </div>
            <div className="flex gap-2 text-neutral-500 font-sans items-center">
              <MdPlayArrow className="text-red-700 " />
              <Link href="#Menu">Menu</Link>
            </div>
            <div className="flex gap-2 text-neutral-500 font-sans items-center">
              <MdPlayArrow className="text-red-700 " />
              <Link href="# Features">Features</Link>
            </div>
            <div className="flex gap-2 text-neutral-500 font-sans items-center">
              <MdPlayArrow className="text-red-700 " />
              <Link href="#Gallery">Gallery</Link>
            </div>
            <div className="flex gap-2  text-neutral-500 font-sans items-center">
              <MdPlayArrow className="text-red-700 " />
              <Link href="#Reservation">Reservation</Link>
            </div>
          </div>
          <div className="sm:w-[20%] w-full py-6 px-4">
            <h2 className="sm:text-3xl text-xl">Opening Hours</h2>

            <div className="sm:w-60 bg-neutral-900 w-full p-3 mt-10  border-2 border-green-500 border-dashed">
              {timimg.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-2 font-sans text-neutral-400"
                >
                  <p>{item.day}</p>
                  <p>{item.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-[25%] w-full py-6 pl-6 ">
            <h2 className="sm:text-3xl text-xl">Newletter</h2>
            <p className="text-neutral-500 pt-4 leading-6 -tracking-tighter font-sans text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              ipsa!
            </p>

            <p className="py-3">Follow Us</p>
            <div className="flex gap-3 ">
              <div className="rounded-[100%]  h-10 w-10 border-dashed border-2 border-green-500 flex items-center justify-center hover:bg-green-500 duration-1000">
                <FaFacebookF />
              </div>
              <div className="rounded-[100%]  h-10 w-10 border-dashed border-2 border-green-500 flex items-center justify-center hover:bg-green-500 duration-1000">
                <FiTwitter />
              </div>
              <div className="rounded-[100%]  h-10 w-10 border-dashed border-2 border-green-500 flex items-center justify-center hover:bg-green-500 duration-1000 ">
                <FaLinkedinIn />
              </div>
              <div className="rounded-[100%]  h-10 w-10 border-dashed border-2 border-green-500 flex items-center justify-center hover:bg-green-500 duration-1000 ">
                <FiYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-950">
      <div className="border-b-2 border-dashed border-neutral-800 px-0"></div>
      <p className="font-sans text-center text-white  p-4">
        © Copyright 2024 Coffero All Right Reserved.
      </p>
      </div>
     
    </>
  );
};

export default page;
