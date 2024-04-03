import React from "react";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div>
      <div className="w-full border border-black  justify-between items-center border-t-1 lg:border-t-0  border-x-0 flex  px-8 py-3">
        <p className="text-lg lg:text-xl font-bold">Notifications</p>
      </div>
      <div className="mt-10 font-bold text-[20px] text-center  w-full px-10 ">
        You don’t have any notifications yet!
      </div>
    </div>
  );
};

export default Notifications;
