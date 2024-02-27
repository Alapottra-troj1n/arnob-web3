"use client";

import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <div className="md:h-full flex justify-center items-center flex-col lg:px-0 px-8">
      <div className=" max-w-[1324px] mx-auto">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-center text-6xl font-black uppercase text-primary hidden md:block">
            Let's <br /> connect
          </h1>
          <h1 className="text-center text-[30px] font-extrabold leading-7 uppercase text-primary md:hidden ">
            Let's <br /> connect
          </h1>
          <p className="font-aeonik text-center mt-[26px]  text-[20px] font-normal md:font-light md:text-[38px] text-mygray leading-[24px] md:leading-10">
            See What Magic We Can <br /> Create Together!
          </p>

          <a
            href="mailto:letsconnect@arnob.com"
            className="text-[18px] md:text-[30px] text-mygray underline  underline-offset-8 decoration-1 text-center  mt-[38px] md:mt-[74px] font-aeonik font-extralight"
          >
            letsconnect@arnob.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectSection;
