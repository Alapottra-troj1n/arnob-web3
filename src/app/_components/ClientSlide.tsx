import Marquee from "react-fast-marquee";

const ClientSlide = () => {
  return (
    <div className=" h-full flex justify-center items-center flex-col ">
      <div className=" mx-auto">
        <h1 className="text-4xl text-center uppercase font-bold text-primary ">
          Some of the brands we <br />  have worked with
        </h1>
      </div>

      <div className="mt-20 ">
  
          <Marquee
            gradient={true}
            gradientColor="#060A0E"
            autoFill
            gradientWidth={500}
            direction="left"
          >
            <div className="flex gap-16 items-center flex-wrap">
              <img src="/clients/Vector.svg" className="w-36 mx-5" alt="" />
              <img src="/clients/Vector-1.svg" className="w-36" alt="" />
              <img src="/clients/Vector-2.svg" className="w-36" alt="" />
              <img src="/clients/Vector-3.svg" className="w-36" alt="" />
              <img src="/clients/Vector-4.svg" className="w-36 mx-5" alt="" />
              <img src="/clients/Vector-5.svg" className="w-36 mx-5" alt="" />
            </div>
          </Marquee>
      

       
          <Marquee
          className="mt-16"
            gradient={true}
            gradientColor="#060A0E"
            autoFill
            gradientWidth={500}
            direction="right"
          >
            <div className="flex gap-16 items-center flex-wrap">
              <img src="/clients/Vector-6.svg" className="w-36 mx-5" alt="" />
              <img src="/clients/Vector-7.svg" className="w-36" alt="" />
              <img src="/clients/Vector-8.svg" className="w-36" alt="" />
              <img src="/clients/Vector-9.svg" className="w-36" alt="" />
              <img src="/clients/Vector-10.svg" className="w-36 mx-5" alt="" />
              <img src="/clients/Vector-11.svg" className="w-36 mx-5" alt="" />
            </div>
          </Marquee>
       
      </div>
    </div>
  );
};

export default ClientSlide;
