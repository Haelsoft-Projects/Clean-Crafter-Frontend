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

const Detail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reasonstr = searchParams.get("reason");
  console.log(searchParams.get("name"));

  type Reason = {
    reason: string;
    explanation: string;
  };
  const reason: Array<Reason> = JSON.parse(reasonstr ?? "");
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
            <h1 className="font-bold text-2xl xl:text-[36h1x]">
              Find a Top Rated Home Cleaner near you
            </h1>
            <div className="flex gap-x-3 w-full items-center justify-center">
              <input
                type="text"
                placeholder="Enter Your City"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="placeholder:text-[#FFFFFF] placeholder:font-semibold placeholder:text-center placeholder:text-[13px] px-4 w-1/6 bg-transparent h-[51px]  rounded-[4px] outline-none   border-2 border-[#FFD54F]"
              />
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
                    toast.error("Fill the field", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                    });
                  }
                }}
                className="bg-[#FFC107] h-[51px] w-[12%] font-semibold rounded-[4px]  text-[13px]   text-white"
              >
                Book Now
              </button>
            </div>
            <div className="flex items-center gap-x-3">
              <IoMdCheckmark className="text-[#FFC107]" />
              <p className="s">Get 33% off your first clean with “CLEAN33”</p>
            </div>
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
          <div className="h-[30rem] gap-y-10 w-full flex justify-center items-center absolute z-50 text-white font-bold text-3xl">
            Book Your Home Cleaning Services with CleanCrafters today!
          </div>
        </div>

        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4 lg:px-4 xl:px-0">
          <span className="text-[#0056B3] text-xl">
            Understand Resisdential Cleaning
          </span>
          <div className="mt-4">
            <p className="text-base leading-[2.2] ">
              {/* {searchParams.get("meaning")} */}
              CleanCrafters understands the need for a clean and tidy home to
              relax and bond with family. So we provide a professional home
              cleaning solution to make your burden of cleaning your living
              room, kitchen, bedrooms, bathrooms, and other rooms ours. We
              tailor our services to your preference with different packages to
              get you connected with our trained and experienced cleaners. At
              CleanCrafter, we are not short of impressing our clients because
              their satisfaction is our pride.
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
          <div className="h-[30rem] gap-y-10 w-full flex flex-col justify-center items-center absolute z-50 text-white font-bold ">
            <div className="text-3xl">
              Find a Top Rated Home Cleaner near you
            </div>
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
          </div>
        </div>
        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4 lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">
            Book Your Home Cleaning With CleanCrafters
          </h2>
          <div className="mt-4">
            <p className="text-base leading-[2]">
              A clean home resonates with the perception of people living in the
              house. It is also essential for good health. The advantages of
              routine cleaning are numerous. Your living situation directly
              impacts your family's physical and mental health. You can prevent
              allergies, respiratory issues, and illness by cleaning regularly.
              Careful upkeep and cleaning are even more crucial if you own pets.
              Cleaning improves indoor air quality and leaves the space smelling
              nice by removing dust and bacteria. Since the kitchen and bathroom
              are believed to be the two germiest spaces in a home, they
              typically need special attention. However, home cleaning may be
              stressful if you are already busy with family or work. This is why
              you need CleanCrafters to help keep your home clean, organized,
              and germ-free.
            </p>{" "}
          </div>
        </div>
        {/* -----------Available----- */}
        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4       lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">We Are Available For:</h2>
          <div className="mt-5 flex flex-wrap w-full justify-between">
            <div className="flex gap-x-4 items-center text-lg">
              <span>1. </span>
              <span>Homes or estate buildings</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-2 max-w-[1240px] mt-20 mx-auto  w-full px-4       lg:px-4 xl:px-0">
          <h2 className="text-[#0056B3] text-xl">We Are Available For:</h2>
          <div className="mt-5 flex flex-wrap w-full justify-between">
            <div className="flex flex-col gap-x-4 items-center text-lg">
              <div className="flex">
                {" "}
                <span>1. </span>
                <span>Enter your Postcode</span>
              </div>
              <span>
                This is to confirm if we currently have cleaners around your
                location.
              </span>
            </div>
          </div>
        </div>

        <div className=" max-w-[1240px] mt-6 mx-auto items-center w-full px-4 lg:px-4 xl:px-0">
          <h1 className="  text-3xl font-bold text-[#0056B3] text-center mt-20 ">
            What Our Customers Say About Us
          </h1>
          <div className="mt-10 flex  lg:gap-x-7 xl:gap-x-0 items-center justify-between ">
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

            <div className="min-h-[288px] w-[410.5px] space-y-3 p-4 border border-[#121212]">
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
            <div className="min-h-[288px] p-4 w-[410.5px] border border-[#121212]">
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
          <p className="text-[#0056B3] text-3xl font-bold">
            CleanCrafters can find home cleaning services anywhere
          </p>
          <p className="font-semibold text-xl text-center">
            Whether you&apos;re looking for oven cleaning in Nigeria,
            CleanCrafters can help arrange a cleaner for you. We&apos;ve already
            conquered all these major cities and urban areas
          </p>
          <div className="flex items-center gap-x-9 ">
            <div className="border-r  border-r-[#000000] pr-9 text-center">
              Lagos
            </div>
            <div className="border-r  border-r-[#000000] pr-9 text-center">
              Abuja
            </div>
            <div className="border-r  border-r-[#000000] pr-9 text-center">
              Port Harcourt
            </div>
            <div className=" pr-9 text-center">Enugu</div>
          </div>
        </div>
        <div className=" mt-20 relative  h-[30rem]">
          <Image
            src={imgpace}
            alt=""
            className="absolute object-cover h-[30rem]"
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
      </Layout>
    </div>
  );
};

export default Detail;
