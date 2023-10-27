import Projects from "@/components/Projects";
import ClientSlide from "./_components/ClientSlide";

export default function Home() {
  return (
   <>
    <div className="h-screen bg-mydark flex justify-center items-center">
      <div className="max-w-6xl mx-auto mt-24">
        <div className="relative w-[70%] mx-auto">
          <img
            src="/star.svg"
            alt="star"
            className="w-[2.4rem] h-[2.4rem] absolute right-[18.3rem] bottom-[5.6rem] animate-spin-slow ease-in-out"
          />
          <img
            src="/mic.svg"
            alt="mic"
            className="absolute right-[13.5rem] top-[-4.7rem]"
          />
          <img
            src="/digital-artist.svg"
            alt="digital architect"
            className="absolute right-[2.5rem] top-[-3.5rem]"
          />
          <h1 className="text-center text-7xl text-mywhite font-baseNeue font-bold tracking-wide">
            ARNOB CAN DESIGN FOR YOU
          </h1>
        </div>
        <div className="mt-10 w-[40%] mx-auto">
          <p className="text-mywhite uppercase text-center  text-3xl  tracking-wide">
            HELPING <br /> <span className="text-primary">WEB3.0</span> STARTUPS{" "}
            <br /> THROUGH FUTURE-PROOF TIMELESS DESIGN <br />
            STRATEGY.
          </p>
        </div>
       
      </div>
    </div>


    <div className="min-h-screen bg-mydark  py-10">
        
         <Projects />
       
     </div>

     <div className="h-screen bg-mydark  py-10">
        
       <ClientSlide/>
      
    </div>
   </>
  );
}
