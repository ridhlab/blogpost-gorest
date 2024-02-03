"use client";
import { AppProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }) {
    return (
        <>
            {children}
            <AppProgressBar
                height="4px"
                color="rgb(59, 130, 246)"
                options={{ showSpinner: false }}
                shallowRouting
            />

            <ToastContainer />
        </>
    );
}
