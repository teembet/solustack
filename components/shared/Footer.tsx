import React from "react";
import  Instagram from "../../assets/icons/instagram-white.svg"
import Facebook  from "../../assets/icons/facebook-white.svg"
import  LinkedIn  from "../../assets/icons/linkedin-white.svg"
import Twitter  from "../../assets/icons/twitter-white.svg"

const Footer = () => {
  return (
    <div className="w-full bg-blue2 p-4 py-12 text-white font-graphie">
      <div className="lg:w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div>
              <h3 className="font-semibold text-2xl mb-6">Solustack</h3>
              <p className="text-sm text-justify mb-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>

              <button className="bg-white text-dark1 font-semibold px-10 py-2">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-5">
              <div className="col-span-2 lg:text-center">
              <h6 className="font-semibold mb-6">Company</h6>
              <ul className="list-none flex flex-col text-xs">
                <li className="mb-2">Work</li>
                <li className="mb-2">Services</li>
                <li className="mb-2">About Us</li>
              </ul>
            </div>
            <div className="col-span-3 text-lg">
              <p>+8801913876520</p>
              <p>company@gmail.com</p>
              <ul className="list-none flex items-center my-4">
                <li className="mr-4"><Facebook className="w-6"/></li>
                <li className="mr-4"><LinkedIn className="w-6"/></li>
                <li className="mr-4"><Twitter className="w-6"/></li>
                <li className="mr-4"><Instagram className="w-6"/></li>
              </ul>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
