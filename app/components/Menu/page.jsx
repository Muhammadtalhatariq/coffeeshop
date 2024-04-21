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

const page = () => {
  return (
    <div className="text-white w-full" id="Menu">
      <div className="fixrd w-full  p-4 bg-[url('/menu.jpg')] bg-cover">
        <div className=" py-20">
          <h2 className="text-3xl text-green-500 pb-4 text-center">Our Menu</h2>
          <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
            Let's Check Our Menu
          </h1>
          <div className="flex flex-wrap gap-10 sm:px-20 m-1 ">
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
                      <h1 className="text-sm font-serif">{menu.description}</h1>
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
      <div className="w-full min-h-screen bg-neutral-900 p-0">
        
      </div>
    </div>
  );
};

export default page;
