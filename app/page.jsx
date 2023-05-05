import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Brands />
      <Features2 />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
