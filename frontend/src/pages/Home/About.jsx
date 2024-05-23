import React from "react";
import SectionTittle from "../../components/SectionTittle";
import DeveloperLogo from "../../assets/Developer_2.webp";
import { technologies } from "../../utils/Constants";

const About = () => {
  return (
    <div>
      <SectionTittle title="About" />
      <div className="flex w-full items-center lg:flex-col">
        <div className="flex justify-center items-center h-[70vh] w-1/2 lg:w-full">
          <img src={DeveloperLogo} />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-80 sm:text-xl lg:w-full lg:text-2xl">
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            expedita, quam perspiciatis eligendi necessitatibus ut ab modi sequi
            voluptatum debitis ipsa suscipit culpa laboriosam corrupti commodi
            delectus fugit ea placeat!
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            tempora ad illo, maxime necessitatibus tenetur facilis molestiae
            eligendi omnis saepe?
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl lg:text-2xl">
          Here are few technologies I've been working.
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 sm:text-xl lg:text-2xl">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="border border-tertiary px-10 py-3 lg:px-7"
            >
              <h1 className="text-tertiary">{tech}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
