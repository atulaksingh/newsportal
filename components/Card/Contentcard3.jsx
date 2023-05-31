import React from "react";
import Image from "next/image";
import Link from "next/link";
function Contentcard3() {
  const card3item = [
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
      News: "Tranding News",
      date: "Nov 10 2023",
      title: "VIRAL! Shah Rukh Khan Celebrates",
    }, // will be passed to the page component as props
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",

      News: "Tranding  News",
      date: "Nov 05 2023",
      title:
        "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
    },

    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
      News: "Tranding / News",
      date: "Nov 07 2023",
      title:
        "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
    },
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
      News: "Tranding / News",
      date: "Nov 10 2023",
      title: "VIRAL! Shah Rukh Khan Celebrates",
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
  ];

  return (
    <>
      <div className="">
        <div className="p-6 ">
          <h1 className=" border-b-2 border-gray-500 "></h1>
          <ul className="relative bottom-4 sm:left-[46%] lg:left-[35%] left-[38%] w-24   ">
            <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
              TRENDING
            </li>
          </ul>
        </div>
        {card3item.map((item) => (
          <Link href={"/post/k"}>
            <div className="flex gap-2  my-2 hover:cursor-pointer ">
              <div>
                <div className="w-28 aspect-video relative">
                  <Image src={item.img} layout="fill" className="absolute " />
                </div>
              </div>
              <div>
                {/* <h1 className="line-clamp-3">jssb</h1> */}
                <span className="text-zinc-400 font-bold text-xs mt-0">
                  {item.News}
                </span>
                /<span className=" text-zinc-400  text-xs">{item.date}</span>
                <h4 className="line-clamp-3 text-gray-00 font-sans font-bold text-xs ">
                  {item.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Contentcard3;
