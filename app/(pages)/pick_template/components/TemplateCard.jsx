import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemplateCard = ({ template }) => {
  const { user } = useAuth();
  return (
    <div className="p-4 bg-white rounded-xl hover:shadow-2xl">
      <Image
        className="rounded-xl"
        src={template.img}
        layout="responsive"
        width={100}
        height={100}
        alt={template.title}
      />
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
        <Link href={"/"}>
          <button className="w-full mt-4 py-3 bg-[#FFA8EE] rounded-xl font-medium">
            Click to edit
          </button>
        </Link>
      )}
    </div>
  );
};

export default TemplateCard;
