"use client";
import Navbar from "@/components/LandingPage/Navbar";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import imgpace from "@/assets/pace.png";
import Footer from "@/components/LandingPage/Footer";
import { useRouter } from "next/navigation";
import { addressValidation } from "@/Services/validation";
import { useFormik } from "formik";
import { useAppContext } from "@/Services/context";
import Link from "next/link";
import NewsLetter from "@/components/common/NewsLetter";
import AppFooter from "@/components/common/AppFooter";
const Clean = () => {
  const router = useRouter();
  const { name, setName } = useAppContext();
  console.log(name);

  const formik = useFormik({
    initialValues: {
      city: name.city,
      address: name.street,
    },
    validationSchema: addressValidation,
    onSubmit: (values) => {
      setName((prev: object) => ({
        ...prev,
        street: values.address,
      }));
      router.push("/services/job");
    },
  });
  return (
    <div>
      <div className="w-full  max-w-[1240px] px-4 lg:px-10 xl:px-0  mx-auto ">
        {" "}
        <div className="flex flex-col lg:flex-row items-start  justify-center gap-y-4     lg:items-center  lg:justify-between border-b border-b-[#A3A3A3]  py-3 ">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="logo" className="object-contain mt-4" />
        </Link>
          <div className="bg-[#FFC107] w-full  lg:w-[50%] rounded-[20px]  h-6">
            <div className="bg-[#0056B3]  rounded-[20px]  w-[30%] h-6"></div>
          </div>
        </div>
        <p className="text-[#0056B3] font-bold text-[26px] mt-8">{name.type}</p>
        <div className="rounded-[9px] border border-[#A3A3A3] w-full px-4  space-y-4 mt-6 py-4">
          <p className=" font-medium">Job Location</p>
          <form
            onSubmit={formik.handleSubmit}
            className=" flex flex-col gap-y-6"
          >
            <select
              name="city"
              id="city"
              className={` text-sm focus:outline-0 form-select focus:ring-0  focus:border-[#121212C2]/[0.76] outline-none
             w-full border  ${
               formik.errors.city && formik.touched.city
                 ? "border-red-500"
                 : " border-[#121212C2]/[0.76] "
             } h-16 px-3 bg-white`}
              onChange={formik.handleChange}
              value={formik.values.city}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled selected hidden>
                <p className="text-black">City</p>
              </option>
              <option value="Lagos">Lagos</option>
            </select>
            <input
              type="text"
              name="address"
              className={`
             text-sm focus:outline-0
             w-full border ${
               formik.errors.address && formik.touched.address
                 ? "border-red-500"
                 : "border-[#121212C2]/[0.76]"
             }  placeholder:text-[#A3A3A3] h-16 px-4`}
              placeholder="Street Address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
            />
            <div className="w-full flex justify-end  text-white  rounded-lg h-16 p-2">
              <button
                type="submit"
                className=" flex gap-x-2 px-4  lg:w-[8%] py-2  bg-[#0056B3] rounded justify-center items-center"
              >
                Next <HiOutlineArrowLongRight />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" mt-20 relative  h-[30rem] w-full">
        <Image
          src={imgpace}
          alt=""
          className="absolute object-cover h-[30rem] w-full"
        />
          <NewsLetter />
      </div>
      <div className="w-full mt-20">
        <AppFooter />
      </div>
    </div>
    
  );
};

export default Clean;
