"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const getNavTitle = (href: string, defaultTitle: string) => {
    switch (href) {
      case "/":
        return t("nav.home");
      case "/hakkimizda":
        return t("nav.about");
      case "/duyurular":
        return t("nav.announcements");
      case "/etkinlikler":
        return t("nav.events");
      case "/basvuru-ve-iletisim":
        return t("nav.contact");
      default:
        return defaultTitle;
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Platform Info */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading text-lg font-extrabold tracking-tight">
                <span className="text-primary">18-28</span>{" "}
                <span className="bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent">
                  Gençlik Derneği
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {t("footer.desc")}
            </p>
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center text-primary hover:text-accent hover:bg-accent/10 hover:border-accent/40 hover:scale-110 transition-all duration-300 shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 stroke-[2]" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center text-primary hover:text-accent hover:bg-accent/10 hover:border-accent/40 hover:scale-110 transition-all duration-300 shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 stroke-[2]" />
              </a>
              <a
                href={`mailto:${siteConfig.links.contactEmail}`}
                className="h-11 w-11 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center text-primary hover:text-accent hover:bg-accent/10 hover:border-accent/40 hover:scale-110 transition-all duration-300 shadow-2xs"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t("footer.links")}
            </h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent hover:underline font-semibold transition-colors"
                  >
                    {getNavTitle(item.href, item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.links.contactEmail}`}
                  className="hover:text-accent transition-colors break-all"
                >
                  {siteConfig.links.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="space-y-1 text-center md:text-left">
            <p>&copy; {currentYear} {siteConfig.name}. {t("footer.rights")}</p>
            <p className="text-accent font-bold">
              {language === "en" ? "Website prepared by " : "Web sitesini hazırlayan "}
              <a
                href="https://www.linkedin.com/in/buket-polato%C4%9Flu-024893225/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors cursor-pointer"
              >
                Buket Polatoğlu
              </a>
            </p>
          </div>
          <p className="text-center md:text-right">
            Siyasi bir bağı yoktur ve kâr amacı gütmeyen gönüllü bir kuruluştur.
          </p>
        </div>
      </div>
    </footer>
  );
}
