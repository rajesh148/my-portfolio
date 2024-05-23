import React, { useState } from "react";
import { projects } from "../../utils/Constants";
import SectionTittle from "../../components/SectionTittle";

const Projects = () => {
  const [expIdx, setExpIdx] = useState(0);

  const handleExpIdx = (id) => {
    setExpIdx(id);
  };
  return (
    <div>
      <SectionTittle title="Projects" />
      <div className="flex py-10 gap-10 md:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#124d2894] w-1/3 md:flex-row md:overflow-x-scroll md:w-full">
          {projects.map((project, i) => (
            <div
              className="cursor-pointer"
              key={project._id}
              onClick={() => handleExpIdx(i)}
            >
              <h1
                className={`px-5 ${
                  expIdx === i
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0f7d3d74] py-3"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-secondary text-xl">{projects[expIdx].title}</h1>
          <p className="text-white">{projects[expIdx].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
