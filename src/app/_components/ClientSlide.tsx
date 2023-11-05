"use client";
import Marquee from "react-fast-marquee";

const ClientSlide = () => {
  return (
    <div className=" flex justify-center items-center flex-col lg:px-0 px-5">

      <div className=" hidden lg:block">
        <Marquee
          gradient={true}
          gradientColor="#060A0E"
          autoFill
          gradientWidth={500}
          direction="left"
        >
          <div className="flex gap-16 items-center flex-wrap">
            <img src="/clients/Vector.svg" className=" w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-1.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-2.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-3.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-4.svg" className=" w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-5.svg" className=" w-16 lg:w-36 mx-5" alt="" />
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

      <div className="mt-20 lg:hidden">
        <Marquee
          gradient={true}
          gradientColor="#060A0E"
          autoFill
          gradientWidth={100}
          direction="left"
        >
          <div className="flex gap-16 items-center flex-wrap">
            <img src="/clients/Vector.svg" className=" w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-1.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-2.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-3.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-4.svg" className=" w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-5.svg" className=" w-16 lg:w-36 mx-5" alt="" />
          </div>
        </Marquee>

        <Marquee
          className="mt-16"
          gradient={true}
          gradientColor="#060A0E"
          autoFill
          gradientWidth={100}
          direction="right"
        >
          <div className="flex gap-16 items-center flex-wrap">
            <img src="/clients/Vector-6.svg" className="w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-7.svg" className="w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-8.svg" className="w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-9.svg" className="w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-10.svg" className="w-16 lg:w-36 mx-5" alt="" />
            <img src="/clients/Vector-11.svg" className="w-16 lg:w-36 mx-5" alt="" />
          </div>
        </Marquee>
      </div>



    </div>
  );
};

export default ClientSlide;
