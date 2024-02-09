import Image from "next/image";
import img from "../assets/landingpage/hero.png";
import img1 from "../assets/landingpage/services/1.png";
import img2 from "../assets/landingpage/services/2.png";
import img3 from "../assets/landingpage/services/3.png";
import img4 from "../assets/landingpage/services/4.png";
import img5 from "../assets/landingpage/services/5.png";
import img6 from "../assets/landingpage/services/6.png";
import img7 from "../assets/landingpage/services/7.png";

const Services = () => {
  return (
    <div>
      <div className="container px-4  sm:px-10 md:px-8  mx-auto   flex flex-col gap-y-8 lg:gap-y-10 mt-20">
        <p className="text-2xl lg:text-[46px] font-medium text-center">
          Cleaning Services{" "}
        </p>
        <p className=" text-sm text-center">
          Whatever it is you need: a regular clean, a deep scrub of your oven or
          a one off deep clean - The cleaners registered on the Helpling
          platform offer every cleaning service you could need. After your
          booking is confirmed, just let them know what your priorities are and
          they’ll make your home shine.
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-6">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="border px-2 placeholder:text-center text-center focus:outline-none border-[#292450] rounded-[10px] w-full lg:w-[208px] h-[60px]"
          />
          <button className="rounded-[10px] text-white bg-[#4A9EED] w-full lg:w-[208px] h-[60px]">
            Let’s go
          </button>
        </div>

        <div className="flex  mt-8 flex-col-reverse lg:flex-row justify-between min-h-[530px] bg-[#F3F2F2]">
          <Image
            src={img}
            alt=""
            className="w-[40rem] object-contain self-end ite"
          />
          <div className=" grid lg:grid-cols-2 bg-white  lg:min-w-[465px] lg:mt-8 px-2 lg:px-0">
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0  border border-[#CCCCCC]">
              <Image src={img1} alt="pressing Iron" />
              <p className="ss">Ironing</p>
            </div>
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]">
              {" "}
              <Image src={img2} alt="Oven" />
              <p className="ss">Oven Cleaning</p>
            </div>{" "}
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0 border border-[#CCCCCC]">
              {" "}
              <Image src={img3} alt="Fridge" />
              <p className="ss">Refrigerator Cleaning</p>
            </div>{" "}
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]">
              {" "}
              <Image src={img4} alt="Windows" />
              <p className="ss">Window Cleaning</p>
            </div>
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0 border border-[#CCCCCC]">
              {" "}
              <Image src={img5} alt="Trolley" />
              <p className="ss">End of Tenancy Cleaning</p>
            </div>{" "}
            <div className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]">
              {" "}
              <Image src={img6} alt="Deep cleaning" />
              <p className="ss">Deep Cleaning</p>
            </div>
            <div className="flex flex-col p-3 col-span-2  gap-y-2 justify-center items-center border border-[#CCCCCC]">
              {" "}
              <Image src={img7} alt="pressing Iron" />
              <p className="ss">Regular Cleaning</p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Services;
