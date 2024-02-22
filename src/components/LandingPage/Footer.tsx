import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import play from "../../assets/common/play.png";
import store from "../../assets/common/store.png";
const Footer = () => {
  return (
    <div className="bg-[#0056B3] flex ">
      <div className="container  mx-auto text-white flex flex-col lg:flex-row justify-between py-2 lg:pb-20 pt-10 text-center">
        <div className="flex flex-col justify-start gap-y-4">
          <p className="  font-bold text-[22px] ">COMPANY</p>
          <p className="cursor-pointer text-xl font-medium ">Our Services</p>
          <p className="cursor-pointer font-medium text-xl">About Us</p>
          <p className="cursor-pointer font-medium text-xl">Contact Us</p>
          <p className="cursor-pointer font-medium text-xl">FAQs</p>
        </div>
        <div className="flex flex-col justify-start gap-y-4 mt-8 lg:mt-0">
          <p className="  font-bold text-[22px] ">FURTHER INFORMATION</p>
          <p className="cursor-pointer font-medium text-xl">Become a Cleaner</p>
          <p className="cursor-pointer font-medium text-xl">Terms of Service</p>
          <p className="cursor-pointer font-medium text-xl">Privacy Policy</p>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start gap-y-4 mt-8 lg:mt-0">
          <p className="font-bold text-[22px]">CONTACT INFORMATION</p>
          <div className="text-sm flex items-center gap-x-2 ">
            <BsFillTelephoneFill className="text-[#FFD54F] text-2xl" />
            <div className="flex flex-col gap-y-1 font-medium text-base">
              <span> +234 7062827560 </span>
              <span>+234 8147741168</span>
            </div>
          </div>
          <div className="">
            <div className="text-sm flex items-center gap-x-2 ">
              <MdEmail className="text-[#FFD54F] text-2xl" />
              <span className="text-base"> info@haelsoft.com.ng </span>
            </div>
            <div className="flex flex-col gap-y-2 border-t border-t-white pt-4 mt-10 w-full">
              <p className="text-[22px] font-bold">CONNECT WITH US</p>
              <div className="flex gap-x-4">
                <div className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]">
                  <GrLinkedinOption />
                </div>
                <div className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]">
                  <FaXTwitter />
                </div>
                <div className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]">
                  <BsInstagram />
                </div>
                <div className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]">
                  <SiWhatsapp />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <p className="ss">Book Cleanings Faster With Our App!!</p>
          <span className="flex flex-col items-center gap-y-2 mt-4">
            <Image src={play} alt="play store" />
            <div className="p-2 pl-2">
              {" "}
              <Image src={store} alt="app store" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
