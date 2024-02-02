"use client";

import clsx from "clsx";
import React, { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IMappingValidation {
    isValid: boolean;
    message: string;
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    validation?: (value: string) => IMappingValidation | void;
}

export default function TextInput({ validation, ...restProps }: IProps) {
    const [mappingValidation, setMappingValidation] =
        React.useState<IMappingValidation | null>(null);
    const [isFilled, setIsFilled] = React.useState(false);

    const validationExist = !!validation && !!mappingValidation;

    const baseClassnames =
        "rounded p-2 border outline-none active:outline-none focus:outline-none transition-all";
    const borderActiveFocusClassnames =
        validationExist && !mappingValidation?.isValid
            ? "active:border-red-500 focus:border-red-500"
            : "active:border-blue-500 focus:border-blue-500";
    const filledClassnames = (() => {
        if (!validationExist && isFilled) return ["border-blue-500"];
        if (
            (validationExist && !mappingValidation?.isValid && isFilled) ||
            (validationExist && !mappingValidation?.isValid && !isFilled)
        )
            return ["border-red-500"];
        if (validationExist && mappingValidation?.isValid && isFilled)
            return ["border-blue-500"];
    })();

    const mergedClassnames = [
        baseClassnames,
        borderActiveFocusClassnames,
        filledClassnames,
    ];

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsFilled(!!value);
        if (validation) {
            setMappingValidation(
                validation(value) ?? { isValid: true, message: "" }
            );
        }
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
                        validationExist && !mappingValidation?.isValid
                            ? "opacity-100 h-4"
                            : "opacity-100 h-0",
                    ])
                )}
            >
                {mappingValidation?.message}
            </span>
        </div>
    );
}
