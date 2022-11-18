import React from "react";
import Image from "next/image";

const MobileDC3 = () => {
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
          <div className="flex gap-2 px-2 py-2">
            <div>
              <div className="w-32 aspect-video relative">
                <Image
                  src={item.img}
                  layout="fill"
                  className="absolute aspect-video"
                />
              </div>
            </div>
            <div>
              {/* <h1 className="line-clamp-3">jssb</h1> */}
              <span className="text-zinc-400 font-bold text-xs">
                {item.News}
              </span>
              /<span className=" text-zinc-400  text-xs">{item.date}</span>
              <h4 className="line-clamp-3 text-gray-00 font-sans font-bold text-xs ">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileDC3;

// import React from "react";
// import Image from "next/image";
// function MobileDC3() {
//   const card3item = [
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
//       News: "Tranding News",
//       date: "Nov 10 2023",
//       title:
//         "VIRAL! Shah Rukh Khan Celebratesni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",

//       News: "Tranding News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, ’",
//     },

//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
//       News: "Tranding News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
//       News: "Tranding News",
//       date: "Nov 10 2023",
//       title: "VIRAL! Shah Rukh Khan Celebrates",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",

//       News: "Tranding  News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
//     },

//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1668425005/ashneer__1__2022-11-2-9-5-54_thumbnail_2022-11-12-4-58-27_thumbnail_w4sdwg.jpg",
//       News: "Tranding / News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "Tranding / News",
//       date: "Nov 10 2023",
//       title: "VIRAL! Shah Rukh Khan Celebrates",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",

//       News: "Tranding / News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "TRANDING NEWS",
//       date: "Nov 06 2023",
//       title:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem4 Iure",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
//       News: "Tranding / News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "Tranding / News",
//       date: "Nov 10 2023",
//       title: "VIRAL! Shah Rukh Khan Celebrates",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",

//       News: "Tranding / News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
//     },

//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
//       News: "Tranding / News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "Tranding / News",
//       date: "Nov 10 2023",
//       title: "VIRAL! Shah Rukh Khan Celebrates",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",

//       News: "Tranding / News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "TRANDING NEWS",
//       date: "Nov 06 2023",
//       title:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem4 Iure",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
//       News: "Tranding / News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "Tranding / News",
//       date: "Nov 10 2023",
//       title: "VIRAL! Shah Rukh Khan Celebrates",
//     }, // will be passed to the page component as props
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",

//       News: "Tranding / News",
//       date: "Nov 05 2023",
//       title:
//         "Salman Khan Defamation Case: HC Judge Hearing Actor’s Plea RETIRES, Says, ‘I Tried My Best, Unable To Complete The Final Judgement’",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667554892/news/Tu_Zakhm_Hai_2022-10-14-14-58-2_thumbnail_gt0le6.jpg",
//       News: "TRANDING NEWS",
//       date: "Nov 06 2023",
//       title:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem4 Iure",
//     },
//     {
//       img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1667546529/news/7_2021-11-1-9-56-27_thumbnail_2022-11-4-6-24-37_thumbnail_wfzvva.jpg",
//       News: "Tranding / News",
//       date: "Nov 07 2023",
//       title:
//         "Uni Ki Yaari: This OTT Series Takes Us Back To College Life, ‘Light-Hearted Peek Into Journey To Manage Adulthood’",
//     },
//   ];
//   return (
//     <>
//       <div className="px-2">
//         <div className=" ">
//           <h1 className=" border-b-2 border-gray-500 "></h1>
//           <ul className="relative bottom-4 sm:left-[46%] lg:left-[35%] left-[38%] w-24   ">
//             <li className="bg-yellow-300 text-center  text-black p-0 font-semiboldbold  rounded-full leading-8">
//               TRENDING
//             </li>
//           </ul>
//         </div>
//         {card3item.map((item) => (
//           <div className="grid grid-cols-12 pb-2 hover:cursor-pointer   ">
//             <div className="lg:col-span-5 md:col-span-3 sm:col-span-3 col-span-4 ">
//               <div
//                 className="relative  -z-30 lg:h-24 lg:w-28 md:h-[130px] md:w-[180px] sm:h-[110px] sm:w-[150px]
//                h-[85px] w-[100px] lg:my-auto md:justify-start object-cover max-w-sm"
//               >
//                 <Image
//                   src={item.img}
//                   objectFit="contain"
//                   layout="fill"
//                   className="w-fit h-fit"
//                   alt="abt img"
//                 />
//               </div>
//             </div>
//             <div className="font lg:col-span-7 md:col-span-9 sm:col-span-9 col-span-8 break-words sm:pl-0 pl-3">
//               <div className="justify-center box-border mx-1">
//                 <span className="text-zinc-400 font-bold text-xs">
//                   {item.News}
//                 </span>
//                 /<span className=" text-zinc-400  text-xs">{item.date}</span>
//                 <h4 className="text-gray-00 font-sans font-bold text-xs ">
//                   {item.title}
//                 </h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default MobileDC3;
