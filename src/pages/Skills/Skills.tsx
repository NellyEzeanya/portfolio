import React from "react";
import "./skills.scss";
import { FaNodeJs, FaReact, FaPython, FaAws, FaLinux } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs, SiHtml5, SiCss3, SiFigma } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

const Skills = () => {
  return (
    <main className="skills">
      <section>
        <h4 className="title">Soft Skills</h4>
        <p className="softskills">Problem Solving, Communication, Team Work</p>
      </section>
      <section>
        <h4 className="title">Tools and Technologies</h4>
        {/* Include svg icons of popular tech tools in use */}
        <p className="icons">
          <DiJavascript1 title="Javascript" />
          <FaReact title="React" />
          <SiNextdotjs title="Next.js" />
          <FaPython title="Python" />
          <FiGithub title="Git and Github" />
          <SiHtml5 title="html" />
          <SiCss3 title="css" />
          <SiFigma title="figma" />
        </p>
      </section>
    </main>
  );
};

export default Skills;
