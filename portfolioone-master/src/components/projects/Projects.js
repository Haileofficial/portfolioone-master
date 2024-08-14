import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
        title="Netflix-Replica"
        des=" A comprehensive web application that replicates the functionality and user experience of the popular streaming platform, Netflix. The project showcases skills in web development, UI design, and backend implementation, delivering a feature-rich platform for browsing, streaming, and managing content."
        src={projectOne}
        githubUrl="https://github.com/Haileofficial"
        liveDemoUrl="https://haileofficial.github.io/Netflix-clone-jan2024/"
        />
        <ProjectsCard
        title="Amazon- Replica"
        des="A comprehensive e-commerce web application that replicates the functionality and user experience of the leading online retailer, Amazon. The project demonstrates expertise in building robust e-commerce platforms, including product browsing, shopping cart management, secure checkout, and personalized recommendations."
        src={projectTwo}
        githubUrl="https://github.com/Haileofficial"
        liveDemoUrl="https://remarkable-cendol-ddee80.netlify.app"
        />
        <ProjectsCard
        title="Evangadi-forum"
        des="A dedicated online platform that allows Evangadi students to ask questions, share knowledge, and engage in discussions on a wide range of academic and personal topics. The forum fosters a collaborative learning environment, enabling students to seek help, offer insights, and build a supportive community."
        src={projectThree}
        githubUrl="https://github.com/Haileofficial"
        liveDemoUrl="http://www.forumevangadi.com"
        />
        <ProjectsCard
        title="Apple- Replica"
        des="A comprehensive web application that replicates the iconic design, user experience, and key features of Apple's products and services. The project showcases expertise in crafting visually appealing user interfaces, implementing intuitive navigation, and integrating seamless device integration and cross-platform functionality."
        src={projectFour}
        githubUrl="https://github.com/Haileofficial"
        liveDemoUrl="https://singular-dasik-4bd4ad.netlify.app"
        />
      </div>
    </section>
  );
}

export default Projects