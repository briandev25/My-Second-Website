import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  //Show shadow on scroll only
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      className={
        shadow
          ? "fixed h-[70px] w-full z-[100] shadow-xl"
          : "fixed h-[70px] w-full z-[100]"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            objectFit="fill"
            className=" cursor-pointer"
            src="/../public/logos/logo5.png"
            alt="img"
            width="125"
            height="60"
          />
        </Link>
        <div>
          <ul className=" hidden md:flex items-center">
            <Link href="/">
              <li className=" ml-10  uppercase text-sm hover:border-b-2">
                Home
              </li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className=" ml-10 uppercase text-sm hover:border-b-2">
                About
              </li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className=" ml-10 uppercase text-sm hover:border-b-2">
                Skills
              </li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className=" ml-10 uppercase text-sm hover:border-b-2">
                Projects
              </li>
            </Link>
            <Link href="#contact" scroll={false}>
              <li className=" ml-10 uppercase text-sm hover:border-b-2">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={openNav} className=" mr-4 md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " fixed md:hidden top-0 left-0 h-screen w-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex justify-between items-center">
              <h2>Bryan</h2>
              <div
                onClick={closeNav}
                className=" border-b border-gray-300 rounded-full p-2 shadow-lg  shadow-gray-400 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className=" border-b-2 border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something awesome together
              </p>
            </div>
            <div className="py-4">
              <ul>
                <Link href="/" scroll={false}>
                  <li
                    onClick={() => setNav(false)}
                    className=" py-4 uppercase text-sm hover:border-b-2"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about" scroll={false}>
                  <li
                    onClick={() => setNav(false)}
                    className=" py-4 uppercase text-sm hover:border-b-2"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills" scroll={false}>
                  <li
                    onClick={() => setNav(false)}
                    className=" py-4 uppercase text-sm hover:border-b-2"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects" scroll={false}>
                  <li
                    onClick={() => setNav(false)}
                    className=" py-4 uppercase text-sm hover:border-b-2"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact" scroll={false}>
                  <li
                    onClick={() => setNav(false)}
                    className=" py-4 uppercase text-sm hover:border-b-2"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className=" pt-28">
                <p className=" uppercase tracking-widest text-[#5651e5]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="links ">
                    <FaLinkedin />
                  </div>
                  <div className="links">
                    <FaGithub />
                  </div>
                  <div className="links">
                    <AiOutlineMail />
                  </div>
                  <div className="links">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
