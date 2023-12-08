const AboutMe = () => {
  return (
    <div className="min-h-screen bg-mydark flex justify-center items-center flex-col">
      <div className="max-w-[1324px] mx-auto  pt-[155px]  grid grid-cols-2 gap-[90px] pb-[310px]">
        <div className="">
          <img
            className="w-[408px] h-[551px] ml-auto"
            src="/arnob.png"
            alt=""
          />
        </div>
        <div>
          <div className="ml-2">
            <h2 className="font-baseNeue font-black text-[56px] leading-none text-primary">
              A Visual Design Alchemist
            </h2>
            <p className="font-aeonik font-normal text-2xl leading-snug mt-[45px] text-mygray">
              I've been a brand identity expert and design generalist for 8
              years, with the last 5 of those years devoted to working on Web3
              brand identity & Communication design.
            </p>
            <p className="font-aeonik text-[18px] mt-[30px] text-[#A7B5C4]">
              Over that time, I've refined my abilities to create visually
              arresting designs for the online realm. I create dynamic Web3
              visuals and brand identities.
            </p>
            <p className="font-aeonik text-[18px] mt-[30px] text-[#A7B5C4]">
              My path has been one of lifelong learning, consistently committed
              to turning everyday digital encounters into something remarkable
              in the ever-evolving Web 3.0 environment.
            </p>
          </div>
          <h2 className=" cursor-pointer text-[26px] underline font-aeonik font-light pt-[70px] underline-offset-4 decoration-1 text-[#CCCCCC]">
            Download CV
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-center mb-[233px]">
        <h1 className="text-center text-6xl font-black uppercase text-primary hidden md:block">
          CRAFT <br /> SOMETHING <br /> SUPERB!
        </h1>
        <h1 className="text-center text-[30px] font-extrabold leading-7 uppercase text-primary md:hidden ">
          CRAFT <br /> SOMETHING <br /> SUPERB!
        </h1>
        <p className="font-aeonik text-center mt-[26px]  text-[20px] font-normal md:font-light md:text-[38px] text-mygray leading-5 md:leading-9">
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
