import Image from "next/image";
import Google from "../assets/landingpage/goge.png";
import Apple from "../assets/landingpage/apple.png";
import Facebook from "../assets/landingpage/facebook.png";
import Twitter from "../assets/landingpage/twit.png";
import Youtube from "../assets/landingpage/youtube.png";
const Footer = () => {
  return (
    <div className="bg-[#444444]">
      <div className=" px-4  sm:px-10 md:px-8   flex flex-col hero ">
        <div className="flex flex-col lg:flex-row container mx-auto  justify-between mt-[30px]   ">
          <div className=" basis-1/2 flex  items-center  flex-col lg:w-[300px] ">
            <p className="text-[#4A9EED]">Get your App</p>
            <div className="flex flew-row mt-[20px]">
              <div className="mt-2">
                <Image alt="" src={Apple} />
              </div>
              <Image alt="" src={Google} />
            </div>
          </div>

          <div className=" lg:basis-1/2 flex flex-col items-center ">
            <div className=" flex flex-col lg:w-[507px]  justify-center items-center lg:items-start lg:justify-between mt-3  lg:ml-5 ">
              <p className="text-white  text-[20px] text-center">
                Subscribe to our new letter{" "}
              </p>
              <div className="lg:content-center mx-auto w-fit lg:w-full items-center lg:ml-[30px] lg:m-2 flex">
                <input
                  placeholder="Email Adress "
                  className="lg:w-[310px] h-[43px] p-4"
                />
                <button className="bg-[#4A9EED] lg:w-[98px] h-[43px] text-white text-[14px]">
                  Subscribe
                </button>
              </div>
              <div className=" p-2">
                <h4 className="text-[12px]  text-center   text-white  lg:lpb-8 ">
                  I would like to receive future updates, offers and promotions
                  by email from CleanCrafters . If at any time you would like to
                  stop receiving communication from us, you can unsubscribe at
                  the end of any promotional mail.
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:basis-1/2 my-3 mx-auto   lg:ml-[35px] text-[14px]">
            <button className="bg-[#4A9EED] text-white rounded-[10px] font-bold  px-8 py-2">
              REGISTER AS A CLEANER
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:pl-5 px-4  sm:px-10 md:px-8   flex flex-col lg:flex-row border-t lg:border-t-2 border-[#999999]   lg:pt-[30px] hero ">
        <div className="mt-4 text-[16px] text-white">Follow us on</div>
        <div className="flex flex-row lg:mt-4 mb-4">
          <Image alt="" src={Twitter} className="ml-1" />
          <Image alt="" src={Facebook} className="ml-1" />
          <Image alt="" src={Youtube} className="ml-1" />
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-4 lg:mb-4">
          <p className="  text-[14px]  lg:ml-2 text-[#4A9EED]"> CleanCrafters</p>
          <ul className="list-disc list-inside flex lg:flex-row flex-wrap text-[12px] text-white  ">
            <li className="ml-1">Home</li>
            <li className="ml-1 ">How it works</li>
            <li className="ml-1 ">About</li>
            <li className="ml-1 ">Happy customers</li>
            <li className="ml-1 ">Pricing</li>
            <li className="ml-1 ">Small office cleaning</li>
            <li className="ml-1 ">Press </li>
            <li className="ml-1 ">Carears</li>
            <li className="ml-1 ">Help</li>
            <li className="ml-1 ">Insurance </li>
            <li className="ml-1 ">Blogs </li>
            <li className="ml-1 ">Apps </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
