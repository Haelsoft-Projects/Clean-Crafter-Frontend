import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import play from "../../assets/common/play.png";
import store from "../../assets/common/store.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#0056B3] flex flex-col lg:mt-36  mt-20 ">
      <div className="max-w-[1240px] w-full  px-4 lg:px-10 xl:px-0  mx-auto text-white flex flex-col lg:flex-row justify-between py-2 lg:pb-20 pt-10 text-center lg:text-start">
        <div className="flex flex-col justify-start gap-y-4">
          <p className="  font-bold text-lg xl:text-[22px] ">COMPANY</p>
          <Link
            href={"#services"}
            className="cursor-pointer text-sm xl:text-xl font-medium "
          >
            Our Services
          </Link>
          <Link
            href={"#aboutus"}
            className="cursor-pointer font-medium text-sm xl:text-xl"
          >
            About Us
          </Link>
          {/* <Link
            href={"/"}
            className="cursor-pointer font-medium text-sm xl:text-xl"
          >
            Contact Us
          </Link> */}
          <Link
            href={"#faqs"}
            className="cursor-pointer font-medium text-sm xl:text-xl"
          >
            FAQs
          </Link>
        </div>
        <div className="flex flex-col justify-start gap-y-4 mt-8 lg:mt-0">
          <p  className="  font-bold text-lg xl:text-[22px] ">
            FURTHER INFORMATION
          </p>
          <Link
            href={"/signup/cleaners"}
            className="cursor-pointer font-medium text-sm xl:text-xl "
          >
            Become a Cleaner
          </Link>
          <Link
            href={"/termsofservice"}
            className="cursor-pointer font-medium text-sm xl:text-xl"
          >
            Terms of Service
          </Link>
          <Link
            href={"/privacypolicy"}
            className="cursor-pointer font-medium text-sm xl:text-xl "
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start gap-y-4 mt-8 lg:mt-0">
          <p className="font-bold text-lg xl:text-[22px]">
            CONTACT INFORMATION
          </p>
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
              <Link
                as={"mailto:info@haelsoft.com.ng"}
                href={"mailto:info@haelsoft.com.ng"}
                target="_blank"
                className="text-base"
              >
                info@haelsoft.com.ng
              </Link>
            </div>
            <div className="flex flex-col gap-y-2 border-t border-t-white pt-4 mt-10 w-full">
              <p className="lg:text-sm  text-center xl:text-[22px] font-bold">
                CONNECT WITH US
              </p>
              <div className="flex gap-x-4">
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/"}
                  className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]"
                >
                  <GrLinkedinOption />
                </Link>
                <Link
                  target="_blank"
                  href={"https://twitter.com/"}
                  className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/"}
                  className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]"
                >
                  <BsInstagram />
                </Link>
                <Link
                  target="_blank"
                  href={"https://wa.link/uvfxbm"}
                  className="cursor-pointer h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#FFD54F]"
                >
                  <SiWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <p className="ss">Book Cleanings Faster With Our App!!</p>
          <span className="flex flex-col items-center gap-y-2 mt-4">
            <Link target="_blank" href={""}>
              <Image src={play} alt="play store" />
            </Link>
            <div className="p-2 pl-2">
              {" "}
              <Link target="_blank" href={""}>
                <Image src={store} alt="app store" />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
