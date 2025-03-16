import Image from "next/image";
import React from "react";
import ai from "../../public/ai.avif";
import StartForFree from "./StartForFree";

const AiTools = () => {
  return (
    <div>
      <div className=" text-black mt-16 container mx-auto w-11/12">
        <h1 className="text-4xl md:text-7xl md:mb-14 font-bold  text-center mb-5">
          AI Tools for Faster, <br></br> Smarter Web Creation
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <Image
              src={ai}
              width="full"
              height={700}
              alt="Picture of the author"
            />
          </div>
          <div className="text-black flex flex-col justify-center p-5">
            <h2 className="text-4xl font-medium">
              AI Site Planner: From Idea <br /> to Wireframes – Fast!
            </h2>
            <p className="mb-5 py-2">
              With the power of AI, turn your website vision into a meaningful
              brief, sitemap and wireframe at near-instant speed.
            </p>
            <StartForFree></StartForFree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTools;
