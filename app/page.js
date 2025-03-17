import Image from "next/image";
import GetStarted from "./Component/GetStarted";
import Category from "./Component/Category";
import Start from "./Component/Start";
import AiTools from "./Component/AiTools";
import AnyTypeSite from "./Component/AnytypeSite";

export default function Home() {
  return (
    <div className="bg-[#FCCAF2] bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2] pb-10">
      {/* -----------------banner section--------- */}
      <div className="container mx-auto pt-20 w-11/12">
        <div>
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-black text-center">
              Build Your Website, <br /> Shape Your Future!
            </h2>
            <p className="text-black text-center mt-5">
              Create, host, and expand your dream website effortlessly <br></br>{" "}
              with the ultimate WordPress platform.
            </p>
          </div>
          <GetStarted />
          <Category></Category>
          <Start></Start>

          <AiTools></AiTools>

          <AnyTypeSite></AnyTypeSite>
        </div>
      </div>
    </div>
  );
}
