import Image from "next/image";
import React from "react";
import anyImage from "../../public/any.webp";

const AytypeSite = () => {
  return (
    <div className="container mx-auto w-11/12">
      <div className="mt-20">
        <h2 className="text-6xl text-center text-black font-bold ">
          Build a Website <br></br>
          Create Your Future
        </h2>

        <p className="text-center text-black mt-5">
          Gain unlimited design flexibility with professional features and 100+
          widgets to match your needs.
        </p>

        <div className="mt-10 grid grid-cols-2">
          <div>
            {" "}
            <Image
              src={anyImage}
              width={"full"}
              height={700}
              alt="any type image"
            />
          </div>
          <div className="text-black p-5 flex flex-col justify-center">
            <h2 className="text-6xl"> Dream it. Build it.</h2>
            <p className="text-gray-500 mt-7">
              Drag & Drop Editing Build perfectly designed websites with
              all-encompassing drag & drop tools that include powerful styling
              options to create exactly what you want.
            </p>
            <p className="mt-5 underline hover:text-blue-500">
              Unlimited Creativity{" "}
            </p>
            <p className="mt-5 underline hover:text-blue-500">
              Responsive Design{" "}
            </p>
            <p className="mt-5 underline hover:text-blue-500">
              Dynamic Elements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AytypeSite;
