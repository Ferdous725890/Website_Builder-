"use client"
import React from "react";
import "../setting.css";
import { FiArrowRight } from "react-icons/fi";
import { useAuth } from "@/app/hooks/useAuth";
const Profile = () => {
                    const {user} = useAuth()
                    console.log(user);
                    
  return (
    <>
      <div className="shadow-sm border border-gray-200 py-7 px-4 rounded-xl">
        <h2 className="text-2xl font-semibold">Profile Image</h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:ml-4 md:ml-10 mt-4">
          <img
            alt="Profile preview"
            className="object-cover w-44 rounded-full"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          ></img>
          <div>
            <button className="py-2 px-3 border border-gray-300 rounded-xl">
              Upload Image
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-sm border border-gray-200 py-7 px-4 rounded-xl mt-6">
        <h2 className="text-2xl font-semibold">Profile Information</h2>
        <div>
        {/* onSubmit={handleSubmit} */}
          <form  className="space-y-6 text-left grid mt-5">
            <div className="relative">
              <input
                name="name"
                defaultValue={user?.displayName}
                type="text"
                className="border border-gray-200 w-full pt-4 pb-2 px-4 outline-none rounded-sm"
              />
              <label className="absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 pointer-events-none text-gray-400">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                value={user?.email}
                className="border border-gray-200 w-full pt-4 pb-2 px-4 outline-none rounded-sm"
              />
              <label className="absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 pointer-events-none text-gray-400">
               Email
              </label>
            </div>
            <div className="relative">
              <input
                name="number"
                defaultValue={user?.phoneNumber}
                type="number"
                className="border border-gray-200 w-full pt-4 pb-2 px-4 outline-none rounded-sm"
              />
              <label className="absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 pointer-events-none text-gray-400">
                Phone Number
              </label>
            </div>
            <button
              type="submit"
              className="group border flex items-center justify-center gap-2 border-gray-200 py-3 cursor-pointer text-white bg-black/80 rounded-sm"
            >
              <span>Save Profile</span>
              <span className="opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 border border-gray-200 rounded-full p-0.5">
                <FiArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
