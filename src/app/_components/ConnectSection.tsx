"use client";

import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <div className="py-14 lg:h-full flex justify-center items-center flex-col lg:px-0 px-5">
      <div className="max-w-6xl mx-auto">
      
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center gap-6"
        >
          <h1 className="text-center text-6xl font-bold uppercase text-primary hidden lg:block">
            Let's <br /> connect
          </h1>
          <p className="font-clash text-center  text-4xl text-mygray">See what magic we can <br /> create together!</p>
         
          <a
            href="mailto:letsconnect@arnob.com"
            className="text-lg lg:text-2xl text-mygray underline text-center  mt-4 font-clash font-light"
          >
            letsconnect@arnob.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectSection;
