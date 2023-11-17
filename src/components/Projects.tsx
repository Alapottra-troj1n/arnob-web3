"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../lib/types";
import Link from "next/link";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex justify-center flex-col max-w-[1128px] mx-auto px-5 lg:px-0">
      <div className="flex lg:gap-5 gap-3 items-center justify-center">
        <div className="flex lg:gap-5 gap-3 flex-wrap justify-center lg:justify-start font-clash text-[16px] font-medium">
          <button className=" hover:text-primary transition-all">ALL</button> /{" "}
          <button className=" text-primary underline transition-all">
            WEB3.0 PROJECTS
          </button>{" "}
          /{" "}
          <button className=" hover:text-primary transition-all">
            BRAND IDENTITY & LOGO DESIGN
          </button>{" "}
          /{" "}
          <button className=" hover:text-primary transition-all">
            GRAPHIC EXPERIMENTATION
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-[108px] gap-x-[36px] mt-[88px]">
        {projects.map((project) => (
          <Link key={project._id} href={`/project/${project.slug.current}`}>
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="cursor-pointer"
            >
              <div className="relative h-[481px] overflow-hidden rounded-[32px]  w-full ">
                <Image
                  src={project.mainImage.asset.url}
                  fill
                  alt="mad-meta-scientist"
                  className="object-cover hover:scale-100 scale-105   transition-all duration-500"
                />
              </div>
              <div className="flex justify-between items-center mt-[29px] px-2 font-aeonik text-mygray">
                <div className="cursor-pointer">
                  <h2 className="text-[22px] font-medium">{project.title}</h2>
                  <p className="font-normal text-[17px] text-[#717F8E]  ">
                    {project.subtitle}
                  </p>
                </div>
                <div className="border w-[89px] h-[60px] rounded-[30px] text-mygray border-mygray cursor-pointer group flex justify-center items-center">
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
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-[86px] flex gap-3 items-center justify-center group">
        <h2 className="text-center font-medium font-clash text-[17px] cursor-pointer hover:text-primary transition-all ">
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
