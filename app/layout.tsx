import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ScreenProvider } from "./context/screenContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMART HUB",
  description: "The Home of Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ScreenProvider>
            {children}
          </ScreenProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
