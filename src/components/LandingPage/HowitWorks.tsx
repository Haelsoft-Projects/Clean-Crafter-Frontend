

const HowitWorks = () => {
  return (
    <div>
      <div className="lg:mt-36  mt-20 bg-[#F3F2F2] min-h-[331px] py-6 Pb-8 lg:pb-0  w-full px-4  sm:px-10 md:px-8">
        <div className="container mx-auto flex flex-col items-center px-2   sm:px-10 md:px-8">
          <p className="text-center text-[46px] font-medium mt-8 lg:mt-0">
            How it works
          </p>
          <div className="flex flex-col sm:flex-row items-center  justify-evenly gap-y-8 sm:gap-x-10 mt-8 w-full">
            <div className="flex flex-col font-medium text-center gap-y-3 w-fit  ">
              <span className="text-5xl ">1</span>
              <span className="text-lg">Enter Your Address</span>
              <span className="text-base">
                Enter your postcode to find cleaners available in your area{" "}
              </span>
            </div>
            <div className=" w-[1px]  bg-black h-32"></div>
            <div className="flex flex-col font-medium text-center gap-y-3 ">
              <span className="text-5xl ">2</span>
              <span className="text-lg">Choose your preferred date</span>
              <span className="text-base">
                Select the preferred date, time and frequency of your clean{" "}
              </span>
            </div>{" "}
            <div className=" w-[1px]  bg-black h-32"></div>
            <div className="flex flex-col font-medium text-center gap-y-3  ">
              <span className="text-5xl ">3</span>
              <span className="text-lg"> Select cleaners & send a request</span>
              <span className="text-base">
                Compare cleaner profiles and prices and select who will receive
                your request
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
