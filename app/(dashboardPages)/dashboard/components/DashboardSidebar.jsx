"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";

const DashboardSidebar = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="w-72 shadow-sm border border-gray-200 rounded-xl py-4 px-2 hidden lg:block">
        <div className="flex items-center gap-3 mb-4">
          {user?.photoURL ? (
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={user?.photoURL}
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
        <div className="divider"></div>
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
        </ul>
      </div>
      <div className="lg:hidden">
        <MobileSidebar></MobileSidebar>
      </div>
    </>
  );
};

export default DashboardSidebar;
