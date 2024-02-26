import Navbar from "@/components/LandingPage/Navbar";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
const Clean = () => {
  return (
    <div>
      <div className="w-full  max-w-[1240px] px-4 lg:px-10 xl:px-0  mx-auto ">
        {" "}
        <div className="flex items-center  justify-between border-b border-b-[#A3A3A3]  py-3 ">
          <Image src={logo} alt="logo" className="object-contain" />{" "}
          <div className="bg-[#FFC107]  w-[50%] rounded-[20px]  h-6">
            <div className="bg-[#0056B3]  rounded-[20px]  w-[30%] h-6"></div>
          </div>
        </div>
        <p className="text-[#0056B3] font-bold text-[26px]">Home Cleaning</p>
        <div className="rounded-[9px] border border-[#A3A3A3] w-full px-4  gap-x-4">
          <p className=" font-medium">Job Location</p>
          <form action=" flex flex-col gap-y-8">
            <input
              type="text"
              className="
             text-I
             w-full border border-[#121212C2]/[0.76] placeholder:text-[#A3A3A3] h-10"
              placeholder="city"
            />
            <input
              type="text"
              className="
             text-sm
             w-full border border-[#121212C2]/[0.76] placeholder:text-[#A3A3A3] h-10"
              placeholder="city"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Clean;
