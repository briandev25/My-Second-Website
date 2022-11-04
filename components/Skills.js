import SkillCard from "./SkillCard";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" h-full max-w-[1240px] flex flex-col justify-center m-auto ">
        <h2 className="  text-[#5851e5] py-4">What can I do ?</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          <SkillCard imgSource="/images/assets/Skills/html.png" lang="HTML" />
          <SkillCard imgSource="/images/assets/Skills/css.png" lang="CSS" />
          <SkillCard
            imgSource="/images/assets/Skills/javascript.png"
            lang="JAVASCRIPT"
          />
          <SkillCard
            imgSource="/images/assets/Skills/react.png"
            lang="REACTJS"
          />
          <SkillCard
            imgSource="/images/assets/Skills/nextjs.png"
            lang="NEXTJS"
          />
          <SkillCard imgSource="/images/assets/Skills/node.png" lang="NODEJS" />
          <SkillCard
            imgSource="/images/assets/Skills/tailwind.png"
            lang="TAILWIND CSS"
          />
          <SkillCard
            imgSource="/images/assets/Skills/mongo.png"
            lang="MONGODB"
          />
          <SkillCard
            imgSource="/images/assets/Skills/firebase.png"
            lang="FIREBASE"
          />
          <SkillCard
            imgSource="/images/assets/Skills/github1.png"
            lang="GIT & GITHUB"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
