import { MoveUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-mydark">
      <div className="max-w-6xl mx-auto py-14 hidden lg:block">
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
            <button className="bg-primary text-sm px-6 py-2 rounded-full">
              CHAT NOW!
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="max-w-6xl mx-auto py-14 lg:hidden px-5">
        <div className="grid grid-cols-2">
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

          <div className="flex flex-col justify-between">
            <button className="bg-primary text-sm px-6 py-4 rounded-full">
              CHAT NOW!
            </button>
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
