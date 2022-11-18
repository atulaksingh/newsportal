import React from "react";
import Image from "next/image";
function Add3() {
  return (
    <div>
      <div className="relative h-[600px]  mb-2    ">
        <Image
          src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1668670116/news/5382041140865729605_iquyzc.jpg"
          objectFit="contain"
          layout="fill"
          className="w-fit h-fit"
          alt="abt img"
        />
      </div>
    </div>
  );
}

export default Add3;
