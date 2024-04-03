"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [bool, setbool] = useState<boolean>(false);
  const [services, setservices] = useState<boolean>(true);
  const [account, setaccount] = useState<boolean>(false);
  return (
    <div>
      <div className=" max-w-[1240px] lg:px-10 xl:px-0 mx-auto p lg:flex hidden justify-between items-center pb-4 ">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="logo" className="object-contain mt-4" />
        </Link>
        {/* <img src={logo} alt="" /> */}
        <div className="gap-x-14 flex mt-4 ">
          <span
            onClick={() => {
              setservices(true);
              setaccount(false);
            }}
            className={`${
              services && "border-b-2 "
            } border-b-[#0056B3] cursor-pointer`}
          >
            {" "}
            Services
          </span>

          <span
            onClick={() => {
              setaccount(true);
              setservices(false);
            }}
            className={`${
              account && "border-b-2"
            } border-b-[#0056B3] cursor-pointer`}
          >
            {" "}
            My Account
          </span>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
      <div className="  top-0  px-2  sm:px-10 md:px-8   w-full  lg:hidden   py-4 flex  z-[70] rounded-b-sm justify-between">
        <Link href="/">
          {" "}
          <Image src={logo} alt="" className="md:w-40 w-24 object-contain " />
        </Link>
        <span className="flex  items-center gap-x-2">
          <HiMenu
            className="text-black font-bold text-xl  sm:text-3xl md:text-4xl"
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>
      {bool && (
        <div
          className="h-[7rem] md:h-[12rem] z-[100] lg:hidden w-full flex flex-col shadow text-base rounded-b-xl items-center justify-evenly text-white  bg-[#0056B3] md:text-xl  lg:text-base
         text-light fixed top-[3.1rem] md:top-[11.2rem] "
        >
          <Link
            href=""
            onClick={() => {
              setservices(true);
              setaccount(false);
            }}
            className={`${
              services && "border-b-2 "
            } border-b-white cursor-pointer`}
          >
            {" "}
            Services
          </Link>

          <Link
            href=""
            onClick={() => {
              setaccount(true);
              setservices(false);
            }}
            className={`${
              account && "border-b-2"
            } border-b-white cursor-pointer`}
          >
            {" "}
            My Account
          </Link>
        </div>
      )}
    </div>
  );
}
