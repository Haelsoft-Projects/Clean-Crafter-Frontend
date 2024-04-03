"use client";
import Image from "next/image";
import img from "../../assets/landingpage/hero.png";
import img1 from "../../assets/landingpage/services/1.png";
import img2 from "../../assets/landingpage/services/2.png";
import img3 from "../../assets/landingpage/services/3.png";
import img4 from "../../assets/landingpage/services/4.png";
import img5 from "../../assets/landingpage/services/5.png";
import img6 from "../../assets/landingpage/services/6.png";
import img7 from "../../assets/landingpage/services/7.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { newData } from "@/Service";
const Services = () => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [isloading, setisloading] = useState<boolean>(false);
  const fetchData = (email: string) => {
    setisloading(true);
    axios
      .post("/api/news_letter", {
        email,
      })
      .then((res) => {
        console.log(res.data.user);
        toast.success("registered successfully");
      })
      .catch((e) => {
        console.log(e);

        toast.error(e.response.data.error, {
          autoClose: 2000,
          position: "top-right",
        });
      })
      .finally(() => {
        setisloading(false);
      });
  };
  return (
    <div>
      <div
        id="services"
        className="max-w-[1240px] w-full px-4 lg:mt-36  mt-20  sm:px-10 md:px-8  mx-auto   flex flex-col gap-y-8 lg:gap-y-10 "
      >
        <p className="text-2xl lg:text-[46px] font-medium text-center">
          Cleaning Services{" "}
        </p>
        <p className=" text-sm text-center">
          Whatever it is you need: a regular clean, a deep scrub of your oven or
          a one off deep clean - The cleaners registered on the Helpling
          platform offer every cleaning service you could need. After your
          booking is confirmed, just let them know what your priorities are and
          they’ll make your home shine.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData(email);
          }}
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-6"
        >
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="border px-2 placeholder:text-center text-center focus:outline-none border-[#292450] rounded-[10px] w-full lg:w-[208px] h-[60px]"
          />
          <button
            type="submit"
            className="rounded-[10px] text-white bg-[#0056B3] w-full lg:w-[208px] h-[60px]"
          >
            Let’s go
          </button>
        </form>

        <div className="flex  mt-8 flex-col-reverse lg:flex-row justify-between min-h-[530px] bg-[#F3F2F2]">
          <Image
            src={img}
            alt=""
            className=" w-[40rem] xl:w-[40rem] lg:w-[30rem]  object-contain self-end ite"
          />
          <div className=" grid lg:grid-cols-2 mb-6 bg-white  lg:min-w-[465px] lg:mt-8 px-2 lg:px-0">
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[0].name,
                  meaning: newData[0].meaning,
                  sub1: newData[0].sub1,
                  sub1explanation: newData[0].sub1explanation,
                  index: 0,
                  availability: JSON.stringify(newData[0].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0  border border-[#CCCCCC]"
            >
              <Image src={img7} alt="pressing Iron" />
              <p className="ss">Home Cleaning</p>
            </Link>
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[1].name,
                  meaning: newData[1].meaning,
                  sub1: newData[1].sub1,
                  sub1explanation: newData[1].sub1explanation,
                  index: 1,
                  availability: JSON.stringify(newData[1].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img2} alt="Oven" />
              <p className="ss">Deep Cleaning</p>
            </Link>{" "}
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[2].name,
                  meaning: newData[2].meaning,
                  sub1: newData[2].sub1,
                  sub1explanation: newData[2].sub1explanation,
                  index: 2,
                  availability: JSON.stringify(newData[2].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0 border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img3} alt="Fridge" />
              <p className="ss">Office Cleaning</p>
            </Link>{" "}
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[7].name,
                  meaning: newData[7].meaning,
                  sub1: newData[7].sub1,
                  sub1explanation: newData[7].sub1explanation,
                  index: 7,
                  availability: JSON.stringify(newData[7].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img4} alt="Windows" />
              <p className="ss">Window Cleaning</p>
            </Link>
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[4].name,
                  meaning: newData[4].meaning,
                  sub1: newData[4].sub1,
                  sub1explanation: newData[4].sub1explanation,
                  index: 4,
                  availability: JSON.stringify(newData[4].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border-r-0 border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img5} alt="Trolley" />
              <p className="ss">Post Construction</p>
            </Link>{" "}
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[5].name,
                  meaning: newData[5].meaning,
                  sub1: newData[5].sub1,
                  sub1explanation: newData[5].sub1explanation,
                  index: 5,
                  availability: JSON.stringify(newData[5].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img6} alt="Deep cleaning" />
              <p className="ss">Residential Cleaning</p>
            </Link>
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[6].name,
                  meaning: newData[6].meaning,
                  sub1: newData[6].sub1,
                  sub1explanation: newData[6].sub1explanation,
                  index: 6,
                  availability: JSON.stringify(newData[6].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img7} alt="pressing Iron" />
              <p className="ss">Domestic Cleaning</p>
            </Link>
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[3].name,
                  meaning: newData[3].meaning,
                  sub1: newData[3].sub1,
                  sub1explanation: newData[3].sub1explanation,
                  index: 3,
                  availability: JSON.stringify(newData[3].availability),
                },
              }}
              className="flex flex-col p-3  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img7} alt="pressing Iron" />
              <p className="ss">Janitorial Cleaning</p>
            </Link>
            <Link
              href={{
                pathname: "/servicedetails",
                query: {
                  name: newData[8].name,
                  meaning: newData[8].meaning,
                  sub1: newData[8].sub1,
                  sub1explanation: newData[8].sub1explanation,
                  index: 8,
                  availability: JSON.stringify(newData[8].availability),
                },
              }}
              className="flex flex-col p-3 col-span-2  gap-y-2 justify-center items-center border border-[#CCCCCC]"
            >
              {" "}
              <Image src={img7} alt="pressing Iron" />
              <p className="ss">HouseKeeping Cleaning</p>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Services;
