import Image from "next/image";
import logo from "../assets/logo.png";
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
      </div>
    </div>
  );
}
