import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className=" max-w-[1240px] m-auto px-2 py-16">
        <h2 className="  text-[#5851e5] py-4">Get in touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 p-4 ">
            <div className=" lg:p-4 h-full">
              {/* Image Section */}
              <div>
                <img
                  className=" rounded-xl hover:scale-105 ease-in duration-300"
                  src="../assets/about.jpg"
                  alt="/"
                />
              </div>
              {/* Details Section */}
              <div>
                <h2 className="py-2 text-3xl font-bold">BRYAN KIPROP</h2>
                <p className=" text-black/90">Front-End Developer</p>
                <p className=" py-4 text-black/75">
                  I am available for freelance or full time position. Contact me
                  and let's talk.
                </p>
              </div>
              {/* Connect Section */}
              <div>
                <p className=" uppercase tracking-wider font-semibold pt-8">
                  Connect with me
                </p>
                <div className=" flex items-center justify-between py-4">
                  <div className="links p-5 ">
                    <FaLinkedin />
                  </div>
                  <div className="links p-5">
                    <FaGithub />
                  </div>
                  <div className="links p-5">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-lg lg:p-4">
            <div className=" p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Full Names */}
                  <div className=" flex flex-col space-y-2">
                    <label className=" uppercase text-sm">Name</label>
                    <input
                      className=" border-2 p-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className=" flex flex-col space-y-2">
                    <label className=" uppercase text-sm">Phone Number</label>
                    <input
                      className=" border-2 p-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2 space-y-2">
                  <label className=" uppercase text-sm">Email</label>
                  <input
                    className=" border-2 p-2 border-gray-300 rounded-lg"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2 space-y-2">
                  <label className=" uppercase text-sm">Subject</label>
                  <input
                    className=" border-2 p-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2 space-y-2">
                  <label className=" uppercase text-sm">Message</label>
                  <textarea
                    rows="10"
                    className=" border-2 border-gray-300 rounded-lg"
                  />
                </div>
                <button className=" uppercase w-full py-3  mt-4 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Back to Top */}
        <div className=" flex justify-center py-12">
          <Link href="/">
            <div className=" rounded-full p-3 shadow-xl shadow-gray-400 hover:animate-bounce duration-300">
              <HiOutlineChevronDoubleUp className=" text-[#5651e5]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
