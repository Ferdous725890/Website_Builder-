"use client";

import React from "react";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="shadow-sm border border-gray-200 rounded-xl py-8">
      
      {/* Profile Information */}
      <div className="flex flex-col justify-center items-center gap-1 mb-4">
        {/* User Image or Default Icon */}
        {user?.photoURL ? (
          <Image
            width={70}
            height={70}
            className="rounded-full"
            src={user?.photoURL}
            alt="UserImg"
          />
        ) : (
          <button className="text-4xl font-bold p-2 bg-white rounded-full">
            <FaUser />
          </button>
        )}

        {/* Display Name & Email */}
        <h3 className="text-2xl font-semibold text-center">
          {user?.displayName}
        </h3>
        <p className="text-xl text-gray-600 text-center">{user?.email}</p>

        {/* Membership Info */}
        <p className="font-semibold mt-2">Normal Member</p>
      </div>

      {/* Points Display */}
      <p className="m-2">1000 points</p>

      {/* Progress Bar (optional to implement later) */}
      <div className="h-2 rounded-full overflow-hidden bg-gray-300 mx-2" />

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mx-2 mt-5">
        <Link
          href="/dashboard/user/setting"
          className="flex-1 py-3 bg-gray-300 text-center rounded-xl"
        >
          Setting
        </Link>
        <Link
          href="/dashboard/user/rewards"
          className="flex-1 bg-[#FFA8EE] py-3 text-center rounded-xl"
        >
          View Rewards
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
