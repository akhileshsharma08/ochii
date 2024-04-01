import React from "react";
import EleImage from "../assets/eleImage.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-[95vh] bg-zinc-50 ">
      <div className="mainHeading px-5 py-24 text-4xl md:text-[6rem] tracking-tighter border border-b-gray-400 font-semibold md:leading-[85px] ">
        <h1>WE CREATE</h1>
        <div className="masker flex justify-start items-center">
          <motion.div
            initial={{ width: "0" }}
            animate={{ width: "10vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="box w-[100px] h-[70px]   "
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={EleImage}
              alt="motion image"
            />
          </motion.div>
          <h1>EYE-OPENING </h1>{" "}
        </div>
        <h1 className="-leading-1"> PRESENTATIONS</h1>
      </div>
      <div className=" flex md:flex-row flex-col md-text-normal text-lg justify-between items-start py-4 px-5">
        <h1>For public and private companies</h1>
        <h1>From the first pitch to IPO</h1>
        <h4 className="p-2 px-4 border text-normal border-gray-500 hover:cursor-pointer hover:text-zinc-50 hover:bg-gray-800 rounded-full uppercase text-center">
          start the project{" "}
        </h4>
      </div>
    </div>
  );
};

export default Home;
