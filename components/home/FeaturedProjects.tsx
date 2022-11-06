import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CaretRight from "../../public/icons/caret-right.svg";
import ProjectOne from "../../public/images/project-one.jpg";
import Pencils from "../../public/images/pencils.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchProjects from "../../hooks/useFetchProjects";
import Lottie from "react-lottie";
import animationData from "../../public/images/arrow-right.json";
import RobotAnimation from "../../public/images/robot.json";
import { projects } from "../../data/projects";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1023 },
//     items: 2,
//     partialVisibilityGutter: 35, // this is needed to tell the amount of px that should be visible.
//   },
//   tablet: {
//     breakpoint: { max: 1023, min: 700 },
//     items: 2,
//     partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
//   },
//   mobile: {
//     breakpoint: { max: 700, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
//   },
// };

// const Slide = ({ item }) => {
//   const { getProject } = useFetchProjects();

//   const viewProject = (id) => {
//     getProject(id);
//   };
//   return (
//     <div id="projects">
//       <div
//         className="bg-cover bg-no-repeat bg-center relative rounded-lg min-h-[70vh] w-full"
//         style={{
//           backgroundImage: `linear-gradient(180deg, #5D5D5D0A 0%, #3F3D38B0 100%), url('${item.bg}')`,
//         }}
//       >
//         <div className="absolute top-12 left-5 flex items-center flex-wrap gap-3">
//           {item.tags.map((tag, i) => (
//             <button
//               key={i}
//               className="bg-[#3F3D38] px-6 py-2 text-white rounded text-xs md:text-sm mr-4"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         <div className="absolute bottom-6 left-4">
//           <div className="text-white capitalize">
//             <div className="mb-4">
//               <p className="text-sm ">App Name</p>
//               <p className="font-semibold text-lg ">{item.name}</p>
//             </div>
//             <div>
//               <p className="text-sm">Client Name</p>
//               <p className="font-semibold text-lg ">{item.client}</p>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-3 right-4 cursor-pointer">
//           <Image
//             src={`${CaretRight.src}`}
//             alt=""
//             onClick={() => viewProject(item.id)}
//             width={40}
//             height={40}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

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
  const [sliceIndex, setSliceIndex] = useState<any>();
  const { getProject } = useFetchProjects();

  const viewProject = (id) => {
    getProject(id);
  };

  function increaseIndex() {
    if (sliceIndex < 2) {
      setSliceIndex(sliceIndex + 1);
    } else return;
  }
  return (
    <>
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 2 }}
        // viewport={{ once: true }}
        className="w-full  py-12 bg-blue4 md:rounded-t-[96px] font-supreme text-white"
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
                  <button className="bg-white text-blue2 py-2 px-6 md:px-12 whitespace-nowrap   rounded">
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
                    className="bg-white text-blue2 py-2 px-12 my-8   rounded "
                    onClick={() => viewProject(proj.id)}
                  >
                    View Project
                  </button>
                </div>
                <div className=" flex flex-col justify-center align-center">
                  <div className=" mx-auto p-4">
                    <Image
                      src={proj.bg}
                      alt=""
                      width={800}
                      height={700}
                      loading="lazy"
                    />
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
            onClick={() => {
              increaseIndex;
            }}
          >
            <div className="">
              <Lottie options={robotOptions} height={45} width={45} />
            </div>
            <span className="font-technor text-md lg:text-2xl font-medium mx-3 text-white">
              View More Projects
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
