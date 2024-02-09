const Services = () => {
  return (
    <div>
      <div className="container px-2  sm:px-10 md:px-8  mx-auto mb-32 flex flex-col gap-y-8 mt-20">
        <p className="text-[46px] font-medium text-center">
          Cleaning Services{" "}
        </p>
        <p className="text-xl text-center">
          Whatever it is you need: a regular clean, a deep scrub of your oven or
          a one off deep clean - The cleaners registered on the Helpling
          platform offer every cleaning service you could need. After your
          booking is confirmed, just let them know what your priorities are and
          they’ll make your home shine.
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-6">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="border px-2 focus:outline-none border-[#292450] rounded-[10px] w-full lg:w-[208px] h-[60px]"
          />
          <button className="rounded-[10px] text-white bg-[#4A9EED] w-full lg:w-[208px] h-[60px]">
            Let’s go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
