"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import logo from "@/assets/logo.png";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import imgpace from "@/assets/pace.png";
import Footer from "@/components/LandingPage/Footer";
import { LuPen } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useAppContext } from "@/Services/context";
const Finish = () => {
  const router = useRouter();
  const { name, setName } = useAppContext();
  console.log(name);

  
  return (
    <div>
      <div>
        <div className="w-full  max-w-[1240px] px-4 lg:px-10 xl:px-0  mx-auto ">
    
          <div className="flex items-center  justify-between border-b border-b-[#A3A3A3]  py-3 ">
            <Image src={logo} alt="logo" className="object-contain" />{" "}
            <div className="bg-[#FFC107]  w-[50%] rounded-[20px]  h-6">
              <div className="bg-[#0056B3]  rounded-[20px]  w-[100%] h-6"></div>
            </div>
          </div>
          <p className="text-[#0056B3] font-bold text-[26px] mt-8">
          {name.type}
          </p>
          <div className=" w-full px-4  space-y-4 mt-6 py-4">
            <div className="w-full border border-[#121212] rounded-[9px] p-6 flex flex-col gap-y-8">
              <div className="flex justify-between ">
                <p className=" font-medium">Job Location</p>
                <div className="flex gap-x-4 text-2xl cursor-pointer">
                <LuPen onClick={()=>{
                    router.replace("/services/clean")
                  }} />
                  <IoMdCheckmark />
                </div>
              </div>{" "}
              <div className="w-full items-center flex justify-between">
                <span className="flex items-center gap-x-1   text-[#77777A] font-medium">
                  <IoLocationOutline />
                  Lagos, Nigeria
                </span>
                <span>Cleaners are available in the area</span>
              </div>
            </div>
            <div className="w-full border border-[#121212] rounded-[9px] p-6 flex flex-col gap-y-8 h-[69px]">
              <div className="flex justify-between ">
                <p className=" font-medium">Job Description</p>
                <div className="flex gap-x-4 text-2xl cursor-pointer">
                  <LuPen onClick={()=>{
                    router.replace("/services/job")
                  }} />
                  <IoMdCheckmark />
                </div>
              </div>{" "}
            
            </div>
     
            <div className="w-full flex flex-col justify-end mb-10 items-end gap-y-3 mt-4 rounded-lg gap-x-4">
              <p className="text-end text-xl">$500</p>
                <button
                  type="button"
                  onClick={() => router.replace("/services")}
                  className=" flex gap-x-2  w-[8%] py-2 text-white  bg-[#0056B3] rounded justify-center items-center"
                >
                  Finish
                </button>
              </div>
          </div>
        </div>

        <div className=" mt-20 relative   h-[30rem] w-full">
          <Image
            src={imgpace}
            alt=""
            className="absolute object-cover  h-[30rem] w-full"
          />
          <div className="absolute flex flex-col gap-y-8 justify-center items-center lg:px-20 left-0 right-0 mx-auto h-[30rem]  text-white max-w-[1240px]  w-full ">
            <p className="text-[30px] font-semibold">
              Subscribe to our Newsletter
            </p>
            <p className="">
              I would like to receive future updates, offers and promotions by
              email from CleanCrafters. If at any time you would like to stop
              receiving communication from us, you can unsubscribe at the end of
              any promotional mail.
            </p>
            <div className="flex gap-x-3">
              <input
                type="text"
                placeholder="Enter your email address here..."
                className="placeholder:text-[#FFFFFF] bg-transparent h-[65px] w-full rounded-[10px] px-4  border-2 border-[#007BFF]"
              />
              <button className="bg-[#007BFF] h-[65px] w-[230px] rounded-[10px] text-[20px]  text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Finish;
