"use client";
import React, { useState, useEffect } from "react";
import img from "../../../assets/img.png";
import { Button } from "@nextui-org/button";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import { signUpValidate, signUpcleanersValidate } from "@/Service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalComponent from "@/components/common/ModalComponent";
import { useDisclosure } from "@nextui-org/react";
const Cleaners = () => {
  const router = useRouter();
  const [isloading, setisloading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    validationSchema: signUpcleanersValidate,
    onSubmit: async (values) => {
      //   router.push("/dashboard");
      setisloading(true);
      axios
        .post("/api/register", {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          nin: values.nin,
          phone_number: values.phoneNumber,
          password: values.password,
          user_type: "Cleaners",
        })
        .then((res) => {
          console.log(res);
          setisloading(false);
          onOpen();
        })
        .catch((e) => {
          console.log(e);
          setisloading(false);
          toast.error("An error occurred", {
            autoClose: 2000,
            position: "top-right",
          });
        });
    },
  });

  return (
    <div>
      <ToastContainer />
      {isloading && (
        <div className="h-screen fixed w-screen  bg-black/[0.9] flex justify-center items-center ">
          <ClipLoader color="#0056B3" size={70} />
        </div>
      )}
      <ModalComponent isOpen={isOpen} onClose={onClose} />
      <div className="bg-white flex flex-col lg:flex-row w-full min-h-screen  justify-between  gap-x-0 ">
        {/* <Image
              src={img}
              alt="dfasfasd"
              className="object-cover  w-[50%] hidden lg:block  "
            /> */}

<div className="w-[80%] lg:w-full xl:w-[55%] 2xl:w-full lg:px-10 xl:px-20 min-h-screen bg-gradient-to-t from-blue-900 to-blue-500 hidden  max-w-[824px]  2xl:max-w-[920px] lg:flex justify-center items-center">
        <div className="flex flex-col">
          <Image src={img} alt="image" />
          <p className="mt-2 text-center text-white text-[20px] font-medium">
            Elevating Cleanliness To A Craft
          </p>
        </div>
      </div>
      <div className=" lg:w-full xl:w-[45%] px-4 lg:px-0 2xl:w-full  flex  justify-center items-center  max-w-[463px] 2xl:max-w-[500px]  mx-auto">
          <div className="flex  flex-col justify-center items-center w-full mt-10 mb-4">
            <p className=" w-full font-medium mt-8 lg:mt-0  text-center text-xl xl:text-2xl lg:text-4xl text-[#242424] ">
              Register As A Cleaner
            </p>
            <form
              onSubmit={formik.handleSubmit}
              action=""
              className="flex  flex-col gap-y-4    mt-5 w-full px-4 lg:px-8 xl:px-0 2xl:max-w-[600px]"
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
                type="number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phoneNumber && formik.touched.phoneNumber}
                errorName={formik.errors.phoneNumber}
              />
              <Input
                label="NIN(National Identification Number)"
                type="number"
                name="nin"
                value={formik.values.nin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.nin && formik.touched.nin}
                errorName={formik.errors.nin}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password && formik.touched.password}
                errorName={formik.errors.password}
              />
              <Input
                label="Confirm Password"
                type="password"
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
                className="mt-2 bg-[#0056B3] h-[44px]  focus:shadow-outline focus:outline-none text-white p-2 text-[12.8px] rounded-[10px]"
                type="submit"
              >
                Sign Up
              </button>
              {/* <p className="text-center flex gap-x-2 items-center justify-center text-base text-[#212121]">
                Already have an account?
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="underline font-bold"
                >
                  Login
                </button>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleaners;
