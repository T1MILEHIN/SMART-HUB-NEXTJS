import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import DesktopNavLinks from "./desktopNavLinks";
import MobileNav from "./mobileNav";

const Header = () => {
    const { userId } = auth()
    return (
        <header className={`bg-black z-20 flex justify-between items-center py-2 md:px-10 px-3 lg:text-white sticky top-0 right-0 left-0 w-full`}>
            <div>
                <h1 className="text-white text-lg md:text-base font-medium italic">SMART HUB</h1>
            </div>
            <div className="md:block hidden">
                <DesktopNavLinks />
            </div>
            <div className="md:hidden block">
                <MobileNav />
            </div>
            <div>
                {userId ?
                    <div className="flex gap-5 items-center">
                        <Link href="/dashboard" className="lg:block hidden">
                            <p>Dashboard</p>
                        </Link>
                        <div className="">
                            <UserButton afterSignOutUrl="/sign-in" />
                        </div>
                    </div>
                    :
                    <div className="flex gap-5 items-center">
                        <Link href="/sign-in">
                            <button className="hidden lg:block bg-white hover:text-black transition-all duration-300 text-black p-3 font-bold rounded-md">LOGIN</button>
                        </Link>
                        <Link href="/sign-up">
                            <button className="hidden lg:block bg-white hover:text-black transition-all duration-300 text-black p-3 font-bold rounded-md">SIGN UP</button>
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;