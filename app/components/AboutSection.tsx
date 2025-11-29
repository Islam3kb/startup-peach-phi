"use client";
import Image from "next/image";
import { Button } from "antd";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="main-div  bg-white bg-opacity-70 w-full px-8 md:px-20  md:py-30  flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row xl:pt-20 lg:px-10 xl:px-10 2xl:px-40 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
      <section className="img-section w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2 ">
        <div className=" flex  justify-center items-center! ">
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/about.png"
            alt="About Us"
            width={500}
            height={300}
            className="  border-none  shadow-none flex object-cover object-center justify-center items-center"
          />
        </div>
      </section>
      <section className="text-section  w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-4  ">
        <div className=" pt-6">
          <Button
            type="text"
            className="bg-gray-300! border-gray-400! text-orange-500! text-2xl lg:text-3xl  lg:w-25 rounded-sm !"
          >
            About Us
          </Button>

          <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl lg:py-2 xl:py-2 2xl:py-3">
            Everything You Need To Grow Your Business
          </h1>

          <p className="lg:text-lg xl:text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            dolore? Ratione recusandae veritatis corrupti eum dicta earum! Odit
            voluptates corporis, est eos nostrum dolore libero quibusdam
            repellat facere at accusamus.
          </p>

          <button className="text-orange-500 font-bold py-2 border-b-2 lg:text-xl xl:text-2xl 2xl:text-3xl block border-orange-500">
            Learn More →
          </button>
          <div className="border-l-2 border-gray-400 pl-4  my-8 lg:my-8  xl:my-8">
            <p>
              " The many integrations that can be linked really help me see data
              from other tools I also use. "
            </p>
            <div className="flex flex-row space-x-2">
              <div className="flex items-center">
                <Image
                  src="/images/u1.jpg"
                  width={40}
                  height={40}
                  alt="Google"
                  className="flex rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-ml md:text-lg lg:text-lg text-black font-bold">
                    Jessica Doe
                  </h1>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Web Developer @TechDev
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
