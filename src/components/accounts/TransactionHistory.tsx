import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
type Props = {};

const TransactionHistory = (props: Props) => {
  return (
    <div>
      <div>
        <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
          <p className="text-lg lg:text-xl font-bold">Transaction History</p>
        </div>
        <div className="flex mt-10 font-bold text-[20px] justify-center w-full px-10 ">
          <div className="flex justify-center items-center gap-x-4 hover:text-blue-500 cursor-pointer">
            <HiOutlineDownload className="text-3xl lg:text-xl" />
            <p className="aa">Download Transaction History</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
