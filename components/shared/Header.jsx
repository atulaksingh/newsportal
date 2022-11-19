import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hideheader from "../Card/Hidesearch";
import Hidesearch from "../Card/Hidesearch";
import Hidenav from "../Card/Hidenav";
import NavitemLink from "../../pages/NavitemLink";
const options = ["Italy", "Spain", "Greece"];
function Header() {
  const [selected, setSelected] = useState(options[0]);
  const dropdownList = [
    {
      child1: "hdbhs",
      child2: "hdbhs",
      child3: "hdbhs",
    },

    {
      child1: "hdbhs",
      child2: "hdbhs",
      child3: "hdbhs",
    },
  ];

  const [status, setStatus] = useState(false);
  const [searchtog, setSearchtog] = useState(false);
  const searchtoggle = () => {
    setSearchtog(false);
  };
  const navtoggle = () => {
    setStatus(false);
  };

  return (
    <>
      {/* //small  navbar /// */}

      <div className="">{status ? <Hidenav nav={navtoggle} /> : null}</div>
      {/* <NavitemLink /> */}
      {/* ////searchbaar/// */}
      <div className="">
        {searchtog ? <Hidesearch toggle={searchtoggle} /> : null}
      </div>

      {/* ************************************************ */}
      <div className=" mt-50 ">
        <div className=" bg-gray-900">
          <div className="grid grid-cols-4 gap-4  ">
            <div className="col-span-1 my-auto  sm:hidden xl:block hidden">
              <div className=" flex    justify-center  gap-5  ">
                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-blue-900 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path
                      fillRule="evenodd"
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    ></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-pink-700 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-red-600 duration-300 cursor-pointer ">
                  <svg viewBox="0 0 512 512">
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-blue-500 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* *************************md toggle icon*********** */}
            <div className="sm:col-span-1  my-auto sm:block xl:hidden ">
              <div className="flex  justify-start">
                <div
                  className="stroke-gray-100 w-10 duration-500 hover:stroke-green-300 cursor-pointer "
                  onClick={() => setStatus(true)}
                >
                  <svg viewBox="0 0 512 512">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M96 256h320M96 176h320M96 336h320"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* ******************2nav******************** */}

            <div className="sm:col-span-2 col-span-2 ">
              <div className="text-center text-xl text-gray-900">
                <div className="relative h-10 w-30 sm:h-10 sm:w-40 mx-auto my-2 hover:cursor-pointer">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1667462367/news/flat_logo_kegalp.png"
                    objectFit="contain"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="abt img"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 my-auto flex sm:justify-end justify-end">
              {/* ************************************serchbar md******************************* */}
              <div className="flex justify-center sm:block xl:hidden ">
                <div
                  className="stroke-gray-400 fill-gray-900 w-7 duration-500 hover:stroke-green-300 font-bold hover:scale-110 cursor-pointer "
                  onClick={() => setSearchtog(true)}
                >
                  <svg viewBox="0 0 512 512">
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M338.29 338.29L448 448"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *************************************2nd searchbar********************* */}

        <div className="grid grid-cols-12 border-solid border-2 h-[3rem] bg-white">
          {/* ************* * lg nav toggle  **************************** */}
          <div className="col-span-1 my-auto hidden sm:hidden xl:block ">
            <div className="flex  justify-center">
              <div
                className="stroke-black w-10 duration-500 hover:stroke-green-300 cursor-pointer  "
                onClick={() => setStatus(true)}
              >
                <svg viewBox="0 0 512 512">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M96 256h320M96 176h320M96 336h320"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="xl:col-span-10 sm:col-span-12 col-span-12 overflow-auto overflow-y-hidden whitespace-nowrap">
            <div className="   p-2  h-10 flex flex-row">
              <div class="dropdown  px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                  Dropdown
                </button>
                <div class="dropdown-content hidden hover:block m-0 absolute min-w-[160px]   bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                  <div
                    href="#"
                    className=" no-underline text-left  px-[16px] py-[12px] hover:bg-[#777]"
                  >
                    Link 1
                  </div>
                  <div
                    href="#"
                    className=" no-underline text-left  px-[16px] py-[12px] hover:bg-[#777]"
                  >
                    Link 2
                  </div>
                  <div
                    href="#"
                    className=" no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                  >
                    Link 3
                  </div>
                </div>
              </div>

              {/* <form>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </form>

              {console.log(dropdownList)} */}
              <Link href={"/NavitemLink"}>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>

                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
                <div class="dropdown px-3 float-left pb-8 hover:border-b-2 cursor-pointer   border-blue-500 ">
                  <button class="dropbtn text-base border-none outline-none   pb-[10px] ">
                    Dropdown
                  </button>
                  <div class="dropdown-content hidden absolute min-w-[160px] z-10  bg-[#f9f9f9] shadow-[0px 8px 16px 0px rgba(0,0,0,0.2)] ">
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 1
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[12px] hover:bg-[#777]"
                    >
                      Link 2
                    </div>
                    <div
                      href="#"
                      className="block no-underline text-left float-none px-[16px] py-[10px] hover:bg-[#777]"
                    >
                      Link 3
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 my-auto   flex justify-center">
            <div className=" justify-center hidden sm:hidden xl:block ">
              <div
                className="stroke-black fill-white w-6 duration-500 hover:stroke-green-300 font-bold hover:scale-110 cursor-pointer "
                onClick={() => setSearchtog(true)}
              >
                <svg viewBox="0 0 512 512">
                  <path
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M338.29 338.29L448 448"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
