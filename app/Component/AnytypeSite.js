import Image from "next/image";
import React from "react";
import anyImage from "../../public/any.webp";
import { RiDragDropLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { GoDatabase } from "react-icons/go";

const AnyTypeSite = () => {
  return (
    <div className="container mx-auto w-11/12">
      <div className="mt-20">
        <h2 className="text-4xl md:text-7xl text-center text-black font-bold ">
          Build a Website <br></br>
          Create Your Future
        </h2>

        <p className="text-center text-black mt-5">
          Gain unlimited design flexibility with professional features and 100+
          widgets to match your needs.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row">
          <div>
            <Image
              src={anyImage}
              width={"full"}
              height={700}
              alt="any type image"
            />
          </div>
          <div className="text-black p-5 flex flex-col justify-center">
            <h2 className="text-3xl font-bold"> Dream it. Build it.</h2>
            <div>
              <div className="p-2 my-2 rounded-sm border">
                <button className="font-bold text-xl cursor-pointer flex gap-2 my-2 items-center">
                  <RiDragDropLine /> Drag & Drop Editing
                </button>
                <p className="">
                  Build perfectly designed websites with all-encompassing drag &
                  drop tools that include powerful styling options to create
                  exactly what you want.
                </p>
              </div>
              <div className="my-2 mt-6 flex flex-col gap-10">
                <button className="text-xl cursor-pointer hover:text-[#959595] transition-all flex gap-4 my-2 items-center">
                  <FaRegLightbulb />Unlimited Creativity
                </button>
                <button className="text-xl cursor-pointer hover:text-[#959595] transition-all flex gap-4 my-2 items-center">
                  <DiResponsive /> Responsive Design
                </button>
                <button className="text-xl cursor-pointer hover:text-[#959595] transition-all flex gap-4 my-2 items-center">
                <GoDatabase /> Dynamic Elements
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyTypeSite;
