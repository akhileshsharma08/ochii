import React from "react";
import trawa from "../assets/trawa.jpg";
import fyde from "../assets/fyde.png";
import vise from "../assets/vise.jpg";
import pb from "../assets/pb.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="w-full">
      <h1 className="text-6xl pb-6 border-b text-zinc-800 border-gray-400">
        Featured projects
      </h1>
      <div className="proContainer flex md:flex-row flex-col justify-center items-center gap-4 p-4">
        <motion.div
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }}
          className="relative proj1 md:w-1/2 w-full h-[70vh] rounded-xl  overflow-hidden "
        >
          <div className="img w-full h-full">
            <img className="w-full h-full bg-cover" src={fyde} alt="fyde" />
          </div>
          {/* <h1 className="absolute text-[#2c8d44] right-0 z-[3] top-1/3 translate-y-1/2 font-normal uppercase text-[3rem] ">
            {"FYDE".split("").map((item, index) => (
              <motion.span>{item}</motion.span>
            ))}
          </h1> */}
        </motion.div>
        <motion.div  whileHover={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }} className="proj1 md:w-1/2 w-full h-[70vh] rounded-xl overflow-hidden">
          <div className="img w-full h-full">
            <img className="w-full h-full bg-cover" src={vise} alt="vise" />
          </div>
        </motion.div>
      </div>

      <div className="proContainer flex md:flex-row flex-col justify-center items-center gap-4 p-4">
        <motion.div  whileHover={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }} className="proj1 md:w-1/2 w-full h-[70vh] rounded-xl ">
          <div className="img w-full h-full">
            <img className="w-full h-full bg-cover" src={trawa} alt="trawa" />
          </div>
        </motion.div>
        <motion.div  whileHover={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }} className="proj1 md:w-1/2 w-full h-[70vh] rounded-xl overflow-hidden">
          <div className="img w-full h-full">
            <img className="w-full h-full bg-cover" src={pb} alt="pb" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
