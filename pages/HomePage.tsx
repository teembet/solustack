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

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Process />
      <FeaturedProjects />
      <WhyUs />
      <AboutSection />
      <div className="relative">
        <div
          className="fixed right-[-50%] top-1/2 bg-blue1 rounded-[50%] h-50 w-40 z-20 "
          style={{
            backgroundImage: `url('${Circle.src}')`,
            width: "100%",
            height: "auto",
          }}
        >
          <div className="fixed right-[-50%] top-1/2 bg-blue1 rounded-[50%] h-50 w-40 z-20">
            <Image
              src={Circle.src}
              alt=""
              width={40}
              height={40}
              className="fixed right-[-50%] top-1/2 bg-blue1 rounded-[50%] h-50 w-40 z-20"
            />
          </div>
        </div>
        <Testimonial />
      </div>
      <Contact />
    </div>
  );
};

export default HomePage;
