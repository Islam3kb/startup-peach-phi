"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { motion } from "framer-motion";
const ReviewSection = () => {
  const clientReviews = [
    {
      image: "/images/u1.jpg",
      name: "Jasica Doe",
      rating: 4.7,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint quisquam ullam quo.",
    },
    {
      image: "/images/u2.jpg",
      name: "John Doe",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint quisquam ullam quo.",
    },
    {
      image: "/images/u3.jpg",
      name: "Sasuke Uchiha",
      rating: 4.3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint quisquam ullam quo.",
    },
    {
      image: "/images/u4.jpg",
      name: "Boruto Uzumaki",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint quisquam ullam quo.",
    },
  ];
  return (
    <div
      className="bg-[#F3F4F6] px-8 md:px-20 lg:px-30 xl:px-34 2xl:px-40"
      id="review-section"
    >
      <div className="service-header flex justify-center items-center w-full  flex-col   py-20 space-y-4">
        <h1 className="font-bold text-2xl flex items-center justify-center text-center">
          What Our Happy Client Says
        </h1>
        <p className="flex items-center justify-center px-8 sm:px-30 md:px-50 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          magnam pariatur commodi maiores consequuntur a.
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 pb-20">
        {clientReviews.map((review, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col items-center justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row bg-white p-8 space-x-6 shadow-lg rounded-xl"
          >
            <div className="flex w-full items-center text-center justify-center">
              <Image
                src={review.image}
                width={150}
                height={100}
                alt={review.name}
                className="rounded-xl w-full  object-cover sm:w-[300px]"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{review.name}</h1>
              <h3 className="flex gap-x-4 text-xl font-bold my-2 text-yellow-800">
                {review.rating}{" "}
                <span className="flex items-center text-center text text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </span>
              </h3>
              <p>{review.review}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
