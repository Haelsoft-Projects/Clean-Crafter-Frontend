"use client";
import React, { useState } from "react";
import Layout from "../services/Layout";
import Profile from "@/components/accounts/Profile";
import Password from "@/components/accounts/Password";
import Notification from "@/components/accounts/Notification";
import TransactionHistory from "@/components/accounts/TransactionHistory";

type Props = {};

const Account = (props: Props) => {
  const [checkstate, setcheckstate] = useState("profile");
  return (
    <div>
      <Layout>
        <div className="max-w-[1240px] w-full mx-auto px-4">
          <h1 className=" text-xl lg:text-3xl font-bold mt-5 mb-5">Your Account</h1>
          <div className="w-full border   border-black rounded-lg flex flex-col lg:flex-row min-h-[350px]">
            <div className="w-full gap-x-2 lg:max-w-[287px] flex flex-row  lg:flex-col  gap-y-4 rounded-lg justify-between ">
              <div
                onClick={() => {
                  setcheckstate("profile");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-sm lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer rounded-tl-[0.5rem] ${
                  checkstate === "profile" && " bg-[#FFC107]   text-white"
                }`}
              >
                Profile
              </div>
              <div
                onClick={() => {
                  setcheckstate("password");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-sm lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "password" && " bg-[#FFC107]   text-white"
                }`}
              >
                Password
              </div>
              <div
                onClick={() => {
                  setcheckstate("notification");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-sm lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "notification" && " bg-[#FFC107]   text-white"
                }`}
              >
                Notification
              </div>
              <div
                onClick={() => {
                  setcheckstate("history");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-sm lg:text-lg lg:pl-4 rounded-tr-[0.5rem] lg:rounded-tr-0   justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "history" && " bg-[#FFC107]   text-white"
                }`}
              >
                Transaction History
              </div>
              {/* <div
                onClick={() => {
                  setcheckstate("account");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-sm lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "account" && " bg-[#FFC107]   text-white"
                }`}
              >
                Delete Account
              </div> */}
            </div>
            <div className="flex-auto border border-black border-y-0 border-l-0 lg:border-l-1 border-r-0 w-full">
              {checkstate === "profile" && <Profile />}
              {checkstate === "password" && <Password />}
              {checkstate === "notification" && <Notification />}
              {checkstate === "history" && <TransactionHistory />}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Account;
