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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          CHange Mama changes
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
