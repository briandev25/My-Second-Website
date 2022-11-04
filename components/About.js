import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full md:h-screen p-2 flex items-center py-16  "
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className=" col-span-2">
          <h2 className=" text-[#5651e5] py-4 ">Who is Bryan?</h2>
          <p className=" py-2 text-gray-600">
            A graduate of Egerton University, located in Kenya, pursuing
            bachelor in Computer Science. I'm also a talented self-taught
            Javascript developer with robust problem-solving skills and proven
            experience in creating and bring into life beautiful products that
            people can engage with.
          </p>
          <p className=" text-gray-600">
            I aim to to be a professional with expertise in robust programming
            languages such as React.js, Node.js, Express.js, HTML, CSS and
            JavaScript.
          </p>
          <p className=" py-4 underline tracking-widest cursor-pointer">
            Check out my latest projects
          </p>
        </div>
        <div className="  w-full h-auto m-auto  p-3 rounded-xl hover:scale-110 ease-in-out duration-300 shadow-xl shadow-gray-500 flex items-center justify-center ">
          <img className=" rounded-xl" src="/images/assets/about.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
