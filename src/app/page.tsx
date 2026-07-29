import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about/about";
import { Cta } from "@/components/sections/cta/cta";
import { Differentials } from "@/components/sections/differentials/differentials";
import { Faq } from "@/components/sections/faq/faq";
import { Hero } from "@/components/sections/hero/hero";
import { Process } from "@/components/sections/process/process";
import { Services } from "@/components/sections/services/services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Process />
        <About />
        <Cta />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
