"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginValidate } from "@/Service";
import Image from "next/image";
import img from "../../assets/common/img.png";
import Input from "@/components/common/Input";

const Signin = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: async (values) => {},
  });

  return (
    <div className="bg-white flex flex-col lg:flex-row w-full min-h-screen  justify-between  gap-x-10  ">
      <Image
        src={img}
        alt="dfasfasd"
        className="object-cover  w-[50%] hidden lg:block  rounded-r-[50px] "
      />

      <div className="flex flex-col lg:item-center  gap-y-2 py-4  items-start md:items-start   w-full  lg:px-24  lg:self-center">
        {/* <Image
            src={img}
            alt="dfasfasd"
            className="h-20 text-left  lg:hidden ml-5 pt-2 md:mb-7"
          /> */}
         <p className=" w-full font-medium mt-8 lg:mt-0  text-center text-2xl lg:text-4xl text-[#242424] ">
          Welcome back
        </p>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="flex  flex-col gap-y-4  px-4 mt-5 w-full "
        >
          <Input
            label="Email"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email && formik.touched.email}
            errorName={formik.errors.email}
          />

          <Input
            label="Password"
            type="text"
            name="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password && formik.touched.password}
            errorName={formik.errors.password}
          />

          <button
            className="mt-2 bg-[#4A9EED] h-[44px]  focus:shadow-outline focus:outline-none text-white p-2 text-[12.8px] rounded-[10px]"
            type="submit"
          >
            LOG IN
          </button>
          <p className="text-center flex gap-x-2 items-center justify-center text-base text-[#212121]">
            No Account yet?
            <button
            type="button"
              onClick={() => router.push("/signup")}
              className="underline font-bold"
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
