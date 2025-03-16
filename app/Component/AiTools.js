import Image from "next/image";
import React from "react";
import ai from "../../public/ai.avif";
import StartForFree from "./StartForFree";

const AiTools = () => {
  return (
    <div>
      <h1 className=" text-black mt-16 container mx-auto w-11/12">
        <p className="text-4xl md:text-7xl font-bold  text-center pb-20">
          AI Tools for Faster, <br></br> Smarter Web Creation
        </p>

        <div className="grid grid-cols-2 ">
          <div>
            {" "}
            <Image
              src={ai}
              width="full"
              height={700}
              alt="Picture of the author"
            />
          </div>
          <div className="text-black  flex flex-col justify-center p-5">
            <h2 className="text-4xl ">
              AI Site Planner: From Idea to Wireframes – Fast!
            </h2>
            <p className="mt-5">
              With the power of AI, turn your website vision into a meaningful
              brief, sitemap and wireframe at near-instant speed.
            </p>

            <StartForFree></StartForFree>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default AiTools;
