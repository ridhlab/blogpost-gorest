import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import Providers from "./provider";
import Footer from "@/components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MridGorest",
    description: "Simple app using gorest public api",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={inter.className + "  bg-slate-200 dark:bg-slate-700"}
            >
                <Providers>
                    <Navbar />
                    <div className="my-12">
                        <div className="md:px-20 px-8">
                            <div className="max-w-6xl mx-auto">{children}</div>
                        </div>
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
