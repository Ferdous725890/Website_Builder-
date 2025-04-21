"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="shadow-2xl rounded-xl gap-2 py-8">
      <div className="flex flex-col justify-center items-center mb-4">
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
        <h3 className="text-2xl font-semibold text-center">
          {user?.displayName}
        </h3>
        <p className="text-xl text-gray-600 text-center">{user?.email}</p>
        <p className="font-semibold mt-2">Normal Member</p>
      </div>
      <p className="m-2">1000 points</p>
      <div className="h-2 rounded-full overflow-hidden bg-gray-300 mx-2">
        {/* <div className="h-full rounded-full bg-gray-500 " ></div> */}
      </div>
      <div className="flex items-center gap-4 mx-2 mt-5">
                    <Link href={'/dashboard/user/setting'} className="flex-1 py-3 bg-gray-300 text-center rounded-xl"> Setting</Link>
                    <Link href={'/dashboard/user/rewards'} className="flex-1 bg-[#FFA8EE] py-3 text-center rounded-xl">View Rewards</Link>
      </div>
    </div>
  );
};

export default UserProfile;
