import { MoveUpRight } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";

const Footer = () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  return (
    <div className={`bg-mydark ${fullUrl.includes("/studio") && "hidden"} min-h-[49px] pb-[54px]`}>
      <div className=" max-w-[1128px] mx-auto  hidden lg:block">
        <div className="flex justify-between  items-center flex-wrap">
          <div>
            <p className="text-gray-400 font-light text-sm">
              ©2023 Arnob Chakma. All rights reserved.
            </p>
          </div>
          <div className="uppercase flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary">
              Behance
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary">
              Twitter
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary">
              Linkedin
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary">
              Dribble
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
          </div>
          <div>
            <button className="bg-primary px-6 py-2 rounded-full flex gap-3 items-center">
              <Image
                src={"/telegram.svg"}
                width={18}
                height={18}
                alt="telegram"
              />{" "}
              Telegram
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="max-w-6xl mx-auto py-4 lg:hidden px-5">
        <div className="grid grid-cols-2">
          <div className="uppercase grid grid-cols-1 gap-5 text-sm">
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary ">
              Behance
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text- ">
              Twitter
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary ">
              Linkedin
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-primary ">
              Dribble
              <MoveUpRight
                height={20}
                width={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-10">
            <div className="flex justify-center w-full">
              <button className="bg-primary px-6 py-3 rounded-full flex gap-3 items-center">
                <Image
                  src={"/telegram.svg"}
                  width={18}
                  height={18}
                  alt="telegram"
                />{" "}
                Telegram
              </button>
            </div>
            <div>
              <p className="text-gray-400 font-light text-xs text-right">
                ©2023 Arnob Chakma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
