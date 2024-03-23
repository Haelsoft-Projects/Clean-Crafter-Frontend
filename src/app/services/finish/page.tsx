"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import logo from "@/assets/logo.png";
import { PaystackButton } from "react-paystack";
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
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import { baseURL } from "@/Service";
import Link from "next/link";
const Finish = () => {
  const router = useRouter();
  const publicKey = "pk_test_a6b12672f6f5e47d9349a0f015d87d7e71c1dd05";
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("olaimarne@gmail.com");
  const [namer, setNamer] = useState("Emmanuel");
  const [phone, setPhone] = useState("08088443186");
  const { name, setName } = useAppContext();
  const currentDate = new Date();
  const [isloading, setisloading] = React.useState<boolean>(false);
  console.log(name);
  useEffect(() => {
    if (
      name.city.length == 0 ||
      name.city.length == 0 ||
      name.street.length == 0 ||
      name.job_decription.length == 0
    ) {
      router.replace("/services");
    }
  }, []);
  interface User {
    email: string;
    first_name: string;
    id: number;
    job: [];
    last_name: string;
    nin: string;
    phone_number: string;
    user_type: string;
  }

  const userstr = secureLocalStorage.getItem("user");
  const user: User = JSON.parse(userstr?.toString() ?? "");
  // ??{
  //     email: "",
  //     first_name: "",
  //     id: 0,
  //     job: [],
  //     last_name:"",
  //     nin: "",
  //     phone_number: "",
  //     user_type: ""
  //   };
  // ;
  //   // const email =user?.email??""
  //   console.log("user", user.email);

  const createJob = () => {
    setisloading(true);
    axios
      .post(
        `${baseURL}/api/job`,
        {
          job_type: name.type,
          city: name.city,
          street_adddress: name.street,
          job_description: name.job_decription,
          time: currentDate,
          completed: false,
        },
        {
          headers: {
            Authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.user);
        toast.success("Job created", {
          autoClose: 2000,
          position: "top-right",
        });
        router.replace("/services");
      })
      .catch((e) => {
        console.log(e);

        toast.error("An error occurred", {
          autoClose: 2000,
          position: "top-right",
        });
      })
      .finally(() => {
        setisloading(false);
      });
  };
  const componentProps = {
    email: user.email,
    amount: 500000,
    custom_fields: {
      name: user.first_name + " " + user.last_name,
      phone: user.phone_number,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      
    },
    onClose: () => alert(""),
  };
  return (
    <div>
      <div>
        <div className="w-full  max-w-[1240px] px-4 lg:px-10 xl:px-0  mx-auto ">
          {isloading && (
            <div className="h-screen fixed w-screen left-0 z-50  bg-black/[0.9] flex justify-center items-center ">
              <BeatLoader color="#0056B3" size={30} />
            </div>
          )}
          <div className="flex items-center  justify-between border-b border-b-[#A3A3A3]  py-3 ">
            <Link href="/" className="cursor-pointer">
              <Image src={logo} alt="logo" className="object-contain mt-4" />
            </Link>
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
                  <LuPen
                    onClick={() => {
                      router.replace("/services/clean");
                    }}
                  />
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
                  <LuPen
                    onClick={() => {
                      router.replace("/services/job");
                    }}
                  />
                  <IoMdCheckmark />
                </div>
              </div>{" "}
            </div>

            <div className="w-full flex flex-col justify-end mb-10 items-end gap-y-3 mt-4 rounded-lg gap-x-4">
              <p className="text-end text-xl">$500</p>
              <button
                type="button"
                onClick={() => {
                  createJob();
                }}
                className=" flex gap-x-2  w-[8%] py-2 text-white  bg-[#0056B3] rounded justify-center items-center"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
        <PaystackButton
          className="paystack-button bg-red-500 px-10 py-4 text-white"
          {...componentProps}
        />
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
