import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <div className="flex justify-center p-5 ">
      <Link
        href="/editor"
        className="bg-black text-white transition-colors hover:bg-[#545454] font-bold rounded-sm px-5 py-3"
      >
        Get Started
      </Link>
    </div>
  );
};

export default GetStarted;
