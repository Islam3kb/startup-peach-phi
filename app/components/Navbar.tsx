"use client";
import { Button, Drawer, DrawerProps, Menu } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFlower2 } from "react-icons/bs";
import { CiTextAlignRight } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  // when scrolling down navbar bg changes and shadow appears
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features-section" },
    { name: "Services", path: "#service-section" },
    { name: "Reviews", path: "#review-section" },
    { name: "Team", path: "#our-team" },
    { name: "Pricing", path: "#pricing-section" },
    { name: "Contact", path: "#contact-section" },
  ];
  return (
    <>
      <div
        className={` ${
          scrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
        } sticky top-0 z-50  transition-all duration-300 flex justify-between px-4  py-8 sm:justify-between md:justify-between xl:justify-evenly 2xl:justify-evenly   sm:p-4 md:p-4 lg:p-3 sm:w-full lg:justify-evenly box-border sm:flex    items-center bg-transparent  w-full`}
      >
        <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-2 lg:space-x-2 ">
          <span className="bg-blue-800  text-xm h-12 w-12 sm:h-14 sm:w-14 sm:text-2xl flex justify-center items-center rounded-full text-white">
            <BsFlower2 />
          </span>
          <h2 className="text-blue-800 font-bold text-2xl hidden sm:text-3xl sm:block md:block md:text-2xl md:font-bold lg:block 2xl:block ">
            Dev3kb
          </h2>
        </div>
        <ul className=" space-x-8 items-center hidden lg:flex xl:flex 2xl:flex">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-red-500 font-semibold">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2  sm:space-x-4">
          <Button
            size="large"
            color="blue"
            icon={<HiOutlineBolt className="text-xl" />}
            className="font-bold!"
            variant="solid"
          >
            Create Account
          </Button>
          <div className=" items-center flex lg:hidden xl:hidden 2xl:hidden">
            <Button
              icon={<CiTextAlignRight className="text-2xl" />}
              type="text"
              onClick={showDrawer}
            ></Button>
          </div>{" "}
          <Drawer
            placement={"left"}
            onClose={onClose}
            closable={false}
            open={open}
            classNames={{
              body: "bg-blue-700 !text-white text-base",
            }}
          >
            <div className="flex justify-end mb-8">
              <Button
                onClick={onClose}
                type="text"
                icon={
                  <IoCloseSharp className="text-white! text-2xl! bg-transparent" />
                }
              ></Button>
            </div>
            <ul className="flex space-y-8 items-center text-white bg-blue-700 flex-col">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-red-500 text-white! font-semibold"
                >
                  <Link
                    onClick={onClose}
                    className="text-white!"
                    href={item.path}
                  >
                    <span className="border-b">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
