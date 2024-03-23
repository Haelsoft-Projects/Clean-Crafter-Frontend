import { IoIosStar } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
const Reviews = () => {
  const data = [
    {
      name: "Rauno",
      cleaner: "Cintia",
      message: "Excellent as always!",
    },
    {
      name: "Josh",
      cleaner: "Luiz Fernando",
      message:
        "Went above and beyond on his first day, in addition to being a lovely person.",
    },
    {
      name: "Thomas",
      cleaner: "Joe",
      message: "Great job! Thanks",
    },
    {
      name: "Adam",
      cleaner: "Ines",
      message:
        "Ines was fantastic! She showed up on time, was very attentive with the cleaning and did an amazing job!",
    },
    {
      name: "Rebecca",
      cleaner: "Rosangela",
      message:
        "Roseangela was fantastic. She was punctual,hardworking and did an overall great job. I would",
    },
    {
      name: "Yuan",
      cleaner: "Rosilene",
      message:
        "Rosilene Is a trust worthy person with dedication to her work. The house is so clean. I will definitely book",
    },
  ];
  return (
    <div className="bg-[#F3F3F3]  lg:mt-36  mt-20">
      <div className="max-w-[1240px] w-full  mx-auto py-10 px-4  sm:px-10 md:px-8    text-center mt-20">
        <p className="font-medium text-2xl lg:text-[46px] text-center">
          Nigeria’s leading marketplace for cleaning services
        </p>
        <p className="text-center text-sm lg:text-xl lg:mt-10 mt-8 mx-auto lg:w-[994.31px]">
          Whatever it is you need: a regular clean, a deep scrub of your oven or
          a one off deep clean - The cleaners registered on the Helpling
          platform offer every cleaning service you could need. After your
          booking is confirmed, just let them know what your priorities are and
          they’ll make your home shine.
        </p>

        <div className="grid lg:grid-cols-2 gap-y-2 lg:px-24 mt-8 justify-center place-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[195px] mt-8  w-full lg:w-[500px] border border-[#DDD] shadow-[0_0_8px_4px_#EDEDED]"
            >
              <div className="w-2/4 py-4 bg-[#EEEE] flex-col flex  px-3 text-start">
                {" "}
                <span className="text-xs"> by:</span>
                <div className="mt-4"> {item.name}</div>
              </div>
              <div className="w-full bg-white py-4 flex flex-col items-start px-3">
                <span className="text-xs">Cleaner</span>
                <span className="mt-4 text-">{item.cleaner}</span>
                <div className="flex gap-x-2 mt-4">
                  <IoIosStar className="text-[#DAC269]" />
                  <IoIosStar className="text-[#DAC269]" />
                  <IoIosStar className="text-[#DAC269]" />
                  <IoIosStar className="text-[#DAC269]" />
                  <IoIosStar className="text-[#DAC269]" />
                  <span>5/5</span>
                </div>
                <div className="border-t  pt-2 mt-3 border-dashed border-[#DDD] w-full text-start">
                  {item.message}
                </div>
                <div className="flex justify-end w-full ">
                  <FiPlusCircle className=" text-2xl text-[#0056B3] font-bold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-20 lg:w-[190px] rounded-[5px] h-[60px] bg-[#0056B3] text-white">
          All reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
