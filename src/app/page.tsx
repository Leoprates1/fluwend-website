import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero/hero";
import { Services } from "@/components/sections/services/services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Services />
      </main>
    </>
  );
}
