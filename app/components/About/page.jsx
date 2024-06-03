import React from "react";
import { TiTick } from "react-icons/ti";
const page = () => {
  return (
    <div
      className="text-white bg-neutral-950 w-full min-h-screen  py-32 sm:px-32 p-4"
      id="About"
    >
      <div className="flex sm:flex-row flex-col gap-20">
        <div className=" sm:w-[46rem] bg-green-500 h-[22rem] sm:h-[32rem] ">
          <div className="bg-[url('/1-img.jpg')] bg-cover bg-no-repeat w-full h-[21rem] sm:h-[31rem] right-0 flex items-end"></div>
        </div>
        <div className="w-full">
          <p className="text-3xl text-green-500 pb-4 text-center">About Us</p>
          <p className="text-4xl font-normal leading-snug pb-10 text-center">
            Fresh Quality And Organic Tasty Coffee House For You
          </p>
          <p className=" leading-7 text-sm font-serif text-start text-neutral-400 pb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="flex gap-2 items-center font-serif text-neutral-400 pb-1 ">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>
          <p className="flex gap-2 items-center font-serif text-neutral-400 pb-1 ">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>
          <p className="flex gap-2 items-center font-serif text-neutral-400 pb-10">
            <TiTick size={20} /> At vero eos et accusamus et iusto odio
          </p>

          <a
            className="  border-2 border-green-500 font-serif rounded-lg px-6 bg-green-500 hover:bg-transparent duration-1000 py-2"
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
