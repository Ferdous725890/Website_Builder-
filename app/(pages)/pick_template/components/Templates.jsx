"use client";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplatesCard";
const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("https://build-master-server.vercel.app/templates")
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
            <TemplateCard key={template._id} template={template}></TemplateCard>
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
