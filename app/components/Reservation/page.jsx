"use client";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-neutral-950 sm:mt-20 mt-10 py-12 sm:mx-16 mx-0  ">
      <div>
        <h2 className="text-3xl text-green-500 pb-4 text-center">
          Reservation
        </h2>
        <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
          Book A Table
        </h1>
      </div>

      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-6 justify-center items-center "
        >
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Enter Your Email"
          />
          <input
            type="number"
            {...register("number", { min: 11, max: 15 })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Enter Your Number"
          />
          <input
            type="date"
            {...register("date", { required: true })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Date Ex: DD/MM/YY"
          />
          <input
            type="time"
            {...register("time", { required: true })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Time Ex: 01:25PM"
          />
          <input
            type="number"
            {...register("NumberOfPeople", { required: true })}
            className="p-4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Number of People"
          />
          <textarea
            type="text"
            {...register("message", { required: true })}
            className="p-4 sm:w-full sm:mx-32 4 w-80 rounded-2xl border-2 border-green-600 bg-neutral-700 text-green-600 text-sm "
            placeholder="Message"
          />

          <a
            className="border-2 rounded-lg border-green-500 px-6 hover:bg-green-500 py-2"
            type="submit"
          >
            Book A Table
          </a>
        </form>
      </div>
    </div>
  );
};

export default page;
