import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Pricing />
      <Footer />
    </>
  );
}
