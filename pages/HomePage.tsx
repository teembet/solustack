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
import Wrapper from "../element/Wrapper";
import ScrollWrapper from "../element/ScrollWrapper";
import { useInView } from "react-intersection-observer";
const HomePage = ({ projects }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });

  const activeTab = () => {
    if (inView) {
      return 1;
    } else if (inView2 && !inView) {
      return 2;
    }
  };

  console.log(activeTab(), "active tab");
  return (
    <ScrollWrapper inView={inView}>
      <div>
        <Wrapper ref={ref}>
          <section>
            <Header />
          </section>
        </Wrapper>

        <Wrapper ref={ref2}>
          <section>
            <AboutSection />
          </section>
        </Wrapper>

        <Wrapper>
          <section>
            <Services />
          </section>
        </Wrapper>

        <Wrapper>
          <section>
            <Process />
          </section>
        </Wrapper>

        <Wrapper>
          <section>
            {projects && <FeaturedProjects projects={projects} />}
          </section>
        </Wrapper>
        <Wrapper>
          <section>
            <WhyUs />
          </section>
        </Wrapper>
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
    </ScrollWrapper>
  );
};

export default HomePage;
