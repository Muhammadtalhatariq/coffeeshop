import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    img: "testimonial-1.jpg",
    title: "Reid E Butt",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
  {
    id: 2,
    img: "testimonial-2.jpg",
    title: "Gordon Novak",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
  {
    id: 3,
    img: "testimonial-3.jpg",
    title: "Sylvia Green",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
];

const page = () => {
  return (
    <div
      className="text-white bg-neutral-900 w-full min-h-screen py-32 p-4"
      id="Testimonials"
    >
      <div>
        <h2 className="text-3xl text-green-500 pb-4 text-center">
          Testimonials
        </h2>
        <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
          What Client Say's
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {testimonials.map((Client, index) => (
          <div key={index} className=" w-80 sm:w-96 bg-black p-4 ">
            <div className="flex">
              <div
                className={`rounded-[100%]  h-24 w-24 border-dashed border-2 border-green-500`}
              >
                <img className=" rounded-[100%]" src={Client.img} alt="" />
              </div>
              <div className=" p-4 text-3xl">
                <p>{Client.title}</p>
                <p className="text-sm text-green-500">{Client.service}</p>
                <div className="flex">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoIosStarHalf size={20} />
                </div>
              </div>
            </div>
            <p className=" pb-2 text-md font-serif text-neutral-500">
              {Client.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
