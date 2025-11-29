"use client";
import Image from "next/image";

import { PiHandTapBold } from "react-icons/pi";
import { GoWorkflow } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { Card } from "antd";
import AboutSection from "./AboutSection";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const cardItems = [
    {
      id: 1,
      image: <PiHandTapBold />,
      title: "App Integration",
      descripton:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero",
    },
    {
      id: 2,
      image: <GoWorkflow />,
      title: "Workflow Builder",
      descripton:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero",
    },
    {
      id: 3,
      image: <FiEdit2 />,
      title: "Problem Solution",
      descripton:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero",
    },
    {
      id: 4,
      image: <MdAccessTime />,
      title: "Lifetime Access",
      descripton:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero",
    },
  ];
  return (
    <div className="bg-[#F3F4F6] px-8" id="features-section">
      <div className="service-header flex justify-center items-center w-full  flex-col   py-20 space-y-4">
        <h1 className="font-bold text-2xl flex items-center justify-center text-center">
          Key Features Of The Product
        </h1>
        <p className="flex items-center justify-center px-8 sm:px-30 md:px-50 text-center">
          Our product stands out with its high performance, delivering
          blazing-fast speeds and seamless multitasking
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center mx-auto px-4 sm:px-10 md:px-20 lg:px-15 xl:px-40 2xl:px-40">
        <section className="card-section w-full lg:w-[60%] xl:w-[50%] 2xl:w-[50%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 pb-20">
          {cardItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                title={
                  <div className="flex  items-center space-x-4">
                    <span className="w-8 h-8 rounded-full  text-center flex justify-center items-center bg-pink-300 text-orange-400  text-xl">
                      {item.image}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                }
              >
                <p>{item.descripton}</p>
              </Card>
            </motion.div>
          ))}
        </section>
        <section className="image-section w-full flex justify-center items-center lg:w-[40%] xl:w-[50%] 2xl:w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" w-full mx-auto pb-20  flex justify-center items-center text-center "
          >
            <Image
              src="/images/f1.png"
              width={600}
              height={400}
              alt="Services Image"
              className="mx-auto object-cover object-center text-center flex justify-center items-center"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesSection;
