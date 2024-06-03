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
      <div className="flex flex-wrap flex-col items-center justify-center sm:flex-row gap-5 sm:px-14 ">
      <div className="w-[21rem] h-[420px] bg-[url('/gallery-1.jpg')] rounded-2xl bg-cover bg-no-repeat">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>
       
        <div className="w-[21rem] h-[420px] bg-[url('/gallery-2.jpg')] rounded-2xl bg-cover bg-no-repeat  ">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>

        <div className="w-[21rem] h-[420px] bg-[url('/gallery-3.jpg')] rounded-2xl bg-cover bg-no-repeat  ">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>

        <div className="w-[21rem] h-[420px] bg-[url('/gallery-4.jpg')] rounded-2xl bg-cover bg-no-repeat  ">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>

        <div className="w-[21rem] h-[420px] bg-[url('/gallery-5.jpg')] rounded-2xl bg-cover bg-no-repeat  ">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>

        <div className="w-[21rem] h-[420px] bg-[url('/gallery-2.jpg')] rounded-2xl bg-cover bg-no-repeat  ">
        <h3 className="rounded-xl bg-neutral-800 text-center bottom-0 p-4 mx-6 mt-80">
            Cappuccino Arabica
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
