import Image from "next/image";
import Link from "next/link";
import { headers } from 'next/headers';

const Navbar = () => {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || "";

  return (
    <div className={`bg-mydark w-full lg:fixed z-50 px-5 lg:px-0 overflow-hidden ${fullUrl.includes('/studio') && 'hidden'}`}>
      <div className="max-w-6xl py-7 mx-auto flex justify-between items-center text-mywhite">
        <div>
          <Image
            src={"/logo.svg"}
            width={60}
            height={60}
            alt="arnob chakma"
            className="cursor-pointer"
          />
        </div>
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
          <button className="bg-primary px-6 py-2 rounded-full">CONTACT</button>
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
