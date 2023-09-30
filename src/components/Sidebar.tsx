import React, { ReactNode } from "react";
import { IoDiamondOutline, IoBagHandleOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
interface Props {
  children?: ReactNode;
}
const Sidebar = ({ children }: Props) => {
  return (
    <div>
      <div className=" bg-white fixed h-screen w-20 border-r border-r-gray-300 p-1 px-3 flex items-center flex-col">
        <ul className="space-y-5">
          <li className="bg-purple-800 text-white p-3 text-xl rounded-md hover:bg-transparent hover:text-black hover:border-slate-200 border transition-all duration-300 cursor-pointer">
            <IoDiamondOutline />
          </li>
          <li className="text-gray-600 bg-gray-200 p-3 text-xl rounded-md hover:bg-transparent hover:border-slate-200 border transition-all duration-300 cursor-pointer">
            <IoBagHandleOutline />
          </li>
          <li className="text-gray-600 bg-gray-200 p-3 text-xl rounded-md hover:bg-transparent hover:border-slate-200 border transition-all duration-300 cursor-pointer">
            <RxDashboard />
          </li>
          <li className="text-gray-600 bg-gray-200 p-3 text-xl rounded-md hover:bg-transparent hover:border-slate-200 border transition-all duration-300 cursor-pointer">
            <AiOutlineUser />
          </li>
          <li className="text-gray-600 bg-gray-200 p-3 text-xl rounded-md hover:bg-transparent hover:border-slate-200 border transition-all duration-300 cursor-pointer">
            <AiOutlineSetting />
          </li>
        </ul>
      </div>
      <div className="ml-20">{children}</div>
    </div>
  );
};

export default Sidebar;
