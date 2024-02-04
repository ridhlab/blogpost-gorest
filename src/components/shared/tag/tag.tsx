import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface IProps {
    label: string;
    color?: "primary" | "danger" | "success";
}

export default function Tag({ label, color = "primary" }: IProps) {
    const baseClassnames = "text-[10px] rounded p-1";
    const colorClassnames = (() => {
        if (color === "primary")
            return "border border-blue-500 text-blue-500 bg-blue-50 dark:bg-[rgba(96,153,227,0.26)]";
        if (color === "danger")
            return "border border-red-500 text-red-500 bg-red-50 dark:bg-[rgba(207,84,84,0.28)]";
        if (color === "success")
            return "border border-green-500 text-green-500 bg-green-50 dark:bg-[rgba(73,183,106,0.28)]";
    })();
    const mergedClassnames = [baseClassnames, colorClassnames];
    return <span className={twMerge(clsx(mergedClassnames))}>{label}</span>;
}
