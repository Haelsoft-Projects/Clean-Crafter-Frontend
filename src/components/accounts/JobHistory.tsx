"use Client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import { baseURL } from "@/Service";
const JobHistory = () => {
  const [tableData, settableData] = useState([]);
  const [isloading, setisloading] = useState<boolean>(false);
  const getData = () => {
    setisloading(true);
    axios
      .get(`/api/job`, {
        headers: {
          Authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        settableData(res.data);
      })
      .catch((e) => {
        console.log(e);
        toast.error("An error occurred", {
          autoClose: 2000,
          position: "top-right",
        });
      })
      .finally(() => {
        setisloading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);

    if (isNaN(date.getTime())) {
      // Invalid date string, return empty string or handle error as needed
      return '';
  }
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
};

  return (
    <div>
      {isloading && (
        <div className="h-screen fixed w-screen left-0 top-0  bg-black/[0.9] flex justify-center items-center ">
          <BeatLoader color="#0056B3" size={30} />
        </div>
      )}
      <div className="">
        <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
          <p className="text-lg lg:text-xl font-bold">Job History</p>
        </div>

        {tableData.length === 0 ? (
          <div className="text-3xl text-center  w-full mt-10">
            No Job Created
          </div>
        ) : (
          <div className="px-2 mb-4 mt-4">
            <div className="max-w-[1000px] w-full overflow-auto max-h-[631px] ">
              <table className="table-auto w-full  text-sm text-left text-gray-500 overflow-auto">
                <thead className="text-xs lg:text-sm text-gray-700  bg-gray-50">
                  <tr>
                    <th className="py-3 px-6">S/N</th>
                    <th className="py-3 px-6"> Job Type</th>
                    <th className="py-3 px-6">City</th>
                    <th className="py-3 px-6">Address</th>
                    <th className="py-3 px-6">Job Description</th>
                    <th className="py-3 px-6">Date and Time created</th>
                    <th className="py-3 px-6">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item: any, index) => {
                  
                  
                    return (
                      <tr  key={index}className="bg-white border-b duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                        <td className="py-4 px-6">{index + 1}</td>
                        <td className="py-4 px-6">{item.job_type}</td>
                        <td className="py-4 px-6">{item.city}</td>
                        <td className="py-4 px-6">{item.street_adddress}</td>
                        <td className="py-4 px-6">{item.job_description}</td>
                        <td className="py-4 px-1">{formatDate(item.time)}</td>
                        <td className="py-4 px-6">
                          {item.completed ? "True" : "False"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default JobHistory;
