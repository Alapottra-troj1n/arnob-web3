import { MoveUpRight } from "lucide-react";

const Footer = () => {
    return ( <div className="bg-mydark">
        <div className=" max-w-6xl mx-auto py-14">
            <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-400 font-light text-sm">©2023 Arnob Chakma. All rights reserved.</p>
                    </div>
                    <div className="uppercase flex gap-4 text-sm">
                            <div className="flex items-center gap-3">
                                Behance
                                <MoveUpRight height={20} width={20} />
                            </div>
                            <div className="flex items-center gap-3">
                                Twitter
                                <MoveUpRight height={20} width={20} />
                            </div>
                            <div className="flex items-center gap-3">
                                Linkedin
                                <MoveUpRight height={20} width={20} />
                            </div>
                            <div className="flex items-center gap-3">
                                Dribble
                                <MoveUpRight height={20} width={20} />
                            </div>
                    </div>
                    <div>
                    <button className="bg-primary text-sm px-6 py-2 rounded-full">CHAT NOW!</button>    
                    </div>
            </div>
    </div>
    </div> );
}
 
export default Footer;