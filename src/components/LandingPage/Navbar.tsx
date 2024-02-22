'use client'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
const  router=useRouter(); 
  const [bool, setbool] = useState<boolean>(false);
  return (
    <div>
      <div className=" container lg:px-2 xl:px-0 mx-auto p lg:flex hidden justify-between items-center ">
        <Image src={logo} alt="logo" className="object-contain" />
        {/* <img src={logo} alt="" /> */}
        <div className="gap-x-14 flex ">
          <button onClick={() => router.push('/signup/cleaners')} className="bg-[#4A9EED] text-white rounded-[10px] font-bold  px-8 py-2">
            REGISTER AS A CLEANER
          </button>
          <button onClick={() => router.push('/login/clients')}  className=" rounded-[10px] text-base font-bold">
            LOG IN
          </button>{" "}
          <button className="text-black rounded-[10px] font-bold">MENU</button>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
      <div className="  top-0  px-2  sm:px-10 md:px-8   w-full  lg:hidden   py-4 flex  z-[70] rounded-b-sm justify-between">
        <Link href="">
          {" "}
          <Image src={logo} alt="" className="md:w-40 w-24 " />
        </Link>
        <span className="flex  items-center gap-x-2">
          <button className="bg-[#4A9EED] text-sm text-white rounded-[10px] font-bold  px-3 py-2">
            REGISTER AS A CLEANER
          </button>
          <HiMenu
            className="text-black font-bold text-xl  sm:text-3xl md:text-4xl"
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>
      {bool && (
        <div
          className="h-[7rem] md:h-[12rem] lg:hidden w-full flex flex-col shadow text-base rounded-b-xl items-center justify-evenly text-white  bg-[#4A9EED] md:text-xl  lg:text-base
         text-light z-50 fixed top-[7.5rem] md:top-[11.2rem] "
        >
          <Link href="" onClick={() => setbool(false)}>
            {" "}
            LOG IN
          </Link>
          <Link href="" onClick={() => setbool(false)}>
            MENU
          </Link>
        </div>
      )}
    </div>
  );
}
