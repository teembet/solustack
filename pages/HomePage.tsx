import Header from "../components/shared/Header";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyUs from "../components/home/WhyUs";
import AboutSection from "../components/home/AboutSection";
import Testimonial from "../components/home/Testimonial";
import Contact from "../components/home/Contact";
import Image from "next/image";
import * as React from "react";
import Circle from "../public/icons/circle.svg";
import Footer from "../components/shared/Footer";

const HomePage = ({ projects }) => {
  return (
    <div>
      <Header />
      <Services />
      <Process />
      {projects && <FeaturedProjects projects={projects} />}
      <WhyUs />
      <AboutSection />
      <div className="relative overflow-x-clip">
        <div
          className="absolute bg-blue1 rounded-[50%] h-32 w-32 -right-20 -top-16 lg:h-40 lg:w-40 lg:-top-20 lg:-right-24   xl:h-52 xl:w-48 xl:-right-28 xl:-top-24"
          style={{
            backgroundImage: `url('${Circle.src}')`,
          }}
        ></div>
        <Testimonial />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
