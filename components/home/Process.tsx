import React from "react";
import Collaborate from "../../public/icons/collaborate.svg";
import Implement from "../../public/icons/implement.svg";
import Scale from "../../public/icons/scale.svg";
import Image from "next/image";
const process = [
  {
    icon: `${Collaborate.src}`,
    title: "Collaborate",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    icon: `${Implement.src}`,
    title: "Implement",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    icon: `${Scale.src}`,
    title: "Maintain and Scale",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
];

const Process = () => {
  return (
    <div className="w-full p-4 font-generalSans">
      <div className="w-11/12 mx-auto py-2">
        <div className="w-full lg:w-3/5 ">
          <h4 className="font-semibold text-2xl">
            Our 3 Step Process to Creating Scalable Apps
          </h4>
          <p className="text-justify my-5 text-grey4  dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, i) => (
            <div key={i} className="bg-dark1 p-6 text-white">
              <div className="mb-2">
                <Image src={item.icon} alt="" width={40} height={40} />
              </div>
              <p className="font-semibold text-xl my-3">{item.title}</p>
              <p className=" text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
