import React, { useState } from "react";
import Phone from "../../public/icons/call.svg";
import Email from "../../public/icons/email.svg";
import Instagram from "../../public/icons/instagram-nav.svg";
import Facebook from "../../public/icons/facebook-nav.svg";
import Twitter from "../../public/icons/twitter-nav.svg";
import LinkedIn from "../../public/icons/linkedin-nav.svg";
import Image from "next/image";
import useSubmitForm from "../../hooks/useSubmitForm";
import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../../element/calendly"), {
  ssr: false,
});
const Spinner = dynamic(() => import("../../element/spinner"), {
  ssr: false,
});
const Check = dynamic(() => import("../../element/check"), {
  ssr: false,
});
const sms = [
  {
    // icon: <Facebook className="w-6" />,
    icon: `${Facebook.src}`,
    link: "",
  },
  {
    // icon: <Facebook className="w-6" />,
    icon: `${LinkedIn.src}`,
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
  // {
  //   icon: `${Telegram.src}`,
  //   link: "",
  // },
  // {
  //   icon: `${Github.src}`,
  //   link: "",
  // },
];

const Contact = () => {
  const { submitForm, isLoading } = useSubmitForm();
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();

    submitForm("name", "email", "comment");
    setLoading(true);
  };
  return (
    <div id="contact" className="w-full p-4 lg:py-12  text-white font-supreme">
      <div className="xl:w-11/12 mx-auto  py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <div>
              <h3 className="text-3xl text-blue3 font-technor font-bold">
                Solustack
              </h3>
              <p className="text-2xl font-medium">
                Lets Handle Your <br /> Next Project
              </p>
            </div>

            <div>
              <h5 className="font-medium text-sm mt-5 mb-2">Direct channels</h5>

              <div className="flex items-center text-sm ">
                <Image src={Phone.src} alt="" width={20} height={20} />
                <span className="mx-2">+509 1234 5678</span>
              </div>
              <div className="flex items-center text-sm">
                <Image src={Email.src} alt="" width={20} height={20} />
                {/* <Email className="mr-3 w-6" /> */}
                <span className="mx-2"> support@solustack.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Image src={Phone.src} alt="" width={20} height={20} />
                {/* <Email className="mr-3 w-6" /> */}
                <span className="mx-2">
                  {" "}
                  <Calendly button={false} />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="font-semibold text-sm mb-4">Social Media</h5>
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
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-4 ">
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your email"
                    required
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
                <button className="bg-black border border-blue3 px-6 py-2 text-white font-medium rounded text-sm mr-4">
                  iOS
                </button>
                <button className="bg-black border border-blue3 px-6 py-2 text-white font-medium rounded text-sm mr-4">
                  Android
                </button>
                <button className="bg-black border border-blue3 px-6 py-2 text-white font-medium rounded text-sm mr-4">
                  UI/UX Design
                </button>
              </div>
              <div className="mb-4">
                <textarea
                  className="bg-inputGrey  border-0 p-3 h-32 w-full rounded text-sm placeholder:text-black50 focus:outline-none resize-none"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="flex flex-wrap justify-evenly ">
                <button
                  onClick={(e) => submit(e)}
                  className=" w-100 mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white"
                >
                  submit
                  {/* {loading ? <Spinner /> : "Submit"} */}
                </button>
                <button className="mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white">
                  <Calendly button={true} />
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
