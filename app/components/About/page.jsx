import React from "react";
import { TiTick } from "react-icons/ti";
const page = () => {
  return (
    <div
      className="text-white bg-neutral-950 w-full min-h-screen  py-32 p-4"
      id="About"
    >
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="w-full bg-green-500 h-[22rem] sm:h-[30rem] ">
          <div className="bg-[url('/1-img.jpg')] bg-cover w-[96%] h-[21rem] sm:h-[29rem] right-0 flex items-end"></div>
        </div>
        <div className="w-full">
          <p className="text-3xl text-green-500 pb-4 text-center">About Us</p>
          <p className="text-4xl font-normal leading-snug pb-6 text-center">
            Fresh Quality And Organic Tasty Coffee House For You
          </p>
          <p className=" leading-7 text-sm font-serif text-start text-gray-300 pb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="flex gap-2 items-center font-serif text-gray-300 pb-1 ">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>
          <p className="flex gap-2 items-center font-serif text-gray-300 pb-1 ">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>
          <p className="flex gap-2 items-center font-serif text-gray-300 pb-10">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>

          <a
            className="  border-2 border-green-500 font-serif rounded-lg px-6 bg-green-500 hover:bg-transparent py-2"
            href="#Menu"
          >
            our Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
