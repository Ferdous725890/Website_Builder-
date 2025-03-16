"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://portfolio-server-rho-woad.vercel.app/templates")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl font-semibold ">Pick a template</h1>
      <p className="text-xl mt-3">
        Get started quicker with prebuilt templates
      </p>
      {templates.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
          <div className="flex flex-col py-10 sm:py-0 gap-3 justify-center items-center bg-gray-200 rounded-xl hover:shadow-2xl">
            <p className="text-6xl font-medium pb-2 px-3 bg-white rounded-xl text-red-500">
              +
            </p>
            <h4 className="text-2xl font-medium">New blank project</h4>
            <p className="text-xl text-center">
              Click to create a new empty <br /> project in Visual Editor
            </p>
          </div>
          {templates.map((template) => (
            <div
              key={template._id}
              className="p-4 bg-white rounded-xl hover:shadow-2xl"
            >
              <img
                className="rounded-xl"
                src={template.img}
                alt={template.title}
              />
              {/* <Image src={template.img} width={100} height={100} alt={template.title}/> */}
              <h3 className="text-2xl font-semibold mt-4">{template.title}</h3>
              <p className="text-xl text-red-600">{template.use}</p>
              {user ? (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <Link
                    className="rounded-xl text-center py-3 bg-gray-200 font-medium"
                    href={"/"}
                  >
                    Preview
                  </Link>
                  <Link
                    className="col-span-2 py-3 bg-[#FFA8EE] rounded-xl font-medium text-center"
                    href={"/"}
                  >
                    Add Project
                  </Link>
                </div>
              ) : (
                <Link
                  className="w-full mt-4 py-3 bg-[#FFA8EE] rounded-xl font-medium"
                  href={"/"}
                >
                  Click to edit
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-20">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
    </>
  );
};

export default Templates;
