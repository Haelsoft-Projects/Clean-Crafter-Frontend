"use client";
import Image from "next/image";
import bg from "../../assets/landingpage/section.png";
import { useRouter } from "next/navigation";
const Book = () => {
  const router = useRouter()
  return (
    <div>
      <div className="relative  sm:px-10 md:px-8 max-w-[1240px]  mx-auto lg:mt-36  mt-20 w-full h-[564px] ">
        <Image
          src={bg}
          alt="background"
          className="lg:object-contain object-cover absolute -z-20 h-[564px] px-4 right-0 left-0 lg:px-0 sm:px-10 md:px-8 "
        />
        <div className="px-4 sm:px-10 md:px-8  lg:px-0">
          <p className="font-semibold text-[32px] text-center mt-10">
            Book A Cleaning Service Now
          </p>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 mt-5 gap-y-6">
            <button onClick={()=>{
              router.push("/login/client")
            }} className="rounded-[10px] text-white bg-[#0056B3] w-full lg:w-[208px] h-[60px]">
              Let’s go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
