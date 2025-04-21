"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  // State to manage the wishlists
  const [wishlists, setWishlists] = useState([]);

  return (
    <div className="shadow-sm border border-gray-200 rounded-xl mt-4 pb-5">
      
      {/* Header Section: Title and View All Link */}
      <div className="flex justify-between px-4 pt-4">
        <h3 className="text-2xl font-semibold">Wishlists</h3>
        <Link
          href={"/dashboard/user/wishlists"}
          className="underline text-blue-500"
        >
          view all
        </Link>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Content Section: Message if wishlist is empty */}
      {wishlists.length > 0 ? (
        // Placeholder text (can be replaced with dynamic content later)
        "hello"
      ) : (
        // Display message when there are no items in the wishlist
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
