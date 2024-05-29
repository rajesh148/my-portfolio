import React, { useState } from "react";
import SectionTittle from "../../components/SectionTittle";
// import { experiences } from "../../utils/Constants";
import { useSelector } from "react-redux";

const Experiences = () => {
  const [expIdx, setExpIdx] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  let { experiences } = portfolioData;

  const handleExpIdx = (id) => {
    setExpIdx(id);
  };
  return (
    <div>
      <SectionTittle title="Experience" />
      <div className="flex py-10 gap-10 md:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#124d2894] w-1/3 md:flex-row md:overflow-x-scroll md:w-full">
          {experiences.map((exp, i) => (
            <div
              className="cursor-pointer"
              key={exp._id}
              onClick={() => handleExpIdx(i)}
            >
              <h1
                className={`px-5 ${
                  expIdx === i
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0f7d3d74] py-3"
                    : "text-white"
                }`}
              >
                {exp.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-secondary text-xl">{experiences[expIdx].role}</h1>
          <h1 className="text-tertiary text-xl">
            {experiences[expIdx].company}
          </h1>
          <p className="text-white">{experiences[expIdx].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
