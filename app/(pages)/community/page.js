import Link from "next/link";
import React from "react";
import { LiaDiscord } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import Image from "next/image";
const page = () => {
  return (
    <div className="bg-[#FCCAF2] bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2]">
      <div className="flex flex-col justify-center items-center space-y-4 min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          BuildMaster Community
        </h1>
        <p className="font-medium text-gray-400 text-center">
          Join our community of likeminded designers and <br /> developers, gain
          tips and share your ideas
        </p>
        <div className="flex gap-3">
          <Link href={"/"}>
            <button className="flex items-center gap-1  p-2 w-full bg-white rounded-xl hover:shadow-2xl">
              <LiaDiscord /> Discord
            </button>
          </Link>
          <Link href={"/"}>
            <button className="flex items-center gap-1  p-2 w-full bg-white rounded-xl hover:shadow-2xl">
              <FaXTwitter /> Twitter/X
            </button>
          </Link>
          <Link href={"/"}>
            <button className="flex items-center gap-1  p-2 w-full bg-white rounded-xl hover:shadow-2xl">
              <FiYoutube />
              Youtube
            </button>
          </Link>
        </div>
        <div className="avatar-group -space-x-4">
          <div className="avatar">
            <div className="w-10">
              <Image src="https://i.ibb.co.com/gb3ZYmDQ/downloadsadf.jpg" width={'10'} height={'10'} alt="avatar" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <Image src="https://i.ibb.co.com/0pVs0zG3/sadfasdfasdf.jpg" width={'10'} height={'10'} alt="avatar" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <Image src="https://i.ibb.co.com/0Rntr9b8/premium-photo-1689539137236-b68e436248de.jpg" width={'10'} height={'10'} alt="avatar" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <Image src="https://i.ibb.co.com/KcqHGtR1/premium-photo-1689977927774-401b12d137d6.jpg" width={'10'} height={'10'} alt="avatar" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <Image src="https://i.ibb.co.com/CsWdMG0G/sadfasdf.jpg" width={'10'} height={'10'} alt="avatar" />
            </div>
          </div>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-10">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
