import React from "react";
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
        <Image src={image} alt="" width={40} height={40} className="rounded-full" />

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
    <div className="w-full p-4 lg:py-8">
      <div>
        <h3 className="font-semibold text-2xl mb-6 text-center">
          Client Testimonials
        </h3>
        <div className="xl:w-3/5 mx-auto mb-6">
          <p className="text-sm text-grey4 dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>

        <div className="w-full relative ">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
