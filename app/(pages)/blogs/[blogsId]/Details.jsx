import Image from "next/image";
import Link from "next/link";
import React from "react";

const Details = ({ blog }) => {
  return (
    <div>
      <Image
        src={blog?.image}
        layout="responsive"
        width={100}
        height={100}
        alt={blog?.title}
      />
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold mt-10">
          {blog?.title}
        </h1>
        <p className="text-xl sm:font-medium">{blog?.description}</p>
        <p className="text-2xl font-medium">Steps:</p>
        {blog?.steps.map((step) => (
          <div key={step?.step}>
            <p className="text-xl font-medium">
              {step?.step}/ {step.title}
            </p>
            <p className="text-xl">{step?.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-4">
      <p className="text-2xl font-medium">Resources:</p>
      {blog?.resources?.length > 0 ? (
        blog.resources.map((resource, idx) => (
          <Link
            href={resource?.link}
            key={idx}
            className="mt-1 text-blue-500 hover:text-blue-700 text-xl"
          >
            {resource?.name}
          </Link>
        ))
      ) : (
        <p className="text-2xl font-medium">No resources available.</p>
      )}
      </div>
    </div>
  );
};

export default Details;
