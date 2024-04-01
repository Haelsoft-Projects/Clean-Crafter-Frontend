"use client";
import React, { useState } from "react";
import Layout from "../services/Layout";
import Profile from "@/components/accounts/Profile";
import Password from "@/components/accounts/Password";
import Notification from "@/components/accounts/Notification";
import TransactionHistory from "@/components/accounts/TransactionHistory";
import JobHistory from "@/components/accounts/JobHistory";

type Props = {};

const Account = (props: Props) => {
  const [checkstate, setcheckstate] = useState("profile");
  return (
    <div>
      <Layout>
        <div className="max-w-[1240px] w-full mx-auto px-4 mb-4 lg:mb-0">
          <h1 className=" text-xl lg:text-3xl font-bold mt-5 mb-5">Your Account</h1>
          <div className="w-full border   border-black rounded-lg flex flex-col lg:flex-row min-h-[350px]">
            <div className="w-full gap-x-2 lg:max-w-[287px] flex flex-row  lg:flex-col  gap-y-4 rounded-lg justify-between ">
              <div
                onClick={() => {
                  setcheckstate("profile");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-xs lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer rounded-tl-[0.5rem] ${
                  checkstate === "profile" && " bg-[#FFC107]   text-white"
                }`}
              >
                Profile
              </div>
              <div
                onClick={() => {
                  setcheckstate("password");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-xs lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "password" && " bg-[#FFC107]   text-white"
                }`}
              >
                Password
              </div>
              <div
                onClick={() => {
                  setcheckstate("jobs");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-xs lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "jobs" && " bg-[#FFC107]   text-white"
                }`}
              >
                Jobs
              </div>
              <div
                onClick={() => {
                  setcheckstate("transactions");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-xs lg:text-lg lg:pl-4 rounded-tr-[0.5rem] lg:rounded-tr-none lg:rounded-bl-[0.5rem]   justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "transactions" && " bg-[#FFC107]   text-white"
                }`}
              >
                Transactions
              </div>
              {/* <div
                onClick={() => {
                  setcheckstate("account");
                }}
                className={`w-full text-center lg:text-start lg:justify-start text-xs lg:text-lg lg:pl-4 justify-center h-[61px] flex items-center cursor-pointer ${
                  checkstate === "account" && " bg-[#FFC107]   text-white"
                }`}
              >
                Delete Account
              </div> */}
            </div>
            <div className="flex-auto border border-black border-y-0 border-l-0 lg:border-l-1 border-r-0 w-full">
              {checkstate === "profile" && <Profile />}
              {checkstate === "password" && <Password />}
              {checkstate === "jobs" && <JobHistory />}
              {checkstate === "transactions" && <TransactionHistory />}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Account;
