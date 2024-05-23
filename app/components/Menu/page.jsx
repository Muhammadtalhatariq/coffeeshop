import React from "react";

const menus = [
  {
    id: 1,
    img: "/menu-1.jpg",
    title: "Americano Coffee",
    description: "Milk with vanilla flavored",
    price: 50.25,
  },
  {
    id: 2,
    img: "/menu-2.jpg",
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 3,
    img: "/menu-3.jpg",
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 30.25,
  },
  {
    id: 4,
    img: "/menu-4.jpg",
    title: "Special Raw Coffee",
    description: "Milk with vanilla flavored",
    price: 80.25,
  },
  {
    id: 5,
    img: "/menu-5.jpg",
    title: "Fresh Black Coffee",
    description: "Milk with vanilla flavored",
    price: 90.25,
  },
  {
    id: 6,
    img: "/menu-6.jpg",
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 7,
    img: "/menu-2.jpg",
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 120.25,
  },
  {
    id: 8,
    img: "/menu-1.jpg",
    title: "Cold Coffee",
    description: "Milk with vanilla flavored",
    price: 40.25,
  },
];

const Choose_us = [
  {
    id: 1,
    img: "/coffee-beans.svg",
    title: "Awesome Aroma",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.",
    price: 50.25,
  },
  {
    id: 2,
    img: "/coffee.svg",
    title: "Pure Grades",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.",
    price: 70.25,
  },
  {
    id: 3,
    img: "/coffee-beans-3.svg",
    title: "Healthy Coffee",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.",
    price: 30.25,
  },
];

const page = () => {
  return (
    <div className="text-white w-full" id="Menu">
      <div className="w-full p-4 bg-[url('/menu.jpg')] bg-cover">
        <div className=" py-20">
          <h2 className="text-3xl text-green-500 pb-4 text-center">Our Menu</h2>
          <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
            Let's Check Our Menu
          </h1>
          <div className="flex flex-wrap gap-10 sm:px-20 m-1 justify-center">
            {menus.map((menu) => (
              <div
                key={menu.id}
                className="flex flex-wrap bg-neutral-950 hover:-translate-y-2 ease-in duration-300"
              >
                <div className="flex items-center sm:px-6  px-2 sm:py-6 py-2 gap-2 sm:gap-32">
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <div
                      className={` rounded-[100%]  h-16 w-16 border-dashed border-4 border-green-500`}
                    >
                      <img
                        className="bg-cover h-14 w-14 rounded-[100%]"
                        src={menu.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-green-500 pb-2 tracking-widest">
                        {menu.title}
                      </h1>
                      <p className="text-sm font-serif text-neutral-400">
                        {menu.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-dashed border-s-4 border-green-500 px-8">
                    <h2>{menu.price}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-900 sm:py-20 py-4 px-3 sm:px-16">
        <div className="flex sm:flex-row flex-col">
          <div className="w-full">
            <h2 className="text-3xl text-green-500 pb-4">Why Choose Us</h2>
            <h1 className="text-4xl font-normal leading-snug pb-6">
              Coffero Most Out Of Your Favorite & Tasty Coffee House
            </h1>
            <p className=" leading-7 text-sm font-serif text-start text-neutral-400 pb-4">
              There are many variations of passages of orem psum available but
              the majority have suffered alteration in some form by injected
              humour or randomised words which don't look even slightly
              believable.
            </p>
            <div className="flex flex-wrap m-1">
              {Choose_us.map((Choose) => (
                <div key={Choose.id} className="flex ">
                  <div className="flex sm:py-6 py-2 gap-2 sm:gap-5">
                    <div className="flex pt-4 gap-3 pb-10">
                      <div
                        className={`m-1 rounded-[50%] h-16 w-16 border-dashed border-2 border-white `}
                      >
                        <img
                          className="bg-cover h-14 w-14 rounded-[50%] "
                          src={Choose.img}
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-white text-xl pb-2 tracking-widest">
                          {Choose.title}
                        </h1>
                        <p className="text-sm font-serif text-neutral-400">
                          {Choose.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full min-h-screen bg-[url('/choose.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </div>
      <div className=" flex justify-center items-center bg-black w-full py-10">
        <div className="flex justify-around items-center flex-col sm:flex-row w-full text-center ">
          <div className="py-8">
            <div className=" flex justify-center hover:rotate-[360deg] duration-500 ease-in h-20 w-20 bg-neutral-800 rounded-[50%] items-center">
              <img className=" h-20 w-20 p-4" src="/coffee-shop.svg" alt="" />
            </div>
            <h2 className="pt-6 ">120</h2>
            <p className="text-green-500">Total Branches</p>
          </div>
          <div className="py-8">
            <div className="flex justify-center h-20 w-20 hover:rotate-[360deg] duration-500 ease-in bg-neutral-800 rounded-[50%] items-center">
              <img className="h-20 w-20 p-4" src="/coffee-cup.svg" alt="" />
            </div>
            <h2 className="pt-6 ">450+</h2>
            <p className="text-green-500">Happy Customers</p>
          </div>
          <div className="py-8">
            <div className="flex justify-center h-20 w-20 hover:rotate-[360deg] duration-500 ease-in bg-neutral-800 rounded-[50%] items-center">
              <img className="h-20 w-20 p-4" src="/chef.svg" alt="" />
            </div>
            <h2 className="pt-6 ">135+</h2>
            <p className="text-green-500">Professional Chefs</p>
          </div>
          <div className="py-8">
            <div className="flex justify-center h-20 w-20 hover:rotate-[360deg] duration-500 ease-in bg-neutral-800 rounded-[50%] items-center">
              <img className="h-20 w-20 p-4" src="/coffee-shop.svg" alt="" />
            </div>
            <h2 className="pt-6 ">4+</h2>
            <p className="text-green-500"> Year Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
