import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineProject,
} from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { GiTigerHead } from "react-icons/gi";
const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <div className="flex md:flex-row flex-col justify-between gap-6 mb-[35px]">
      <div className="lg:flex-2 flex flex-row justify-between w-full max-w-[458px] rounded-[15px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24]">
        <AiFillGithub className="text-[30px] text-white" />
        <AiFillLinkedin className="text-[30px] text-white ml-4" />
        <AiFillPhone className="text-[30px] text-white ml-4" />
        <AiOutlineMail className="text-[30px] text-white ml-4" />
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <button className="font-epilogue font-semibold text-[16px] text-white leading-[26px] min-h-[52px] px-4 rounded-[10px] bg-sky-500 ">
          Reach out
        </button>
        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer ">
          <GiTigerHead className="text-[40px] text-white" />
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center">
        <div className="w-[40px] h-[40px] rounded-[10px]  flex justify-center items-center cursor-pointer ">
          <GiTigerHead className="text-[40px] text-white cursor-pointer" />
        </div>
        <FaHamburger
          className="text-[40px] text-white cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div
          className={`absolute top-[150px] right-[0] left-[0] bg-[#1c1c24] z-10 shadow-secondary py-4 
          ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-[0]"
          } transition-all duration-700 ease-in-out `}
        >
          <div className="mb-4">
            <Link href="/">
              <div
                onClick={() => {
                  setActive("Home");
                  setToggleDrawer(false);
                }}
                key="Home"
                className="m-4 flex justify-between border-b-2 p-2 flex-row  items-center gap-1 cursor-pointer"
              >
                <AiOutlineHome
                  className={`text-white text-[20px] 
                ${active === "Home" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue font-semibold text-[18px] text-white uppercase
                ${
                  active === "Home" &&
                  "underline decoration-red-500 underline-offset-4  "
                }
                `}
                >
                  Home
                </h3>
              </div>
            </Link>
            <Link href="/projects">
              <div
                onClick={() => {
                  setActive("Pros");
                  setToggleDrawer(false);
                }}
                key="pros"
                className="m-4 flex justify-between border-b-2 p-2 flex-row  items-center gap-1 cursor-pointer"
              >
                <AiOutlineProject
                  className={`text-white text-[20px] 
                ${active === "Pros" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue text-[18px]  font-semibold text-white uppercase
                ${
                  active === "Pros" &&
                  "underline decoration-red-500 underline-offset-4  "
                }
                `}
                >
                  Pros
                </h3>
              </div>
            </Link>
            <Link href="/contact">
              <div
                onClick={() => {
                  setActive("reach");
                  setToggleDrawer(false);
                }}
                key="reach"
                className="m-4 flex justify-between border-b-2 p-2 flex-row  items-center gap-1 cursor-pointer"
              >
                <AiOutlineContacts
                  className={`text-white text-[20px] 
                ${active === "reach" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue text-[18px]  font-semibold text-white uppercase
                ${
                  active === "reach" &&
                  "underline decoration-red-500 underline-offset-4  "
                }
                `}
                >
                  Reach
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
