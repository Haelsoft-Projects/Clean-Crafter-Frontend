import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { baseURL } from "@/Service";
import Image from "next/image";
import imgpace from "@/assets/pace.png";
type Props = {};

const NewsLetter = (props: Props) => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [isloading, setisloading] = useState<boolean>(false);
  const fetchData = (email: string) => {
    setisloading(true);
    axios
      .post(`${baseURL}/api/news_letter`, {
        email,
      })
      .then((res) => {
        console.log(res.data.user);
        toast.success("registered successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Email Already exist", {
          autoClose: 2000,
          position: "top-right",
        });
      })
      .finally(() => {
        setisloading(false);
        setemail("")
      });
  };
  return (
    <div className="">
 <div className=" mt-20 relative   min-h-[30rem] w-full">
        <Image
          src={imgpace}
          alt=""
          className="absolute object-cover h-[30rem] w-full"
        />
      <div className="absolute text-center flex px-4 flex-col gap-y-8 justify-center items-center lg:px-20 left-0 right-0 mx-auto h-[30rem]  text-white max-w-[1240px]  w-full ">
        <p className="text-[30px] font-semibold">Subscribe to our Newsletter</p>
        <p className="">
          I would like to receive future updates, offers and promotions by email
          from CleanCrafters. If at any time you would like to stop receiving
          communication from us, you can unsubscribe at the end of any
          promotional mail.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData(email);
          }}
          className="flex gap-x-3 items-center jsu"
        >
          <input
            placeholder="Enter your email address here..."
            type="email"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="placeholder:text-[#FFFFFF] outline-none bg-transparent h-[65px] w-full rounded-[10px] px-4  border-2 border-[#FFD54F]"
          />
          {isloading ? (
            <div className=" h-[65px] w-[230px]  flex items-center justify-center">
              {" "}
              <ClipLoader color="#FFD54F" size={40} />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-[#FFD54F] h-[65px] w-[230px] rounded-[10px] text-[20px]  text-white"
            >
              Subscribe
            </button>
          )}
        </form>
      </div>
      </div>
    </div>
  );
};

export default NewsLetter;
