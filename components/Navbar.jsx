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
import { GiMagicLamp } from "react-icons/gi";
const Navbar = () => {
  const handleClicked = (e) => {
    e.preventDefault();
    const ContactBar = document.querySelector(".contact");
    ContactBar.classList.add("animate__animated", "animate__shakeX");
  };
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <div className="flex md:flex-row flex-col justify-between gap-6 mb-[35px]">
      <div className="contact lg:flex-2 flex flex-row justify-between w-full max-w-[458px] rounded-[15px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24]">
        <Link
          href="https://github.com/abjj1999"
          passHref
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-[30px] text-white hover:text-red-400" />
        </Link>
        <Link href="http://" passHref rel="noopener noreferrer">
          <AiFillLinkedin className="text-[30px] text-white ml-4 hover:text-sky-400" />
        </Link>
        <Link href="tel:+3468121212">
          <AiFillPhone className="text-[30px] text-white ml-4 hover:text-red-400" />
        </Link>
        <Link href="mailto:abdullahalhilfi21@gmail.com">
          <AiOutlineMail className="text-[30px] text-white ml-4 hover:text-sky-400" />
        </Link>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <button
          onClick={handleClicked}
          className="font-epilogue font-semibold text-[16px] text-white leading-[26px] min-h-[52px] px-4 rounded-[10px] bg-gradient-to-r from-sky-300 to-blue-500 hover:from-purple-500 hover:to-red-500 "
        >
          Reach out
        </button>
        {/* <button className="font-epilogue font-semibold text-[16px] text-white leading-[26px] min-h-[52px] px-4 rounded-[10px] bg-gradient-to-r from-green-300 to-blue-500 hover:from-blue-500 hover:to-red-500 ">
          <Link
            href="https://chess-game-seven.vercel.app/"
            rel="noreferrer"
            passHref
          >
            Play Chess
          </Link>
        </button> */}

        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer ">
          <GiMagicLamp className="text-[40px] text-white" />
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center">
        <div className="w-[40px] h-[40px] rounded-[10px]  flex justify-center items-center cursor-pointer ">
          <GiMagicLamp className="text-[40px] text-white cursor-pointer" />
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
