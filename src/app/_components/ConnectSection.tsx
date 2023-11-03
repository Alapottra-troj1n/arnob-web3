"use client";

import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <div className="py-14 lg:h-full flex justify-center items-center flex-col lg:px-0 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex justify-center mb-10 hidden">
          <motion.img 
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            viewport={{ once: false }}
            src="/mascot.svg"
            alt="mascot"
            className="w-40 animate-bounce"
          />
        </div>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6"
        >
          <h1 className="text-center text-4xl font-bold uppercase text-primary hidden lg:block">
            Let's connect, see what <br /> magic we can
            <span className="text-mywhite"> create</span> <br /> together
          </h1>
          <h1 className=" text-center text-2xl font-bold uppercase text-primary">
            Let's connect,<br /> see what <br /> magic we can  <br />
            <span className="text-mywhite"> create</span> <br /> together
          </h1>
          <a
            href="mailto:letsconnect@arnob.com"
            className="text-lg lg:text-2xl text-mygray underline text-center font-light mt-4"
          >
            letsconnect@arnob.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectSection;
