"use client";
import { useParams } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../lib/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import ConnectSection from "@/app/_components/ConnectSection";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProjectData = async () => {
      setLoading(true);
      try {
        const projectData = await sanityClient.fetch<Project>({
          query: `
                    *[_type == 'project' && slug.current == '${slug}'][0] {
                        _id,
                        title,
                        description,
                        service,
                        industry,
                        year,
                        mainImage{
                        asset->{url}
                        },
                        categories[]->{
                          title,
                        },
                        slug{
                        current
                        },
                        images[] {
                          asset->{url}
                        }
                      }
                    
                
                `,
          config: { cache: "no-cache" },
        });
        setProject(projectData);
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getProjectData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen h-full bg-mydark flex justify-center items-center">
        <div className="lg:pt-24 text-mygray lg:max-w-6xl lg:mx-auto ">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mydark overflow-x-hidden">
      <div className="lg:pt-24 text-mygray max-w-[1324px] mx-auto px-10 2xl:px-0">
        <div className="border-b pb-10 pt-16 border-gray-700 grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto">
          <div>
            <h2 className="font-aeonik font-bold text-[15px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              SERVICE
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.service?.map((service) => (
                <p
                  className="text-[15px] font-aeonik  font-normal text-gray-500"
                  key={uuidv4()}
                >
                  {service}
                </p>
              )) || (
                <p className="text-[15px] font-normal text-gray-500">None</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-aeonik font-bold text-[15px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              INDUSTRY
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.industry?.map((ind) => (
                <p
                  className="text-[15px] font-aeonik  font-normal text-gray-500"
                  key={uuidv4()}
                >
                  {ind}
                </p>
              )) || (
                <p className="text-[15px] font-aeonik  font-normal text-gray-500">
                  None
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-aeonik font-bold text-[15px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              YEAR
            </h2>
            <div className="space-y-2 uppercase text-mygray text-[15px] font-aeonik  font-normal ">
              {project?.year || (
                <p className="text-[15px] font-normal text-gray-500">None</p>
              )}
            </div>
          </div>
        </div>
        <div lang="en" className="pt-16 max-w-5xl mx-auto">
          <motion.h1
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-[45px] leading-[44px] lg:text-6xl font-black font-baseNeue text-primary lg:px-0 break-words lg:w-[70%] uppercase hyphens-auto"
          >
            {project?.title}
          </motion.h1>
          <p className="lg:w-[70%] w-[80%] mt-9 text-[18px] leading-[29px] font-normal font-aeonik ">
            {project?.description}
          </p>
        </div>

        <div className="mt-24 flex flex-col w-full h-full gap-y-4">
          {project?.images?.map((image) => (
            <motion.div
              key={uuidv4()}
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={image.asset.url}
                width={1600}
                height={848}
                alt="project-img"
              />
            </motion.div>
          )) || (
            <p className="text-center text-sm pt-36 text-gray-500">
              No Photos Found
            </p>
          )}
        </div>
        <div className="lg:pt-60 lg:pb-40 pt-28 pb-20">
          <ConnectSection />
        </div>
      </div>
    </div>
  );
};

export default Project;
