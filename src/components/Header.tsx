import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 p-3 w-full">
      <div className="flex items-center justify-between font-actor">
        <h1 className="text-sm md:text-lg">Dashbord</h1>
        <div className="flex items-center justify-between gap-2 font-actor">
          <h1 className="text-sm md:text-lg">Welcome Back! Antor </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
