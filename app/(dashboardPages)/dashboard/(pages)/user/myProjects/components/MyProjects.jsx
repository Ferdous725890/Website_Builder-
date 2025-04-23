"use client";
import { useAuth } from "@/app/hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrProjects } from "react-icons/gr";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      axios
        .get(`https://build-master-server.vercel.app/addProjects/${user?.email}`)
        .then((res) => {
          setProjects(res.data);
        });
    }
  }, [user]);

  return (
    <div>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center shadow-sm border border-gray-200 rounded-xl py-10 px-4 space-y-4">
          <p className="text-3xl font-bold text-gray-500">
            <GrProjects />
          </p>
          <h2 className="text-3xl font-semibold text-center">
            No Projects Available
          </h2>
          <p className="text-center text-gray-500">
            You haven’t added any projects to your dashboard yet. Start a new
            one to begin building.
          </p>
          <Link
            href={"/pick_template"}
            className="bg-[#FFA8EE] text-center py-2 px-4 rounded-xl text-xl"
          >
            Add Project
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
