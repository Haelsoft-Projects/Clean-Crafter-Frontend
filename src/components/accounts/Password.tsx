import React from "react";

type Props = {};

const Password = (props: Props) => {
  return (
    <div>
      <div>
        <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
          <p className="text-lg lg:text-xl font-bold">Change Password</p>
          <button className="px-10 py-2 rounded-lg border  border-[#FFC107]">
            Edit
          </button>
        </div>
        <div className="flex items-center mt-10 font-bold text-[20px]  w-full px-10 ">
          Current Password: *****
        </div>
      </div>
    </div>
  );
};

export default Password;
