"use client";

import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <div className=" h-full flex justify-center items-center flex-col ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <motion.img 
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            viewport={{ once: false }}
            src="/mascot.svg"
            alt="mascot"
            className="w-40 animate-bounce  "
          />
        </div>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6"
        >
          <h1 className="text-center text-4xl font-bold uppercase text-primary">
            Let's connect, see what <br /> magic we can
            <span className="text-mywhite"> create</span> <br /> together
          </h1>
          <a
            href="mailto:letsconnect@arnob.com"
            className="text-2xl text-mygray underline text-center font-light"
          >
            letsconnect@arnob.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectSection;
