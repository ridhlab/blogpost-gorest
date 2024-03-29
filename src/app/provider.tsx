"use client";
import { AppProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
    return (
        <Suspense>
            <ThemeProvider enableSystem attribute="class">
                {children}
            </ThemeProvider>
            <AppProgressBar
                height="4px"
                color="rgb(59, 130, 246)"
                options={{ showSpinner: false }}
                shallowRouting
            />

            <ToastContainer />
        </Suspense>
    );
}
