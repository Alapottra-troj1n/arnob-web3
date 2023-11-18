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
      <div className="min-h-screen bg-mydark flex justify-center lg:items-center ">
        <div className="max-w-[1324px] mx-auto lg:mt-[167px] px-5 lg:px-0 pt-20 lg:pt-0">
          <div className="flex justify-center ml-8">
            <img
              src="/digital-artist.svg"
              alt="digital architect"
              className=" lg:hidden mb-4"
            />
          </div>
          <div className="relative w-[80%] mx-auto ">
            <img
              src="/star.svg"
              alt="star"
              className="w-[45px] h-[45px] absolute right-[24.8rem] bottom-[5.5rem] animate-spin-slow   hidden lg:block"
            />

            <img
              src="/mic.svg"
              alt="mic"
              className="absolute sm:right-[13rem] md:right-[19.5rem] top-[-3.3rem] lg:top-[-5.2rem] w-14 lg:w-auto hidden lg:block"
            />
            <img
              src="/digital-artist.svg"
              alt="digital architect"
              className="hidden lg:block absolute right-[8.5rem] top-[-4rem]"
            />
            <h1 className="text-center text-5xl lg:text-[90px] text-primary font-baseNeue font-black  leading-[80px]  ">
              <span className="relative">
       
                <img
                  src="/mic.svg"
                  alt="mic"
                  className="absolute right-[12.3rem] top-[-3rem]  w-14 lg:w-auto lg:hidden"
                />
                ARNOB
              </span>{" "}
              CAN DESIGN FOR YOU
            </h1>
          </div>
          <div className="mt-[68px] lg:w-[40%] mx-auto animate-fade-up animate-once animate-duration-600 animate-ease-in-out delay-500">
            <p className="text-mygray uppercase text-center text-xl lg:text-[32px] leading-[34px] tracking-wide font-normal  ">
              HELPING <br /> <span className="text-primary">WEB3.0</span>{" "}
              STARTUPS <br /> THROUGH FUTURE-PROOF TIMELESS DESIGN <br />
              STRATEGY.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/star.svg"
              alt="star"
              className=" animate-spin-slow ease-linear  lg:hidden"
            />
          </div>

          <div className=" bg-mydark  lg:pt-[148px]">
            <ClientSlide />
          </div>
        </div>
      </div>

      <div className="pt-[241px] bg-mydark  ">
        <Projects projects={projects} />
      </div>

      <div className="min-h-screen bg-mydark pt-[278px]   ">
        <Services />
      </div>
      <div className=" bg-mydark pt-[60px]   ">
        <ScrollMarquee />
      </div>

      <div className=" bg-mydark pt-[159px] pb-[235px] ">
        <ConnectSection />
      </div>
    </>
  );
}
