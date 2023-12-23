"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Project } from "../../lib/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects);
  const categoryRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("All");
  

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (selectedCategory === "All") {
      setProjectsData(projects);
      return;
    }

    const filteredProjects = projects.filter((project) =>
      project.categories.some((category) => category.title === selectedCategory)
    );
    setProjectsData(filteredProjects);
  };
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {

    const getRootMargin = () => {

     
      const isMobileView = window.innerWidth < 600; // Adjust the threshold as needed

    
      return isMobileView ? '-200px' : '-300px';
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: getRootMargin() }
    );
    observer.observe(categoryRef.current!);
  }, []);
  


  return (
    <div
      ref={categoryRef}
      className="flex md:static justify-center flex-col max-w-[1324px] mx-auto px-10 2xl:px-0 min-h-screen"
    >
      <motion.div
        className={`flex  lg:gap-5 gap-3 items-center justify-center z-30 bg-mydark py-5 fixed top-0 left-0 w-full transition-transform ${
          isIntersecting ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
      <div className="flex md:gap-5 gap-3 leading-[12px] md:leading-normal flex-wrap justify-center lg:justify-start font-medium font-aeonik text-[14px] md:text-[16px] md:font-normal">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`hover:text-primary transition-all ${
            category === 'All' && 'text-primary underline'
          }`}
        >
          ALL
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Web3')}
          className={`hover:text-primary transition-all ${
            category === 'Web3' && 'text-primary underline'
          }`}
        >
          WEB3.0 PROJECTS
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Brand Identity & Logo Design')}
          className={`hover:text-primary transition-all ${
            category === 'Brand Identity & Logo Design' &&
            'text-primary underline'
          }`}
        >
          BRAND IDENTITY & LOGO DESIGN
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Graphic Experimentation')}
          className={`hover:text-primary transition-all ${
            category === 'Graphic Experimentation' && 'text-primary underline'
          }`}
        >
          GRAPHIC EXPERIMENTATION
        </button>
      </div>
    </motion.div>

    <motion.div
        className={`flex lg:gap-5 gap-3 items-center justify-center z-30 bg-mydark py-5 w-full transition delay-75 ${
          isIntersecting ? " -translate-y-10 opacity-0 " : ""
        }`}
      >
      <div className="flex md:gap-5 gap-3 leading-[12px] md:leading-normal flex-wrap justify-center lg:justify-start font-medium font-aeonik text-[14px] md:text-[16px] md:font-normal">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`hover:text-primary transition-all ${
            category === 'All' && 'text-primary underline'
          }`}
        >
          ALL
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Web3')}
          className={`hover:text-primary transition-all ${
            category === 'Web3' && 'text-primary underline'
          }`}
        >
          WEB3.0 PROJECTS
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Brand Identity & Logo Design')}
          className={`hover:text-primary transition-all ${
            category === 'Brand Identity & Logo Design' &&
            'text-primary underline'
          }`}
        >
          BRAND IDENTITY & LOGO DESIGN
        </button>{' '}
        /{' '}
        <button
          onClick={() => handleCategoryChange('Graphic Experimentation')}
          className={`hover:text-primary transition-all ${
            category === 'Graphic Experimentation' && 'text-primary underline'
          }`}
        >
          GRAPHIC EXPERIMENTATION
        </button>
      </div>
    </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-y-[40px] sm:gap-y-[108px] sm:gap-x-[36px] mt-[32px] sm:mt-[88px]">
        {projectsData.map((project) => (
          <Link key={project._id} className="group" href={`/project/${project.slug.current}`}>
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="cursor-pointer w-[296px] md:w-full mx-auto"
            >
              <div className="relative  h-[220px] mx-auto  md:h-[481px] overflow-hidden rounded-[16px] md:rounded-[32px]  w-full ">
                {project.mainImage.type == "image" && (
                  <Image
                    src={project.mainImage.image.asset.url}
                    fill
                    alt="mad-meta-scientist"
                    className="object-cover hover:scale-100 scale-105   transition-all duration-500"
                  />
                )}
                {project.mainImage.type == "video" && (
                  <video
                    
                    width="100%"
                    autoPlay
                    muted
                    loop
                    height="auto"
                    className="object-contain hover:scale-100 scale-105 transition-all duration-500"
                  >
                    <source
                      src={project.mainImage.video.asset.url}
                      type="video/mp4"
                    />
                  </video>
                )}
              </div>
              <div className="flex justify-between items-center mt-[22px] md:mt-[29px] px-2 font-aeonik text-mygray ">
                <div className="cursor-pointer">
                  <h2 className="text-[14px] md:text-[22px] font-normal group-hover:text-primary transition">
                    {project.title}
                  </h2>
                  <p className="font-normal text-[10px] md:text-[17px] text-[#717F8E]  ">
                    {project.subtitle}
                  </p>
                </div>
                <div className="border hidden md:flex w-[89px] h-[60px] rounded-[30px] text-mygray border-mygray group-hover:border-primary cursor-pointer group justify-center items-center">
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0116 0L13.5791 0.430913L20.9657 7.79391L0.0977868 7.66276H0.0150441L0 8.33724H20.8341L13.5791 15.5691L14.0116 16L21.2516 8.74941L22 8L14.0116 0Z"
                      fill="#CCCCCC"
                      className="group-hover:fill-primary  transition"
                    />
                  </svg>
                </div>
                <div className="border md:hidden w-[58px] h-[39px]  rounded-[30px] text-mygray border-mygray cursor-pointer group flex justify-center items-center">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0116 0L13.5791 0.430913L20.9657 7.79391L0.0977868 7.66276H0.0150441L0 8.33724H20.8341L13.5791 15.5691L14.0116 16L21.2516 8.74941L22 8L14.0116 0Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {!projectsData.length && (
        <div className="w-full">
          <h2 className="text-center text-xs text-gray-500 py-24">
            No Projects Found
          </h2>
        </div>
      )}

      <div className="mt-[39px] md:mt-[86px] flex gap-3 items-center justify-center group">
        <h2 className="text-center font-medium md:font-normal font-aeonik text-xs md:text-[17px] cursor-pointer hover:text-primary transition-all ">
          View More Works
        </h2>
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:translate-x-2 transition"
         
        >
          <path
            d="M14.0116 0L13.5791 0.430913L20.9657 7.79391L0.0977868 7.66276H0.0150441L0 8.33724H20.8341L13.5791 15.5691L14.0116 16L21.2516 8.74941L22 8L14.0116 0Z"
            fill="#CCCCCC"
            className="group-hover:fill-primary transition "
          />
        </svg>
      </div>
    </div>
  );
};

export default Projects;
