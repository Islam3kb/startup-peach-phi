"use client";
import Image from "next/image";
import { Button, Card } from "antd";
import { metadata } from "./../layout";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div
      className="bg-white bg-opacity-70 w-full px-8 md:px-20  md:py-13  flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row xl:pt-20 lg:px-26 xl:px-26 2xl:px-30 lg:space-x-4 xl:space-x-4 2xl:space-x-4"
      id="our-team"
    >
      <section className="text-section  w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-4  ">
        <div className=" pt-6">
          <Button
            type="text"
            className="bg-gray-300! border-gray-400! text-orange-500! text-2xl lg:text-3xl  lg:w-25 rounded-sm !"
          >
            Our Team
          </Button>

          <h1 className="text-xl font-bold py-4 lg:text-2xl xl:text-3xl 2xl:text-4xl lg:py-4 xl:py-5 2xl:py-4">
            Our Team of Exceptional Talent, Innovation, and Vision
          </h1>

          <p className="lg:text-lg xl:text-lg text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptas quod mollitia vitae minus laborum, temporibus nostrum culpa
            impedit maiores
          </p>

          <Button type="primary" className="text-xl font-semibold">
            Join Our Team
          </Button>
        </div>
      </section>
      <section className="card-section ">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 pt-8 gap-4  items-center justify-center text-center"
        >
          <Card
            size="small"
            hoverable
            className="bg-red-500! overflow-hidden border-none "
            style={{ width: 240 }}
            cover={<img draggable={false} alt="example" src="/images/t1.jpg" />}
          >
            <div className="text-white">
              <h3 className="text-lg font-bold ">Obito Uchiha</h3>
              <p>(Founder)</p>
            </div>
          </Card>
          <Card
            size="small"
            hoverable
            className="bg-orange-500! overflow-hidden "
            style={{ width: 240 }}
            cover={
              <img
                draggable={false}
                className="w-full!"
                alt="example"
                src="/images/t2.jpg"
              />
            }
          >
            <div className="text-white">
              <h3 className="text-lg font-bold ">Jessica Doe</h3>
              <p>(Co-Founder)</p>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default OurTeam;
