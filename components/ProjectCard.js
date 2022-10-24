import React from "react";
import Image from "next/image";

const ProjectCard = ({ projImg, title }) => {
  return (
    <div className=" relative flex justify-center items-center h-[250px]  lg:h-[300px] xl:h-[400px]  p-2 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className=" rounded-xl group-hover:opacity-10"
        src={projImg}
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
        <p className=" text-white font-bold text-2xl tracking-wide">{title}</p>
        <p className=" text-white py-4 font-thin">React JS</p>
        <div className="bg-white text-gray-700 text-lg font-semibold rounded-md cursor-pointer py-1 md:py-2 px-5 shadow-lg shadow-gray-400">
          More Info
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
