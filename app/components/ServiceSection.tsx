"use client";
import { Button } from "antd";
import { AiFillSliders } from "react-icons/ai";
import { FaRocket, FaShoppingCart } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { MdBusinessCenter, MdOutlineEditOff } from "react-icons/md";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const serviceCards = [
    {
      image: <FaRocket />,
      title: "Start Up",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: <MdBusinessCenter />,
      title: "Bussiness",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: <FaShoppingCart />,
      title: "E-commerce",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: <MdOutlineEditOff />,
      title: "Digital Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: <IoIosColorPalette />,
      title: "Unlimited Colors",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: <AiFillSliders />,
      title: "Strategy Solution",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div
      className="flex flex-col bg-white px-8 py-16 w-full md:px-18  md:py-30  lg:px-20 xl:px-20 2xl:px-20"
      id="service-section"
    >
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] ">
        <Button
          size="large"
          type="text"
          className="bg-gray-300! font-bold! border-gray-400! text-orange-500! text-2xl lg:text-3xl  w-40  rounded-sm !"
        >
          Our Service
        </Button>

        <h1 className="text-xl font-bold py-4 lg:text-2xl xl:text-3xl 2xl:text-4xl lg:py-2 xl:py-2 2xl:py-3">
          Our Services Made For You?
        </h1>

        <p className="lg:text-lg xl:text-lg text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum
          vel nostrum reprehenderit laboriosam eos eaque ex debitis quam
          numquam.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 py-16  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 items-center justify-center ">
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="flex items-center  space-x-6"
          >
            <div className="icon bg-[#FBDAEB] px-5 py-5 rounded-md text-orange-500 text-lg">
              {card.image}
            </div>
            <div className="text">
              <h1 className="font-bold text-gray-800">{card.title}</h1>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
