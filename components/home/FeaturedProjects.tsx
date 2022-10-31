import React, {useState} from "react";
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

  const[sliceIndex, setSliceIndex] = useState<any>()
  const { getProject } = useFetchProjects();

  const viewProject = (id) => {
    getProject(id);
  };

  function increaseIndex(){
    if(sliceIndex < projects.length){
      setSliceIndex(sliceIndex+1)
    }else return
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-full  py-12 bg-blue4 rounded-t-[96px] font-supreme"
      >
        <div className="w-full border-b border-b-[#FFFFFF30] mb-4">
          <div className="w-11/12 xl:w-10/12 mx-auto">
          <div className="  flex md:items-center justify-between overflow-x-clip mb-4  ">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 2,
              }}
              className=" "
            >
              <h4 className="font-semibold text-3xl font-technor">
                Our Featured Projects
              </h4>
              
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 2,
              }}
              className="  text-end"
            >
              <a href="#contact">
                <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-6 md:px-12 whitespace-nowrap  text-white rounded">
                  Get in Touch
                </button>
              </a>
            </motion.div>
          </div>
         <div className="md:w-3/5">
          
          <p className=" md:text-justify my-5 text-grey4 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </p></div>
          </div>
        </div>

        <div className="w-full relative ">
          <div className="w-11/12 xl:w-10/12 mx-auto ">
            {projects.slice(0, sliceIndex).map((proj, i)=>(
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 ">
                <div className="">
                  <h4 className="font-technor font-medium text-2xl mb-3 capitalize">
                    {proj.name}
                  </h4>
                  <div className="mb-3">
                    {proj.tags.map((tag,i)=>(
                      <button key={i} className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                      {tag}
                    </button>
                    ))}
                
                  </div>
                  <p className="text-xs lg:text-sm">
                   {proj.brief}
                  </p>
                  {/* <br />
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit 
                  </p> */}
  
                 <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded" onClick={() => viewProject(proj.id)}>
                    View Project
                  </button>
                </div>
                <div className=" flex flex-col justify-center align-center">
                  <div className=" max-w-[400px]">
                    <Image src={proj.bg} alt="" height={400} width={600} />
                  </div>
                </div>
              </div>
            ))}
          

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 ">
              <div className="">
                <h4 className="font-technor font-medium text-2xl mb-3">
                  Title of Project
                </h4>
                <div className="mb-3">
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    iOS
                  </button>
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    UI/UX Design
                  </button>
                </div>
                <p className="text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit 
                </p>
                <br />
                <p className="text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit 
                </p>

               <Link href={`/projects/${1}`}> 
               <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
                  View Project
                </button>
                </Link>
              </div>
              <div className=" flex flex-col justify-center align-center">
                <div className=" ">
                  <Image src={ProjectOne} alt="" />
                </div>
              </div>
            </div> */}
            {/* second */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
              <div className=" md:order-last">
                <h4 className="font-technor font-medium text-2xl mb-3">
                  Title of Project
                </h4>
                <div className="mb-3">
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    iOS
                  </button>
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    UI/UX Design
                  </button>
                </div>
                <p className="text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                </p>

                <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
                  View Project
                </button>
              </div>
              <div className=" flex flex-col justify-center align-start ">
                <div className=" ">
                  <Image src={Pencils} alt="" />
                </div>
              </div>
            </div> */}

            {/* third */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
              <div className=" ">
                <h4 className="font-technor font-medium text-2xl mb-3">
                  Title of Project
                </h4>
                <div className="mb-3">
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    iOS
                  </button>
                  <button className="bg-blue2 py-1 px-6 text-sm text-white rounded-md mr-4">
                    UI/UX Design
                  </button>
                </div>
                <p className="text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet
                </p>
                <br />
                <p className="text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit 
                </p>

                <button className="bg-blue1 dark:bg-white dark:text-blue2 py-2 px-12 my-8  text-white rounded">
                  View Project
                </button>
              </div>
              <div className=" flex flex-col justify-center align-center">
                <div className=" ">
                  <Image src={ProjectOne} alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
      <div className="w-full bg-[#005BA4] py-5 px-8 rounded-b-[96px]  ">
        <div className="w-11/12 xl:w-10/12 mx-auto flex justify-end items-center">
          <div className="w-fit flex justify-end items-center cursor-pointer" onClick={()=>{
            increaseIndex
          }}>
          <div className="">
            <Lottie options={robotOptions} height={45} width={45} />
          </div>
          <span className="font-technor text-md lg:text-2xl font-medium mx-3">
            View More Projects
          </span>

          <div className="">
            <Lottie options={arrowRightOptions} height={35} width={60} />
          </div>
        </div></div>
      </div>
    </>
  );
};

export default FeaturedProjects;
