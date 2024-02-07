import Image from "next/image";
import heroimage from "../assets/landingpage/hero.png";
import { CgCheck } from "react-icons/cg";
export default function Hero() {
  return (
    <div>
      <div className=" w-full  bg-[#F3F2F2]">
        {" "}
        <div className="container lg:px-2 xl:px-0 pt-20 pb-1 mt-0   mx-auto flex flex-col lg:flex-row lg:justify-between items-center text-center px-2  sm:px-10 md:px-8">
          <div className="mt-4 text-center flex-col lg:mt-6 xl:mt-0 lg:pl-8 lg:w-full">
            <p className="text-[#292450] md:text-[45px] lg:text-[28px] text-[35px] lg:text-left w-full xl:text-[38px] font-bold">
              Discover <br className=" lg:hidden " />
              <span className="text-[#4A9EED]">Highly-Rated</span>
              <br className=" hidden " /> <span>Cleaning</span>{" "}
              <br className="lg:block hidden" />
              Professionals
            </p>
            <div className="flex flex-col text-left gap-y-8 md:gap-y-8 lg:gap-y-4 md:mt-10 mt-8 text-base lg:mt-10 ">
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Freedom to Change Your Cleaner As Needed
                </span>
              </div>
              <div className="flex items-center">
                <CgCheck className="text-xl font-bold" />
                <span className="md:text-[20px] lg:text-[22px] text-base">
                  Insured for Liability Up to £4 Million
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

            <div className="w-full flex space-x-4 mt-8 mb-4  md:mt-10 justify-between lg:justify-normal">
              <button className="border px-2 text-base border-[#292450] w-1/2 lg:w-1/3 xl:w-1/3 py-3 bg-white rounded-[10px]">
                Enter your Address{" "}
              </button>
              <button className="py-3 px-2 text-base text-white w-1/2  lg:w-1/3 xl:w-1/3  bg-[#4A9EED] rounded-[10px]">
                Let’s go
              </button>
            </div>
          </div>
          <Image
            src={heroimage}
            alt="A man  holding cleaning tools"
            className="object-contain w-[40rem] md:mx-auto lg:w-[32rem] self-end xl:w-[45rem] mt-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
