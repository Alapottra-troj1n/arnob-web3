'use client'
import Image from "next/image";

const AboutMe = () => {
  const handleDownload = () => {
      
      const link = document.createElement('a');
     
      link.href = 'https://utfs.io/f/6cc58073-3e5f-45bc-8bad-c8645aa6cecb-2gj.pdf';
      
      link.download = 'Arnob CV.pdf';
     
      link.click();
  };


  return (
    <div className="min-h-screen bg-mydark flex justify-center items-center flex-col overflow-x-hidden">
      <div className="max-w-[1324px] mx-auto px-[16px] 2xl:px-0   pt-[164px] lg:pt-[245px] grid lg:grid-cols-2 grid-cols-1 gap-[36px] lg:gap-[90px] lg:pb-[310px] pb-[175px] ">
        <div>
          <h2 className="font-baseNeue font-black text-[32px] lg:text-[56px] leading-none text-primary uppercase lg:hidden mb-[30px]">
            A Visual <br /> Design <br /> Alchemist
          </h2>
          <Image
            src={"/arnob.png"}
            alt="arnob"
            height={551}
            width={408}
            className="ml-auto hidden lg:block"
          />
          <Image
            src={"/arnob.png"}
            alt="arnob"
            height={334}
            width={296}
            className="mx-auto lg:hidden"
          />
        </div>
        <div>
          <div className="ml-2">
            <h2 className="font-baseNeue font-black text-[32px] lg:text-[56px] leading-none text-primary uppercase hidden lg:block">
              A Visual Design Alchemist
            </h2>
            <p className="font-aeonik font-light text-2xl leading-snug lg:mt-[45px] text-mygray">
              I've been a brand identity expert and design generalist for 8
              years, with the last 5 of those years devoted to working on Web3
              brand identity & Communication design.
            </p>
            <p className="font-aeonik text-[18px] mt-[30px] font-light text-[#A7B5C4]">
              Over that time, I've refined my abilities to create visually
              arresting designs for the online realm. I create dynamic Web3
              visuals and brand identities.
            </p>
            <p className="font-aeonik text-[18px] mt-[30px] font-light text-[#A7B5C4]">
              My path has been one of lifelong learning, consistently committed
              to turning everyday digital encounters into something remarkable
              in the ever-evolving Web 3.0 environment.
            </p>
          </div>
          <h2 onClick={handleDownload} className="ml-2 lg:ml-0 text-mygray hover:text-primary transition-all  cursor-pointer text-[26px] underline font-aeonik font-light pt-[70px] underline-offset-4 decoration-1 ">
            Download CV
          </h2>
          <a href="https://read.cv/arnob" target="_blank" className="ml-2 lg:ml-0 text-mygray hover:text-primary transition-all  cursor-pointer text-[26px] underline font-aeonik font-light pt-[10px] underline-offset-4 decoration-1 ">
            Read CV
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:mb-[233px] mb-[107px]">
        <h1 className="text-center text-6xl font-black uppercase text-primary hidden md:block">
          CRAFT <br /> SOMETHING <br /> SUPERB!
        </h1>
        <h1 className="text-center text-[30px] font-extrabold leading-7 uppercase text-primary md:hidden ">
          CRAFT <br /> SOMETHING <br /> SUPERB!
        </h1>
        <p className="font-aeonik text-center mt-[26px]  text-[20px] font-light md:font-light md:text-[38px] text-mygray leading-[24px] md:leading-10">
          See What Magic We Can <br /> Create Together!
        </p>

        <a
          href="mailto:letsconnect@arnob.com"
          className="text-[18px] md:text-[30px] text-mygray underline  underline-offset-8 decoration-1 text-center  mt-[38px] md:mt-[74px] font-aeonik font-extralight"
        >
          letsconnect@arnob.com
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
