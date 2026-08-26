import Script from "next/script";

/**
 * Medição do site — Google Analytics 4 e Meta Pixel.
 *
 * Os dois IDs vêm de variáveis NEXT_PUBLIC_*, então são embutidos durante o
 * BUILD (mesma regra de NEXT_PUBLIC_SITE_URL — ver Dockerfile e .env.example).
 * Informar apenas em runtime no EasyPanel NÃO funciona: o HTML já foi gerado.
 *
 * Sem os IDs preenchidos nada é renderizado — o site continua funcionando
 * normalmente e nenhuma requisição externa é feita. É proposital: permite
 * subir a mudança antes de ter as contas criadas.
 *
 * `afterInteractive` carrega os scripts depois que a página fica utilizável,
 * para a medição não competir com o conteúdo pelo tempo de carregamento.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export function Analytics() {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {PIXEL_ID ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          {/* Fallback para quem navega com JavaScript desligado.
              Precisa ser <img> puro: dentro de <noscript> não há JavaScript,
              então o next/image (que depende dele) não funcionaria. É um
              pixel 1x1, não há imagem para otimizar. */}
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              alt=""
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}

/**
 * Dispara um evento de conversão nos dois lugares de uma vez.
 *
 * Use no clique dos botões de WhatsApp — é a única conversão que este site
 * tem hoje, e é o número que decide se vale a pena anunciar:
 *
 *   import { registrarConversao } from "@/components/analytics";
 *   onClick={() => registrarConversao("whatsapp_hero")}
 *
 * Precisa ser chamada de um Client Component ("use client" no topo do arquivo
 * que chama), porque depende de `window`.
 */
export function registrarConversao(origem: string) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };

  w.gtag?.("event", "contato_whatsapp", { origem });
  w.fbq?.("track", "Contact", { origem });
}
