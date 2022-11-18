import React from "react";

function Hidenav(props) {
  return (
    <>
      <div className="">
        <div className="relative z-10">
          <div className="sm:w-96 w-72 h-auto bg-black absolute">
            <div className=" relative   ">
              <div
                className="absolute text-white right-5 top-5 w-9 fill-white cursor-pointer"
                onClick={() => props.nav()}
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
            <div className="overflow-y-scroll h-screen">
              <div className="  bg-black p-5 mt-5 ">
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  About
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Boost
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800 ">
                  Technology
                </div>
                <div className="md:mt-0 mt-3 py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800 ">
                  Contact
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800 ">
                  About
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Boost
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Technology
                </div>
                <div className="md:mt-0 mt-3 py-2 px-1 cursor-pointer text-white uppercase font-bold  border-b-2 border-gray-800">
                  Contact
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  About
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Boost
                </div>

                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  About
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Boost
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  Technology
                </div>
                <div className="md:mt-0 mt-3 py-2 px-1 cursor-pointer text-white uppercase font-bold  border-b-2 border-gray-800">
                  Contact
                </div>
                <div className="md:mt-0 mt-3  py-2 px-1 cursor-pointer text-white uppercase font-bold border-b-2 border-gray-800">
                  About
                </div>
                <div className="text-white my-10">
                  <h1 className="text-gray-400 text-xs text-center my-3">
                    CONNECT WITH US
                  </h1>
                  <div className="justify-center flex gap-3   ">
                    <div className="w-9 fill-white p-3 rounded-full bg-gray-800 duration-300 cursor-pointer">
                      <svg
                        viewBox="0 0 512 512"
                        className=" duration-300 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        ></path>
                      </svg>
                    </div>

                    <div className="w-9 fill-white p-3 rounded-full bg-gray-800  duration-300 cursor-pointer">
                      <svg
                        viewBox="0 0 512 512"
                        className=" duration-300 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
                      >
                        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                      </svg>
                    </div>

                    <div className="w-9 fill-white p-3 rounded-full bg-gray-800  ">
                      <svg
                        viewBox="0 0 512 512"
                        className=" duration-300 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
                      >
                        <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                      </svg>
                    </div>

                    <div className="w-9 fill-white p-3 rounded-full bg-gray-800  duration-300 cursor-pointer">
                      <svg
                        viewBox="0 0 512 512"
                        className=" duration-300 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
                      >
                        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hidenav;
