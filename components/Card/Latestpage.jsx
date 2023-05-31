import React from "react";
import Image from "next/image";
import Link from "next/link";
function Latestpage() {
  const card3item = [
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667816150/news/Disha_2021-12-5-7-23-20_thumbnail_2022-8-19-11-19-27_thumbnail_2022-11-5-8-29-16_thumbnail_x8ra7v.jpg",

      News: "Tranding News",
      date: "Nov 10 2023",
      title:
        "VIRAL! Shah Rukh Khan Celebratesni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood",
    }, // will be passed to the page component as props
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667816150/news/Disha_2021-12-5-7-23-20_thumbnail_2022-8-19-11-19-27_thumbnail_2022-11-5-8-29-16_thumbnail_x8ra7v.jpg",

      News: "Tranding News",
      date: "Nov 05 2023",
      title:
        "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, ’",
    },

    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667816150/news/Disha_2021-12-5-7-23-20_thumbnail_2022-8-19-11-19-27_thumbnail_2022-11-5-8-29-16_thumbnail_x8ra7v.jpg",
      News: "Tranding News",
      date: "Nov 07 2023",
      title:
        "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
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
      {/* <div className="my-3">
        <div className="grid grid-cols-2 gap-6 border-solid border-t-2 border-gray-200 ">
          <div className="col-span-1 opacity-80  hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40 cursor-pointer">
            <div className="">
              <div className="relative sm:h-52 h-44 hover:bg-blend-darken  ">
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
          <div className="col-span-1 my-5  opacity-80  hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40 cursor-pointer">
            <div className="justify-start hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40 cursor-pointer">
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
      </div> */}
      <div className="">
        {card3item.map((item) => (
          <Link href={"/post/k"}>
            <div className="flex gap-6  border-solid border-t-2 border-gray-200  opacity-80  hover:opacity-100 duration-300  hover:text-opacity-40 cursor-pointer my-2">
              <div className="border-solid border-t-2 border-gray-200 ">
                <div className="aspect-video  relative sm:h-52 my-3 h-28 ">
                  <div className="">
                    <Image src={item.img} layout="fill" className="absolute " />
                  </div>
                </div>
              </div>
              <div>
                <div className="justify-start hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40 cursor-pointer">
                  <span className="text-zinc-400 font-bold text-sm">
                    TRANDING NEWS
                  </span>
                  /<span className=" text-zinc-400  text-xs"> Nov 05 2023</span>
                  <h4 className="text-black font-medium text-base  sm:text-lg md:text-xl lg:text-2xl font-[Oswald,sans-serif]  line-clamp-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, corrupti.d Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Recusandae, unde.
                  </h4>
                  <div className="text-zinc-500 sm:block hidden ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam placeat, esse vitae corrupti laboriosam at? Lorem
                    ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Latestpage;
