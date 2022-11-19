import React from "react";
import Image from "next/image";

function Contentcard2() {
  const card2item = [
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
      News: "Tranding / News",
      date: "Nov 10 2023",
      title:
        "VIRAL! Shah Rukh Khan Celebrates Birthday With 1000 Fans At St. Andrews; Cuts Cake, Dances To Chaiyya Chaiyya – WATCH VIDEO",
    }, // will be passed to the page component as props
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",

      News: "Tranding / News",
      date: "Nov 05 2023",
      title:
        "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
    },
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
      News: "TRANDING NEWS",
      date: "Nov 06 2023",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem4 Iure",
    },
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
      News: "Tranding / News",
      date: "Nov 07 2023",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure",
    },
  ];
  return (
    <>
      {card2item.map((item) => (
        <div className="border border-black box-border bg-black my-3 hover:cursor-pointer">
          <div className="relative h-80 w-70">
            <Image
              src={item.img}
              objectFit="contain"
              layout="fill"
              className="w-fit h-fit"
              alt="abt img"
            />
          </div>

          <div className="pl-4 ">
            <span className="text-green-500 font-bold text-sm pt-2">
              {item.News} /
            </span>
            / <span className=" text-white  text-sm">{item.date}</span>
            <h4 className="text-white  font-black text-3xl leading-relaxed py-3 ">
              {item.title}
            </h4>
          </div>
        </div>
      ))}
      {/* <h1>hjsagd</h1> */}
    </>
  );
}

export default Contentcard2;
