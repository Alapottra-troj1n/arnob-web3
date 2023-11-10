"use client";
import { useParams } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../lib/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project>();
  console.log(project)

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const projectData = await sanityClient.fetch<Project>({
          query: `
                    *[_type == 'project' && slug.current == '${slug}'] {
                        _id,
                        title,
                        description,
                        service,
                        industry,
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
      <div className="pt-36 text-mywhite max-w-6xl mx-auto">
        <h2>Hello SIr</h2>
      </div>
    </div>
  );
};

export default Project;
