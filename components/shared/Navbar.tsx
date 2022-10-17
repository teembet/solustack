import React, { useState } from "react";
import Hamburger from "../../public/icons/nav_icon.svg";
import Close from "../../public/icons/close_nav.svg";
import Instagram from "../../public/icons/instagram-nav.svg";
import Facebook from "../../public/icons/facebook-nav.svg";
import Twitter from "../../public/icons/twitter-nav.svg";
import LinkedIn from "../../public/icons/linkedin-nav.svg";
import Light from "../../public/icons/sun.png";
import Dark from "../../public/icons/moon.png";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from 'next-themes';

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
const sms = [
  {
    icon: `${Facebook.src}`,
    link: "",
  },
  {
    icon: `${Instagram.src}`,
    link: "",
  },
  {
    icon: `${Twitter.src}`,
    link: "",
  },
  {
    icon: `${LinkedIn.src}`,
    link: "",
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
const MobileTab = ({ item, active, setActive, setIsOpen }) => {
  return (
    <li
      onClick={() => {
        setActive(item);
        setIsOpen(false);
      }}
      className={` ${
        active === item ? "border-b-4 border-b-blue2" : ""
      }  p-3 my-5 text-sm cursor-pointer`}
    >
      <a href={`#${item.link}`}> {item.name}</a>
    </li>
  );
};
const Navbar = () => {
  const [active, setActive] = useState(navItems[1]);
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
        className=' rounded-sm p-2 shadow-md'
          onClick={() => setTheme("light")}
          type="button"
        > <Image src={Light} alt="" width={25} height={25} /> </button>
      );
    }
    return (
      <button
      className=" rounded-sm p-2 shadow-md"
      onClick={() => setTheme("dark")}
      type="button"
    > <Image src={Dark} alt="" width={25} height={25} /> </button>
    );
  };
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-darkBg dark:text-white">
      <div className="w-full hidden md:block pt-4 relative">
        <div className="absolute top-3 right-3">
        {renderThemeToggle()}
        </div>
        <div className="w-fit  mx-auto ">
          <h2 className="mx-auto  font-poppins font-semibold text-4xl py-3">
            <Link href={"/"}>Solustack</Link>
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
      <div className="w-full pt-6 pb-2  md:hidden  relative">
        <div className="flex justify-between items-center px-6">
          <div>
            <h2 className="  font-poppins font-semibold text-2xl py-3">
              Solustack
            </h2>
          </div>

          <div className="">
        {renderThemeToggle()}
        </div>

          <div className="">
            {isOpen ? (
              <div onClick={() => setIsOpen(false)}>
                <Image src={Close} alt="" width={25} height={25} />
              </div>
            ) : (
              <div onClick={() => setIsOpen(true)}>
                <Image src={Hamburger} alt="" width={25} height={25} />
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute w-full mx-auto bg-white dark:bg-darkBg dark:text-white py-6 ">
            <ul className="flex  flex-col justify-between items-center font-generalSans font-medium mb-4">
              {navItems.map((item, i) => (
                <MobileTab
                  key={i}
                  item={item}
                  active={active}
                  setActive={setActive}
                  setIsOpen={setIsOpen}
                />
              ))}
            </ul>
            <ul className="list-none flex justify-center ">
              {sms.map((item, i) => (
                <li key={i} className="mr-5">
                  <Image src={item.icon} alt="" width={20} height={20} />
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
