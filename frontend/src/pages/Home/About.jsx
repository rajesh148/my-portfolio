import React from "react";
import SectionTittle from "../../components/SectionTittle";
import DeveloperLogo from "../../assets/Developer_2.webp";
import { technologies } from "../../utils/Constants";
import { useSelector } from "react-redux";

const About = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  let { imgUrl, description1, description2, skills } = portfolioData?.about;
  if (imgUrl === "") {
    imgUrl = DeveloperLogo;
  }
  return (
    <div>
      <SectionTittle title="About" />
      <div className="flex w-full items-center lg:flex-col">
        <div className="flex justify-center items-center h-[70vh] w-1/2 lg:w-full">
          <img src={imgUrl} />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-80 sm:text-xl lg:w-full lg:text-2xl">
          <p className="text-white">{description1}</p>
          <p className="text-white">{description2}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl lg:text-2xl">
          Here are few technologies I've been working.
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 sm:text-xl lg:text-2xl">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-tertiary px-10 py-3 lg:px-7"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
