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
  return (
    <div className="fixed left-0 right-0  z-50  bg-white w-full  ">
      <div className=" max-w-[1240px] lg:px-2 xl:px-0 mx-auto py-4 lg:flex hidden justify-between items-center ">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="logo" className="object-contain mt-4" />
        </Link>
        {/* <img src={logo} alt="" /> */}
        <div className="gap-x-10 flex  items-center">
          <div className="flex   gap-x-4  rounded-[10px] text-base  items-center text-[#0056B3]">
            <Link href={"/signup/client"} className=" font-bold  ">
              Sign Up{" "}
            </Link>
            /
            <Link href={"/login/client"} className="  font-bold ">
              Log In
            </Link>
          </div>{" "}
          <button
            onClick={() => router.push("/signup/cleaners")}
            className="bg-[#0056B3] text-white rounded-[10px] font-bold  px-4 py-2"
          >
            Register as a Cleaner
          </button>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
      <div className="  top-0  px-2  sm:px-10 md:px-8   w-full  lg:hidden   py-4 flex  z-[70] rounded-b-sm justify-between items-center">
        <Link href="/">
          {" "}
          <Image src={logo} alt="" className="md:w-40 w-24 object-contain " />
        </Link>
        <span className="flex  items-center gap-x-2">
          <button
            onClick={() => router.push("/signup/cleaners")}
            className="bg-[#0056B3] text-sm text-white rounded-[10px] font-bold  px-3 py-2"
          >
            Register as a Cleaner
          </button>

          <HiMenu
            className="text-black font-bold text-xl  sm:text-3xl md:text-4xl"
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>
      {bool && (
        <div
          className="h-[12rem] md:h-[14rem] lg:hidden w-full flex flex-col shadow text-base rounded-b-xl items-center justify-evenly text-white  bg-[#0056B3] md:text-xl  lg:text-base
         text-light z-50 fixed top-[4rem] md:top-[11.2rem] "
        >
          <Link
            href="/login/client"
            className=" font-bold  "
            onClick={() => {
              setbool(false);
            }}
          >
            {" "}
            LOG IN
          </Link>
          <Link href={"/signup/client"} className=" font-bold  ">
            Sign Up{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
