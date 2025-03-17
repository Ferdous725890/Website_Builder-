import Button from "daisyui/components/button";
import Link from "next/link";
import React from "react";

const StartForFree = () => {
  return (
    <div className="">
      <Link
        href="/sign-up"
        className="bg-black text-white transition-colors hover:bg-[#545454] font-bold rounded-sm px-5 py-3"
      >
        Start for free
      </Link>
    </div>
  );
};

export default StartForFree;
