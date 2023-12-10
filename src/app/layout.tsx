import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import GlobalWrapper from "@/components/GlobalWrapper";

const baseNeue = localFont({
  variable: "--font-base-neue",
  src: [
    {
      path: "../assets/fonts/BaseNeueTrial-Light.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../assets/fonts/BaseNeueTrial-Medium.otf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../assets/fonts/BaseNeueTrial-SuperExpBlack.otf",
      weight: "700",
      style: "black",
    },
    {
      path: "../assets/fonts/BaseNeueTrial-WideMedium.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const aeonik = localFont({
  variable: "--font-aeonik",
  src: [
    {
      path: "../assets/fonts/Aeonik-Air.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../assets/fonts/Aeonik-Black.otf",
      weight: "700",
      style: "black",
    },
    {
      path: "../assets/fonts/Aeonik-Bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../assets/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/Aeonik-Thin.otf",
      weight: "200",
      style: "thin",
    },
  ],
});

export const metadata: Metadata = {
  title: "Arnob Chakma",
  description: `HELPING
  WEB3.0 STARTUPS
  THROUGH FUTURE-PROOF TIMELESS DESIGN
  STRATEGY.`,
  icons: {

    icon: "/mascot.svg",
    
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${baseNeue.variable} ${aeonik.variable} font-baseNeue overflow-x-hidden text-mygray bg-mydark`}
      >
        <Navbar />
        <Toaster />
        <GlobalWrapper>
        {children}
        </GlobalWrapper>
        
        <Footer/>
      </body>
    </html>
  );
}
