import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certificate in Full-Stack Web Developer"
            result="USA"
            subTitle="Evangadi Networks, (January 27, 2024 to August 8, 2024)"
          />
          <ResumeCard
            title="M.Sc. in Mechanical Engineering (Mechanical Design)"
            subTitle="Addis Ababa University  (2017 - 2018)"
            result="Ethiopia"
          />
          <ResumeCard
            title="B.Sc. in Mechanical Engineering"
            subTitle="Arba Minch University (2010 - 2014)"
            result="Ethiopia"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-16 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lecturer"
            subTitle="Wolaita Sodo University (2014 - Present)"
            result="Ethiopia"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
