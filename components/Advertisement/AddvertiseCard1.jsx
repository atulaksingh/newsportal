import React from "react";
import Image from "next/image";
function AddvertiseCard1() {
  return (
    <>
      <div>
        <div className="relative h-[108px] mb-2    ">
          <Image
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1668668782/news/14614664730073066158_qqgfzr.jpg"
            objectFit="contain"
            layout="fill"
            className="w-fit h-fit"
            alt="abt img"
          />
        </div>
      </div>
    </>
  );
}

export default AddvertiseCard1;
