import Head from "next/head";
import Image from "next/image";
import { GiEnergyArrow, GiPentarrowsTornado, GiSparrow } from "react-icons/gi";
// animate__animated animate__slideInRight
export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between ">
      <div className=" p-8 rounded-[20px]  flex flex-wrap justify-between flex-row">
        <div className="p-10 w-100">
          <h1 className=" animate__animated animate__slideInRight text-white font-bold font-epilogue text-[60px] lg:ml-[100px] uppercase">
            welcome
          </h1>

          <h1 className="animate__animated animate__slideInRight text-white font-bold font-epilogue text-[60px] uppercase lg:ml-[200px]">
            <span className="text-red-400">{"<"}</span>to my
            <span className="text-blue-400">{"/>"}</span>
          </h1>
          <h1 className="animate__animated animate__slideInRight text-white font-bold font-epilogue text-[60px] uppercase lg:ml-[250px]">
            portfolio
          </h1>
          <div className="flex justify-end">
            <GiEnergyArrow
              className="text-center hover:animate-spin text-red-400 text-[50px] "
              style={{ animationDuration: "2s" }}
            />
            <GiEnergyArrow
              className="text-center hover:animate-spin text-white text-[50px] "
              style={{ animationDuration: "2s" }}
            />
            <GiEnergyArrow
              className="text-center hover:animate-spin text-blue-400 text-[50px] "
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>
        <img
          src="/imgs/magic.gif"
          className=" opacity-80 rounded-[20px] w-full h-auto lg:w-[50%] lg:h-auto"
        />
      </div>
      <div className="flex justify-center ">
        <div className=" bg-[#1c1c24] flex-wrap rounded-[20px] p-4 items-center flex justify-between">
          <div className="flex-1 bg-[#2c2f32] w-[] rounded-[20px] flex flex-col  gap-5 p-3">
            <div className="flex ">
              <h1 className="text-white font-semibold font-epilogue text-[50px] uppercase">
                about me
              </h1>
              <GiSparrow className="my-5 mx-3 animate-bounce text-red-400 text-[25px]" />
            </div>
            <p className="  w-[80%] text-white gap-2 font-epilogue text-[18px]">
              My name is <span className="text-red-400">Abdullah </span> or{" "}
              <span className="text-red-400">AB</span> . <br />
              I'm a <span className="text-blue-400">Full-Stack Developer </span>
              from <span className="text-red-400">Houston, TX</span>. <br />
              I'm currently a <span className="text-blue-400">
                Student
              </span> at{" "}
              <span className="text-red-400">University of Houston</span>.{" "}
              Studing <span className="text-blue-400">Computer Science</span>.
              <br />I have a passion for{" "}
              <span className="text-blue-400">Web Development</span> and{" "}
              <span className="text-blue-400">Software Engineering</span>.{" "}
              <br />
              I'm currently working on achieving my{" "}
              <span className="text-blue-400">AWS DEV certifcate</span>.<br />
              I'm also working on Developing new and exciting full stack
              projects. <br />
            </p>
            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold font-epilogue  uppercase ">
                Check out my <span className="text-blue-400">Proj</span>
                <span className="text-red-400">ects</span>
              </h3>
              <GiPentarrowsTornado className="animate-spin text-white text-[35px] " />
            </div>
          </div>
          <div className="  p-4">
            <img
              src="/imgs/profile_pic.jpg"
              alt=""
              srcset=""
              className=" w-full h-[410px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
