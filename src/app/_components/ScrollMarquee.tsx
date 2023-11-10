"use client";

import { useScroll, useTransform, motion } from "framer-motion";

const ScrollMarquee = () => {

  return (
    <div className="w-full overflow-hidden">
      <div
      className="rotate-6  border-y-2 border-primary pt-1 text-primary font-bold font-baseNeue absolute translate-y-5 w-full text-6xl whitespace-nowrap"
      >
      30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
      <div
      className="-rotate-6 bg-black  border-y-2 border-white pt-1 text-white font-bold font-baseNeue absolute translate-y-5 w-full text-6xl whitespace-nowrap"
      >
      30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
    </div>
  );
};

export default ScrollMarquee;
