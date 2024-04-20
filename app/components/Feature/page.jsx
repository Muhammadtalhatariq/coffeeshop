import React from "react";
import { GrCertificate } from "react-icons/gr";

const page = () => {
  const features = [
    {
      id: 1,
      img: "/2-img.webp",
      title: "Free Shipping",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
    {
      id: 2,
      // img: "<GrCertificate />",
      title: "Organic Certified",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
    {
      id: 3,
      // img: coffee,
      title: "High Quality",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
    {
      id: 4,
      // img: coffeeBeans,
      title: "Proper Roasting",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
  ];

  return (
    <div
      className="text-white bg-neutral-950 w-full min-h-screen  py-32 p-4"
      id="Feature"
    >
      <div className="text-center">
        <p className="sm:text-3xl text-xl sm:pb-3 pb-2 text-green-500 ">
          Features
        </p>
        <h4 className="sm:text-4xl text-2xl ">Our Best Features</h4>
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-5 pt-16">
        {features.map((feature) => {
          return (
            <div
              key={feature.title}
              className="bg-black text-white  w-72 items-center rounded-lg hover:-translate-y-3 duration-500 "
            >
              <div className="w-78 border border-green-500 rounded-xl p-4 m-2 ">
                <img
                  className="w-20 h-20 mb-8"
                  src={feature.img}
                  alt={feature.title}
                />
                <h2 className="p-2 text-2xl">{feature.title}</h2>
                <p className="p-2 font-serif text-black-700 font-normal ">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
