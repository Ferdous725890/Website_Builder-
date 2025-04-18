"use client"
import Link from "next/link";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser()
  }
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
                    <li>
                      <Link href="/eid_greeting_generator">Greeting Generator</Link>
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
              <div className="dropdown dropdown-center dropdown-hover">
                <div >Resources⬇️</div>
                <ul className="dropdown-content menu  rounded-box z-50 w-52 p-2 shadow-sm">
                  <li>
                    <Link href="/community">Community</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/eid_greeting_generator">Greeting Generator</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-[#FFA8EE] py-2 px-3 text-black"
            >
              LogOut
            </button>
          ) : (
            <>
              <Link href="/sign-in" className="mr-5 hidden md:block text-black">
                LogIn
              </Link>
              <Link
                href="/sign-up"
                className="bg-[#FFA8EE] py-2 px-3 text-black"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
