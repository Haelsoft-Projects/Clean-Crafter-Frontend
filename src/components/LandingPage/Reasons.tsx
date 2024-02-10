import Image from "next/image";
import img1 from "../../assets/landingpage/img1.png";
import img2 from "../../assets/landingpage/img2.png";
import img3 from "../../assets/landingpage/img3.png";
export default function Reasons() {
  return (
    <div>
      <div className="bg-[#F3F2F2] w-full  py-20 min-h-[590px] mt-20 ">
        <div className="container mx-auto flex flex-col gap-x-5">
          <p className="text-black text-[35px] lg:text-[46px] text-center ">
            Reasons To Book CleanCrafter
          </p>
          <div className="flex flex-col  px-4  sm:px-10 md:px-8 gap-y-10 lg:flex-row mt-10 lg:mt-20 justify-between items-center ">
            <div className="h-[346px] w-full lg:w-[376px] flex flex-col items-center justify-center gap-y-4 bg-white p-5 rounded-lg ">
              <Image src={img1} alt="paper" />
              <p className="text-[18px] font-medium">
                Liability Insured Cleaners
              </p>
              <p className="text-[16px] text-justify">
                Thousands of domestic cleaners are registered with a wide range
                of prices, expertise and reviews. All registered cleaners are
                self-employed and liability insured.{" "}
              </p>
            </div>
            <div className="h-[346px] w-full lg:w-[376px] flex flex-col items-center  justify-center gap-y-6 bg-white p-5 rounded-lg ">
              <Image src={img2} alt="paper" />
              <p className="text-[18px] font-medium">
                Reliable Customer Service
              </p>
              <p className="text-[16px] text-justify">
                Thousands of domestic cleaners are registered with a wide range
                of prices, expertise and reviews. All registered cleaners are
                self-employed and liability insured.
              </p>
            </div>{" "}
            <div className="h-[346px] w-full lg:w-[376px] flex flex-col items-center  justify-center gap-y-6 bg-white p-5 rounded-lg ">
              <Image src={img3} alt="paper" />
              <p className="text-[18px] font-medium">
                A Price to Suit Your Needs
              </p>
              <p className="text-[16px] text-justify">
                Thousands of domestic cleaners are registered with a wide range
                of prices, expertise and reviews. All registered cleaners are
                self-employed and liability insured.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
