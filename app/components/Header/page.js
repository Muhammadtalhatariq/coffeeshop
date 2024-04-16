import React from "react";
import { SiCoffeescript } from "react-icons/si";
import Link from "next/link";
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
    name: "Chefs",
    path: "#Chefs",
  },
  {
    name: "Gallery",
    path: "#Gallery",
  },
  {
    name: "Menu",
    path: "#Menu",
  },
  {
    name: "Testimonials",
    path: "#Testimonials",
  },
];

const page = () => {
  return (
    <div className=" fixed bg-black h-12 w-full font-serif text-white  p-12 flex justify-between items-center">
      <div className="flex items-center">
        <SiCoffeescript size={30} />
        <h2 className="p-2 text-4xl ">CoffeeQ</h2>
      </div>
      <div>
        <ul className="flex list-none gap-5">
          {nevItems.map((item) => (
            <li className="hover:text-green-600" key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
