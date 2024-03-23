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
        <div className="max-w-[1240px] w-full mx-auto">
          <h1 className="text-3xl font-bold mt-5 mb-5">Your Account</h1>
          <div className="w-full border border-black rounded-lg flex min-h-[350px]">
            <div className="w-full max-w-[287px]  space-y-4 rounded-lg ">
              <div
                onClick={() => {
                  setcheckstate("profile");
                }}
                className={`w-full pl-4 h-[61px] flex items-center cursor-pointer rounded-tl-[0.5rem] ${
                  checkstate === "profile" && " bg-[#FFC107]   text-white"
                }`}
              >
                Profile
              </div>
              <div
                onClick={() => {
                  setcheckstate("password");
                }}
                className={`w-full pl-4 h-[61px] flex items-center cursor-pointer ${
                  checkstate === "password" && " bg-[#FFC107]   text-white"
                }`}
              >
                Password
              </div>
              <div
                onClick={() => {
                  setcheckstate("notification");
                }}
                className={`w-full pl-4 h-[61px] flex items-center cursor-pointer ${
                  checkstate === "notification" && " bg-[#FFC107]   text-white"
                }`}
              >
                Notification
              </div>
              <div
                onClick={() => {
                  setcheckstate("history");
                }}
                className={`w-full pl-4 h-[61px] flex items-center cursor-pointer ${
                  checkstate === "history" && " bg-[#FFC107]   text-white"
                }`}
              >
                Transaction History
              </div>
              {/* <div
                onClick={() => {
                  setcheckstate("account");
                }}
                className={`w-full pl-4 h-[61px] flex items-center cursor-pointer ${
                  checkstate === "account" && " bg-[#FFC107]   text-white"
                }`}
              >
                Delete Account
              </div> */}
            </div>
            <div className="flex-auto border border-black border-y-0 border-r-0">
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
