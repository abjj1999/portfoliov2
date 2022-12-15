import React from "react";
import { projects } from "../utils/index";

import IconDisplay from "../components/IconDisplay";
import ProjectCard from "../components/ProjectCard";

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
      <div className="sm:ml-[70px] md:ml[20px] flex-1 flex justify-center items-center h-[60vh]">
        <div className="flex flex-wrap  mt-[20px] gap-[30px] p-5 mt-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
