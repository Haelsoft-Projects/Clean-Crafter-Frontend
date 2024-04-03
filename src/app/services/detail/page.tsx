"use client";
import Navbar from "@/components/servicespage/Nav";
import Image from "next/image";
import React, { useState } from "react";
import img from "@/assets/hero.png";
import imger from "@/assets/imger.png";
import { IoMdCheckmark } from "react-icons/io";
import bg from "@/assets/bg.png";
import { IoStarSharp } from "react-icons/io5";
import locate from "@/assets/locate.png";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import imgpace from "@/assets/pace.png";
import Footer from "@/components/LandingPage/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "@/Services/context";
import { toast } from "react-toastify";
import Layout from "../Layout";
import NewsLetter from "@/components/common/NewsLetter";
import AppFooter from "@/components/common/AppFooter";

const Detail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const availabilitystr = searchParams.get("availability");
  const benefitstr = searchParams.get("benefits");
  console.log(searchParams.get("name"));

  type Availability = {
    available: string;
    explanation: string;
  };

  type Benefits = {
    benefit: string;
    explanation: string;
  };
  const availability: Array<Availability> = JSON.parse(availabilitystr ?? "");
  const benefits: Array<Benefits> = [
    {
      benefit: "Excellent customer service",
      explanation:
        "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
    },
    {
      benefit: "Competitive rates",
      explanation:
        "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
    },
    {
      benefit: "Secure online payment ",
      explanation:
        "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
    },
    {
      benefit: "Vetted cleaners",
      explanation:
        "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
    },
  ];
  const { name, setName } = useAppContext();
  const [city, setcity] = useState<string>("");
  return (
    <div>
      <Layout>
        <div className="h-[30rem] relative w-full ">
          <Image
            src={bg}
            loading="lazy"
            alt="img"
            className="object-cover h-[30rem] absolute  w-full"
          />
          <div className="h-[30rem] gap-y-10 w-full  px-4 absolute z-50 text-white flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl xl:text-[36px]">
              {searchParams.get("name")} Services
            </h1>
            <div className="flex  gap-x-3 w-full items-center  lg:flex-row justify-center">
              <select
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="placeholder:text-[#FFFFFF]  text-white placeholder:font-semibold placeholder:text-center placeholder:text-[13px] px-4 lg:w-1/6 bg-transparent h-[51px] w-full  rounded-[4px] outline-none   border-2 border-[#FFD54F]"
              >
                <option value="" className="bg-transparent text-black">
                  Select City
                </option>
                <option value="Lagos" className="bg-transparent text-black">
                  Lagos
                </option>
              </select>

              <button
                onClick={() => {
                  if (city.length !== 0) {
                    setName((prev: object) => ({
                      ...prev,
                      city: city,
                      type: searchParams.get("name"),
                    }));
                    router.push("/services/clean");
                  } else {
                    toast.error("Select a city", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                    });
                  }
                }}
                className="bg-[#FFC107] h-[51px] w-full px-2 lg:w-[12%] font-semibold rounded-[4px]  text-[13px]   text-white"
              >
                Book Now
              </button>
            </div>
            {/* <div className="flex items-center gap-x-3">
              <IoMdCheckmark className="text-[#FFC107]" />
              <p className="s">Get 33% off your first clean with “CLEAN33”</p>
            </div> */}
          </div>
        </div>

        <h1 className="text-[#0056B3] text-3xl font-bold text-center mt-20">
          How it works
        </h1>

        <div className="flex gap-x-2 flex-col lg:flex-row max-w-[1240px] mt-20 mx-auto items-center w-full px-4 lg:px-4 xl:px-0">
          <div className="flex flex-col text-center  w-96">
            <p className="text-[26px]">1</p>
            <p className="font-semibold mt-2">Enter Your Address </p>
            <p className="mt-4">
              Enter your address to check if we have cleaners in your area.
            </p>
          </div>
          <div className="h-32 w-[1px] bg-[#121212]"></div>
          <div className=" flex flex-col text-center  w-96">
            <p className="text-[26px]">2</p>
            <p className="font-semibold mt-2">Enter Job Description </p>
            <p className="mt-4">Describe your job for the cleaners.</p>
          </div>{" "}
          <div className="h-32 w-[1px] bg-[#121212]"></div>
          <div className=" flex flex-col text-center  w-96">
            <p className="text-[26px]">3</p>
            <p className="font-semibold mt-2">Pay Securely </p>
            <p className="mt-4">
              Enter your postcode to find cleaners available in your area
            </p>
          </div>{" "}
          <div className="h-32 w-[1px] bg-[#121212]"></div>
          <div className=" flex flex-col text-center  ">
            <p className="text-[26px]">4</p>
            <p className="font-semibold mt-2">Enjoy a Spotless Environment </p>
            <p className="mt-4">
              Enjoy a sparkling environment and provide your feedback.
            </p>
          </div>{" "}
        </div>

        <div className=" h-[30rem] w-full relative  mt-20">
          <Image
            src={imger}
            loading="lazy"
            alt="img"
            className="object-cover  h-[30rem] w-full absolute "
          />
          <div className="h-[30rem] gap-y-10 text-center lg:text-start w-full flex justify-center items-center absolute z-50 text-white font-bold text-3xl">
            Book Your {searchParams.get("name")} Services with CleanCrafters
            today!
          </div>
        </div>

        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4 lg:px-4 xl:px-0">
          <span className="text-[#0056B3] text-xl">
            Understand {searchParams.get("name")}
          </span>
          <div className="mt-4">
            <p className="text-base leading-[2.2] ">
              {searchParams.get("meaning")}
            </p>
          </div>
        </div>
        <div className=" h-[30rem] w-full relative  mt-20">
          <Image
            src={imger}
            loading="lazy"
            alt="img"
            className="object-cover  h-[30rem] w-full absolute "
          />
          <div className="h-[30rem] gap-y-10 w-full flex flex-col justify-center text-center  items-center absolute z-50 text-white font-bold px-4 lg:px-0 ">
            <div className="text-3xl">
              Find a Top Rated Home Cleaner near you
            </div>
            <div className="flex gap-x-3 w-full items-center justify-center ">
              <select
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="placeholder:text-[#FFFFFF]  text-white placeholder:font-semibold placeholder:text-center placeholder:text-[13px] px-4 lg:w-1/6 bg-transparent h-[51px] w-full  rounded-[4px] outline-none   border-2 border-[#FFD54F]"
              >
                <option value="" className="bg-transparent text-black">
                  Select City
                </option>
                <option value="Lagos" className="bg-transparent text-black">
                  Lagos
                </option>
              </select>

              <button
                onClick={() => {
                  if (city.length !== 0) {
                    setName((prev: object) => ({
                      ...prev,
                      city: city,
                      type: searchParams.get("name"),
                    }));
                    router.push("/services/clean");
                  } else {
                    toast.error("Select a city", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                    });
                  }
                }}
                className="bg-[#FFC107] h-[51px] w-full px-2 lg:w-[12%] font-semibold rounded-[4px]  text-[13px]   text-white"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4 lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">
            Book Your {searchParams.get("name")} With CleanCrafters
          </h2>
          <div className="mt-4">
            <p className="text-base leading-[2] text-justify">
              {searchParams.get("sub1explanation")}
            </p>{" "}
          </div>
        </div>
        {/* -----------Available----- */}
        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4    text-justify   lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">We Are Available For:</h2>
          <div className="mt-5 flex flex-wrap w-full justify-between">
            {availability.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-2 mb-8 items-start text-lg"
              >
                <div className="flex gap-x-2 ">
                  <span>{item.available}:</span>
                </div>
                <p className="ssasa pl-4">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-x-2 max-w-[1240px] text-justify mt-20 mx-auto  w-full px-4       lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">Our Benefits: </h2>
          <div className="mt-5 flex flex-wrap w-full justify-between">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-4 mb-8 items-start text-lg"
              >
                <div className="flex gap-x-2">
                  <span>{item.benefit}</span>
                </div>
                <p className="a pl-4">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
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
            <HiOutlineArrowCircleLeft className="text-3xl cursor-pointer" />

            <div className="min-h-[288px] max-w-[410.5px] space-y-3 p-4 border border-[#121212]">
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
                  &apos;&apos;
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
            <div className="min-h-[288px] p-4 max-w-[410.5px] border border-[#121212]">
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
                  &apos;&apos;
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
            <HiOutlineArrowCircleRight className="text-3xl cursor-pointer" />
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto  gap-y-4 w-full px-4 lg:px-4 xl:px-0 flex flex-col items-center mt-20">
          <Image src={locate} alt="image" />
          <p className="text-[#0056B3] text-center text-3xl font-bold">
            CleanCrafters can find home cleaning services anywhere
          </p>
          <p className="font-semibold text-xl  text-center">
            Whether you&apos;re looking for oven cleaning in Nigeria,
            CleanCrafters can help arrange a cleaner for you. We&apos;ve already
            conquered all these major cities and urban areas
          </p>
          <div className="flex items-center w-full px-4 justify-between lg:justify-center mx-auto text-center lg:text-start lg:gap-x-9 lg:flex-row flex-col ">
            <div className="lg:border-r  lg:border-r-[#000000] pr-9 text-center">
              Lagos
            </div>
            <div className="lg:border-r  lg:border-r-[#000000] pr-9 text-center">
              Abuja
            </div>
            <div className="lg:border-r  lg:border-r-[#000000] pr-9 text-center">
              Port Harcourt
            </div>
            <div className=" pr-9 text-center">Enugu</div>
          </div>
        </div>
        <div className=" mt-20 relative   min-h-[30rem] w-full">
          <Image
            src={imgpace}
            alt=""
            className="absolute object-cover h-[30rem] w-full"
          />
          <NewsLetter />
        </div>
        <div className="w-full mt-20">
          <AppFooter />
        </div>
      </Layout>
    </div>
  );
};

export default Detail;
