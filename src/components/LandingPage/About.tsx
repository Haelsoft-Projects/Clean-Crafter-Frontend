import Image from "next/image";
import img1 from "../../assets/landingpage/sub1.png";
import img2 from "../../assets/landingpage/sub2.png";
export default function About() {
  return (
    <div>
      <div className=" flex px-4  sm:px-10 md:px-8 lg:px-0 gap-x-20  max-w-[1240px] w-full  justify-between mx-auto mt-20">
        <div className="hidden lg:block lg:w-[50%] ">
          <Image
            src={img2}
            alt="A man cleaning "
            className="object-contain w-[40rem] "
          />
          {/* <Image
            src={img1}
            alt="A woman cleaning  "
            className="-mt-32 ml-[18rem]  object-contain w-[26rem]"
          /> */}
        </div>
        <div className="flex flex-col h-full w-full lg:w-[50%] ">
          <div className="flex items-center gap-x-4">
            <span className=" h-2 w-[52.01px] bg-[#0056B3] self-start"></span>
            <span>About CleanCrafters</span>
          </div>
          <div className="flex text-center lg:text-start text-[40px] lg:text-[30px] xl:text-[40px] font-bold mt-6 lg:mt-2">
            Discover Highly Rated Cleaning
          </div>
          <p className="ss mt-10 text-base  text-start ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className="flex ml-10 mt-10 gap-x-4 lg:gap-x-8">
            <div className="h-[77px] w-[4px] bg-[#0056B3]"></div>
            <div className="text-justify">
              .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim ven
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-center  justify-between mt-10 gap-y-8">
            <div className="flex flex-col ">
              <span className="text-[40px]  font-semibold text-[#0056B3]">
                100+
              </span>
              <span className="text-xl text-black">Cleaning Services</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px]  font-semibold text-[#0056B3]">
                10+
              </span>
              <span className="text-xl text-black">Trainees</span>
            </div>{" "}
            <div className="flex flex-col">
              <span className="text-[40px]  font-semibold text-[#0056B3]">
                30+
              </span>
              <span className="text-xl text-black">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
