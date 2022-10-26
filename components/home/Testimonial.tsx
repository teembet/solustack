import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "../../public/images/avatar.jpeg";
import Image from "next/image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 3,
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
const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 3,
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
    name: "Dan Oliver",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    image: Avatar.src,
    name: "Rodney Miller  ",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    image: Avatar.src,
    name: "Louisa Guerrero",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    image: Avatar.src,
    name: "Louisa Guerrero",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
 
  {
    image: Avatar.src,
    name: "Diana Stanley",
    status: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
 
];

const Slide = ({ item }) => {
  const { image, name, testimony, status } = item;
  return (
    <div className="  glass-card rounded-[48px] p-5">
      <p className="text-xs md:text-md text-justify leading-6 font-generalSans">
        {testimony}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-20 flex justify-center items-center h-20 rounded-full ">
            <Image
              src={image}
              alt=""
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div>
            <h5 className="   font-medium text-sm">{name}</h5>
            <p className="text-xs my-2  text-grey2">{status}</p>
          </div>
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
      className="w-full p-4 py-12 lg:py-20 font-supreme relative overflow-x-clip  dark:text-white"
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
          <h3 className="font-semibold font-technor  text-2xl mb-6 text-center">
            Client Testimonials
          </h3>
          <div className="lg:w-4/5 xl:w-3/5 mx-auto mb-6 font-poppins">
            <p className="text-base font-poppins text-dark1 text-center dark:text-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 2.5,
          }}
          className="w-full relative  overflow-scroll no-scrollbar"
        >
          <div className="ml-32 mb-5 flex items-center">
          {items.map((item, i) => (
              <div key={i} className=" mr-8 min-w-[450px]">
                <Slide item={item} />
              </div>
            ))}
            </div>
          <div className="flex items-center">
          {items.map((item, i) => (
              <div key={i} className=" mr-8 min-w-[450px]">
                <Slide item={item} />
              </div>
            ))}
            </div>
          {/* <Carousel
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
          </Carousel> */}
        </motion.div>
      </div>
      {/* <div className="h-6 w-6 bg-green rounded-[50%] absolute top-5 inset-x-1/2"></div>
      <div className="h-4 w-4 bg-[#EEEDF2] rounded-[50%] absolute top-5 right-1/3 "></div>
      <div className="h-4 w-4 bg-yellow rounded-[50%] absolute  left-[50%] lg:left-[44%] bottom-[55%]"></div>
      <div className="h-3 w-3 bg-purple1 rounded-[50%] absolute left-[75%]  lg:left-[60%] bottom-[55%]"></div> */}
    </motion.div>
  );
};

export default Testimonial;
