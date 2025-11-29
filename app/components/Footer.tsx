"use client";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="bg-white px-8 md:px-25 lg:px-30 xl:px-32 2xl:px-40 py-10 "
      id="contact-section"
    >
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 pb-10">
        <div>
          <h2 className="font-bold text-xl">Solution</h2>
          <br />
          <p>Enterprice</p>
          <br />
          <p>By Work flow</p>
          <br />
          <p>By Team</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Company</h2>
          <br />
          <p>About Us</p>
          <br />
          <p>News & Press</p>
          <br />
          <p>Our Customer</p>
          <br />
          <p>Leadership</p>
          <br />
          <p>Careers</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Resources</h2>
          <br />
          <p>Blog</p>
          <br />
          <p>Webinar & Events</p>
          <br />
          <p>Podcast</p>
          <br />
          <p>E-book & Guides</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Contact Us</h2>
          <br />
          <p>Our Mobile Number</p>

          <h3 className="text-md font-semibold">+923256771557</h3>
          <br />
          <p>Our Email</p>

          <h3 className="text-md font-semibold">islam3kb@gmail.com</h3>
        </div>
      </div>
      <div className="bg-gray-300 h-px"></div>
      <div className="flex flex-col justify-center  text-center md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between py-8 ">
        <div>
          <p>Copyright © 2025 Webdev. All rights reserved</p>
        </div>
        <br />
        <div className="flex gap-4 items-center justify-center">
          <p className="">Social:</p>
          <div className="flex gap-4 text-gray-500">
            <FaFacebook className="hover:text-gray-800" />
            <FaTwitter className="hover:text-gray-800" />
            <MdLanguage className="hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
