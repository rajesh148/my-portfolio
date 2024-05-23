import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-3 lg:px-10">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
