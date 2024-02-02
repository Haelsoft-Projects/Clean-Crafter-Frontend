import Image from "next/image";
import logo from "../assets/logo.png";
import { BsGrid3X3GapFill } from 'react-icons/bs';
export default function Navbar() {
  return (
    <div>
      <div className=" container p flex justify-between items-center mx-auto">
        <Image src={logo} alt="logo" className="object-contain" />
        {/* <img src={logo} alt="" /> */}
        <div className="gap-x-14 lg:flex hidden">
          <button className="bg-[#4A9EED] text-white rounded-[10px] font-bold  px-8 py-2">
            REGISTER AS A CLEANER
          </button>
          <button className=" rounded-[10px] text-base font-bold">
            LOG IN
          </button>{" "}
          <button className="text-[#4A9EED] rounded-[10px] font-bold">
            MENU
          </button>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
      <div className=" fixed top-0  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8  font-poppins w-full bg-[#87ACA3]/[0.4] lg:hidden   py-5 flex  z-[70] rounded-b-lg justify-between">
        
        </div>
    </div>
  );
}
