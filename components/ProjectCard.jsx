import Link from "next/link";
import React from "react";
import { GiSparkSpirit } from "react-icons/gi";
import { SiSparkpost } from "react-icons/si";

const ProjectCard = ({ project, key }) => {
  return (
    <div
      key={key}
      className="sm:w-[300px] w-full rounded-[15px] bg-[#1c1c24] curser-pointer p-4"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-[158px] object-cover rounded-[15px]"
      />
      <div className="flex flex-col">
        <div className="flex flex-row mt-2">
          <h1 className=" text-white font-epilogue font-bold text-lg p-3">
            {project.name}
          </h1>
          <GiSparkSpirit className="text-red-400 text-2xl mt-2" />
        </div>
        <div className="flex flex-wrap  ">
          {project.tags.map((tag, i) => (
            <p
              key={i}
              className={`p-2 text-white font-epilogue font-semibold text-sm bg-[#2c2f32] rounded-[15px] mx-1 my-1
                    ${i % 2 === 0 ? "text-red-400" : "text-blue-400"}
                    `}
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="p-1 text-white font-normal font-epilogue text-[14px]">
          {project.description}
        </p>
      </div>
      <div className="mt-3 flex flex-row justify-around items-center">
        <button className="font-epilogue font-semibold text-[16px] text-white leading-[26px] py-2 px-3 rounded-[10px] bg-gradient-to-r from-sky-300 to-blue-500 hover:from-purple-500 hover:to-red-500">
          <Link href={project.github} passHref>
            Github
          </Link>
        </button>
        <button className="font-epilogue font-semibold text-[16px] text-white leading-[26px] py-2 px-3 rounded-[10px] bg-gradient-to-r from-purple-400 to-red-500 hover:from-sky-500 hover:to-blue-500">
          <Link href={project.live_app} passHref>
            Live
          </Link>
        </button>
      </div>
      <SiSparkpost className="text-white text-3xl mt-2" />
    </div>
  );
};

export default ProjectCard;
