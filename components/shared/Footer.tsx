import React from "react";
import Instagram from "../../public/icons/instagram-white.svg";
import Facebook from "../../public/icons/facebook-white.svg";
import LinkedIn from "../../public/icons/linkedin-white.svg";
import Twitter from "../../public/icons/twitter-white.svg";
import Grid from "../../public/icons/footer-grid.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative"> 
    <div className="absolute -left-[5%] top-16 bottom-0 w-[20%] rounded-full bg-[#2D2DA0]">

      </div>
    <div className="w-full  p-4 py-12 text-white font-supreme relative backdrop-blur-xl">
     
      <div className="lg:w-11/12 mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="">
              <h3 className="font-bold font-technor text-3xl mb-6">Solustack</h3>
              <p className="text-sm text-justify mb-6 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>

              <button className="bg-white rounded-md text-dark1 font-medium  text-sm  px-10 py-2">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-5">
              <div className="col-span-2 lg:text-center">
                <h6 className="font-semibold mb-6">Company</h6>
                <ul className="list-none flex flex-col text-xs font-graphie">
                  <li className="mb-2">Work</li>
                  <li className="mb-2">Services</li>
                  <li className="mb-2">About Us</li>
                </ul>
              </div>
              <div className="col-span-3 text-lg">
                <p className="">+8801913876520</p>
                <p className="">company@gmail.com</p>
                <ul className="list-none flex items-center my-4">
                  <li className="mr-4">
                    <Image src={Facebook.src} alt="" width={20} height={20} />
                  </li>
                  <li className="mr-4">
                    <Image src={LinkedIn.src} alt="" width={20} height={20} />
                  </li>
                  <li className="mr-4">
                    <Image src={Twitter.src} alt="" width={20} height={20} />
                  </li>
                  <li className="mr-4">
                    <Image src={Instagram.src} alt="" width={20} height={20} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </div>
       <div className="absolute bottom-0 right-20">
          <Image src={Grid} alt="" height={150}  />
          </div>
    </div></div>
  );
};

export default Footer;
