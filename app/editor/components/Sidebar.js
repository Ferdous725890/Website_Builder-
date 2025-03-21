"use client";
import { addHeading } from "@/app/features/headingSlice";
import React from "react";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-1/3  border border-gray-200 min-h-screen overflow-scroll">
      <div>
        <p onClick={() => dispatch(addHeading())}>heading</p>
      </div>
    </div>
  );
};
