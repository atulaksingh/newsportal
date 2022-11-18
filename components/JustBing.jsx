import React from "react";
import Add3 from "./Advertisement/Add3";
import AddvertiseCard1 from "./Advertisement/AddvertiseCard1";
import Contentcard from "./Card/Contentcard";
import Contentcard2 from "./Card/Contentcard2";
import Contentcard3 from "./Card/Contentcard3";

function JustBing() {
  return (
    <>
      <div className=" m-auto ">
        <div className="lg:9 sm:px-7 px-2">
          <div className="">
            <h1 className=" border-b-2 border-gray-500 "></h1>

            <ul className="relative bottom-4 left-[35%] sm:left-[43%] md:left-[45%] w-28  ">
              <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
                JUST BINGE
              </li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-12  gap-4">
            <div className="lg:col-span-3 md:col-span-4  sm:col-span-4   col-span-4 ">
              <div>
                <AddvertiseCard1 />
              </div>
              <Contentcard />
            </div>
            <div className="lg:col-span-6 md:col-span-8 sm:col-span-8 col-span-4">
              <Contentcard2 />
            </div>
            <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 g-5 col-span-4">
              <div className="mt-3">
                <Add3 />
              </div>
              <Contentcard3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JustBing;
