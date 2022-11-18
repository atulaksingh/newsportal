import React from "react";
import { useState } from "react";
function Hidesearch(props) {
  return (
    <>
      <div className="relative z-10 ">
        <div className="w-screen   bg-black absolute right-0 top-0">
          <div className=" relative   ">
            <div
              className="absolute text-white right-20 top-14 w-14 sm:w-20 md:w-24 fill-white cursor-pointer"
              //  onClick={() => setSearchtog(true)}
              onClick={() => props.toggle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144m224 0L144 368"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" h-screen ">
            <div class="flex h-screen">
              <div class="m-auto">
                <form class="">
                  <div class="flex items-center border-b border-green-500 ">
                    <input
                      class="appearance-none bg-transparent border-none w-80  sm:w-full text-white text-5xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      aria-label="Full name"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hidesearch;
