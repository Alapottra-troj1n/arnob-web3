"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Toaster } from "react-hot-toast";
const GlobalWrapper = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return <ReactLenis root><Toaster/>{children}</ReactLenis>;
};

export default GlobalWrapper;
