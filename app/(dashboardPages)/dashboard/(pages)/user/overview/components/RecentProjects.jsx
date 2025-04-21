"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";

const RecentProject = () => {
  const [project, setProject] = useState([]);

  return (
    <div className="shadow-sm border border-gray-200 rounded-xl mt-4 pb-5">
      
      {/* Header Section with Title and Link to View All */}
      <div className="flex justify-between px-4 pt-4">
        <h3 className="text-2xl font-semibold">Recent Projects</h3>
        <Link
          href={"/dashboard/user/recentProjects"}
          className="underline text-blue-500"
        >
          view all
        </Link>
      </div>
      
      {/* Divider */}
      <div className="divider"></div>

      {/* Content Section: Display message if no projects */}
      {project.length > 0 ? (
        // Placeholder content when there are projects (can be replaced with dynamic content later)
        "hello"
      ) : (
        // Message displayed if no projects are available
        <div className="flex flex-col gap-3 justify-center items-center pt-5">
          <p className="text-4xl font-bold text-gray-500">
            <GrProjects />
          </p>
          <p className="text-gray-500">You haven&apos;t started any projects yet.</p>
          <div className="divider"></div>
        </div>
      )}

      {/* Button to pick a project template */}
      <div className="flex">
        <Link
          href={'/pick_template'}
          className="bg-[#FFA8EE] text-center py-2 text-xl rounded-lg w-full mx-4"
        >
          Pick a Project
        </Link>
      </div>
    </div>
  );
};

export default RecentProject;
