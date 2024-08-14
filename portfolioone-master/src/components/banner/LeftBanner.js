
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaHtml5,FaCss3,FaBootstrap,FaNode,FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaDatabase, FaLock } from "react-icons/fa";
import { SiJavascript,SiAliexpress,SiMysql} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Web Developer &", "Mechanical Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleGithubClick = () => {
    window.open("https://github.com/Haileofficial", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/hailemariam-getachew-895b07246/", "_blank");
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Hailemariam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        As Full-Stack Web Developer, I have a deep passion for programming and software development. I thoroughly enjoy the process of building web applications using various languages like JavaScript, HTML, and CSS, coupled with backend frameworks such as Node. and js. Problem solving is another aspect that fascinates me.
        </p>
        <p>
        As Mechanical Engineer, i am revolving around design, innovation, and problem solving. I have a passion for creating and refining mechanical systems and devices. The process of conceptualizing, prototyping, and optimizing solutions to real-world problems excites me.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={handleGithubClick}>
              <FaGithub />
            </span>
            <span className="bannerIcon" onClick={handleLinkedinClick}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Front-end Skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title="HTML5">
              <FaHtml5 />
            </span>
            <span className="bannerIcon" title="React">
              <FaReact />
            </span>
            <span className="bannerIcon" title= "JavaScript">
              <SiJavascript />
            </span>
            <span className="bannerIcon" title="Bootstrap">
              <FaBootstrap />
            </span>
            <span className="bannerIcon" title="CSS3">
              <FaCss3 />
            </span>
          </div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-4">
            Back-end Skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title="Node.js">
              <FaNode />
            </span>
            <span className="bannerIcon" title="Express">
              <SiAliexpress />
            </span>
            <span className="bannerIcon" title="MySQL">
              <SiMysql/>
            </span>
            <span className="bannerIcon" title="Database">
              <FaDatabase />
            </span>
            <span className="bannerIcon" title="Security">
              <FaLock />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;