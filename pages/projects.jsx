import React from "react";
import { projects, comingSoon } from "../utils/index";

import IconDisplay from "../components/IconDisplay";
import ProjectCard from "../components/ProjectCard";
import { GiSparkSpirit } from "react-icons/gi";
import Link from "next/link";

const Projects = () => {
  // console.log(projects);

  return (
    <div className="flex w-full flex-col  justify-between">
      <div className="text- h-[10vh]">
        <h1 className="text-4xl text-center font-epilogue  font-bold">
          <span className="text-red-400 text-4xl">{"<"}</span>
          <span className="text-white">Projects</span>
          <span className="text-blue-400 text-5xl">{"/>"}</span>
        </h1>
      </div>
      <div className=" flex justify-center ">
        <IconDisplay />
      </div>
      <div className=" w-full m-3 flex-1 flex justify-center items-center h-[60vh]">
        <div className="flex flex-wrap  mt-[20px] gap-[30px] p-5 mt-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
      <div className=" p-4 rounded-[15px] flex flex-col justify-center ">
        <h1 className=" bg-gray-800 p-4 rounded-[15px] text-2xl text-center font-epilogue  font-bold">
          <span className="text-red-400 text-4xl">{"<"}</span>
          <span className="text-white text-5xl">Coming Soon</span>
          <span className="text-blue-400 text-5xl">{"/>"}</span>
        </h1>
        <div className="flex flex-wrap justify-around  mt-[20px] gap-[30px] p-5 mt-5">
          {comingSoon.map((project, i) => (
            <div key={i} className="card bg-[#1c1c24] curser-pointer p-4 rounded-[10px]">
              <img
        src={project.image}
        alt={project.name}
        className="w-full h-[158px] object-cover rounded-[15px]"
      />
      <div className="flex flex-col ">
        <div className="flex flex-row justify-center mt-2">
          <h1 className=" text-white font-epilogue font-bold text-lg p-3">
            {project.name}
          </h1>
          <GiSparkSpirit className="text-red-400 text-2xl mt-2 text-center" />
        </div>
          <div className="mt-3 flex flex-row justify-around items-center">
        <button className="font-epilogue font-semibold text-[16px] text-white leading-[26px] py-2 px-3 rounded-[10px] bg-gradient-to-r from-sky-300 to-blue-500 hover:from-purple-500 hover:to-red-500">
          <Link href={project.github} passHref rel="noreferrer" target="_blank">
            Github
          </Link>
        </button>
        </div>
        </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
