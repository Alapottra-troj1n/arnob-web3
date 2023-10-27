import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex justify-center flex-col max-w-6xl mx-auto">
      <div className="flex  gap-5 items-center justify-center">
        <div className="flex gap-5 text-xs">
          <button className="underline hover:text-primary transition-all">
            ALL
          </button>{" "}
          /{" "}
          <button className=" hover:text-primary transition-all">
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

      <div className="grid grid-cols-2 w-full gap-10 mt-10">
        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project1.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">Mad Meta Scientist</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - Gaming 3.0
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
            <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project2.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">FinX Australia</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - Fintech
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
            <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project3.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">Precog Capital</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - Fintech
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
            <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project4.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">Gridcraft</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - Design Agency
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
              <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project5.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">Precog Finance</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - DeFi
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
            <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-[25rem]">
            <Image src={"/project6.png"} fill alt="mad-meta-scientist" />
          </div>
          <div className="flex justify-between items-center mt-5 px-2">
            <div className="cursor-pointer">
              <h2 className="text-xl">Eet Pixel</h2>
              <p className="font-light text-sm text-mygray">
                Brand Identity - Design Agency
              </p>
            </div>
            <div className="border py-4 px-7 rounded-3xl text-mygray border-mygray cursor-pointer group">
            <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
            </div>
          </div>
        </div>


      </div>

      <div className="mt-20 flex gap-3 items-center justify-center group">
        <h2 className="text-center cursor-pointer hover:text-primary transition-all text-xl" >View More Works</h2>
        <ArrowRight className="h-6 w-6 group-hover:text-primary group-hover:translate-x-2  transition-all" />
      </div>
    </div>
  );
};

export default Projects;
