import Projects from "@/components/Projects";
import ClientSlide from "./_components/ClientSlide";
import ConnectSection from "./_components/ConnectSection";

import { Project } from "../../lib/types";
import { sanityClient } from "../../sanity/lib/client";
import Services from "./_components/Services";
import ScrollMarquee from "./_components/ScrollMarquee";

export default async function Home() {
  const projects = await sanityClient.fetch<Project[]>({
    query: `
    *[_type == 'project'] {
      _id,
      title,
      description,
      subtitle,
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

  return (
    <>
      <div className="min-h-screen bg-mydark flex justify-center items-center ">
        <div className="max-w-6xl mx-auto lg:mt-48 px-5 lg:px-0">
          <div className="relative w-[70%] mx-auto ">
            <img
              src="/star.svg"
              alt="star"
              className="w-[2.4rem] h-[2.4rem] absolute right-[18.3rem] bottom-[5.6rem] animate-spin-slow ease-in-out hidden md:block"
            />

            <img
              src="/mic.svg"
              alt="mic"
              className="absolute right-[13rem] md:right-[13.5rem] top-[-3rem] md:top-[-4.7rem] w-14 lg:w-auto"
            />
            <img
              src="/digital-artist.svg"
              alt="digital architect"
              className="absolute right-[2.5rem] top-[-3.5rem]"
            />
            <h1 className="text-center text-5xl lg:text-7xl text-primary font-baseNeue font-bold tracking-wide  ">
              ARNOB CAN DESIGN FOR YOU
            </h1>
          </div>
          <div className="mt-10 lg:w-[40%] mx-auto animate-fade-up animate-once animate-duration-600 animate-ease-in-out delay-500">
            <p className="text-mywhite uppercase text-center text-xl lg:text-3xl tracking-wide ">
              HELPING <br /> <span className="text-primary">WEB3.0</span>{" "}
              STARTUPS <br /> THROUGH FUTURE-PROOF TIMELESS DESIGN <br />
              STRATEGY.
            </p>
          </div>
          <div className="flex justify-center items-center my-8">
            <img
              src="/star.svg"
              alt="star"
              className=" animate-spin-slow ease-in-out  md:hidden"
            />
          </div>

          <div className=" bg-mydark pb-14  lg:pt-[148px] lg:pb-[241px]">
            <ClientSlide />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-mydark py-10   ">
        <Projects projects={projects} />
      </div>

      <div className="min-h-screen bg-mydark py-10   ">
        <Services />
      </div>
      <div className=" bg-mydark py-20   ">
        <ScrollMarquee />
      </div>

      <div className="lg:h-screen bg-mydark  py-10">
        <ConnectSection />
      </div>
    </>
  );
}
