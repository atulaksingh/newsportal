import React from "react";
import Contentcard from "./Card/Contentcard";
import Contentcard2 from "./Card/Contentcard2";
import Contentcard3 from "./Card/Contentcard3";
import Image from "next/image";
import AddvertiseCard1 from "./Advertisement/AddvertiseCard1";
import Add3 from "./Advertisement/Add3";
import AddTop from "./Advertisement/AddTop";
import MobileDC3 from "./Card/MobileDC3";

function Content() {
  return (
    <>
      <div className=" sm:px-7 px-2">
        <div className="grid lg:grid-cols-11   md:grid-cols-11 md:gap-5 sm:gap-5 ">
          <div className="lg:col-span-3 md:col-span-4  sm:col-span-4   col-span-4 ">
            <div>
              <AddvertiseCard1 />
            </div>
            <div className="">
              <div className="">
                <h1 className=" border-b-2 border-gray-500 "></h1>

                <ul className="relative bottom-4 sm:left-[46%] lg:left-[37%] left-[38%] w-20   ">
                  <li className="bg-yellow-300 text-center  text-black  font-semiboldbold  rounded-full leading-8">
                    Just IN
                  </li>
                </ul>
                <Contentcard />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-7 sm:col-span-7 col-span-4">
            <Contentcard2 />
          </div>
          <div className="lg:col-span-3 md:col-span-11 sm:col-span-11 g-5 col-span-4">
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

export default Content;
