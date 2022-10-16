import React, { useState } from "react";

const navItems = [
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Our Services",
    link: "services",
  },
  {
    name: "Featured Projects",
    link: "projects",
  },
  {
    name: "Why Us",
    link: "why-us",
  },
  {
    name: "Get In Touch",
    link: "contact",
  },
];

const Tab = ({ item, active, setActive }) => {
  return (
    <li
      onClick={() => {
        setActive(item);
      }}
      className={` ${
        active === item ? "border-b-4 border-b-blue2" : ""
      }  px-3 py-2 text-sm cursor-pointer`}
    >
      <a href={`#${item.link}`}> {item.name}</a>
    </li>
  );
};
const Navbar = () => {
  const [active, setActive] = useState(navItems[1]);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="w-full  pt-4">
        <div className="w-fit  mx-auto ">
          <h2 className="mx-auto  font-poppins font-semibold text-4xl py-3">
            Solustack
          </h2>
        </div>

        <div className="w-full md:w-4/6  lg:w-3/6 mx-auto ">
          <ul className="flex justify-between font-generalSans font-medium">
            {navItems.map((item, i) => (
              <Tab key={i} item={item} active={active} setActive={setActive} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
