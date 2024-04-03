import Image from "next/image";
import img1 from "../../assets/landingpage/sub1.png";
import img2 from "../../assets/landingpage/sub2.png";
export default function About() {
  return (
    <div id="aboutus">
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
        <div  className="flex flex-col h-full w-full lg:w-[50%] ">
          <div className="flex items-center gap-x-4">
            <span className=" h-2 w-[52.01px] bg-[#0056B3] self-start"></span>
            <span>About CleanCrafters</span>
          </div>
          <div className="flex text-center lg:text-start text-[40px] lg:text-[30px] xl:text-[40px] font-bold mt-6 lg:mt-2">
            Discover Highly Rated Cleaning Service
          </div>
          <p className="ss mt-10 text-base  text-start ">
          Welcome to Cleancrafter, your trusted partner in cleaning services! At Cleancrafter, we understand the importance of a clean and organized environment for your home or business. Our mission is to provide top-quality cleaning services while also creating job opportunities for skilled cleaners in our community
          </p>
          <div className="flex ml-10 mt-10 gap-x-4 lg:gap-x-8">
            <div className="h-[77px] w-[4px] bg-[#0056B3]"></div>
            <div className="text-justify">
            Whether you&lsquo;re looking for a one-time deep clean or regular maintenance services, Cleancrafter is here to help. Let us handle the dirty work so you can enjoy a clean and comfortable space without the hassle.
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
