import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const { img, title, use, _id } = project;
  return (
    <div className="p-4 bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-2xl">
      <Image
        className="rounded-xl"
        src={img}
        layout="responsive"
        width={100}
        height={100}
        alt={title}
      />
      <h3 className="text-2xl font-semibold mt-4">{title}</h3>
      <p className="text-xl text-red-600">{use}</p>
      <Link href={"/"}>
        <button className="w-full mt-4 py-3 bg-[#FFA8EE] rounded-xl font-medium">
          Click to edit
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
