"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "@/app/hooks/useAuth";

const MobileSidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Menu Button (visible on mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-2xl text-white bg-gray-800 fixed top-16 right-2 sm:right-8 md:right-10 rounded-full z-40"
      >
        <RxHamburgerMenu />
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-600"
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <div className="p-4">
          {/* User Info Section */}
          <div className="flex items-center gap-3 mb-4">
            {user?.photoURL ? (
              <Image
                width={40}
                height={40}
                className="rounded-full"
                src={user.photoURL}
                alt="User Image"
              />
            ) : (
              <button className="text-2xl font-bold p-2 bg-white rounded-full">
                <FaUser />
              </button>
            )}
            <div>
              <h3 className="text-lg font-semibold">{user?.displayName}</h3>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Navigation Links */}
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard/user/overview"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user/recentProjects"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                Recent Projects
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user/myProjects"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
