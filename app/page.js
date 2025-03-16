import GetStated from "./Component/GetStated";
import Category from "./Component/Category";
import Start from "./Component/Start";
import AiTools from "./Component/AiTools";
import AytypeSite from "./Component/AnytypeSite";

export default function Home() {
  return (
    <div className="bg-[#FCCAF2] pt-20 bg-gradient-to-t from-[#ece1e9] to-[#FCCAF2] pb-56">
      {/* -----------------banner section--------- */}
      <div className="container mx-auto w-11/12">
        <div>
          <h2 className="text-7xl font-bold text-black text-center">
            Build Your Website, <br /> Shape Your Future!
          </h2>
          <p className="text-black text-center mt-5">
            Create, host, and expand your dream website effortlessly with the
            ultimate WordPress platform.
          </p>

          <GetStated></GetStated>
          <Category></Category>
          <Start></Start>

          <AiTools></AiTools>

          <AytypeSite></AytypeSite>
        </div>

        <div> </div>
      </div>
    </div>
  );
}
