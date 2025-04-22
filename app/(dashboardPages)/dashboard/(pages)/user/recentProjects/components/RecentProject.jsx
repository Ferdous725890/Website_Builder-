"use client"
import Link from "next/link";
import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";

const RecentProject = () => {
  const [projects, setProjects] = useState([]);
  return (
    <div>
      {projects.length > 0 ? (
        ""
      ) : (
        <div className="flex flex-col items-center justify-center shadow-sm border border-gray-200 rounded-xl py-10 px-4 space-y-4">
          <p className="text-3xl font-bold text-gray-500">
            <GrProjects />
          </p>
          <h2 className="text-3xl font-semibold text-center">No Projects Available</h2>
          <p className="text-center text-gray-500">
            It looks like there are no active projects at the moment. Please
            check back later or create a new one.
          </p>
          <Link
          href={'/pick_template'}
          className="bg-[#FFA8EE] text-center py-2 px-4 rounded-xl text-xl"
        >
          Pick a Project
        </Link>
        </div>
      )}
    </div>
  );
};

export default RecentProject;
