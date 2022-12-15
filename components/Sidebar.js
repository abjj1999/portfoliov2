import Link from "next/link";
import React, { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineProject,
} from "react-icons/ai";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const [light, setLight] = useState(false);
  return (
    <div className="flex justify-between items-center flex-col sticky ">
      <h1 className=" font-epilogue font-bold text-[20px] text-white bg-[#1c1c24] p-3 rounded-[20px]">
        {`<`}
        <span className="text-red-500">A</span>
        <span className="text-sky-500">{"B"}</span>
        {`/>`}
      </h1>

      <div className="flex flex-1 flex-col justify-between items-center bg-[#1c1c24]  rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-1 flex-col justify-between items-center ">
          <div
            className={`gap-[30px] flex justify-between items-center flex-col  p-4  `}
          >
            <Link href="/">
              <div
                onClick={() => setActive("Home")}
                key="Home"
                className="m-4 flex justify-center flex-col items-center gap-1 cursor-pointer"
              >
                <AiOutlineHome
                  className={`text-white text-[20px] 
                ${active === "Home" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue font-semibold text-white uppercase
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
                onClick={() => setActive("Pros")}
                key="pros"
                className="m-4 flex justify-center flex-col items-center gap-1 cursor-pointer"
              >
                <AiOutlineProject
                  className={`text-white text-[20px] 
                ${active === "Pros" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue font-semibold text-white uppercase
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
                onClick={() => setActive("reach")}
                key="reach"
                className="m-4 flex justify-center flex-col items-center gap-1 cursor-pointer"
              >
                <AiOutlineContacts
                  className={`text-white text-[20px] 
                ${active === "reach" && "text-red-500 text-[40px]"}
                `}
                />
                <h3
                  className={`font-epilogue font-semibold text-white uppercase
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
        <div>
          {!light ? (
            <ImSun
              className="text-[20px] text-white"
              onClick={() => setLight(true)}
            />
          ) : (
            <FaMoon
              className="text-[20px] text-white"
              onClick={() => setLight(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
