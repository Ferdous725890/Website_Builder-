import Link from "next/link";
import React from "react";

const RecentRentals = () => {
  return (
    <div>
      <div className="flex justify-between shadow-sm border border-gray-200 mt-4 p-4">
        <h3>Recent Projects</h3>
        <Link href={"/dashboard/user/recentProjects"} className="underline text-blue-500">view all</Link>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default RecentRentals;
