import React from "react";
import Image from "next/image";

const SkillCard = ({ imgSource, lang }) => {
  return (
    <div className=" flex items-center w-full justify-around p-6 rounded-md shadow-lg shadow-gray-400 hover:scale-105  transform ease-in duration-300">
      <Image src={imgSource} alt="/" width="64px" height="64px" />
      <p className=" text-lg text-gray-800 font-bold">{lang}</p>
    </div>
  );
};

export default SkillCard;
