import React from "react";

type Props = {};

const Password = (props: Props) => {
  return (
    <div>
      <div>
        <div className="w-full border border-black   justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
          <p className="text-lg lg:text-xl font-bold">Change Password</p>
        </div>
        <div className="px-2 lg:px-0">
          {" "}
          <div className="mt-10 font-bold text-[20px] text-center  w-full px-10 ">
            Current Password: *****
          </div>
          <div className="text-base text-center mt-4">
            Contact CleanCrafters Team to change Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
