import { siteConfig } from "@/lib/site";

/** Dados estruturados da organização (schema.org). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsapp}`,
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}
