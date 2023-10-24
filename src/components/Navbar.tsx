import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( <div className="bg-mydark py-7 w-full " >
        <div className="max-w-6xl mx-auto flex justify-between text-mywhite">
                <div>
                        <Image src={'/logo.svg'} width={60} height={60} alt="arnob chakma" />
                </div>

                <div className="flex gap-6 items-center list-none">
                     <Link href={'/work'} ><li>Work</li></Link>
                     <Link href={'/thoughts'} ><li>Thoughts</li></Link>
                     <Link href={'/about me'} ><li>About Me</li></Link>
                     <button className="bg-primary px-4 py-2 rounded-full">Contact</button>
                </div>
        </div>
    </div> );
}
 
export default Navbar;