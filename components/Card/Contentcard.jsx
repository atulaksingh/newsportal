import React from "react";
import Image from "next/image";

function Contentcard() {
  const NewsData = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure",
    }, // will be passed to the page component as props
    {
      id: 2,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title:
        "Lorem ipsum dolor adipisicing elit. uheu wheuwhe wehhwuieh wehwiehh Iure",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title:
        "Lorem ipsum dolor jsjksbjs sit amet consectetur adipisicing elit. Iure",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title:
        "Lorem ipsum dolor sit sknsknsns amet consectetur adipisicing elit. Iure",
    },
    {
      id: 1,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure",
    }, // will be passed to the page component as props
    {
      id: 2,
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667544888/news/Imran_2022-11-4-4-51-48_thumbnail_vziogl.jpg",
      News: "TRANDING NEWS",
      date: "Nov 05 2023",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure",
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12   ">
          {NewsData.map((item) => (
            <div className="lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 my-3 hover:cursor-pointer">
              <div className="relative h-48 mb-0    ">
                <Image
                  src={item.img}
                  objectFit="contain"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="abt img"
                />
              </div>
              <div className=" flex justify-center  box-border  sm:text-left sm:p-3 ">
                <div className="  sm:block   hidden  my-auto  font-bold align-middle text-5xl text-zinc-400 sm:w-20 leading-10 ">
                  {item.id}
                </div>
                <div className="">
                  <span className="text-zinc-400 font-bold text-sm">
                    {item.News}
                  </span>
                  /
                  <span className=" text-zinc-400  text-center text-xs">
                    {item.date}
                  </span>
                  <h4 className="text-black line-clamp-3 font-semibold text-base break-words overflow-hidden">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contentcard;
