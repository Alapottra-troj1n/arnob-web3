"use client";

const ScrollMarquee = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Pc */}
      <div className="hidden lg:block rotate-6  border-y-2 border-primary pt-1 text-primary font-bold font-baseNeue absolute translate-y-5 w-full text-6xl whitespace-nowrap overflow-x-hidden">
        30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
      <div className="hidden lg:block -rotate-3 bg-black  border-y-2 border-white pt-1 text-white font-bold font-baseNeue absolute translate-y-5 w-full text-6xl whitespace-nowrap overflow-x-hidden">
        30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
      {/* Mobile */}
      <div className="lg:hidden rotate-6  border-y-2 border-primary pt-1 text-primary font-bold font-baseNeue absolute translate-y-5 w-full text-2xl whitespace-nowrap overflow-x-hidden">
        30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
      <div className="lg:hidden -rotate-6 bg-black  border-y-2 border-white pt-1 text-white font-bold font-baseNeue absolute translate-y-5 w-full text-2xl whitespace-nowrap overflow-x-hidden">
        30+WEB3 PROJECTS X 100+TOTAL PROJECTS
      </div>
    </div>
  );
};

export default ScrollMarquee;
