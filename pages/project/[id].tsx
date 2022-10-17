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
const Title = ({ title }) => {
  return (
    <h4 className="font-semibold text-2xl lg:text-4xl xl:text-5xl mb-3">
      {title}
    </h4>
  );
};
const Text = ({ text }) => {
  return <p className="text-sm  lg:text-base">{text}</p>;
};

const Project = () => {
  const router = useRouter();
  const id = router.query.id;
  const { getProject } = useFetchProjects();
  const { project } = useProjectContext();

  console.log(id, "id");
  console.log(project, "pro");
  // const project = projects.find((item) => {
  //   Number(item.id) == Number(router.query.id);
  //   return item;
  // });

  useEffect(() => {
    if (
      project && // 👈 null and undefined check
      Object.keys(project).length === 0 &&
      Object.getPrototypeOf(project) === Object.prototype
    ) {
      getProject(id);
    }
  }, [project]);

  return (
    <div className="font-generalSans w-full mb-36">
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
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
      <div className="p-4 w-full lg:w-11/12 mx-auto">
        <div className="lg:w-9/12 py-4">
          <div className="mb-8">
            <Title title="App Name" />
            <Text text={project.name} />
          </div>
          <div className="mb-8">
            <Title title="Challenge" />
            <Text text={project.challenge} />
          </div>
          <div className="mb-8">
            <Title title="Brief" />
            <Text text={project.brief} />
          </div>
          <div className="mb-8">
            <Title title="Functional Requirements" />
            <Text text={project.requirements} />
          </div>
        </div>
      </div>
      <LightMode />
      <DarkMode />
      <DesignScreen3 />
      <DesignScreen2 />
      <DesignScreen3 />
    </div>
  );
};

export default Project;
