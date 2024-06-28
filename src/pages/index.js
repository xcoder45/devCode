import HomeLayout from "@/layouts/homeLayout";
import Features from "@/components/features";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import GetStarted from "@/components/getStarted";
import Blog from "@/components/blog";
export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Features />
        <Stats />
        <GetStarted />
        <Testimonials />
        {/* <Blog/> */}
      </main>
      <Footer />
    </>
  );
}
