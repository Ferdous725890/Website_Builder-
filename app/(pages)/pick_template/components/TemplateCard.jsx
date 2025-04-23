import { useAuth } from "@/app/hooks/useAuth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemplateCard = ({ template }) => {
  const {img,title,use,_id} = template
  const { user } = useAuth();
  const handleAddProject = () => {
    console.log(img,title,use,_id,user?.email);
    const projectInfo = {
      id: _id,
      img,
      title,
      use,
      email: user?.email,
    }
    axios.post('https://build-master-server.vercel.app/addProjects',projectInfo)
    .then(res => {
      console.log(res.data);
      
    })
    
  }
  return (
    <div className="p-4 bg-white rounded-xl hover:shadow-2xl">
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
      {user ? (
        <div className="grid grid-cols-3 gap-3 mt-4">
          <Link
            className="rounded-xl text-center py-3 bg-gray-200 font-medium"
            href={"/"}
          >
            Preview
          </Link>
          <Link
          onClick={handleAddProject}
            className="col-span-2 py-3 bg-[#FFA8EE] rounded-xl font-medium text-center"
            href={"/pick_template"}
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
