"use client";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaEnvelope } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { updateUserValidate } from "@/Service";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";

import Input from "../common/Input";
import secureLocalStorage from "react-secure-storage";
type Props = {};

const Profile = (props: Props) => {
  const userstr = secureLocalStorage.getItem("user");
  console.log("cool", userstr);

  const user: any =
    typeof window !== "undefined" ? JSON.parse(userstr?.toString() ?? "") : "";
  console.log(user);
  const [updateAccount, setupdateAccount] = useState(false);
  const router = useRouter();
  const [isloading, setisloading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",

      phoneNumber: "",
      nin: "",
    },
    validationSchema: updateUserValidate,
    onSubmit: async (values) => {
      setisloading(true);
      axios
        .patch(
          `/api/update_user/${user.id}/`,
          {
            first_name: values.firstName,
            last_name: values.lastName,
            nin: values.nin,
            phone_number: values.phoneNumber,
          },
          {
            headers: {
              Authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setisloading(false);
          setupdateAccount(!updateAccount);
          toast.success("Updated account successfully, login")
          router.replace("/login/client");
        })
        .catch((e) => {
          console.log(e);
          setisloading(false);

          toast.error(e.response.message, {
            autoClose: 2000,
            position: "top-right",
          });
        });
    },
  });
  return (
    <div>
      {isloading && (
        <div className="h-screen fixed w-screen left-0 z-50 top-0  bg-black/[0.9] flex justify-center items-center ">
          <BeatLoader color="#0056B3" size={30} />
        </div>
      )}
      <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0 border-x-0 flex  px-8 py-3">
        <p className=" text-lg lg:text-xl font-bold">
          {updateAccount ? (
            <span>Update Account</span>
          ) : (
            <span>Your Account</span>
          )}
        </p>
        {!updateAccount && (
          <button
            onClick={() => {
              setupdateAccount(!updateAccount);
            }}
            className="px-10 py-2 rounded-lg border  border-[#FFC107]"
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex items-center mt-8  w-full  lg:px-10  ">
        {updateAccount ? (
          <div className="flex justify-center gap-x-10 w-full gap-y-4  flex-col lg:flex-row items-center ">
            <VscAccount className="text-[8rem]" />
            <div className="">
              <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-2 max-w-[435px] gap-x-4 gap-y-4 mt-5 w-full  2xl:max-w-[600px]"
              >
                <div className="mb-3">
                  <label className="float-left text-gray-700 text-sm font-medium  mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    placeholder={user.first_name}
                    className={`appearance-none border  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-500"
                        : "border-[#717171]"
                    } rounded-[5px] w-full py-1 px-3  text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />

                  {formik.errors.firstName && formik.touched.firstName && (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="float-left text-gray-700 text-sm font-medium  mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    placeholder={user.last_name}
                    className={`appearance-none border  ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-500"
                        : "border-[#717171]"
                    } rounded-[5px] w-full py-1 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />

                  {formik.errors.lastName && formik.touched.lastName && (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="float-left text-gray-700 text-sm font-medium  mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    placeholder={user.phone_number}
                    className={`appearance-none border  ${
                      formik.errors.phoneNumber && formik.touched.phoneNumber
                        ? "border-red-500"
                        : "border-[#717171]"
                    } rounded-[5px] w-full py-1 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />

                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="float-left text-gray-700 text-sm font-medium  mb-2">
                    NIN
                  </label>
                  <input
                    name="nin"
                    placeholder={user.nin}
                    className={`appearance-none border  ${
                      formik.errors.nin && formik.touched.nin
                        ? "border-red-500"
                        : "border-[#717171]"
                    } rounded-[5px] w-full py-1 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nin}
                  />

                  {formik.errors.nin && formik.touched.nin && (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.nin}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  // onClick={() => {
                  //   setupdateAccount(!updateAccount);
                  // }}
                  className="px-10 py-2 mb-4 rounded-lg border col-span-2 w-fit mx-auto  border-[#FFC107]"
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-y-4 mb-4 gap-x-10 w-full lg:flex-row flex-col items-center  ">
            <VscAccount className=" text-[4rem] lg:text-[8rem] " />
            <div className="flex flex-col items-start gap-y-8">
              <div className="flex gap-x-2 items-center">
                <BsFillPersonFill className="text-xl" />
                <span className="text-[15px] lg:text-[20px] font-medium">
                  {user.first_name} {user.last_name}
                </span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <FaEnvelope className="text-xl" />
                <span className="text-[15px] lg:text-[20px] font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-x-4">
                <MdLocalPhone className="text-xl" />
                <span className="text-[15px] lg:text-[20px] font-medium">
                  {user.phone_number}
                </span>
              </div>
              <button
                onClick={() => {
                  secureLocalStorage.removeItem("user");
                  secureLocalStorage.removeItem("token");
                  toast.success("Logged Out")
                  router.replace("/login/client");
                }}
                className="px-2 py-2 rounded-lg border mx-auto lg:mx-0 border-[#FFC107]"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="ss"></p>
    </div>
  );
};

export default Profile;
