import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "../../public/images/avatar.jpeg";
import Image from "next/image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 2,
    partialVisibilityGutter: 45, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1023, min: 700 },
    items: 2,
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
};

const items = [
  {
    image: Avatar.src,
    name: "Okori Inyene",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    image: Avatar.src,
    name: "Okori Inyene",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    image: Avatar.src,
    name: "Okori Inyene",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    image: Avatar.src,
    name: "Okori Inyene",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    image: Avatar.src,
    name: "Okori Inyene",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
];

const Slide = ({ item }) => {
  const { image, name, testimony, status } = item;
  return (
    <div className=" relative ">
      <div className="w-20 flex justify-center items-center h-20 border-3 border-white  dark:border-darkBg rounded-full shadow-[0px_11px_10px_#00000008]  mx-auto mb-[-40px]">
        <Image
          src={image}
          alt=""
          width={60}
          height={60}
          className="rounded-full"
        />

        {/* <img src={image} alt="" className="w-full h-full rounded-full" /> */}
      </div>
      <div className="bg-white dark:bg-darkBg dark:text-white shadow-[0px_15px_30px_#0000000A] dark:shadow-[0px_7px_30px_#7F7F7F] pt-[45px] pb-6 rounded-lg  text-center px-4 md:px-8 lg:px-12 ">
        <div className=" text-center">
          <h5 className="font-generalSans   font-medium text-sm">{name}</h5>
          <p className="text-xs my-2 font-graphie ">{status}</p>
          <p className="text-xs md:text-md text-justify leading-6 font-generalSans">
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="w-full p-4 py-12 lg:py-20 font-generalSans relative overflow-x-clip"
    >
      <div>
        <motion.div 
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 2,
        }}
        >
        <h3 className="font-semibold  text-2xl mb-6 text-center">
          Client Testimonials
        </h3>
        <div className="lg:w-4/5 xl:w-3/5 mx-auto mb-6 font-poppins">
          <p className="text-base font-poppins text-dark1 text-center dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div></motion.div>

        <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 2.5,
        }}
        className="w-full relative ">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={false}
            responsive={responsive}
            partialVisible={true}
            infinite={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="pb-10 "
            sliderClass=""
            dotListClass=""
            itemClass="carousel-item-padding-40-px"
            // renderDotsOutside={true}
          >
            {items.map((item, i) => (
              <div key={i} className=" mr-8">
                <Slide item={item} />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
      <div className="h-6 w-6 bg-green rounded-[50%] absolute top-5 inset-x-1/2"></div>
      <div className="h-4 w-4 bg-[#EEEDF2] rounded-[50%] absolute top-5 right-1/3 "></div>
      <div className="h-4 w-4 bg-yellow rounded-[50%] absolute  left-[50%] lg:left-[44%] bottom-[55%]"></div>
      <div className="h-3 w-3 bg-purple1 rounded-[50%] absolute left-[75%]  lg:left-[60%] bottom-[55%]"></div>
    </motion.div>
  );
};

export default Testimonial;
