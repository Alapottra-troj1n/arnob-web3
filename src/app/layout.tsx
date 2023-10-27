import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      style: "wide",
    },
  ],
});

const clash = localFont({
  variable: "--font-clash",
  src: [
    {
      path: "../assets/fonts/ClashGrotesk-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Extralight.ttf",
      weight: "100",
      style: "extralight",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Light.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Medium.ttf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Regular.ttf",
      weight: "300",
      style: "regular",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Semibold.ttf",
      weight: "500",
      style: "semibold",
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
        className={`${baseNeue.variable} ${clash.variable} font-baseNeue overflow-x-hidden text-mywhite`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
