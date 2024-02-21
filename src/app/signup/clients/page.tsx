"use client";
import React, { useState, useEffect } from "react";
import img from "../../../assets/img.png";

import Input from "@/components/common/Input";
import { useFormik } from "formik";
import { signUpValidate } from "@/Service";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Clients = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nin: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: signUpValidate,
    onSubmit: async (values) => {
      router.push("/dashboard");
    },
  });
  console.log(formik.values);
  return (
    <div>
      <div className="bg-white flex flex-col lg:flex-row w-full min-h-screen  justify-between  gap-x-0 ">
        {/* <Image
              src={img}
              alt="dfasfasd"
              className="object-cover  w-[50%] hidden lg:block  rounded-r-[50px] "
            /> */}
                <div className="w-[80%] lg:w-[57%] xl:w-[55%] lg:px-10 xl:px-20 min-h-screen bg-gradient-to-t from-blue-900 to-blue-500 hidden  rounded-r-[50px] lg:flex justify-center items-center">
          <Image src={img} alt="image" />
        </div>
        <div className=" lg:w-[43%] xl:w-[45%] flex  justify-center items-center lg:px-10 xl:px-20">
          <div className="flex  flex-col justify-center items-center w-full mt-10 mb-4">
            <p className=" w-full font-medium mt-8 lg:mt-0  text-center text-2xl lg:text-4xl text-[#242424] ">
              Register As A Client
            </p>
            <form
              onSubmit={formik.handleSubmit}
              action=""
              className="flex  flex-col gap-y-4    mt-5 w-full "
            >
              <Input
                label="First Name"
                type="text"
                name={"firstName"}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.firstName && formik.touched.firstName}
                errorName={formik.errors.firstName}
              />
              <Input
                label="Last Name"
                type="text"
                name={"lastName"}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.lastName && formik.touched.lastName}
                errorName={formik.errors.lastName}
              />
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
                label="Phone Number"
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phoneNumber && formik.touched.phoneNumber}
                errorName={formik.errors.phoneNumber}
              />
              <Input
                label="NIN(National Identification Number)"
                type="text"
                name="nin"
                value={formik.values.nin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.nin && formik.touched.nin}
                errorName={formik.errors.nin}
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
              <Input
                label="Confirm Password"
                type="text"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.passwordConfirmation &&
                  formik.touched.passwordConfirmation
                }
                errorName={formik.errors.passwordConfirmation}
              />

              <button
                className="mt-2 bg-[#4A9EED] h-[44px]  focus:shadow-outline focus:outline-none text-white p-2 text-[12.8px] rounded-[10px]"
                type="submit"
              >
                Sign Up
              </button>
              <p className="text-center flex gap-x-2 items-center justify-center text-base text-[#212121]">
                Already have an account?
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="underline font-bold"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
