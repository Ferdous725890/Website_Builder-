"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";

const RecentProject = () => {
  const [project, setProject] = useState([]);
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl mt-4 pb-5 ">
      <div className="flex justify-between px-4 pt-4">
        <h3 className="text-2xl font-semibold">Recent Projects</h3>
        <Link
          href={"/dashboard/user/recentProjects"}
          className="underline text-blue-500"
        >
          view all
        </Link>
      </div>
      <div className="divider"></div>
      {project.length > 0 ? (
        "hello"
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center pt-5">
          <p className="text-4xl font-bold text-gray-500">
            <GrProjects />
          </p>
          <p className="text-gray-500">You haven&apos;t started any projects yet.</p>
          <div className="divider"></div>
        </div>
      )}
      <div className="flex">
      <Link href={'/pick_template'} className=" bg-[#FFA8EE] text-center py-2 text-xl rounded-lg w-full mx-4">Pick a Project</Link>
      </div>
    </div>
  );
};

export default RecentProject;
