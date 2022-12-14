import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../assets/images/about_header.jpg";
import { projects } from "../../data/projects";
import LightMode from "../../components/project/LightMode";
import DarkMode from "../../components/project/DarkMode";
import DesignScreen2 from "../../components/project/DesignScreen2";
import DesignScreen3 from "../../components/project/DesignScreen3";
import useFetchProjects from "../../hooks/useFetchProjects";
import { useProjectContext } from "../../hooks/useProjectContext";
import Navbar from "../../components/shared/Navbar";
import Contact from "../../components/home/Contact";
import { formatText } from "../../element/util";
const Title = ({ title }) => {
  return (
    <h4 className="font-semibold text-2xl lg:text-4xl xl:text-5xl mb-3 font-supreme">
      {title}
    </h4>
  );
};
const Text = ({ text }) => {
  return (
    <p
      className="text-sm  lg:text-base font-technor"
      style={{ whiteSpace: "pre-line" }}
    >
      {formatText(text)}
    </p>
  );
};

const Project = () => {
  const router = useRouter();

  const { getProject } = useFetchProjects();
  const { project } = useProjectContext();
  useEffect(() => {
    if (router.asPath !== router.route) {
      const id = router.query.id;

      if (
        project && // 👈 null and undefined check
        Object.keys(project).length === 0 &&
        Object.getPrototypeOf(project) === Object.prototype
      ) {
        if (id != undefined || null || "") {
          getProject(id);
        } else {
          router.push(`/`);
        }
      }
    } else {
    }
  }, [router]);

  const activeTab = () => "Featured Projects";

  return (
    <>
      <Navbar activeTab={activeTab} />

      <div className="font-generalSans w-full  bg-dark4">
        <div
          className="h-[60vh] bg-contain  bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url('${project.bg}')`,
          }}
        >
          {/* <div className="absolute bottom-3 left-0 right-0">
          <div className="w-fit mx-auto">
            {project.tags.map((tag, i) => (
              <button
                key={i}
                className="bg-[#3F3D38] px-6 py-2 text-white rounded text-sm mr-4"
              >
                {tag}
              </button>
            ))}
          </div>
        </div> */}
        </div>
        <div className="p-4 w-full lg:w-11/12 mx-auto text-white">
          <div className="lg:w-9/12 py-4">
            <div className="mb-8">
              <Title title="App Name" />
              <Text text={project?.name} />
            </div>
            {/* <div className="mb-8">
              <Title title="Challenge" />
              <Text text={project.challenge} />
            </div> */}
            <div className="mb-8">
              <Title title="Brief" />
              <Text text={project?.brief} />
            </div>
            <div className="mb-8">
              <Title title="Functional Requirements" />
              <Text text={project?.requirements} />
            </div>
          </div>
        </div>
        {project.lightimg && <LightMode images={project.lightimg} />}
        {project.darkimg && <DarkMode images={project.darkimg} />}
        {/* <DesignScreen3 /> */}
        {/* <DesignScreen2 /> */}
        {/* <DesignScreen3 /> */}
        <Contact />
      </div>
    </>
  );
};

export default Project;
