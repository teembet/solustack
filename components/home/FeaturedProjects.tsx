import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CaretRight from "../../public/icons/caret-right.svg";
import ProjectOne from "../../public/images/project-one.jpg";
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
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration:2 }}
    viewport={{ once: true }}
    className="w-full  py-12 feature-project-bg font-supreme">
      <div className="w-full border-b border-b-bg2 mb-4">
      <div className="w-11/12 xl:w-10/12 mx-auto  flex md:items-center justify-between overflow-x-clip mb-4  ">
        <motion.div 
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 2,
        }}
        className="md:w-3/5 ">
          <h4 className="font-semibold text-3xl font-technor">Our Featured Projects</h4>
          <p className=" md:text-justify my-5 text-grey4 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </motion.div>
        <motion.div 
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 2,
        }}
        className="md:w-2/5  text-end">
          <a href="#contact">
            <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-6 md:px-12 whitespace-nowrap  text-white rounded">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </div>
      </div>

      <div className="w-full relative ">
<div className="w-11/12 xl:w-10/12 mx-auto ">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="my-6 ">
  <h4 className="font-technor font-medium text-2xl ">Title of Project</h4>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

  <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
              View Project
            </button>

</div>
<div className=" flex flex-col justify-center align-center">
  <div className=" ">
  <Image src={ProjectOne} alt=""   />
    </div>
</div>


  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="my-6 ">
  <h4 className="font-technor font-medium text-2xl ">Title of Project</h4>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

  <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
              View Project
            </button>

</div>
<div className=" flex flex-col justify-center align-center">
  <div className=" ">
  <Image src={ProjectOne} alt=""   />
    </div>
</div>


  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="my-6 ">
  <h4 className="font-technor font-medium text-2xl ">Title of Project</h4>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
  <br/>
  <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

  <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
              View Project
            </button>

</div>
<div className=" flex flex-col justify-center align-center">
  <div className=" ">
  <Image src={ProjectOne} alt=""   />
    </div>
</div>


  </div>

</div>

      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
