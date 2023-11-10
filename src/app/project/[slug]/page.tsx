"use client";
import { useParams } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../lib/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project>();
  
  useEffect(() => {
    const getProjectData = async () => {
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
      }
    };
    getProjectData();
  }, []);

  return (
    <div className="min-h-screen bg-mydark">
      <div className="pt-24 text-mywhite max-w-6xl mx-auto">
        <div className="border-b pb-10 pt-20 border-gray-700 grid grid-cols-3 ">
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              SERVICE
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.service.map((service) => <p>{service}</p>) || (
                <p className="text-xs text-gray-500">None</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              INDUSTRY
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.industry.map((ind) => <p>{ind}</p>) || (
                <p className="text-xs text-gray-500">None</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-clash font-bold text-xl text-mygray mb-11">
              YEAR
            </h2>
            <div className="space-y-2 uppercase text-mygray">
             {project?.year ||   <p className="text-xs text-gray-500">None</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
