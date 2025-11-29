"use client";

import { Button } from "antd";
import { motion } from "framer-motion";

const PricingSection = () => {
  const cards = [
    {
      titel: "3 Month Membership",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque",
      price: "$39.99",
    },
    {
      titel: "12 Month Membership",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque",
      price: "$19.99",
    },
    {
      titel: "Life time Membership",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque",
      price: "$19.99",
    },
  ];
  return (
    <div
      className="bg-[#F3F4F6] px-8 md:px-20 lg:px-30 xl:px-34 2xl:px-40"
      id="pricing-section"
    >
      <div className="service-header flex justify-center items-center w-full  flex-col   py-20 space-y-4">
        <h1 className="font-bold text-2xl flex items-center justify-center text-center">
          Choose The Plan That's Right For You
        </h1>
        <p className="flex items-center justify-center px-8 sm:px-30 md:px-50 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          magnam pariatur commodi maiores consequuntur a.
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 pb-20">
        {cards.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            key={index}
            className="bg-white p-6 rounded-xl border-t-4 border-red-300 shadow-lg space-y-4"
          >
            <h1 className="text-2xl font-bold text-blue-500">{card.titel}</h1>
            <p>{card.Description}</p>
            <div className="flex text-center items-center space-x-1">
              <h3 className="font-bold text-xl">{card.price}</h3>
              <span className=" font-semibold text-sm">/Month</span>
            </div>
            <Button
              size="large"
              className="bg-linear-to-r! from-purple-500! hover:from-purple-600! to-pink-500! hover:to-pink-600! text-white! border-none! transition! duration-300!"
            >
              Upgrade Now
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
