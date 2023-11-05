"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../lib/types";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex justify-center flex-col max-w-6xl mx-auto px-5 lg:px-0">
      <div className="flex lg:gap-5 gap-3 items-center justify-center">
        <div className="flex lg:gap-5 gap-3 text-xs flex-wrap justify-center lg:justify-start">
          <button className="underline hover:text-primary transition-all">
            ALL
          </button>{" "}
          /{" "}
          <button className=" text-primary transition-all">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 mt-10">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="cursor-pointer"
          >
            <div className="relative h-[25rem] overflow-hidden rounded-xl  w-full ">
              <Image
                src={project.mainImage.asset.url}
                fill
                alt="mad-meta-scientist"
                className="object-cover hover:scale-100 scale-105   transition-all duration-500"
              />
            </div>
            <div className="flex justify-between items-center mt-5 px-2">
              <div className="cursor-pointer">
                <h2 className="text-xl">{project.title}</h2>
                <p className="font-light text-sm text-mygray">
                  {project.subtitle}
                </p>
              </div>
              <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
                <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex gap-3 items-center justify-center group">
        <h2 className="text-center cursor-pointer hover:text-primary transition-all text-sm">
          View More Works
        </h2>
        <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
      </div>
    </div>
  );
};

export default Projects;
