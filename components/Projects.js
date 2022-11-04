import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className=" w-full">
      <div className=" max-w-[1240px] mx-auto p-2 py-16">
        <h2 className="  text-[#5851e5] py-4"> My Projects</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectCard
            projImg="/images/assets/Projects/amazon.png"
            title="Amazon Clone"
          />
          <ProjectCard
            projImg="/images/assets/Projects/airbnb.png"
            title="AIRBNB Clone"
          />
          <ProjectCard
            projImg="/images/assets/Projects/disney.png"
            title="Disney Clone"
          />
          <ProjectCard
            projImg="/images/assets/Projects/hulu.png"
            title="Hulu Clone"
          />
          <ProjectCard
            projImg="/images/assets/Projects/tesla.png"
            title="Tesla Clone"
          />
          <ProjectCard
            projImg="/images/assets/Projects/first-website.png"
            title="My First Website"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
