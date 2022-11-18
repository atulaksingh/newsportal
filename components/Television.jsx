import React from "react";
import Add3 from "./Advertisement/Add3";
import AddvertiseCard1 from "./Advertisement/AddvertiseCard1";
import Contentcard from "./Card/Contentcard";
import Contentcard2 from "./Card/Contentcard2";
import Contentcard3 from "./Card/Contentcard3";

function Television() {
  return (
    <>
      <div className=" sm:px-7 px-2 mt-32">
        <div className="">
          <h1 className=" border-b-2 border-gray-500 "></h1>

          <ul className="relative bottom-4 left-[36%] sm:left-[43%] md:left-[45%] w-28    ">
            <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
              TELEVISION
            </li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-11   md:grid-cols-11 md:gap-5 sm:gap-5 ">
          <div className="lg:col-span-3 md:col-span-4  sm:col-span-4   col-span-4">
            <div>
              <AddvertiseCard1 />
            </div>
            <Contentcard />
          </div>
          <div className=" lg:col-span-5 md:col-span-7 sm:col-span-7 col-span-4">
            <Contentcard2 />
          </div>
          <div className="lg:col-span-3 md:col-span-11 sm:col-span-11 g-5 col-span-4 ">
            <div className="mt-3">
              <Add3 />
            </div>
            <Contentcard3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Television;
