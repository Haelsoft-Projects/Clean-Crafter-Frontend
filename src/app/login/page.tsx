"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginValidate } from "@/Service";
import Image from "next/image";
import img from "../../assets/img.png";
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
    <div className="bg-white flex flex-col lg:flex-row w-full min-h-screen  justify-between    ">
      {/* <Image
        src={img}
        alt="dfasfasd"
        className="object-cover  w-[80%] lg:w-[55%] xl:w-[55%] hidden lg:block  rounded-r-[50px] "
      /> */}
      <div className="w-[80%] lg:w-[57%] xl:w-[55%] lg:px-10 xl:px-20 min-h-screen bg-gradient-to-t from-blue-900 to-blue-500 hidden  rounded-r-[50px] lg:flex justify-center items-center">
        <Image src={img} alt="image" />
      </div>
      <div className=" lg:w-[43%] xl:w-[45%] flex  justify-center items-center lg:px-10 xl:px-20">
        <div className="flex  flex-col justify-center items-center w-full">
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
    </div>
  );
};

export default Signin;
