"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../lib/types";
import Link from "next/link";
import {  useRef, useState } from "react";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects);
  const categoryRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("All");
  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
     if(categoryRef.current){
        categoryRef.current.scrollIntoView({ behavior: 'smooth' });
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



  return (
    <div ref={categoryRef} className="flex justify-center flex-col max-w-[1324px] mx-auto px-8 lg:px-0">
      <div className="flex top-0 sticky lg:gap-5 gap-3 items-center justify-center z-30 bg-mydark py-5">
        <div  className="flex  md:gap-5 gap-3 flex-wrap justify-center lg:justify-start font-medium font-aeonik text-[14px] md:text-[16px] md:font-normal">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`hover:text-primary transition-all ${
              category === "All" && "text-primary underline"
            }`}
          >
            ALL
          </button>{" "}
          /{" "}
          <button
            onClick={() => handleCategoryChange("Web3")}
            className={`hover:text-primary transition-all ${
              category === "Web3" && "text-primary underline"
            }`}
          >
            WEB3.0 PROJECTS
          </button>{" "}
          /{" "}
          <button
            onClick={() => handleCategoryChange("Brand Identity & Logo Design")}
            className={`hover:text-primary transition-all ${
              category === "Brand Identity & Logo Design" &&
              "text-primary underline"
            }`}
          >
            BRAND IDENTITY & LOGO DESIGN
          </button>{" "}
          /{" "}
          <button
            onClick={() => handleCategoryChange("Graphic Experimentation")}
            className={`hover:text-primary transition-all ${
              category === "Graphic Experimentation" && "text-primary underline"
            }`}
          >
            GRAPHIC EXPERIMENTATION
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-[40px] md:gap-y-[108px] md:gap-x-[36px] mt-[32px] md:mt-[88px]">
        {projectsData.map((project) => (
          <Link key={project._id} href={`/project/${project.slug.current}`}>
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="cursor-pointer w-[296px] md:w-full mx-auto"
            >
              <div className="relative  h-[220px] mx-auto  md:h-[481px] overflow-hidden rounded-[16px] md:rounded-[32px]  w-full ">
                <Image
                  src={project.mainImage.asset.url}
                  fill
                  alt="mad-meta-scientist"
                  className="object-cover hover:scale-100 scale-105   transition-all duration-500"
                />
              </div>
              <div className="flex justify-between items-center mt-[22px] md:mt-[29px] px-2 font-aeonik text-mygray">
                <div className="cursor-pointer">
                  <h2 className="text-[14px] md:text-[22px] font-normal">
                    {project.title}
                  </h2>
                  <p className="font-normal text-[10px] md:text-[17px] text-[#717F8E]  ">
                    {project.subtitle}
                  </p>
                </div>
                <div className="border hidden md:flex w-[89px] h-[60px] rounded-[30px] text-mygray border-mygray cursor-pointer group justify-center items-center">
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
      {
          !projectsData.length && (
            <div className="w-full"><h2 className="text-center text-xs text-gray-500 py-24">No Projects Found</h2></div>
          )
        }

      <div className="mt-[39px] md:mt-[86px] flex gap-3 items-center justify-center group">
        <h2 className="text-center font-medium md:font-normal font-aeonik text-[12px] md:text-[17px] cursor-pointer hover:text-primary transition-all ">
          View More Works
        </h2>
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
          />
        </svg>
      </div>
    </div>
  );
};

export default Projects;
