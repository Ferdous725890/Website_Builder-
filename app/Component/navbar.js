
import React from "react";

const Navbar = async () => {
  return (
    <div className="bg-[#DCD7FF] backdrop-blur-3xl sticky top-0 shadow-2xl text-white  z-40 text-black">
      {/* navi */}

      <div className="navbar flex justify-between  items-center container w-11/12 mx-auto p-2 ">
    <h1 className="text-black text-2xl font-bold">
    BuildMaster 
    </h1>
     
        <div className="navbar-start text-black">
       
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             
            </ul>
          </div>
       
        </div>
        <div className="navbar-center hidden lg:flex text-black ">
         
        <ul>
            <li>
                home
            </li>
        </ul>
       
        </div>
        <div className="navbar-end text-black"></div>

     
      <div className="flex gap-5 items-center">
      <h2 className="text-black">
      Log-in
      </h2>
      <div className="text-black bg-[#FF85E7]  px-5 py-2">
      Get Stated
      </div>
      </div>
      </div>

     
    </div>
  );
};

export default Navbar;