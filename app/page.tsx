import { IntroLoader } from "@/components/IntroLoader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { Areas } from "@/components/Areas";
import { Method } from "@/components/Method";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Areas />
        <Method />
        <Trust />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
