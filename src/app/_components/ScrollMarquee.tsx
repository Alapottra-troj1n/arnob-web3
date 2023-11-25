"use client";

import { useScroll, useTransform, motion } from "framer-motion";

const ScrollMarquee = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [1, 0.6], [0, -1000],);
  const z = useTransform(scrollYProgress, [1, 0.6], [400, 1400]);

  return (
    <div className="w-full flex justify-center items-center antialiased min-h-[20vh] md:min-h-[45vh] overflow-hidden">
      {/* Pc */}
      <div>
      <div className="rotate-6 translate-y-10 hidden lg:block">
      <motion.div
          style={{ x }}
          transition={{ type: "spring", stiffness: 100 }}
          className=" border-y-2 z-10 border-primary pt-1 text-primary font-bold font-baseNeue w-max text-6xl overflow-hidden  whitespace-nowrap"
        >
          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS

          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS

          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS
        </motion.div>
      </div>

       <div className="-rotate-6 hidden lg:block">
       <motion.div
          style={{ x: z }}
          
          transition={{ type: "spring", stiffness: 100 }}
          className=" border-y-2 z-10 border-mygray pt-1 bg-mydark text-mygray font-bold font-baseNeue w-max text-6xl overflow-hidden whitespace-nowrap"
        >
          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS

          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS

          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS

          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS
        </motion.div>
       </div>
      </div>


   {/* Mobile */}
      <div>
      <div className="rotate-6 translate-y-10 lg:hidden">
      <motion.div
          style={{ x }}
          transition={{ type: "spring", stiffness: 100 }}
          className=" border-y-2 z-10 border-primary pt-1 text-primary font-bold font-baseNeue w-max text-2xl overflow-hidden  whitespace-nowrap"
        >
          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS
        </motion.div>
      </div>

       <div className="-rotate-6  lg:hidden">
       <motion.div
          style={{ x: z }}
         
          transition={{ type: "spring", stiffness: 100 }}
          className=" border-y-2 z-10 border-mygray pt-1 bg-mydark text-mygray font-bold font-baseNeue w-max text-2xl overflow-hidden whitespace-nowrap"
        >
          30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS   30+WEB3 PROJECTS X 100+TOTAL PROJECTS 30+WEB3 PROJECTS X 100+TOTAL
          PROJECTS 30+WEB3 PROJECTS X 100+TOTAL PROJECTS
        </motion.div>
       </div>
      </div>
    </div>
  );
};

export default ScrollMarquee;
