import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  const { welcomeTxt, fullName, caption, description } = portfolioData?.intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start gap-8 py-10">
      <h1 className="text-white">{welcomeTxt || ""}</h1>
      <h1 className="sm:text-3xl lg:text-5xl text-7xl text-secondary font-semibold ">
        {fullName || ""}
      </h1>
      <h1 className="text-white font-semibold sm:text-3xl lg:text-5xl text-7xl">
        {caption || ""}
      </h1>
      <p className="text-white">{description || ""}</p>
      <button className="border-2 border-tertiary text-white rounded-md px-6 py-3">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
