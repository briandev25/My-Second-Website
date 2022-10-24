import SkillCard from "./SkillCard";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" h-full max-w-[1240px] flex flex-col justify-center m-auto ">
        <h2 className="  text-[#5851e5] py-4">What can I do ?</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          <SkillCard
            imgSource="/../public/assets/Skills/html.png"
            lang="HTML"
          />
          <SkillCard imgSource="/../public/assets/Skills/css.png" lang="CSS" />
          <SkillCard
            imgSource="/../public/assets/Skills/javascript.png"
            lang="JAVASCRIPT"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/react.png"
            lang="REACTJS"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/nextjs.png"
            lang="NEXTJS"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/node.png"
            lang="NODEJS"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/tailwind.png"
            lang="TAILWIND CSS"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/mongo.png"
            lang="MONGODB"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/firebase.png"
            lang="FIREBASE"
          />
          <SkillCard
            imgSource="/../public/assets/Skills/github1.png"
            lang="GIT & GITHUB"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
