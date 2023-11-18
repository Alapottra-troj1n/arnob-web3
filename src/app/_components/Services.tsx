"use client";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col  max-w-[1324px] mx-auto px-5 lg:px-0 ">
      <div className="max-w-[1324px] mx-auto lg:px-0 px-5">
        <motion.h2
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-primary font-black text-center uppercase text-[28px] lg:text-[64px] leading-none "
        >
          Assistance <br /> Offerings
        </motion.h2>
        <motion.p
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="lg:text-[32px] leading-9 font-aeonik font-regular text-center mt-[44px] lg:hidden"
        >
          Solving Problems Through <br /> Product Focused Design.
        </motion.p>
        <motion.p
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="lg:text-[32px] leading-9 font-aeonik font-light text-center mt-[44px]  hidden lg:block"
        >
          Solving Problems Through Product <br /> Focused Design.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[104px] gap-10 lg:gap-[178px]">
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-[44px] h-[42px] w-[225px] flex gap-2 items-center justify-center">
            
              <Image src='/star-2.svg' alt="star" width={18} height={18} />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                {" "}
                WHAT CAN I DO FOR YOU
              </h3>
            </div>
            <div className="mt-6 text-[#A7B5C4] font-aeonik font-medium text-[20px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
                <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Logo Design
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Brand Identity
                Design
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Social Graphic
                Design
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Campaign Design
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Website Graphical
                Assets
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Web Illustrations
              </li>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-[44px] h-[42px] w-[250px] flex gap-2 items-center justify-center">
            <Image src='/star-2.svg' alt="star" width={18} height={18} />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                APPLICATIONS I’M FLUENT IN
              </h3>
            </div>
            <div className="mt-6 text-[#A7B5C4] font-aeonik font-medium text-[20px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Photoshop
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Illustrator
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> After Effects
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Figma
              </li>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="border-2 border-primary rounded-[44px] h-[42px] w-[225px] flex gap-2 items-center justify-center">
            <Image src='/star-2.svg' alt="star" width={18} height={18} />
              <h3 className="text-[13px] lg:text-xs text-primary font-baseNeue font-medium">
                WHAT YOU CAN EXPECT
              </h3>
            </div>
            <div className="mt-6 text-[#A7B5C4] font-aeonik font-medium text-[20px] lg:text-xl space-y-3">
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/>Clean & Funtional
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Device & User
                Friendly
              </li>
              <li className="list-none flex gap-3 items-center">
              <Image src={'/arrow-2.svg'} alt="star" width={12} height={12}/> Efficient &
                Maintainable
              </li>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
