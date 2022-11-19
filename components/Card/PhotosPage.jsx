import React from "react";
import Image from "next/image";
import Link from "next/link";
function PhotosPage() {
  const card3item = [
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
      News: "Tranding News",
      date: "Nov 10 2023",
      title:
        "VIRAL! Shah Rukh Khan Celebratesni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood",
    }, // will be passed to the page component as props
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",

      News: "Tranding News",
      date: "Nov 05 2023",
      title:
        "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, ’",
    },

    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
      News: "Tranding News",
      date: "Nov 07 2023",
      title:
        "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
    },
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
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
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
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
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
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
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
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
      News: "Tranding / News",
      date: "Nov 07 2023",
      title:
        "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
    },
  ];
  return (
    <>
      <div className="box-border">
        <div className="col-span-1 opacity-80  hover:opacity-100 duration-300 sm:my-2 md:my-2 hover:text-opacity-40">
          <div className="   hover:cursor-pointer my-1">
            <Link href={"/post/k"}>
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotosPage;
