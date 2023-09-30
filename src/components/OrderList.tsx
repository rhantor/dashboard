import { data } from "@/data/data";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

type Props = {};

const OrderLists = (props: Props) => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto border rounded-lg bg-white overflow-y-scroll ">
      <h1 className="sticky top-0 bg-green-100 p-2">Recent Orders</h1>
      <ul className="p-4 ">
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-green-100 rounded-lg p-3">
              <FaShoppingBag className="text-green-600" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderLists;
