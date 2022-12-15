import React from "react";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiRedux,
  SiSolidity,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { GiArmoredBoomerang } from "react-icons/gi";
const IconDisplay = () => {
  return (
    <div className="w-[70%] grid grid-cols-3 grid-flow-row gap-4 ">
      <div className=" animate__animated animate__zoomInDown flex justify-center items-center">
        <DiJavascript1 className=" lg:m-1 text-3xl text-yellow-400" />
        <span className="text-white font-semibold font-epilogue">
          Java <br /> Script
        </span>
      </div>

      <div className="animate__animated animate__zoomInUp flex justify-center items-center">
        <FaReact className=" lg:m-1 text-3xl p-1 text-blue-400" />
        <span className="text-white font-semibold font-epilogue">React</span>
      </div>
      <div className="animate__animated animate__zoomInDown flex justify-center items-center">
        <FaNodeJs className=" lg:m-1 text-3xl p-1 text-green-400" />
        <span className="text-white font-semibold font-epilogue">Node</span>
      </div>
      <div className="animate__animated animate__zoomInUp flex justify-center items-center">
        <SiExpress className=" lg:m-1 text-3xl p-1 text-gray-400" />
        <span className="text-white font-semibold font-epilogue">Express</span>
      </div>
      <div className="animate__animated animate__zoomInDown flex justify-center items-center">
        <DiMongodb className=" lg:m-1 text-3xl p-1 text-green-400" />
        <span className="text-white font-semibold font-epilogue">Mongo</span>
      </div>
      <div className="animate__animated animate__zoomInUp  flex justify-center items-center">
        <AiFillHtml5 className=" lg:m-1 text-3xl p-1 text-red-400" />
        <span className="text-white font-semibold font-epilogue">HTML</span>
      </div>
      <div className="animate__animated animate__zoomInDown flex justify-center items-center">
        <FaCss3Alt className=" lg:m-1 text-3xl p-1 text-blue-400" />
        <span className="text-white font-semibold font-epilogue">CSS</span>
      </div>
      <div className="animate__animated animate__zoomInUp  flex justify-center items-center">
        <SiTailwindcss className=" lg:m-1 text-3xl p-1 text-blue-400" />
        <span className="text-white font-semibold font-epilogue">
          Tailwind CSS
        </span>
      </div>
      <div className="animate__animated animate__zoomInDown flex justify-center items-center">
        <TbBrandNextjs className=" lg:m-1 text-3xl p-1 text-gray-400" />
        <span className="text-white font-semibold font-epilogue">Next.js</span>
      </div>
      <div className="animate__animated animate__zoomInUp flex justify-center items-center">
        <FaPython className=" lg:m-1 text-3xl p-1 text-yellow-400" />
        <span className="text-white font-semibold font-epilogue">Python</span>
      </div>
      <div className="animate__animated animate__zoomInDown  flex justify-center items-center">
        <SiSolidity className=" lg:m-1 text-3xl p-1 text-gray-500" />
        <span className="text-white font-semibold font-epilogue">Solidity</span>
      </div>
      <div className="animate__animated animate__zoomInUp flex justify-center items-center">
        <BsBootstrapFill className=" lg:m-1 text-3xl p-1 text-purple-400" />
        <span className="text-white font-semibold font-epilogue">
          Boot <br /> strap
        </span>
      </div>
      <div className="animate__animated animate__zoomInDown flex justify-center items-center">
        <SiDjango className=" lg:m-1 text-3xl p-1 text-green-400" />
        <span className="text-white font-semibold font-epilogue">Django</span>
      </div>
      <div className="animate__animated animate__zoomInUp flex justify-center items-center">
        <SiRedux className=" lg:m-1 text-3xl p-1 text-pink-500" />
        <span className="text-white font-semibold font-epilogue">Redux</span>
      </div>
      <div className="flex justify-center items-center">
        <GiArmoredBoomerang className=" lg:m-1 text-3xl p-1 text-white" />
        <span className="text-white font-semibold font-epilogue">
          And more...
        </span>
      </div>
    </div>
  );
};

export default IconDisplay;
