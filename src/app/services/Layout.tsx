"use client";
import React, { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [bool, setbool] = useState<boolean>(false);
  const [statecheck, setstatecheck] = useState<string>(
    localStorage.getItem("state") ?? "services"
  );
  const [services, setservices] = useState<boolean>(true);
  const [account, setaccount] = useState<boolean>(false);
  const pathname = usePathname();
  // Check if the current route matches "/route" or any subroute of "/route"
  // const isRouteOrSubroute = router.pathname.startsWith('/route');

  return (
    <>
      <div className="w-full shadow-sm ">
        <div className=" max-w-[1240px] lg:px-10 xl:px-0 mx-auto p lg:flex hidden justify-between items-center pb-4 ">
          <Link href="/" className="cursor-pointer">
            <Image src={logo} alt="logo" className="object-contain mt-4" />
          </Link>
          <div className="gap-x-14 flex mt-4 ">
            <Link
              href="/services"
              onClick={() => {
                setstatecheck("services");
                localStorage.setItem("state", "services");
              }}
              className={`${
                statecheck === "services" && "border-b-2 "
              } border-b-[#0056B3] cursor-pointer`}
            >
              {" "}
              Services
            </Link>

            <Link
              href="/account"
              onClick={() => {
                setstatecheck("account");
                localStorage.setItem("state", "account");
              }}
              className={`${
                statecheck === "account" && "border-b-2"
              } border-b-[#0056B3] cursor-pointer`}
            >
              {" "}
              My Account
            </Link>
          </div>
          {/* <div className="w-full"></div> */}
        </div>
        <div className="  top-0  px-2  sm:px-10 md:px-8   w-full  lg:hidden   py-4 flex  z-[70] rounded-b-sm justify-between">
          <Link href="">
            {" "}
            <Image src={logo} alt="" className="md:w-40 w-24 " />
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
              href="/services"
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
            </Link>

            <Link
              href="/account  "
              // onClick={() => {
              //   setaccount(true);
              //   setservices(false);
              // }}
              className={`${
                account && "border-b-2"
              } border-b-[#0056B3] cursor-pointer`}
            >
              {" "}
              My Account
            </Link>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default Layout;
