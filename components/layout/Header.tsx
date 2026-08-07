"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  // Map nav hrefs to translation keys
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
      case "/tuzuk":
        return language === "en" ? "Bylaws" : "Dernek Tüzüğü";
      case "/basvuru-ve-iletisim":
        return t("nav.contact");
      case "/bagis":
        return t("nav.donate");
      default:
        return defaultTitle;
    }
  };

  // Close mobile nav when pathname changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md shadow-xs mb-4 sm:mb-6">
      <div className="container mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 mr-4 lg:mr-6 xl:mr-10 group">
          <img
            src="/images/logo-icon.png"
            alt="18-28 Gençlik Derneği"
            className="h-11 sm:h-13 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-heading text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight whitespace-nowrap inline-flex items-center gap-1 sm:gap-1.5">
            <span className="text-primary">18-28</span>{" "}
            <span className="bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent">
              {language === "en" ? "Youth Association" : "Gençlik Derneği"}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 lg:gap-5 xl:gap-7 mx-auto">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs lg:text-sm font-semibold transition-colors hover:text-accent py-1 whitespace-nowrap",
                pathname === item.href
                  ? "text-primary font-bold border-b-2 border-accent"
                  : "text-muted-foreground"
              )}
            >
              {getNavTitle(item.href, item.title)}
            </Link>
          ))}
        </nav>

        {/* Action Button & Language Selector & Mobile Nav Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2 lg:ml-4 xl:ml-8">
          {/* 1st: Teal Donate Button */}
          <Link href="/bagis" className="hidden sm:inline-flex">
            <Button size="default" className="font-bold bg-accent hover:bg-accent/90 text-white shadow-xs px-3.5 sm:px-4 py-2 text-xs sm:text-sm rounded-xl transition-all duration-300">
              {t("nav.donate")}
            </Button>
          </Link>

          {/* 2nd: Blue Membership / Application Button */}
          <Link href="/basvuru-ve-iletisim" className="hidden md:inline-flex">
            <Button size="default" className="font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs px-3.5 sm:px-4 py-2 text-xs sm:text-sm rounded-xl group transition-all duration-300">
              {t("nav.membership")}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Language Selector Dropdown */}
          <LanguageSelector />

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border/50 text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 sm:top-24 z-40 bg-black lg:hidden"
            />
            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="fixed inset-y-20 sm:inset-y-24 right-0 z-40 w-[300px] max-w-[85vw] border-l border-border bg-background px-6 py-6 shadow-2xl lg:hidden flex flex-col justify-between overflow-y-auto"
            >
              <div className="flex flex-col space-y-3">
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-semibold transition-colors hover:text-accent py-2.5 border-b border-border/30 flex items-center justify-between",
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    <span>{getNavTitle(item.href, item.title)}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                  </Link>
                ))}
              </div>

              {/* Mobile Drawer Action Buttons */}
              <div className="pt-6 space-y-3 border-t border-border/40 mt-6">
                <Link href="/bagis" className="block w-full">
                  <Button className="w-full font-bold bg-accent hover:bg-accent/90 text-white py-3 text-base rounded-xl shadow-xs">
                    {t("nav.donate")}
                  </Button>
                </Link>
                <Link href="/basvuru-ve-iletisim" className="block w-full">
                  <Button className="w-full font-bold bg-primary text-primary-foreground py-3 text-base rounded-xl shadow-xs">
                    {t("nav.membership")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
