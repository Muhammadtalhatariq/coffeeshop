import React from "react";

const page = () => {
  return (
    <div
      className="text-white bg-neutral-950 w-full min-h-screen  py-32 p-4"
      id="Gallery"
    >
      <div>
        <p className="text-3xl text-green-500 pb-4 text-center">Gallery</p>
        <p className="text-4xl font-normal leading-snug pb-6 text-center">
          Our Photo gallery
        </p>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row gap-5 px-20 ">
        <div className=" h-96 w-96 bg-[url('/gallery-1.jpg')] bg-contain bg-no-repeat  ">

          <h3 className="rounded-xl bg-neutral-800 text-center px-24 p-4">Cappuccino Arabica</h3>
        </div>
        {/* <div className=" h-96 w-96 bg-[url('/gallery-2.jpg')] bg-contain bg-no-repeat  ">
          <a href=""></a>
          <h3 className=" rounded-xl bg-neutral-800 text-center px-24 p-4">Cappuccino Arabica</h3>
        </div>
        <div className="h-96 w-96 bg-[url('/gallery-3.jpg')] bg-contain bg-no-repeat  ">
          <a href=""></a>
          <h3 className=" rounded-xl bg-neutral-800 text-center px-24 p-4">Cappuccino Arabica</h3>
        </div>
        <div className=" h-96 w-96 bg-[url('/gallery-4.jpg')] bg-contain bg-no-repeat  ">
          <a href=""></a>
          <h3 className=" rounded-xl bg-neutral-800 text-center px-24 p-4">Cappuccino Arabica</h3>
        </div>
        <div className=" h-96 w-96 bg-[url('/gallery-5.jpg')] bg-contain bg-no-repeat  ">
          <a href=""></a>
          <h3 className="rounded-xl bg-neutral-800 text-center px-24 p-4">Cappuccino Arabica</h3>
        </div> */}
      </div>
    </div>
  );
};

export default page;
