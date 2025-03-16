import React from "react";
import { CgGhost } from "react-icons/cg";
import { FaIdBadge } from "react-icons/fa";

import { PiCursorClickFill } from "react-icons/pi";
const Category = () => {
  return (
    <div className="text-black  container mx-auto w-11/12 pb-10 mt-10">
      <div className="grid grid-cols-3 gap-4 md:gap-10 md:w-9/12 mx-auto">
        <div className="rounded-lg cursor-pointer transition-all duration-150 hover:bg-amber-300 px-4 py-3 bg-[#C2BAF9]">
          <p>
            <PiCursorClickFill className="text-[25px] text-[#f31cc8]" />
          </p>
          <h1 className="text-lg font-medium md:text-2xl mb-2">Build</h1>
          <p className="hidden md:block">
            Effortlessly create stunning websites with powerful tools and
            customization options.
          </p>
        </div>
        <div className="px-4 py-3 cursor-pointer transition-all duration-150 hover:bg-amber-300 rounded-lg  bg-[#DFDAFF]">
          <CgGhost className="text-[25px] text-[#f31cc8]" />
          <h1 className="text-lg font-medium md:text-2xl mb-2 mt-1">Host</h1>

          <p className="hidden md:block">
            Secure, fast, and reliable hosting to keep your website running
            smoothly.
          </p>
        </div>
        <div className="px-4 py-3 cursor-pointer transition-all duration-150 hover:bg-amber-300 rounded-lg  bg-[#C2BAF9]">
          <FaIdBadge className="text-[25px] text-[#f31cc8]" />
          <h2 className="text-lg font-medium md:text-2xl mb-2 mt-1">Generated With Ai</h2>

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
