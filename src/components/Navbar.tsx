"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div
      className={`bg-mydark w-full lg:fixed z-10  px-5 lg:px-0 overflow-hidden ${
        pathname.includes("/studio") && "hidden z-0"
      }`}
    >
      <div className="max-w-6xl py-7 mx-auto flex justify-between items-center text-mygray">
        <Link href={'/'}>
        <Image
            src={"/logo.svg"}
            width={60}
            height={60}
            alt="arnob chakma"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden lg:flex gap-6 items-center list-none">
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
