"use client";
import React, { useEffect, useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";

const nevItems = [
  {
    name: "Home",
    path: "#Home",
  },
  {
    name: "About",
    path: "#About",
  },
  {
    name: "Feature",
    path: "#Feature",
  },
  {
    name: "Menu",
    path: "#Menu",
  },
  {
    name: "Gallery",
    path: "#Gallery",
  },
  {
    name: "Chefs",
    path: "#Chefs",
  },
  {
    name: "Testimonials",
    path: "#Testimonials",
  },
];

const page = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
        <div className=" bg-black z-50 fixed h-12 w-full font-serif text-white pt-6 px-4 sm:px-24 sm:p-12 flex justify-between items-center ">
          <div className="flex items-center">
            <SiCoffeescript size={25} />
            <h2 className="p-2 sm:text-4xl text-2xl ">CoffeeQ</h2>
          </div>
          <div>
            <ul className="hidden md:flex list-none gap-5 ">
              {nevItems.map((item) => (
                <li
                  className="hover:text-green-500 duration-1000"
                  key={item.path}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden flex">
            <div className=" cursor-pointer px-2">
              <RiMenu2Fill size={20} />
            </div>
            <div className="">
              {openMenu && (
                <div className="fixed h-48 w-full list-none gap-5 bg-white text-black top-12 left-0">
                  <ul className=" flex flex-col items-center gap-1">
                    {nevItems.map((item) => (
                      <li
                        className="hover:text-green-500 duration-1000"
                        key={item.path}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
     
    </>
  );
};

export default page;
