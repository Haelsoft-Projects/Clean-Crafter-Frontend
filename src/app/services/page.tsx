"use client";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/servicespage/Nav";
import React from "react";
import img from "@/assets/hero.png";
import imgpace from "@/assets/pace.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

import { useAppContext } from "@/Services/context";
import { data, newData } from "@/Service";
import Link from "next/link";
import Layout from "./Layout";
const Services = () => {
  const router = useRouter();
  const { name, setName } = useAppContext();
  return (
    <div>
      <Layout>
        <div className="h-[30rem] relative w-full ">
          <Image
            src={img}
            loading="lazy"
            alt="img"
            className="object-cover h-[30rem]  w-full absolute "
          />
          <div className="h-[30rem] gap-y-10 w-full bg-black/[0.4] px-4 absolute z-50 text-white flex flex-col justify-center items-center">
            <p className="font-bold text-2xl xl:text-[36px]">Our Services</p>
            <p className="font-bold text-center text-xl xl:text-[32px]">
              Hire a CleanCrafter to help with cleaning your Environment
            </p>
          </div>
        </div>

        <h1 className="font-semibold text-2xl lg:text-xl xl:text-[32px] text-center text-[#0056B3] m-10">
          Our Services
        </h1>

        {/* List of Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10  max-w-[1240px] px-4 lg:px-10 xl:px-0 mx-auto">
          {newData.map((item, index) => (
            <div
              key={index}
              className="rounded-md  bg-[#F2F2F2]  flex flex-col   min-h-[521px] relative   pb-4 cursor-pointer  hover:bg-brand-color "
            >
              <Image
                src={item.image}
                loading="lazy"
                alt="cleaning"
                className="object-cover w-full  h-[20rem] lg:h-[70%]  rounded-md rounded-b-none"
              />
              <div className="p-2 flex-1">
                <h2 className="mt-2 text-2xl  ">{item.name}</h2>
                <p className="text-base p-2 leading-[30.88px]">
                  {item.details}
                </p>
                <div className="w-full flex items-end justify-end">
                  <Link
                    href={{
                      pathname: "/services/detail",
                      query: {
                        name: item.name,
                        meaning: item.meaning,
                        sub1: item.sub1,
                        sub1explanation: item.sub1explanation,
                        index: index,
                        availability: JSON.stringify(item.availability),
                      },
                    }}
                    onClick={() => {
                      setName((prev: object) => ({ ...prev, type: item.name }));
                    }}
                    className="py-3 px-8 flex items-center duration-500  mr-10  z-[2] ease-in-out gap-x-2 hover:shadow-md  hover:bg-[#c29204] bg-[#FFC107] text-white"
                  >
                    Learn More <HiArrowLongRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What customers says */}
        <div className=" max-w-[1240px] mt-6 mx-auto items-center w-full px-4 lg:px-4 xl:px-0 flex-col lg:flex-row">
          <h1 className="  text-3xl font-bold text-[#0056B3] text-center mt-20 ">
            What Our Customers Say About Us
          </h1>
          <div className="mt-10 flex flex-col lg:flex-row px-4 lg:px-0 gap-y-7 lg:gap-x-7 xl:gap-x-0 items-center justify-between ">
            <div className="flex flex-col gap-x-4 w-fit text-center gap-y-2 mt-4">
              <p className="font-bold text-2xl">Excellent</p>
              <div className="flex items-center justify-center text-3xl  text-[#FFD54F] gap-x-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp className="text-[#F7F4F4]" />
              </div>
              <p className="text-[#0056B3] font-medium text-xl">
                Based on 500+ Reviews
              </p>
            </div>
            <HiOutlineArrowCircleLeft className="text-3xl cursor-pointer hidden lg:block" />

            <div className="min-h-[288px] w-full max-w-[410.5px] space-y-3 p-4 border border-[#121212]">
              <div className="flex items-center justify-center text-3xl  text-[#FFD54F] gap-x-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="flex">
                <div className="text-[40px] "> ‘‘</div>
                <span className="mt-5 ml-2">
                  Since joining CleanCrafters, I&apos;ve seen a significant
                  increase in my bookings. The app is user-friendly, and I love
                  how easy it is to manage my schedule and connect with clients.
                  ’’
                </span>
              </p>
              <div className="w-fit mt-5 flex gap-x-4  mx-auto">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/profile-shot-african-american-bearded-man-with-curly-short-hair-standing-white-background-with-casual_176420-44296.jpg"
                  }
                  className="h-[50px] w-[50px] object-cover rounded-full"
                  width={50}
                  height={50}
                  loading="lazy"
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <p className="s">Dare</p>
                  <p className="s">July 8, 2023</p>
                </div>
              </div>
            </div>
            <div className="min-h-[288px] p-4 w-full max-w-[410.5px] border border-[#121212]">
              <div className="flex items-center justify-center text-3xl  text-[#FFD54F] gap-x-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="flex">
                <div className="text-[40px] "> ‘‘</div>
                <span className="mt-5 ml-2">
                  Since joining CleanCrafters, I&apos;ve seen a significant
                  increase in my bookings. The app is user-friendly, and I love
                  how easy it is to manage my schedule and connect with clients.
                  ’’
                </span>
              </p>
              <div className="w-fit mt-5 flex gap-x-4  mx-auto">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/profile-shot-african-american-bearded-man-with-curly-short-hair-standing-white-background-with-casual_176420-44296.jpg"
                  }
                  className="h-[50px] w-[50px] object-cover rounded-full"
                  width={50}
                  height={50}
                  loading="lazy"
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <p className="s">Dare</p>
                  <p className="s">July 8, 2023</p>
                </div>
              </div>
            </div>
            <HiOutlineArrowCircleRight className="text-3xl cursor-pointer hidden lg:block" />
          </div>
        </div>
        <div className=" mt-20 relative   min-h-[30rem] w-full">
          <Image
            src={imgpace}
            alt=""
            className="absolute object-cover h-[30rem] w-full"
          />
          <div className="absolute text-center flex px-4 flex-col gap-y-8 justify-center items-center lg:px-20 left-0 right-0 mx-auto h-[30rem]  text-white max-w-[1240px]  w-full ">
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

        <div className="mt-20">
          {" "}
          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default Services;
