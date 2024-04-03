"use client";
import logo from "@/assets/logo.png";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Image from "next/image";
import React from "react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import imgpace from "@/assets/pace.png";
import Footer from "@/components/LandingPage/Footer";
import { useRouter } from "next/navigation";
import { LuPen } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useAppContext } from "@/Services/context";
import { useFormik } from "formik";
import Link from "next/link";
import {
  addressValidation,
  job_descripValidation,
} from "@/Services/validation";
import NewsLetter from "@/components/common/NewsLetter";
import AppFooter from "@/components/common/AppFooter";
type Props = {};

const Job = (props: Props) => {
  const router = useRouter();
  const { name, setName } = useAppContext();
  const formik = useFormik({
    initialValues: {
      job_decription: name.job_decription,
    },
    validationSchema: job_descripValidation,
    onSubmit: (values) => {
      setName((prev: object) => ({
        ...prev,
        job_decription: values.job_decription,
      }));
      router.push("/services/finish");
    },
  });

  return (
    <div>
      <div>
        <div className="w-full  max-w-[1240px] px-4 lg:px-10 xl:px-0  mx-auto ">
          {" "}
          <div className="flex flex-col lg:flex-row items-start  justify-center gap-y-4     lg:items-center  lg:justify-between border-b border-b-[#A3A3A3]  py-3 ">
            <Link href="/" className="cursor-pointer">
              <Image src={logo} alt="logo" className="object-contain mt-4" />
            </Link>
            <div className="bg-[#FFC107] w-full  lg:w-[50%] rounded-[20px]  h-6">
              <div className="bg-[#0056B3]  rounded-[20px]  w-[56%] h-6"></div>
            </div>
          </div>
          <p className="text-[#0056B3] font-bold text-[26px] mt-8">
            {name.type}
          </p>
          <div className=" w-full px-4  space-y-4 mt-6 py-4">
            <div className="w-full border border-[#121212] rounded-[9px] p-6 flex flex-col gap-y-8">
              <div className="flex justify-between ">
                <p className=" font-medium">Job Location</p>
                <div className="flex gap-x-4 text-2xl">
                  <LuPen />
                  <IoMdCheckmark />
                </div>
              </div>{" "}
              <div className="w-full items-center flex flex-col lg:flex-row justify-between">
                <span className="flex items-center gap-x-1   text-[#77777A] font-medium">
                  <IoLocationOutline />
                  {name.city}, Nigeria
                </span>
                <span>Cleaners are available in the area</span>
              </div>
            </div>
            <div className="w-full border border-[#121212] rounded-[9px] p-4 ">
              <form
                onSubmit={formik.handleSubmit}
                className=" flex flex-col gap-x-6"
              >
                <input
                  name="job_decription"
                  className={`
             text-sm focus:outline-0
             w-full border ${
               formik.errors.job_decription && formik.touched.job_decription
                 ? "border-red-500"
                 : "border-[#121212C2]/[0.76]"
             }  placeholder:text-[#A3A3A3] h-16 px-4`}
                  placeholder="Enter Job Description"
                  onChange={formik.handleChange}
                  value={formik.values.job_decription}
                  onBlur={formik.handleBlur}
                />
                <div className="w-full flex justify-end  mt-4 rounded-lg gap-x-4">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className=" flex gap-x-2  px-2  lg:w-[8%] py-2  border border-[#007BFF] rounded-[2px] justify-center items-center"
                  >
                    <HiOutlineArrowLongLeft />
                    Back
                  </button>
                  <button
                    type="submit"
                    className=" flex gap-x-2 px-2  lg:w-[8%] py-2 text-white  bg-[#0056B3] rounded justify-center items-center"
                  >
                    Next <HiOutlineArrowLongRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className=" mt-20 relative   h-[30rem] w-full">
          <Image
            src={imgpace}
            alt=""
            className="absolute object-cover  h-[30rem] w-full"
          />
            <NewsLetter />
        </div>
        <div className="w-full mt-20">
          <AppFooter   />
        </div>
      </div>
    </div>
  );
};

export default Job;
