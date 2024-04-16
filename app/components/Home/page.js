import React from "react";


const page = () => {
  return (
    <>
    <div
      className=' pt-20 pb-40 text-white font-serif bg-[url("/bg.jpg")] w-full min-h-screen bg-cover bg-center '
      id="Home"
    >
    
      <div className="p-6 sm:pl-24 pt-20 ">
        <h1 className="sm:text-3xl text-xl font-medium  ">
          Welcome To Coffero!
        </h1>
        <p className="sm:text-5xl  font-bold text-2xl sm:w-[50%] pt-4  sm:leading-snug">
          Discover Amazing Coffee House & Get Energy
        </p>
        <p className=" sm:w-[50%] font-bold pt-4 leading-7 -tracking-tight sm:leading-8 text-sm">
          There are many variations of passages available but the majority have
          suffered alteration in some form by injected humour or randomised
          words.
        </p>
        <div className="flex gap-6 pt-12">
          <a className="border-2 border-green-500 px-6 bg-green-500 hover:bg-transparent py-2" href="#Menu">Menu</a>
          <a className="border-2 bg bg-s border-green-500 px-6 hover:bg-green-500 py-2" href="#Booking">Book Table</a>
        </div>
      </div>
     
    </div>
     <div className="border-t-2 border-gray-800 "></div>
    
     </>
  );
};

export default page;
