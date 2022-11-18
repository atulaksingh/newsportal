import React from "react";
import Image from "next/image";
import Contentcard from "./Card/Contentcard";
import PhotosPage from "./Card/PhotosPage";
import PhotosPage2 from "./Card/PhotosPage2";

function Photos() {
  return (
    <>
      <div className=" mx-auto">
        <div className=" sm:mx-auto  my-40 sm:px-11 px-2 ">
          <div className=" mx-auto">
            <div className="">
              <h1 className=" border-b-2 border-gray-500 "></h1>

              <ul className="relative bottom-4 left-[36%] sm:left-[43%] md:left-[45%] w-24   ">
                <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
                  PHOTOS
                </li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-0 ">
              <PhotosPage2 />
              <PhotosPage2 />
            </div>
            {/* **************************************************************************************** */}
            <div className=" ">
              <div className="grid grid-col-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4 gap-5 ">
                <PhotosPage />
                <PhotosPage />
                <PhotosPage />
                <PhotosPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
