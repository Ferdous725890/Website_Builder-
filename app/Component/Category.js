import React from "react";
import { CgGhost } from "react-icons/cg";
import { FaIdBadge } from "react-icons/fa";

import { PiCursorClickFill } from "react-icons/pi";
const Category = () => {
  return (
    <div className="text-black  container mx-auto w-11/12 pb-10 mt-10">
      <div className="grid grid-cols-3 gap-10 w-9/12 mx-auto">
        <div className="rounded-lg px-4 py-2 bg-[#C2BAF9]">
          <p>
          <PiCursorClickFill  className="text-[25px] text-[#f31cc8]"/>
          </p>
          <h1 className="text-2xl mb-2">Build</h1>
          <p>

            Effortlessly create stunning websites with powerful tools and
            customization options.
          </p>
        </div>
        <div className="px-4 py-2 rounded-lg  bg-[#DFDAFF]">


        <CgGhost className="text-[25px] text-[#f31cc8]" />
          <h1 className="text-2xl mb-2 mt-1">Host</h1>

          <p>
            Secure, fast, and reliable hosting to keep your website running
            smoothly.
          </p>
        </div>
        <div className="px-4 py-2 rounded-lg  bg-[#C2BAF9]">
        <FaIdBadge  className="text-[25px] text-[#f31cc8]"/>
          <h2 className="text-2xl mb-2 mt-1">Generated With Ai</h2>

          <p>
            Smart AI-powered solutions to enhance and optimize your website
            creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
