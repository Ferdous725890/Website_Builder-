"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl mt-4 pb-5 ">
      <div className="flex justify-between px-4 pt-4">
        <h3 className="text-2xl font-semibold">Wishlists</h3>
        <Link
          href={"/dashboard/user/wishlists"}
          className="underline text-blue-500"
        >
          view all
        </Link>
      </div>
      <div className="divider"></div>
      {wishlists.length > 0 ? (
        "hello"
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center pt-5">
          <p className="text-4xl font-bold text-gray-500">
            <FaRegHeart />
          </p>
          <p className="text-gray-500">Oops! Looks like your wishlist is still empty.</p>
          <div className="divider"></div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
