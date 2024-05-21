import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../component/header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Home Page",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <Header />
            {children}
        </section>
    );
}
