import React from "react";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      {" "}
      <div>
        <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
          <p className="text-lg lg:text-xl font-bold">Notification</p>
        </div>
        <div className="flex mt-10 font-bold text-[20px] justify-center w-full px-10 "></div>
      </div>
    </div>
  );
};

export default Notification;
