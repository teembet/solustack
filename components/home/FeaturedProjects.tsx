import React from "react";

import Image from "next/image";
import CaretRight from "../../public/icons/caret-right.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchProjects from "../../hooks/useFetchProjects";
//import { projects } from "../../data/projects";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 2,
    partialVisibilityGutter: 35, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1023, min: 700 },
    items: 2,
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
};

const Slide = ({ item }) => {
  const { getProject } = useFetchProjects();

  const viewProject = (id) => {
    getProject(id);
  };
  return (
    <div id="projects">
      <div
        className="bg-cover bg-no-repeat bg-center relative rounded-lg min-h-[70vh] w-full"
        style={{
          backgroundImage: `linear-gradient(180deg, #5D5D5D0A 0%, #3F3D38B0 100%), url('${item.bg}')`,
        }}
      >
        <div className="absolute top-12 left-5 flex items-center flex-wrap gap-3">
          {item.tags.map((tag, i) => (
            <button
              key={i}
              className="bg-[#3F3D38] px-6 py-2 text-white rounded text-xs md:text-sm mr-4"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="absolute bottom-6 left-4">
          <div className="text-white capitalize">
            <div className="mb-4">
              <p className="text-sm ">App Name</p>
              <p className="font-semibold text-lg ">{item.name}</p>
            </div>
            <div>
              <p className="text-sm">Client Name</p>
              <p className="font-semibold text-lg ">{item.client}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-4 cursor-pointer">
          <Image
            src={`${CaretRight.src}`}
            alt=""
            onClick={() => viewProject(item.id)}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = ({ projects }) => {
  return (
    <div className="w-full p-4 ">
      <div className="w-11/12 mx-auto flex md:items-center justify-between">
        <div className="md:w-3/5 ">
          <h4 className="font-semibold text-2xl">Our Featured Projects</h4>
          <p className=" md:text-justify my-5 text-grey4 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
        <div className="md:w-2/5  text-end">
          <a href="#contact">
            <button className="bg-blue1 py-2 px-12 text-white rounded">
              Get in Touch
            </button>
          </a>
        </div>
      </div>

      <div className="w-full relative ">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          partialVisible={true}
          infinite={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="pb-10 "
          sliderClass=""
          dotListClass=""
          itemClass="carousel-item-padding-40-px"
          // renderDotsOutside={true}
        >
          {projects &&
            projects.map((item, i) => (
              <div key={i} className=" mx-4">
                <Slide item={item} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;
