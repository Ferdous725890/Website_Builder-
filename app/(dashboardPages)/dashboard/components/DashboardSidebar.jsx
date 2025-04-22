"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useAuth } from "@/app/hooks/useAuth";
import MobileSidebar from "./MobileSidebar";

const DashboardSidebar = () => {
  const { user } = useAuth();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-72 shadow-sm border border-gray-200 rounded-xl py-4 px-2 hidden lg:block">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          {user?.photoURL ? (
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={user.photoURL}
              alt="UserImg"
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
        <ul className="space-y-1 text-gray-800 px-4">
          <li>
            <Link
              href="/dashboard/user/overview"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/recentProjects"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              Recent Projects
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/myProjects"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/wishlists"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/message"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              Message
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/loyaltyAndRewards"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              loyalty and rewards
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/setting"
              className="block px-2 py-1 hover:bg-gray-200 rounded"
            >
              Setting
            </Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </>
  );
};

export default DashboardSidebar;
