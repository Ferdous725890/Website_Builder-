import React from "react";
import { CgGhost } from "react-icons/cg";
import { FaIdBadge } from "react-icons/fa";

import { PiCursorClickFill } from "react-icons/pi";
const Category = () => {
  return (
    <div className="text-black  container mx-auto pb-10 mt-10">
      <div className="grid grid-cols-3 gap-4 md:gap-10 lg:w-9/12 mx-auto">
        {/* 1st div */}
        <div className="rounded-lg cursor-pointer flex justify-center items-center flex-col gap-2 transition-all duration-150 px-4 py-3 bg-[#DFDAFF] hover:bg-[#C2BAF9]">
          <p>
            <PiCursorClickFill className="text-[25px] text-black" />
          </p>
          <h1 className="text-lg font-medium md:text-2xl mb-2">Build</h1>
          <p className="hidden md:block">
            Effortlessly create stunning websites with powerful tools and
            customization options.
          </p>
        </div>

        {/* 2nd div */}
        <div className="px-4 py-3 cursor-pointer flex justify-center items-center flex-col transition-all duration-150 rounded-lg bg-[#DFDAFF] hover:bg-[#C2BAF9]">
          <CgGhost className="text-[25px] text-black" />
          <h1 className="text-lg font-medium md:text-2xl mb-2 mt-1">Host</h1>

          <p className="hidden md:block">
            Secure, fast, and reliable hosting to keep your website running
            smoothly.
          </p>
        </div>

        {/* 3rd div */}
        <div className="px-4 py-3 cursor-pointer flex justify-center items-center flex-col transition-all duration-150 rounded-lg bg-[#DFDAFF]  hover:bg-[#C2BAF9]">
          <FaIdBadge className="text-[25px] text-black" />
          <h2 className="text-lg font-medium md:text-2xl mb-2 mt-1">
            Generated With Ai
          </h2>

          <p className="hidden md:block">
            Smart AI-powered solutions to enhance and optimize your website
            creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
