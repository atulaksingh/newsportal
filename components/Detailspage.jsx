import React from "react";
import Add3 from "./Advertisement/Add3";
import Contentcard3 from "./Card/Contentcard3";
import DetailsP from "./Card/DetailsP";

function Detailspage() {
  return (
    <>
      <div className="sm:px-8  ">
        <div className="grid grid-cols-11 gap-1 ">
          <div className="lg:col-span-8 md:col-span-11 sm:col-span-11 col-span-11">
            <DetailsP />
          </div>

          <div className="lg:col-span-3 md:col-span-11 sm:col-span-11 col-span-11">
            <div className=" sticky top-48 ">
              <div className="mt-3">
                <Add3 />
              </div>
              <Contentcard3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailspage;
