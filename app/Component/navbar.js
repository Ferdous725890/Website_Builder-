import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <div className="bg-[#FCCAF2]">
      <div className="navbar  container mx-auto w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/pick_template">Templates</Link>
              </li>
              <li>
                <details>
                  <summary>Resources</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/community">Community</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-black font-bold text-xl ">
            BuildMaster
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pick_template">Templates</Link>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/community">Community</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/sign-in" className="mr-5 hidden md:block text-black">
            LogIn
          </Link>
          <Link href="/sign-up" className="bg-[#FFA8EE] py-2 px-3 text-black">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
