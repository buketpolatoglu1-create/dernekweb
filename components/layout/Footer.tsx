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
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.links.contactEmail}`}
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
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

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} {siteConfig.name}. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Siyasi bir bağı yoktur ve kâr amacı gütmeyen gönüllü bir kuruluştur.
          </p>
        </div>
      </div>
    </footer>
  );
}
