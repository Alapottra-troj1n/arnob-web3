"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  
  return (
    <div
      className={`bg-mydark w-full  z-10   px-5 lg:px-0 overflow-hidden font-aeonik font-medium ${
        pathname.includes("/studio") && "hidden z-0"
      }`}
    >
      <div className="max-w-[1128px] h-[90px] mx-auto flex justify-between items-center text-mygray">
        <Link href={'/'}>
        <Image
            src={"/logo.svg"}
            width={82}
            height={49}
            alt="arnob chakma"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden lg:flex gap-8 items-center list-none">
          <Link className="hover:text-primary transition-colors" href={"/work"}>
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
            href={"/about me"}
          >
            <li>ABOUT ME</li>
          </Link>

          <Link
            className="hover:text-primary transition-colors"
            href={"/about me"}
          >
            <li>CONTACT</li>
          </Link>
          <button className="bg-primary w-[134px] h-[48px] rounded-full flex gap-2 items-center justify-center text-[#E8F1F8]">
          
            <Image
              src={"/telegram.svg"}
              width={20}
              height={17}
              alt="telegram"
            />{" "}
            Telegram
          </button>
        </div>

        <Image
          src={"/hamburger.svg"}
          width={35}
          height={35}
          alt="hamburger"
          className="lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
