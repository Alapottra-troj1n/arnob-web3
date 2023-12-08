"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setNavOpen(false);
   
  }, [pathname]);

  

  return (
    <div
      className={`bg-mydark w-full overflow-x-hidden  z-10   px-8 md:px-0 font-aeonik font-normal ${
        pathname.includes("/studio") && "hidden z-0"
      }`}
      ref={navbarRef}
    >
      <div className="max-w-[1324px] h-[90px] mx-auto flex justify-between items-center text-mygray overflow-x-hidden ">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={82}
            height={49}
            alt="arnob chakma"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center list-none">
          <Link className="hover:text-primary transition-colors" href={"/"}>
            <li>WORK</li>
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/thoughts"}
          >
            <li>THOUGHTS</li>
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/aboutme"}
          >
            <li>ABOUT ME</li>
          </Link>

          <Link
            className="hover:text-primary transition-colors"
            href={"/contact"}
          >
            <li>CONTACT</li>
          </Link>
          <button className="bg-primary w-[134px] h-[48px] font-normal rounded-full flex gap-2 items-center justify-center text-[#E8F1F8]">
            <Image
              src={"/telegram.svg"}
              width={20}
              height={17}
              alt="telegram"
            />{" "}
            Telegram
          </button>
        </div>

        <div
          className={`fixed top-3 right-3 md:hidden  transition-all opacity-0 ${
            navOpen ? "translate-x-0 opacity-100 block " : "transform translate-x-56 hidden opacity-0"
          }  list-none bg-gray-900  px-8 py-10 rounded-2xl z-40`}
        >
          <div className="flex flex-col gap-5 ">
            <Link className="hover:text-primary transition-colors" href={"/"}>
              <li>WORK</li>
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href={"/thoughts"}
            >
              <li>THOUGHTS</li>
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href={"/aboutme"}
            >
              <li>ABOUT ME</li>
            </Link>

            <Link
              className="hover:text-primary transition-colors"
              href={"/contact"}
            >
              <li>CONTACT</li>
            </Link>
            <button className="bg-primary w-[134px] h-[48px] font-normal rounded-full flex gap-2 items-center justify-center text-[#E8F1F8]">
              <Image
                src={"/telegram.svg"}
                width={20}
                height={17}
                alt="telegram"
              />{" "}
              Telegram
            </button>
          </div>
        </div>

        {navOpen ? (
          <X
            width={35}
            onClick={() => setNavOpen(!navOpen)}
            height={35}
            className="md:hidden cursor-pointer z-50 fixed right-6"
          />
        ) : (
          <Image
            src={"/hamburger.svg"}
            width={35}
            onClick={() => setNavOpen(!navOpen)}
            height={35}
            alt="hamburger"
            className="md:hidden cursor-pointer z-50"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
