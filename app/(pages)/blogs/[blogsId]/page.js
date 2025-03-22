import React from "react";
import Details from "./Details";

const page = async ({ params }) => {
  const { blogsId } = await params;
  const blog = await fetch(
    `https://build-master-server.vercel.app/blogs/${blogsId}`
  ).then((res) => res.json());

  return (
    <div className="bg-[#FCCAF2] pt-10 pb-20 bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2] min-h-screen ">
      <Details blog={blog}></Details>
    </div>
  );
};

export default page;
