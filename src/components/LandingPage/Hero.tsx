"use client";
import Image from "next/image";
import heroimage from "../../assets/landingpage/hero.png";
import { CgCheck } from "react-icons/cg";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Hero() {
  const router = useRouter();
  const [email, setemail] = useState<string>("")
  const [isloading, setisloading] = useState<boolean>(false);
  const fetchData = (email: string) => {
    setisloading(true);
    axios
      .post("/api/login", {
        email,
      })
      .then((res) => {
        console.log(res.data.user);
        toast.success("registered successfully");
      })
      .catch((e) => {
        console.log(e);

        toast.error(e.response.data.error, {
          autoClose: 2000,
          position: "top-right",
        });
      })
      .finally(() => {
        setisloading(false);
      });
  };
  return (
    <div>
      <div className=" w-full  bg-[#F3F2F2] pt-20 ">
        {" "}
        <div className="max-w-[1240px] relative lg:px-2 xl:px-0 lg:pt-20 pb-1 mt-0   mx-auto flex flex-col lg:flex-row lg:justify-between items-center text-center px-2  sm:px-10 md:px-8">
          <div className="mt-4  text-center flex-col lg:mt-6 xl:mt-0 lg:pl-8  xl:pl-0">
            <div className="text-[#292450]  self-stretch xl:text-5xl md:text-[45px] lg:text-[28px] text-[35px] lg:text-left w-full font-bold">
              <span> Discover</span> <br className=" lg:hidden " />
              <span className="text-[#0056B3]">Highly-Rated</span>
              <br className=" hidden " /> <span className="">Cleaning</span>{" "}
              <br className="lg:block hidden" />
              <p className="p-3 mt-2"> Professionals</p>
            </div>
            <div className="flex flex-col text-center lg:text-left gap-y-8 md:gap-y-8 lg:gap-y-4 md:mt-10 mt-8 text-base lg:mt-10 xl:mt-8">
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Freedom to Change Your Cleaner As Needed
                </span>
              </div>
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Insured for Liability
                </span>
              </div>
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Upfront and Fair Pricing
                </span>
              </div>
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Committed Support Team
                </span>
              </div>
            </div>

            <div className="w-full  flex space-x-4 mt-8 mb-4  md:mt-10 justify-between lg:justify-normal">
              <input
                type="email"
                placeholder="Enter your Address"
                onChange={(e)=>{setemail(e.target.value)}}
                className="border px-2 text-base border-[#292450] w-1/2 lg:w-1/3 xl:w-1/3 py-3 bg-white rounded-[10px]"
              />
              <button onClick={()=>{
                localStorage.setItem("email", email)
                router.push("/signup/client")
              }}  className="py-3 px-2 text-base text-white w-1/2  lg:w-1/3 xl:w-1/3  bg-[#0056B3] rounded-[10px]">
                Let’s go
              </button>
            </div>
          </div>
          <Image
            src={heroimage}
            alt="A man  holding cleaning tools"
            className="object-contain w-[40rem] hidden lg:block right-0 absolute md:mx-auto lg:w-[32rem] self-end xl:w-[40rem] mt-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
