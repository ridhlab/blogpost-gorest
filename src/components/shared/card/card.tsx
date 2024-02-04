import clsx from "clsx";
import { ClassValue } from "clsx";
import React from "react";

interface IProps {
    children: React.ReactNode;
    title?: React.ReactNode;
    divider?: boolean;
    footer?: React.ReactNode;
    clsx?: ClassValue[];
}

export default function Card({
    children,
    title: titleNode,
    divider = true,
    footer,
    clsx: customClassnames,
}: IProps) {
    const title =
        typeof titleNode === "string" ? (
            <h3 className="font-semibold text-lg">{titleNode}</h3>
        ) : (
            titleNode
        );

    const dividerNode = (
        <div className="h-[1px] bg-zinc-200 dark:bg-zinc-700"></div>
    );

    return (
        <div
            className={clsx([
                "bg-white dark:bg-slate-950 p-4 rounded flex flex-col gap-y-4",
                ...(customClassnames ?? []),
            ])}
        >
            {title ? title : null}
            {divider && title ? dividerNode : null}
            {children}
            {divider && footer ? dividerNode : null}
            {footer ? footer : null}
        </div>
    );
}
