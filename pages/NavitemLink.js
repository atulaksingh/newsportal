import React from "react";
import Image from "next/image";
import Latestpage from "../components/Card/Latestpage";
import Contentcard3 from "../components/Card/Contentcard3";
import Add3 from "../components/Advertisement/Add3";
import Layout from "../components/layout/layout";
function NavitemLink() {
  return (
    <>
      <Layout>
        <div className="md:px-10 sm:px-6 px-2  my-36 ">
          <div className="opacity-95 hover:opacity-100 duration-150 sm:my-2 md:my-2 hover:cursor-pointer ">
            <div
              className="grid grid-cols-12 overflow-hidden  sm:bg-gradient-to-r sm:from-black sm:via-neutral-900  sm:to-transparent sm:h-[291px] md:[310px]
             lg:h-[495px]   bg-gradient-to-t from-black via-neutral-900 to-transparent "
            >
              <div className="col-span-12 sm:col-span-4 sm:order-1 order-2 h-[250px]  sm:h-[291px] md:[310px] lg:h-[491px] bg-black ">
                <div className="relative lg:top-16 lg:left-10  ">
                  <h4 className="absolute text-white      mt-1   box-border ">
                    <div className="px-4 text-[2.0rem] break-normal sm:text-[2rem] md:[2.5rem] lg:text-[3.2rem] font-bold leading-tight w-[100%s] sm:w-[120%] md:w-[150%] lg:w-[152%] h-[491px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat recusandae, inventore lorem abcd djkad hjasbhjsabd
                      jhabshj
                    </div>
                  </h4>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-8 -z-10 sm:order-2 order-1 ">
                <div className="">
                  <div className="relative h-[340px] sm:h-[300px] md:h-[310px] lg:h-[495px]   mb-3 object-cover   ">
                    <Image
                      src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1668675700/news/palak_2022-8-9-8-57-57_thumbnail_zincxv.jpg"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="abt img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ul className="flex gap-3 my-3 justify-start  cursor-pointer">
              <li className=" text-pink-500 font-bold  uppercase  text-sm  hover:underline duration-150 ">
                homepage
              </li>
              <span className="text-pink-500 font-bold">/</span>
              <li className=" text-pink-500 font-bold  uppercase  text-sm  hover:underline duration-150 ">
                television
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-12 gap-5 ">
            <div className="lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 ">
              <Latestpage />
              <Latestpage />
              <Latestpage />
            </div>
            <div className="lg:col-span-4 md:col-span-4 lg:block hidden  ">
              <div className="">
                <Add3 />
              </div>
              <Contentcard3 />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default NavitemLink;
