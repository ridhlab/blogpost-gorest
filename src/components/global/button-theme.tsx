"use client";

import React from "react";
import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";
import { TiWeatherSunny } from "react-icons/ti";

export default function ButtonTheme() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    const hasMounted = useMounted();

    function toggleTheme() {
        return currentTheme === "light" ? setTheme("dark") : setTheme("light");
    }

    if (!hasMounted)
        return (
            <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
        );

    return (
        <button
            onClick={toggleTheme}
            className="transition-all rounded-full p-1 hover:text-blue-500"
        >
            {currentTheme === "light" ? <LuMoonStar /> : <TiWeatherSunny />}
        </button>
    );
}
