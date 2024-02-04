"use client";

import clsx, { ClassValue } from "clsx";
import React, { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IMappingValidation {
    isValid: boolean;
    message: string;
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    validation?: { isValid: boolean; message: string };
    clsx?: ClassValue[];
}

export default function TextInput({
    validation,
    clsx: customClassnames,
    ...restProps
}: IProps) {
    const [isFilled, setIsFilled] = React.useState(false);

    const validationExist = !!validation;

    const baseClassnames =
        "rounded p-2 border outline-none active:outline-none focus:outline-none transition-all dark:bg-slate-950  dark:border-zinc-700";
    const borderActiveFocusClassnames =
        validationExist && !validation?.isValid
            ? "active:border-red-500 focus:border-red-500 dark:active:border-red-500 dark:focus:border-red-500"
            : "active:border-blue-500 focus:border-blue-500 dark:active:border-blue-500 dark:focus:border-blue-500";
    const filledClassnames = (() => {
        if (!validationExist && isFilled)
            return ["border-blue-500 dark:border-blue-500"];
        if (
            (validationExist && !validation?.isValid && isFilled) ||
            (validationExist && !validation?.isValid && !isFilled)
        )
            return ["border-red-500 dark:border-red-500"];
        if (validationExist && validation?.isValid && isFilled)
            return ["border-blue-500 dark:border-blue-500"];
    })();

    const mergedClassnames = [
        baseClassnames,
        borderActiveFocusClassnames,
        filledClassnames,
        ...(customClassnames ?? []),
    ];

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsFilled(!!value);
        if (restProps.onChange) {
            restProps.onChange(e);
        }
    };

    const inputBase = (
        <input
            type="text"
            className={twMerge(clsx(mergedClassnames))}
            onChange={onChange}
            {...restProps}
        />
    );

    return (
        <div className="flex flex-col gap-y-1">
            {inputBase}
            <span
                className={twMerge(
                    clsx([
                        "text-xs text-red-500 transition-all",
                        validationExist && !validation?.isValid
                            ? "opacity-100 h-4"
                            : "opacity-100 h-0",
                    ])
                )}
            >
                {validation?.message}
            </span>
        </div>
    );
}
