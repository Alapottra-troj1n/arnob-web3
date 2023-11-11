'use client'
import { MoveUpRight } from "lucide-react";
import {motion} from 'framer-motion'

const Services = () => {

  return (
    <div className="flex justify-center items-center flex-col max-w-6xl mx-auto px-5 lg:px-0 lg:min-h-screen">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        <motion.h2
         initial={{ translateY: 100, opacity: 0 }}
         whileInView={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-primary font-bold text-center uppercase text-[28px] lg:text-6xl leading-7 ">
          Assistance <br /> Offerings
        </motion.h2>
        <motion.p
         initial={{ translateY: 100, opacity: 0 }}
         whileInView={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
         className="lg:text-4xl font-clash font-regular leading-5 text-center mt-4 lg:hidden">
          Solving Problems Through <br /> Product Focused Design.
        </motion.p>
        <motion.p
         initial={{ translateY: 100, opacity: 0 }}
         whileInView={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
         className="lg:text-4xl font-clash font-regular text-center mt-4 hidden lg:block">
          Solving Problems Through Product <br /> Focused Design.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-10 lg:gap-44">
          <motion.div
           initial={{ translateY: 100, opacity: 0 }}
           whileInView={{ translateY: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-full px-3 py-2 flex gap-2 items-center justify-center">
              <img src="/star-2.svg" alt="star" className="w-6" />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                {" "}
                WHAT CAN I DO FOR YOU
              </h3>
            </div>
            <div className="mt-6 text-mygray font-clash font-medium text-[16px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Logo Design
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Brand Identity
                Design
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Social Graphic
                Design
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Campaign Design
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Website Graphical
                Assets
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Web Illustrations
              </li>
            </div>
          </motion.div>
          <motion.div
           initial={{ translateY: 100, opacity: 0 }}
           whileInView={{ translateY: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-full px-3 py-2 flex gap-2 items-center justify-center">
              <img src="/star-2.svg" alt="star" className="w-6" />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                APPLICATIONS I’M FLUENT IN
              </h3>
            </div>
            <div className="mt-6 text-mygray font-clash font-medium text-[16px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Photoshop
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Illustrator
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> After Effects
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Figma
              </li>
            </div>
          </motion.div>
          <motion.div
           initial={{ translateY: 100, opacity: 0 }}
           whileInView={{ translateY: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-full px-3 py-2 flex gap-2 items-center justify-center">
              <img src="/star-2.svg" alt="star" className="w-6" />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                WHAT YOU CAN EXPECT
              </h3>
            </div>
            <div className="mt-6 text-mygray font-clash font-medium text-[16px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Clean & Funtional
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Device & User
                Friendly
              </li>
              <li className="list-none flex gap-3 items-center">
                <MoveUpRight className="font-thin w-5 h-5" /> Efficient &
                Maintainable
              </li>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
