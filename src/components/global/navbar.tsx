"use client";
import { ROUTES } from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaUsersCog } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import MobileMenu from "./mobile-menu";
import LogoNavbar from "./logo-navbar";
import ButtonTheme from "./button-theme";

const menus = [
    {
        label: "Home",
        href: ROUTES.HOME,
        MenuIcon: FaTachometerAlt,
    },
    {
        label: "Post",
        href: ROUTES.POSTS.INDEX,
        MenuIcon: IoIosBookmarks,
    },
    {
        label: "User",
        href: ROUTES.USERS.INDEX,
        MenuIcon: FaUsersCog,
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const menu = (
        <ul className="flex items-center gap-x-8">
            {menus.map(({ href, MenuIcon, label }, index) => {
                const menuActive = href === pathname;
                return (
                    <li
                        key={index}
                        className={`md:py-4 border-b-2 border-t-2 border-t-[#0000] ${
                            menuActive ? "border-blue-500" : "border-[#0000]"
                        }`}
                    >
                        <Link
                            href={href}
                            className={`flex items-center gap-x-1 group`}
                        >
                            <span>{label}</span>
                            <MenuIcon
                                className={`group-hover:text-blue-500 transition-all ${
                                    menuActive
                                        ? "text-blue-500"
                                        : "text-blue-300 "
                                }`}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header className="bg-white md:px-20 py-4 md:py-0 px-8 sticky top-0 shadow dark:bg-slate-950">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href={ROUTES.HOME}>
                    <LogoNavbar />
                </Link>

                <nav className="md:block hidden">{menu}</nav>
                <div className="hidden md:flex items-center">
                    <ButtonTheme />
                </div>
                <div className="md:hidden flex gap-x-4">
                    <div className="flex items-center">
                        <ButtonTheme />
                    </div>
                    <MobileMenu menus={menus} />
                </div>
            </div>
        </header>
    );
}
