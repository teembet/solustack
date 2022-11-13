import React, { lazy, useState } from "react";
import Hamburger from "../../public/icons/nav_icon.svg";
import Close from "../../public/icons/close_nav.svg";
import Instagram from "../../public/icons/instagram-nav.svg";
import Facebook from "../../public/icons/facebook-nav.svg";
import Twitter from "../../public/icons/twitter-nav.svg";
import LinkedIn from "../../public/icons/linkedin-nav.svg";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const navItems = [
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
    name: "About Us",
    link: "about-us",
  },

  {
    name: "Get In Touch",
    link: "contact",
  },
];
// const sms = [
//   {
//     icon: `${Facebook.src}`,
//     link: "",
//   },
//   {
//     icon: `${Instagram.src}`,
//     link: "",
//   },
//   {
//     icon: `${Twitter.src}`,
//     link: "",
//   },
//   {
//     icon: `${LinkedIn.src}`,
//     link: "",
//   },
// ];

const Tab = ({ item, active, setActive }) => {
  return (
    <li
      onClick={() => {
        setActive(item.name);
      }}
      className={` ${
        active === item.name ? "border-b-4 border-b-blue3" : ""
      }  px-3 py-2 text-sm  lg:text-base  cursor-pointer font-supreme`}
    >
      <a href={`/#${item.link}`}> {item.name}</a>
    </li>
  );
};
const MobileTab = ({ item, active, setActive, setIsOpen }) => {
  return (
    <li
      onClick={() => {
        setActive(item.name);
        setIsOpen(false);
      }}
      className={` ${
        active === item ? "border-b-4 border-b-blue2" : ""
      }  p-3 my-4 text-sm lg:text-base cursor-pointer font-supreme`}
    >
      <a href={`#${item.link}`}> {item.name}</a>
    </li>
  );
};
type Prop = {
  activeTab?: () => void;
  socials?: any;
};
const Navbar = ({ activeTab, socials }: Prop) => {
  const [active, setActive] = useState(activeTab());
  const [isOpen, setIsOpen] = useState(false);

  // const renderThemeToggle = () => {
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  //   if (currentTheme === "dark") {
  //     return (
  //       <div className=" rounded-sm p-2 " onClick={() => setTheme("light")}>
  //         {" "}
  //         <Image src={Light} alt="" width={25} height={25} />{" "}
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className=" rounded-sm p-2 " onClick={() => setTheme("dark")}>
  //       {" "}
  //       <Image src={Dark} alt="" width={25} height={25} />{" "}
  //     </div>
  //   );
  // };
  return (
    <div
      className={`sticky top-0 z-50  ${
        isOpen ? "bg-dark4" : "bg-bg1/30"
      }  backdrop-blur-lg text-white font-supreme`}
    >
      <div className="w-full hidden md:block pt-4 relative">
        {/* <div className="absolute top-3 right-3">{renderThemeToggle()}</div> */}
        <div className="w-fit  mx-auto ">
          <h2 className="mx-auto  font-technor font-bold text-3xl py-3">
            <Link href={"/"}>Solustack</Link>
          </h2>
        </div>

        <div className="w-full md:w-5/6  xl:w-3/6 mx-auto ">
          <ul
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.8 }}
            className="flex justify-between  font-medium"
          >
            {navItems.map((item, i) => (
              <Tab
                key={i}
                item={item}
                active={activeTab()}
                setActive={setActive}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full pt-6 pb-2  md:hidden  relative">
        <div className="flex justify-between items-center px-6">
          <div>
            <h2 className="  font-technor font-semibold text-40 py-1">
              <Link href={"/"}>Solustack</Link>
            </h2>
          </div>

          {/* <div className="">{renderThemeToggle()}</div> */}

          <div className="">
            {isOpen ? (
              <div onClick={() => setIsOpen(false)}>
                <Image
                  src={Close}
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </div>
            ) : (
              <div onClick={() => setIsOpen(true)}>
                <Image
                  src={Hamburger}
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute w-full mx-auto bg-dark4 text-white py-6 ">
            <ul className="flex  flex-col justify-between items-center font-supreme font-medium mb-4">
              {navItems.map((item, i) => (
                <MobileTab
                  key={i}
                  item={item}
                  active={activeTab()}
                  setActive={setActive}
                  setIsOpen={setIsOpen}
                />
              ))}
            </ul>
            <ul className="list-none flex justify-center ">
              {socials.map((item, i) => (
                <li key={i} className="mr-5">
                  <a href={item.link}>
                    <Image src={item.icon} alt="" width={20} height={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
