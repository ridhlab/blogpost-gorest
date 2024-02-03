"use client";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import Card from "../card/card";
import { HiOutlineX } from "react-icons/hi";
import Button from "../button/button";

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    width?: "large" | "normal";
    title?: React.ReactNode;
    footer?: React.ReactNode;
}

export default function Modal({
    open,
    setOpen,
    children,
    width = "normal",
    title,
    footer,
}: IProps) {
    const baseClassnames =
        "fixed top-0 bottom-0 right-0 left-0 bg-[#00000094] md:px-12 px-4 transition-all ease-in-out duration-500";

    const visibilityClassnames = open ? "opacity-1" : "opacity-0 h-0";

    const mergedClassnames = [baseClassnames, visibilityClassnames];

    const getClassnamesWidthModal = () => {
        if (width === "normal") return "w-[40rem]";
        if (width === "large") return "w-[80rem]";
    };

    const closeModal = () => setOpen(false);

    return (
        <div className={twMerge(clsx(mergedClassnames))}>
            <div className="w-full h-full flex justify-center items-center">
                <Card
                    clsx={[
                        getClassnamesWidthModal(),
                        "transition-all duration-500",
                        open ? "relative" : "static hidden",
                    ]}
                    title={title}
                    footer={footer}
                >
                    {children}
                    <div className="absolute top-2 right-4">
                        <Button
                            icon={<HiOutlineX />}
                            size="small"
                            variant="outline"
                            color="neutral"
                            onClick={closeModal}
                        ></Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
