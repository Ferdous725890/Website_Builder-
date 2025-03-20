import React from "react";
import Blogs from "./components/Blogs";

const page = () => {
  return (
    <div className="bg-[#FCCAF2] pt-10 pb-20 bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2] min-h-screen ">
      <div className="container mx-auto">
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default page;
