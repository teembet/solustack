import React, { useState } from "react";

import Image from "next/image";

import "react-multi-carousel/lib/styles.css";
import useFetchProjects from "../../hooks/useFetchProjects";
import Lottie from "react-lottie";
import animationData from "../../public/images/arrow-right.json";
import RobotAnimation from "../../public/images/robot.json";

const arrowRightOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const robotOptions = {
  loop: true,
  autoplay: true,
  animationData: RobotAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeaturedProjects = ({ projects }) => {
  const [sliceIndex, setSliceIndex] = useState<any>(1);
  const { getProject } = useFetchProjects();
  const [show, setShow] = useState(false);
  const viewProject = (id) => {
    getProject(id);
  };

  function increaseIndex() {
    if (sliceIndex < projects.length) {
      setShow(true);
      setSliceIndex(sliceIndex + 1);
    } else {
      setShow(false);
      setSliceIndex(1);
    }
  }
  return (
    <>
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 2 }}
        // viewport={{ once: true }}
        className="w-full  py-12  md:rounded-t-[96px] font-supreme text-white"
      >
        <div className="w-full border-b border-b-[#FFFFFF30] mb-4">
          <div className="w-11/12 xl:w-10/12 mx-auto">
            <div className="  flex md:items-center justify-between overflow-x-clip mb-4  ">
              <div
                // initial={{ x: -100 }}
                // whileInView={{ x: 0 }}
                // viewport={{ once: true }}
                // transition={{
                //   delay: 0.4,
                //   duration: 2,
                // }}
                className=" "
              >
                <h4 className="font-semibold text-xl md:text-3xl font-technor text-white">
                  Our Featured Projects
                </h4>
              </div>
              <div className="  text-end">
                <a href="#contact">
                  <button className="bg-white text-blue2 py-2 px-6 md:px-12 whitespace-nowrap hover:bg-blue3 hover:text-white   rounded">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>
            <div className="md:w-3/5">
              <p className=" md:text-justify my-5text-white">
                Check out some of the timeless projects, to have a sneak peek
                into our world of solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full relative ">
          <div className="w-11/12 xl:w-10/12 mx-auto ">
            {projects.slice(0, sliceIndex).map((proj, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 "
              >
                <div className="flex flex-col justify-center items-start text-white">
                  <h4 className="font-technor font-medium text-2xl mb-3 capitalize">
                    {proj.name}
                  </h4>
                  {/* <div className="mb-3">
                    {proj.tags.map((tag,i)=>(
                      <button key={i} className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                      {tag}
                    </button>
                    ))}
                
                  </div>  */}
                  <p className="text-xs lg:text-sm">{proj.brief}</p>

                  <button
                    className="bg-white text-blue2 py-2 px-12 my-8 hover:bg-blue3 hover:text-white  rounded "
                    onClick={() => viewProject(proj.id)}
                  >
                    View Project
                  </button>
                </div>
                <div className=" flex flex-col justify-center align-center">
                  <div className=" mx-auto p-4">
                    <Image src={proj.bg} alt="" width={400} height={300} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#005BA4] py-5 px-8 md:rounded-b-[96px]  ">
        <div className="w-11/12 xl:w-10/12 mx-auto flex justify-end items-center">
          <div
            className="w-fit flex justify-end items-center cursor-pointer"
            onClick={increaseIndex}
          >
            <div className="">
              <Lottie options={robotOptions} height={45} width={45} />
            </div>
            <span className="font-technor text-md lg:text-2xl font-medium mx-3 text-white">
              {!show ? "View More Projects" : "Collapse"}
            </span>

            <div className="">
              <Lottie options={arrowRightOptions} height={35} width={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
