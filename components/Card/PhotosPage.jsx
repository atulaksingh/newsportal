import React from "react";
import Image from "next/image";

function PhotosPage() {
  return (
    <>
      <div className="box-border">
        <div className="col-span-1 opacity-80  hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40">
          <div className="   hover:cursor-pointer my-1">
            <div className="relative h-48  mb-0 w-full">
              <Image
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1667653805/news/1-SINGLE-IMAGE_2021-9-28-10-21-10_thumbnail_lizpfw.jpg"
                objectFit="contain"
                layout="fill"
                className="w-fit h-fit"
                alt="abt img"
              />
            </div>

            <div className="justify-start  ">
              <span className="text-zinc-400 font-bold text-sm">
                TRANDING NEWS
              </span>
              /<span className=" text-zinc-400  text-xs">/ Nov 05 2023</span>
              <h4 className="text-black font-semibold text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                corrupti.
              </h4>
            </div>
            {/* <div className="bg-gray-500 ">
            <div className="relative fill-white  w-8 -mt-64 bg-[#464444c7] rounded-full p-2  ml-56">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="272" r="64"></circle>
                <path d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 00-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 00-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 00-16-16h-24a16 16 0 00-16 16v8h-4a48.05 48.05 0 00-48 48V384a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V192a48.05 48.05 0 00-48-48zM256 368a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
              </svg>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotosPage;
