import React from "react";
import Phone from "../../public/icons/call.svg";
import Email from "../../public/icons/email.svg";
import Instagram from "../../public/icons/instagram.svg";
import Facebook from "../../public/icons/facebook.svg";
import Twitter from "../../public/icons/twitter.svg";
import Telegram from "../../public/icons/telegram.svg";
import Github from "../../public/icons/github.svg";
import Image from "next/image";

const sms = [
  {
    // icon: <Facebook className="w-6" />,
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
    icon: `${Telegram.src}`,
    link: "",
  },
  {
    icon: `${Github.src}`,
    link: "",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="w-full p-4 lg:py-12">
      <div className="xl:w-11/12 mx-auto  py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <div>
              <h3 className="text-2xl text-blue1">Solustack</h3>
              <p className="text-2xl">
                Lets Handle Your <br /> Next Project
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-sm mt-5">Direct channels</h5>

              <div className="flex items-center text-sm font-poppins">
                <Image src={Phone.src} alt="" width={20} height={20} />
                <span>+509 1234 5678</span>
              </div>
              <div className="flex items-center text-sm">
                <Image src={Email.src} alt="" width={20} height={20} />
                {/* <Email className="mr-3 w-6" /> */}
                <span> support@solustack.com</span>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="font-semibold text-sm ">Social Media</h5>
              <ul className="list-none flex ">
                {sms.map((item, i) => (
                  <li key={i} className="mr-5">
                    <Image src={item.icon} alt="" width={20} height={20} />
                    {/* {item.icon} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-4 font-poppins">
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                  placeholder="Subject"
                />
              </div>

              <div className="flex items-center mb-4">
                <button className="bg-[#3F3D38] px-6 py-2 text-white rounded text-sm mr-4">
                  iOS
                </button>
                <button className="bg-[#3F3D38] px-6 py-2 text-white rounded text-sm mr-4">
                  Android
                </button>
                <button className="bg-[#3F3D38] px-6 py-2 text-white rounded text-sm mr-4">
                  UI/UX Design
                </button>
              </div>
              <div className="mb-4">
                <textarea
                  className="bg-inputGrey  border-0 p-3 h-32 w-full rounded text-sm placeholder:text-black50 focus:outline-none resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-end">
                <button className="bg-blue1 py-2 px-12 font-medium rounded text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
