"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Home, Info, Megaphone, Calendar, FileText, Mail, Heart, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
        return language === "en" ? "Association Bylaws" : "Dernek Tüzüğü";
      case "/basvuru-ve-iletisim":
        return t("nav.contact");
      case "/bagis":
        return t("nav.donate");
      default:
        return defaultTitle;
    }
  };

  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home className="h-5 w-5 text-accent" />;
      case "/hakkimizda":
        return <Info className="h-5 w-5 text-accent" />;
      case "/duyurular":
        return <Megaphone className="h-5 w-5 text-accent" />;
      case "/etkinlikler":
        return <Calendar className="h-5 w-5 text-accent" />;
      case "/tuzuk":
        return <FileText className="h-5 w-5 text-accent" />;
      case "/basvuru-ve-iletisim":
        return <Mail className="h-5 w-5 text-accent" />;
      default:
        return <ArrowRight className="h-5 w-5 text-accent" />;
    }
  };

  // Close mobile nav when pathname changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mobileMenuPortal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[999999] bg-background flex flex-col justify-between overflow-y-auto p-5 sm:p-8 lg:hidden"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4 gap-2 shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 shrink-0">
              <img
                src="/images/logo-icon.png"
                alt="18-28 Gençlik Derneği"
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading text-sm sm:text-base font-extrabold text-primary">
                18-28 Gençlik Derneği
              </span>
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              <LanguageSelector />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 rounded-xl bg-muted/60 flex items-center justify-center text-primary hover:bg-muted transition-colors border border-border/60 cursor-pointer active:scale-95 touch-manipulation"
                aria-label="Menüyü Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Vertically Spaced Full Mobile Navigation List */}
          <div className="flex flex-col space-y-2 py-2 flex-1 justify-center">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-200",
                    isActive
                      ? "bg-primary/10 border-accent/40 text-primary font-extrabold shadow-2xs"
                      : "bg-background hover:bg-muted/50 border-border/40 text-foreground font-semibold"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      {getNavIcon(item.href)}
                    </div>
                    <span className="text-base sm:text-lg tracking-tight">
                      {getNavTitle(item.href, item.title)}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              );
            })}
          </div>

          {/* Prominent Action Buttons at Bottom */}
          <div className="pt-4 border-t border-border/40 mt-4 space-y-3 shrink-0">
            <Link href="/bagis" onClick={() => setIsOpen(false)} className="block w-full">
              <Button size="lg" className="w-full font-extrabold bg-accent hover:bg-accent/90 text-white py-3.5 text-base rounded-2xl shadow-sm flex items-center justify-center gap-2">
                <Heart className="h-5 w-5 fill-white/20" />
                {t("nav.donate")}
              </Button>
            </Link>
            <Link href="/basvuru-ve-iletisim" onClick={() => setIsOpen(false)} className="block w-full">
              <Button size="lg" className="w-full font-extrabold bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 text-base rounded-2xl shadow-sm flex items-center justify-center gap-2">
                <UserCheck className="h-5 w-5" />
                {t("nav.membership")}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md shadow-xs mb-4 sm:mb-6">
        <div className="container mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-2.5 sm:px-6 lg:px-8 py-2 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 shrink-0 mr-1 sm:mr-4 group">
            <img
              src="/images/logo-icon.png"
              alt="18-28 Gençlik Derneği"
              className="h-9 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading text-xs sm:text-base lg:text-xl font-extrabold tracking-tight whitespace-nowrap inline-flex items-center gap-1">
              <span className="text-primary">18-28</span>{" "}
              <span className="bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent">
                {language === "en" ? "Youth Association" : "Gençlik Derneği"}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4.5 2xl:gap-6 flex-1 justify-center max-w-4xl mx-2">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs xl:text-sm font-semibold transition-colors hover:text-accent py-1 whitespace-nowrap",
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
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* 1st: Teal Donate Button */}
            <Link href="/bagis" className="hidden sm:inline-flex">
              <Button size="default" className="font-bold bg-accent hover:bg-accent/90 text-white shadow-xs px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-xl transition-all duration-300">
                {t("nav.donate")}
              </Button>
            </Link>

            {/* 2nd: Blue Membership / Application Button */}
            <Link href="/basvuru-ve-iletisim" className="hidden md:inline-flex">
              <Button size="default" className="font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-xl group transition-all duration-300">
                {t("nav.membership")}
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* Language Selector Dropdown (Desktop Only) */}
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            {/* Mobile Hamburger button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary hover:bg-accent/10 hover:text-accent cursor-pointer active:scale-95 transition-all lg:hidden shrink-0 touch-manipulation relative z-30"
              aria-label="Menüyü Aç"
            >
              {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Render Mobile Menu Portal directly into document.body */}
      {mounted && createPortal(mobileMenuPortal, document.body)}
    </>
  );
}
