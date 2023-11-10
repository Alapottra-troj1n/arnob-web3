"use client";
import Image from "next/image";
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
            <Image
              src={"/clients/Vector.svg"}
              alt="mad-scientist"
              height={25}
              width={170}
            />
            <Image
              src={"/clients/Vector-1.svg"}
              alt="precog-capital"
              height={34}
              width={125}
            />
            <Image
              src={"/clients/Vector-2.svg"}
              alt="jigstack-wallet"
              height={44}
              width={130}
            />
            <Image
              src={"/clients/Vector-3.svg"}
              alt="gridcraft"
              height={59}
              width={96}
            />
            <Image
              src={"/clients/Vector-4.svg"}
              alt="eet-pixel"
              height={34}
              width={119}
            />
            <Image
              src={"/clients/Vector-5.svg"}
              alt="future"
              height={67}
              width={86}
              className="mr-20"
            />
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
            <Image
              src={"/clients/Vector-6.svg"}
              alt="stakbank"
              height={29}
              width={125}
            />
            <Image
              src={"/clients/Vector-7.svg"}
              alt="zirio"
              height={24}
              width={108}
            />
            <Image
              src={"/clients/Vector-8.svg"}
              alt="traveling-trailhead"
              height={65}
              width={89}
            />
            <Image
              src={"/clients/Vector-9.svg"}
              alt="transient"
              height={41}
              width={130}
            />
            <Image
              src={"/clients/Vector-10.svg"}
              alt="silk-tonic"
              height={65}
              width={61}
            />
            <Image
              src={"/clients/Vector-11.svg"}
              alt="finx"
              height={34}
              width={84}
              className="mr-20"
            />
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
            <img
              src="/clients/Vector.svg"
              className=" w-16 lg:w-36 mx-5"
              alt=""
            />
            <img src="/clients/Vector-1.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-2.svg" className=" w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-3.svg" className=" w-16 lg:w-36" alt="" />
            <img
              src="/clients/Vector-4.svg"
              className=" w-16 lg:w-36 mx-5"
              alt=""
            />
            <img
              src="/clients/Vector-5.svg"
              className=" w-16 lg:w-36 mx-5"
              alt=""
            />
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
            <img
              src="/clients/Vector-6.svg"
              className="w-16 lg:w-36 mx-5"
              alt=""
            />
            <img src="/clients/Vector-7.svg" className="w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-8.svg" className="w-16 lg:w-36" alt="" />
            <img src="/clients/Vector-9.svg" className="w-16 lg:w-36" alt="" />
            <img
              src="/clients/Vector-10.svg"
              className="w-16 lg:w-36 mx-5"
              alt=""
            />
            <img
              src="/clients/Vector-11.svg"
              className="w-16 lg:w-36 mx-5"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ClientSlide;
