"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Wishlists = () => {
  const [wishlists, setWishlists] = useState([]);
  return (
    <div>
      {wishlists.length > 0 ? (
        ""
      ) : (
        <div className="flex flex-col items-center justify-center shadow-sm border border-gray-200 rounded-xl py-10 px-4 space-y-4">
          <p className="text-3xl font-bold text-gray-500">
            <FaRegHeart />
          </p>
          <h2 className="text-3xl font-semibold text-center">
          Your Wishlist Is Empty
          </h2>
          <p className="text-center text-gray-500">
          Browse items and add your favorites to keep track of them here.
          </p>
          <Link
            href={"/pick_template"}
            className="bg-[#FFA8EE] text-center py-2 px-4 rounded-xl text-xl"
          >
            Browse Project
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlists;
