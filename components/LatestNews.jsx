import React from "react";
import Image from "next/image";
import Contentcard3 from "./Card/Contentcard3";
import Latestpage from "./Card/Latestpage";

function LatestNews() {
  return (
    <>
      <div className="mb-40">
        <div className="">
          <h1 className=" border-b-2 border-gray-500 "></h1>

          <ul className="relative bottom-4 left-[34%] sm:left-[43%] md:left-[45%] w-32  ">
            <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
              LATEST NEWS
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-5 md:8 sm:px-5 md:px px-2">
          <div className="lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 ">
            <Latestpage />
          </div>
          <div className="col-span-4 lg:block hidden">
            <Contentcard3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
