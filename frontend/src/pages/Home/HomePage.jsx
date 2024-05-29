import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import LeftSide from "./LeftSider";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const HomePage = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData ? (
        <>
          <div className="bg-primary px-40 sm:px-3 lg:px-10">
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
            <LeftSide />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomePage;
