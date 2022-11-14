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

import Spinner from "../../element/spinner";
import { useProjectContext } from "../../hooks/useProjectContext";
const Calendly = dynamic(() => import("../../element/calendly"), {
  ssr: false,
});
// const Spinner = dynamic(() => import("../../element/spinner"), {
//   ssr: false,
// });
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
const tags = [
  { id: "ios", tag: "iOS" },
  { id: "android", tag: "Android" },
  { id: "ui/ux", tag: "UI/UX" },
  { id: "web", tag: "Web" },
];
interface Props {
  socials: any;
}

const Contact = () => {
  const { submitForm, isLoading } = useSubmitForm();
  const { socials }: Props = useProjectContext();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("ios");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    subject: "",
    type: "",
  });
  const [text, setText] = useState(false);
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      comment: "",
      subject: "",
      type: "",
    });
    setActiveTab("ios");
  };
  const onChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      submitForm(
        formData.name,
        formData.email,
        formData.comment,
        formData.subject,
        activeTab
      );
      setText(true);
      setLoading(false);
    }, 4000);

    resetForm();
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
                <span className="mx-2">+1(404)-827-8407</span>
              </div>
              <div className="flex items-center text-sm">
                <Image src={Email.src} alt="" width={20} height={20} />
                {/* <Email className="mr-3 w-6" /> */}
                <span className="mx-2">admin@solustack.app</span>
              </div>
              <div className="flex items-center text-sm">
                <Image src={Phone.src} alt="" width={20} height={20} />
                {/* <Email className="mr-3 w-6" /> */}
                <span className="mx-2 text-purple2">
                  {" "}
                  <Calendly button={false} />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="font-semibold text-sm mb-4">Social Media</h5>
              <ul className="list-none flex ">
                {socials?.map((item, i) => (
                  <li key={i} className="mr-5">
                    <a href={item.link}>
                      <Image src={item.icon} alt="" width={20} height={20} />
                      {/* {item.icon} */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            {text ? (
              <div className="mb-3 text-purple2">
                Thank you for contacting Solustack we will reach out to you!
              </div>
            ) : null}
            <form onSubmit={submit}>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-4 ">
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <input
                    className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                    placeholder="Your email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  className="bg-inputGrey  border-0 p-3 w-full rounded text-sm placeholder:text-black50 focus:outline-none"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onChange}
                />
              </div>

              <div className="flex items-center mb-4 flex-wrap">
                {tags.map((tag, i) => (
                  <button
                    key={`jdn${i}`}
                    onClick={() => setActiveTab(tag.id)}
                    type="button"
                    className={`${
                      activeTab === tag.id
                        ? "bg-white text-black"
                        : "bg-black text-white border border-blue3"
                    }  px-6 py-2  font-medium rounded text-sm mr-4 mt-2`}
                  >
                    {tag.tag}
                  </button>
                ))}
              </div>
              <div className="mb-4">
                <textarea
                  className="bg-inputGrey  border-0 p-3 h-32 w-full rounded text-sm placeholder:text-black50 focus:outline-none resize-none"
                  placeholder="Message"
                  name="comment"
                  onChange={onChange}
                  value={formData.comment}
                  required
                ></textarea>
              </div>
              <div className="flex flex-wrap justify-evenly ">
                <button
                  className=" w-100 mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white focus:ring-white"
                  type="submit"
                >
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      ></path>
                    </svg>
                  ) : (
                    "Submit"
                  )}
                </button>
                <a className="mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white focus:ring-white">
                  <Calendly button={true} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
