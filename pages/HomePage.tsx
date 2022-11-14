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
const HomePage = ({
  projects,
  reviews,

  // ref,
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,

  inView,
}) => {
  // console.log(ref);
  // console.log(ref1);
  // console.log(ref2);
  // console.log(ref3);
  // console.log(ref4);
  // console.log(ref5);
  // const items = [
  //   { reference: "ref", view:" inView", component: <Header /> },
  //   { reference: "ref1", view: "inView1", component: <AboutSection/>},
  //   { reference: "ref2", view: "inView2", component: <Services/>},
  //   { reference: "ref3", view: "inView3", component: <Process/> },
  //   { reference: "ref4", view: "inView4", component: FeaturedProjects },
  //   { reference: "ref5", view: "inView5", component: Header },
  // ];

  return (
    <ScrollWrapper inView={inView}>
      <div>
        <Wrapper>
          <section>
            <Header />
          </section>
        </Wrapper>

        <Wrapper ref={ref2}>
          <section>
            <Services />
          </section>
        </Wrapper>

        <Wrapper ref={ref2}>
          <section>
            <Process />
          </section>
        </Wrapper>

        <Wrapper ref={ref3}>
          <section>
            {projects?.length && <FeaturedProjects projects={projects} />}
          </section>
        </Wrapper>
        <Wrapper ref={ref4}>
          <section>
            <WhyUs />
          </section>
        </Wrapper>
        <Wrapper ref={ref1}>
          <section>
            <AboutSection />
          </section>
        </Wrapper>
        <Wrapper ref={ref5}>
          {reviews?.length && <Testimonial reviews={reviews} />}
        </Wrapper>
        <Wrapper ref={ref5}>
          <Contact />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </ScrollWrapper>
  );
};

export default HomePage;
