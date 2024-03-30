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
      email: "",
      phoneNumber: "",
      nin: "",
      password: "",
      address: "",
    },
    validationSchema: updateUserValidate,
    onSubmit: async (values) => {
      setisloading(true);
      axios
        .post("/api/register", {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          nin: values.nin,
          phone_number: values.phoneNumber,
          password: values.password,
        })
        .then((res) => {
          console.log(res);
          setisloading(false);
          router.push("/login/client");
        })
        .catch((e) => {
          console.log(e);
          setisloading(false);
          if (e.response.data.email[0]) {
            toast.error(e.response.data.email[0], {
              autoClose: 2000,
              position: "top-right",
            });
          } else {
            toast.error("An error occurred", {
              autoClose: 2000,
              position: "top-right",
            });
          }
        });
    },
  });
  return (
    <div>
      {" "}
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
      <div className="flex items-center mt-8  w-full lg:px-10  ">
        {updateAccount ? (
          <div className="flex justify-center gap-x-10 ">
            <VscAccount className="text-[8rem]" />
            <div className="">
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="grid grid-cols-2 max-w-[435px] gap-x-4 gap-y-4 mt-5 w-full  2xl:max-w-[600px]"
              >
                <div className="mb-3">
                  <label className="float-left text-gray-700 text-sm font-medium  mb-2">
                    First Name
                  </label>
                  <input
                    name="Lastname"
                    className={`appearance-none border  ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-500"
                        : "border-[#717171]"
                    } rounded-[5px] w-full py-1 px-3  text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
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
                    Last Number
                  </label>
                  <input
                    name="Lastname"
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
                    name="Lastname"
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
                    Address
                  </label>
                  <input
                    name="Lastname"
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
                <button
                  onClick={() => {
                    setupdateAccount(!updateAccount);
                  }}
                  className="px-10 py-2 rounded-lg border col-span-2 w-fit mx-auto  border-[#FFC107]"
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
                <span className="text-[20px] font-medium">{user.first_name}  {user.last_name}</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <FaEnvelope className="text-xl" />
                <span className="text-[20px] font-medium">
                 {user.email}
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <MdLocalPhone className="text-xl" />
                <span className="text-[20px] font-medium">
                {user.phone_number}
                </span>
              </div>
              <button className="px-2 py-2 rounded-lg border mx-auto lg:mx-0 border-[#FFC107]">
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
