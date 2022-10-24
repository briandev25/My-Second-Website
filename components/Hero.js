import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="hero" className=" w-full h-screen text-center">
      <div className="flex p-2 max-w-[1240px] mx-auto w-full h-full justify-center items-center">
        <div>
          <p className=" uppercase tracking-widest text-sm">
            Lets build awesome things together
          </p>
          <h1 className=" py-4 text-gray-700">
            Hi I'm <span className=" text-[#5651e5]">Bryan</span>
          </h1>
          <h1 className=" py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className=" text-base tracking-widest md:tracking-normal font-semibold md:text-lg py-4 max-w-[65%] m-auto text-gray-500">
            I'm a front web developer specialized in building(and occasionally
            designing) exceptional digital experiences. Currently i'm focused on
            building responsive front-end web and mobile applications while
            learning back-end technologies.
          </p>
          <div className=" py-4 flex justify-center items-center space-x-10">
            <div className="links p-5 ">
              <FaLinkedin />
            </div>
            <div className="links p-5">
              <FaGithub />
            </div>
            <div className="links p-5">
              <AiOutlineMail />
            </div>
            <div className="links p-5">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
