import clsx, { ClassValue } from "clsx";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    size?: "normal" | "small";
    variant?: "outline" | "solid";
    htmlType?: HTMLButtonElement["type"];
    color?: "primary" | "neutral" | "danger";
    block?: boolean;
    clsx?: ClassValue[];
    href?: string;
    icon?: React.ReactNode;
}

export default function Button({
    children,
    variant = "solid",
    htmlType = "button",
    color = "primary",
    size = "normal",
    block = false,
    clsx: customClassnames,
    href,
    icon,
    ...props
}: IProps) {
    const baseClassnames =
        "rounded font-semibold flex items-center justify-center gap-x-1";
    const paddingClassnames = (() => {
        if (icon && size === "normal") {
            return "p-2";
        }
        if (icon && size === "small") {
            return "p-1";
        }
        if (size === "normal") {
            return "px-4 py-2";
        }
        if (size === "small") {
            return "px-2 py-1";
        }
    })();
    const colorClassnames = (() => {
        if (variant === "outline" && color === "primary") {
            return "border border-blue-500 text-blue-500";
        }
        if (variant === "outline" && color === "neutral") {
            return "border border-slate-500 text-slate-500 dark:border-slate-400 dark:text-slate-400";
        }
        if (variant === "outline" && color === "danger") {
            return "border border-red-500 text-red-500";
        }
        if (variant === "solid" && color === "primary") {
            return "bg-blue-500 text-white";
        }
        if (variant === "solid" && color === "neutral") {
            return "bg-slate-500 text-white";
        }
        if (variant === "solid" && color === "danger") {
            return "bg-red-500 text-white";
        }
    })();
    const blockClassnames = block ? "w-full" : "";
    const sizeClassnames = (() => {
        if (size === "normal") return "text-xs";
        if (size === "small") return "text-[10px]";
    })();

    const mergedClassNames = [
        baseClassnames,
        colorClassnames,
        blockClassnames,
        sizeClassnames,
        paddingClassnames,
        ...(customClassnames ?? []),
    ];

    const btn = (
        <button
            type={htmlType}
            className={twMerge(clsx(mergedClassNames))}
            {...props}
        >
            {icon ? <div className={`text-base`}>{icon}</div> : null}
            {children ?? ""}
        </button>
    );

    return href ? (
        <div className="flex">
            <Link href={href}>{btn}</Link>
        </div>
    ) : (
        btn
    );
}
