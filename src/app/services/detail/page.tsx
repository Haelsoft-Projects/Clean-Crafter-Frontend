import Navbar from "@/components/servicespage/Nav";
import Image from "next/image";
import React from "react";
import img from "@/assets/hero.png";
import { IoMdCheckmark } from "react-icons/io";
const Detail = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="h-[30rem] relative ">
        <Image
          src={img}
          loading="lazy"
          alt="img"
          className="object-cover h-[30rem] absolute "
        />
        <div className="h-[30rem] gap-y-10 w-full bg-black/[0.4] px-4 absolute z-50 text-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl xl:text-[36h1x]">
            Find a Top Rated Home Cleaner near you
          </h1>

          <div className="flex gap-x-3 w-full items-center justify-center">
            <input
              type="text"
              placeholder="Enter Your Address"
              className="placeholder:text-[#FFFFFF] placeholder:font-semibold placeholder:text-center placeholder:text-[13px] px-4 w-1/6 bg-transparent h-[51px]  rounded-[4px] outline-none   border-2 border-[#FFD54F]"
            />
            <button className="bg-[#FFC107] h-[51px] w-[12%] font-semibold rounded-[4px]  text-[13px]   text-white">
              Book Now
            </button>
          </div>
          <div className="flex items-center gap-x-3">
            <IoMdCheckmark className="text-[#FFC107]"/>
            <p className="s">Get 33% off your first clean with “CLEAN33”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
