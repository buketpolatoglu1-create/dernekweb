export const siteConfig = {
  name: "18-28 Gençlik Derneği",
  description: "18-28 yaş arası gençlere yönelik eğitim, mentorluk, iş ve staj imkanları sunan kâr amacı gütmeyen, siyasi bağı olmayan gönüllülük temelli destek derneği.",
  url: "https://18-28genclikdernegi.org",
  ogImage: "https://18-28genclikdernegi.org/og-image.png",
  links: {
    instagram: "https://www.instagram.com/18_28genclikdernegi/",
    linkedin: "https://www.linkedin.com/in/on-sekiz-yirmi-sekiz-gen%C3%A7lik-derne%C4%9Fi-ab94ab354/",
    email: "info@18-28genclikdernegi.org",
    contactEmail: "iletisim@18-28genclikdernegi.org",
    address: "İçerenköy Mah. Çetinkaya Sok. Prestij Plaza No:28 K:2 D:4 Ataşehir / İstanbul",
  },
  mainNav: [
    {
      title: "Ana Sayfa",
      href: "/",
    },
    {
      title: "Hakkımızda",
      href: "/hakkimizda",
    },
    {
      title: "Duyurular",
      href: "/duyurular",
    },
    {
      title: "Etkinliklerimiz",
      href: "/etkinlikler",
    },
    {
      title: "Dernek Tüzüğü",
      href: "/tuzuk",
    },
    {
      title: "Başvuru ve İletişim",
      href: "/basvuru-ve-iletisim",
    },
  ],
  forms: {
    volunteer: process.env.NEXT_PUBLIC_FORM_VOLUNTEER || "https://docs.google.com/forms/d/19IrjfUG3-69ZCq7sFUrf72XC-dFqYkWsBhY3-3-6X5s/viewform",
    mentor: process.env.NEXT_PUBLIC_FORM_MENTOR || "https://docs.google.com/forms/d/e/1FAIpQLSffU9WDCTeu4eIgx7zCv6amJc0vbM-eqAIgEtlG9r-qvkd0UQ/viewform",
  }
};

export type SiteConfig = typeof siteConfig;
