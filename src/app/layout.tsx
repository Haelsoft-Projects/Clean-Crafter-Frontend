import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Appwrapper } from "@/Services/context";

import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanCrafters ",
  description: "Get access to qualified cleaners and without stress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer />
        <Appwrapper>
          <Providers> {children} </Providers>
        </Appwrapper>
      </body>
    </html>
  );
}
