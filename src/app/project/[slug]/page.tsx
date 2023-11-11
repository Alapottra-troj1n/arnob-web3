"use client";
import { useParams } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../lib/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';

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
  if (loading) {
    return (
      <div className="h-screen bg-mydark flex justify-center items-center">
        <div className="pt-24 text-mygray max-w-6xl mx-auto ">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mydark">
      <div className="pt-24 text-mygray max-w-6xl mx-auto">
        <div className="border-b pb-10 pt-16 border-gray-700 grid grid-cols-3 ">
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              SERVICE
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.service?.map((service) => <p key={uuidv4()} >{service}</p>) || (
                <p className="text-xs text-gray-500">None</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              INDUSTRY
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.industry?.map((ind) => <p key={uuidv4()} >{ind}</p>) || (
                <p className="text-xs text-gray-500">None</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              YEAR
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.year || <p className="text-xs text-gray-500">None</p>}
            </div>
          </div>
        </div>
        <div className="pt-16">
          <motion.h1 
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl font-black text-primary w-[50%] uppercase">
            {project?.title}
          </motion.h1>
          <p className="w-[50%] mt-9 text-lg font-normal font-clash ">
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
          )) || <p className="text-center text-sm pt-36 text-gray-500">No Photos Found</p> }
        </div>
        <div className="pt-60 pb-40">
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col justify-center gap-6"
          >
            <h1 className="text-center text-6xl font-bold uppercase text-primary hidden lg:block">
              Let's <br /> connect
            </h1>
            <p className="font-clash text-center  text-4xl text-mygray">
              See what magic we can <br /> create together!
            </p>

            <a
              href="mailto:letsconnect@arnob.com"
              className="text-lg lg:text-2xl text-mygray underline text-center  mt-4 font-clash font-light"
            >
              letsconnect@arnob.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
