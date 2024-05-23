import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="sm:text-3xl lg:text-5xl text-7xl text-secondary font-semibold ">
        Rajesh Bagguva
      </h1>
      <h1 className="text-white font-semibold sm:text-3xl lg:text-5xl text-7xl">
        I build things for Web.
      </h1>
      <p className="text-white">
        I am frontend developer. Currently I am working as a React Developer in
        India
      </p>
      <button className="border-2 border-tertiary text-white rounded-md px-6 py-3">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
