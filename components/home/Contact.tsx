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
const tags = [
  { id: "ios", tag: "iOS" },
  { id: "android", tag: "Android" },
  { id: "ui/ux", tag: "UI/UX" },
];

const Contact = () => {
  const { submitForm, isLoading } = useSubmitForm();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("ios");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    subject: "",
    type: "",
  });

  const onChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // setLoading(true)
    // setTimeout(() => {
    //   submitForm(
    //     formData.name,
    //     formData.email,
    //     formData.comment,
    //     formData.subject,
    //     activeTab
    //   );
    //   setLoading(false)
    // }, 4000);
    console.log(formData);
   

    submitForm(
      formData.name,
      formData.email,
      formData.comment,
      formData.subject,
      activeTab
    );
   
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

              <div className="flex items-center mb-4">
                {tags.map((tag, i) => (
                  <button
                    key={`jdn${i}`}
                    onClick={() => setActiveTab(tag.id)}
                    type="button"
                    className={`${
                      activeTab === tag.id
                        ? "bg-white text-black"
                        : "bg-black text-white border border-blue3"
                    }  px-6 py-2  font-medium rounded text-sm mr-4`}
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
                  // onClick={(e) => submit(e)}
                  className=" w-100 mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white"
                  type="submit"
                >
                  {/* submit */}
                  {isLoading ? <Spinner /> : "Submit"}
                </button>
                <button className="mt-3 bg-blue3 py-2 px-24 font-medium rounded text-white">
                  <Calendly button={true} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
