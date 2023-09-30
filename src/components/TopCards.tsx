import React from "react";

type Props = {};

const TopCards = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 p-4 border rounded-md bg-white flex justify-between items-center">
        <div>
          <p className="font-bold font-actor text-base lg:text-lg">$765,054</p>
          <p className="text-normal text-sm lg:text-base">Daily Revenue</p>
        </div>
        <p className="bg-green-300 px-3 p-2">+ 13%</p>
      </div>
      <div className="lg:col-span-2 col-span-1 p-4 border rounded-md bg-white flex justify-between items-center">
        <div>
          <p className="font-bold font-actor text-base lg:text-lg">$1,765,054</p>
          <p className="text-normal text-sm lg:text-base">YTD Revenue</p>
        </div>
        <p className="bg-green-300 px-3 p-2">+ 7%</p>
      </div>
      <div className=" col-span-1 p-4 border rounded-md bg-white flex justify-between items-center">
        <div>
          <p className="font-bold font-actor text-base lg:text-lg">$15,054</p>
          <p className="text-normal text-sm lg:text-base">Customers</p>
        </div>
        <p className="bg-green-300 px-3 p-2">+ 10%</p>
      </div>
    </div>
  );
};

export default TopCards;
