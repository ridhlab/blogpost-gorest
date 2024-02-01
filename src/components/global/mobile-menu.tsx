"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoNavbar from "./logo-navbar";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export default function MobileMenu({
    menus,
}: {
    menus: { label: string; href: string; MenuIcon: IconType }[];
}) {
    const pathname = usePathname();
    const [showNav, setShowNav] = React.useState(false);

    const onToggleNav = () => {
        setShowNav((prev) => {
            if (prev) {
                document.body.style.overflow = "auto";
            } else {
                document.body.style.overflow = "hidden";
            }
            return !prev;
        });
    };

    const drawer = (
        <div
            className={`md:hidden fixed left-0 top-0 right-0 bottom-0 z-10 transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] bg-white ${
                showNav ? "translate-x-0 rounded-none" : "translate-x-full"
            }`}
        >
            <div className="p-6 flex flex-col gap-y-12">
                <div className="flex justify-between items-center">
                    <LogoNavbar />
                    <button
                        aria-label="Toggle Menu"
                        onClick={onToggleNav}
                        className={`md:hidden dark:bg-primary-bg bg-secondary-bg border  border-zinc-200 rounded-full p-2 duration-500 ${
                            !showNav ? "-rotate-[360deg]" : null
                        }`}
                    >
                        <HiOutlineX className="text-xl" />
                    </button>
                </div>
                <ul className="flex flex-col gap-y-6">
                    {menus.map(({ href, MenuIcon, label }, index) => (
                        <li key={index} className="border-b border-zinc-300 ">
                            <Link
                                href={href}
                                onClick={onToggleNav}
                                className={`flex gap-x-2 items-center transition-all mb-6 group ${
                                    pathname === href ? "text-blue-500" : ""
                                }`}
                            >
                                <MenuIcon className="text-blue-300 group-hover:text-blue-500" />{" "}
                                <p>{label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const btnHamburger = (
        <button
            className="border rounded p-2 hover:text-blue-500 transition-all hover:border-blue-500"
            onClick={onToggleNav}
        >
            <GiHamburgerMenu />
        </button>
    );

    return (
        <>
            {btnHamburger}
            {drawer}
        </>
    );
}
