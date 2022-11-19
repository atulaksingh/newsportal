import React from "react";
import Image from "next/image";
import Link from "next/link";
function PhotosPage2() {
  return (
    <>
      <div className=" ">
        <div className="sm:col-span-1  cursor-pointer mb-5  ">
          <Link href={"/post/k"}>
            <div className="">
              <div className="relative  sm:h-[25rem]  h-[20rem] ">
                <Image
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1667653804/news/COLLAGE_2__41__2021-10-24-12-21-17_thumbnail_bbhyh2.jpg"
                  objectFit="contain"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="abt img"
                />
              </div>
            </div>

            <div className="relative  -mt-52  ">
              <span className=" px-4 text-green-500 font-bold text-sm pt-2">
                TRANDING NEWS
              </span>
              / <span className=" text-white  text-sm">10 NOV</span>
              <h4 className="text-white line-clamp-5 xl  bg-gradient-to-t from-black via-neutral-900 to-transparent  h-44  mt-1  w-full box-border ">
                <div className="px-4 text-2xl font-bold leading-tight overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat recusandae, inventore commodi cum aut dolor, laborum
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.bwdhbashbshdbhbLorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </div>
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PhotosPage2;
