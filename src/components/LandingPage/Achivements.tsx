import { FaCheckCircle } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { RiAwardFill } from "react-icons/ri";
export default function Achievements() {
  return (
    <div>
      <div className="flex bg-[#0056B3] px-4 lg:mt-36  mt-20 sm:px-10 md:px-8  min-h-[248px] ">
      <div className="max-w-[1240px] w-full  mx-auto flex flex-col lg:flex-row items-center px-2   sm:px-10 md:px-8 justify-between gap-y-6 py-20 lg:py-0 ">
        <div className="gap-y-1 flex flex-col items-center text-white font-medium">
          <FaCheckCircle className="text-white text-4xl"/>
          <p className="text-[45px]">100+</p>
          <span className="font-medium text-[25px]">Cleaning Services</span>
        </div>
        <div className="h-[150px] lg:h-[248px] bg-white w-[1px]"></div>
        <div className="gap-y-1 flex flex-col items-center text-white font-medium">
          <IoPeople className="text-white text-5xl"/>
          <p className="text-[45px]">30+</p>
          <span className="font-medium text-[25px]">Happy Customers</span>
        </div>
      
        <div className="h-[150px] lg:h-[248px] bg-white w-[1px]"></div>
        <div className="gap-y-1 flex flex-col items-center text-white font-medium">
          <GiGraduateCap className="text-white text-5xl"/>
          <p className="text-[45px]">10+</p>
          <span className="font-medium text-[25px]">Active Trainees</span>
        </div>

        <div className="h-[150px] lg:h-[248px] bg-white w-[1px]"></div>
        <div className="gap-y-1 flex flex-col items-center text-white font-medium">
          <RiAwardFill  className="text-white text-5xl"/>
          <p className="text-[45px]">4.5/5</p>
          <span className="font-medium text-[25px]">Ratings Received</span>
        </div>
     

        </div>
      </div>
    </div>
  );
}
