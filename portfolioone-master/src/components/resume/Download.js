import React from "react";
import { motion } from "framer-motion";

const Download = () => {
  const downloadResume = () => {
    // Replace the URL with the actual path to your resume file
    const resumeUrl = "path/to/your/resume.pdf";

    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "your-resume-filename.pdf";

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger the download
    downloadLink.click();

    // Remove the temporary anchor element
    document.body.removeChild(downloadLink);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex justify-center">
        <button
          className="btn mt-10 hover:text-designColor text-2xl font-bold flex items-center justify-center"
          onClick={downloadResume}
        >
          Download CV
        </button>
      </div>
    </motion.div>
  );
};

export default Download;