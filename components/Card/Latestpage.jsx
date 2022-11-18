import React from "react";
import Image from "next/image";
function Latestpage() {
  return (
    <>
      <div className="my-3">
        <div className="grid grid-cols-2 gap-6 border-solid border-t-2 border-gray-200 ">
          <div className="col-span-1 ">
            <div className="">
              <div className="relative sm:h-60 h-44  ">
                <Image
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1667816150/news/Disha_2021-12-5-7-23-20_thumbnail_2022-8-19-11-19-27_thumbnail_2022-11-5-8-29-16_thumbnail_x8ra7v.jpg"
                  objectFit="contain"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="abt img"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 my-5">
            <div className="justify-start">
              <span className="text-zinc-400 font-bold text-sm">
                TRANDING NEWS
              </span>
              /<span className=" text-zinc-400  text-xs"> Nov 05 2023</span>
              <h4 className="text-black font-medium text-base  sm:text-lg md:text-xl lg:text-2xl font-[Oswald,sans-serif]  line-clamp-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                corrupti.d Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Recusandae, unde.
              </h4>
              <div className="text-zinc-500 sm:block hidden ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat, esse vitae corrupti laboriosam at? Lorem ipsum dolor
                sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Latestpage;
