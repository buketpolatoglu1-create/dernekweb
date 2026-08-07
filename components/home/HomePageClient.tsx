"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, ChevronRight, GraduationCap, Users, ArrowUpRight, Calendar, HeartHandshake, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Announcement, EventItem } from "@/lib/content";
import { EventsCarousel } from "@/components/events/EventsCarousel";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { announcementTranslations } from "@/lib/i18n/contentTranslations";

interface HomePageClientProps {
  latestAnnouncements: Announcement[];
  allEvents: EventItem[];
}

export function HomePageClient({ latestAnnouncements, allEvents }: HomePageClientProps) {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Photo Strip — ince kayan fotoğraf şeridi */}
      <div className="w-full overflow-visible relative py-2 bg-muted/10">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-20 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-20 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling track — photos duplicated for seamless loop */}
        <div className="animate-scroll-strip flex gap-3 h-full items-center hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
          {[
            "/images/strip-1.jpg",
            "/images/strip-2.jpg",
            "/images/strip-3.jpg",
            "/images/strip-4.jpg",
            "/images/strip-5.jpg",
            "/images/strip-6.jpg",
            "/images/strip-7.jpg",
            "/images/strip-10.jpg",
            "/images/strip-11.jpg",
            "/images/strip-13.jpg",
            "/images/strip-14.jpg",
            "/images/strip-1.jpg",
            "/images/strip-2.jpg",
            "/images/strip-3.jpg",
            "/images/strip-4.jpg",
            "/images/strip-5.jpg",
            "/images/strip-6.jpg",
            "/images/strip-7.jpg",
            "/images/strip-10.jpg",
            "/images/strip-11.jpg",
            "/images/strip-13.jpg",
            "/images/strip-14.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="shrink-0 overflow-hidden rounded-xl border border-primary/20 shadow-xs transition-all duration-300 hover:scale-135 hover:z-40 hover:shadow-2xl hover:border-primary cursor-pointer group"
              style={{ width: "150px", height: "85px" }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-14 md:pt-14 md:pb-20 bg-linear-to-b from-primary/[0.04] via-accent/[0.02] to-background overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/12 blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 h-[250px] w-[250px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        {/* Logo watermark */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <img
            src="/images/logo.png"
            alt=""
            aria-hidden="true"
            className="h-[420px] sm:h-[520px] md:h-[600px] w-auto object-contain opacity-[0.06] select-none"
          />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center justify-center p-4 mb-3 rounded-3xl bg-linear-to-b from-white/95 to-white/70 dark:from-white/10 dark:to-white/5 border border-white/30 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xs relative group transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)]">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent to-teal-400 opacity-20 blur-md group-hover:opacity-35 transition-opacity" />
            <img
              src="/images/logo-icon.png"
              alt="18-28 Gençlik Derneği Logo"
              className="h-20 sm:h-24 w-auto relative object-contain mix-blend-multiply dark:invert dark:mix-blend-screen"
            />
          </div>
          <p className="text-sm sm:text-xl font-bold tracking-widest uppercase text-accent mb-3 sm:mb-4">
            {t("hero.badge")}
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary max-w-5xl mx-auto leading-[1.1] mb-6">
            {t("hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-accent via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            {t("hero.desc")}
          </p>
          <div className="flex justify-center items-center">
            <Link href="/hakkimizda" className="w-full sm:w-auto relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-xl transition-all duration-300 pointer-events-none" />
              <Button size="lg" variant="outline" className="relative w-full sm:w-auto font-semibold bg-background hover:bg-background/95 text-primary border-border group-hover:border-accent/60 shadow-xs px-8">
                {t("hero.btnMore")}
                <ArrowRight className="ml-2 h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Amacımız (Mission Summary) */}
      <section className="py-16 bg-primary/[0.06] dark:bg-primary/10 border-y border-primary/15">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">
                {t("why.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("why.p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("why.p2")}
              </p>
              <div>
                <Link href="/hakkimizda">
                  <Button variant="link" className="p-0 text-accent font-semibold hover:text-accent/80 group">
                    {t("why.link")}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-2xl border-2 border-accent/70 hover:border-accent transition-all duration-300 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-primary">{t("why.card1.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.card1.desc")}
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl border-2 border-accent/70 hover:border-accent transition-all duration-300 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-primary">{t("why.card2.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.card2.desc")}
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl border-2 border-accent/70 hover:border-accent transition-all duration-300 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-primary">{t("why.card3.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.card3.desc")}
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl border-2 border-accent/70 hover:border-accent transition-all duration-300 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-primary">{t("why.card4.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.card4.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Komitelerimiz Section */}
      <section className="py-16 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-3 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
                {t("comm.title")}
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                {t("comm.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mt-2 text-sm sm:text-base">
                {t("comm.subtitle")}
              </p>
            </div>
            
            <Link href="/basvuru-ve-iletisim" className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent/80 via-teal-400/80 to-accent/80 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-xl transition-all duration-300 pointer-events-none" />
              <Button size="lg" className="relative font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs">
                {t("comm.btn")}
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Eğitim Komitesi */}
            <Card className="flex flex-col justify-between border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md group">
              <CardHeader className="space-y-3">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t("comm.c1.title")}
                  </CardTitle>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {t("comm.c1.sub")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t("comm.c1.desc")}
                </p>
              </CardContent>
            </Card>

            {/* 2. İş & Staj Komitesi */}
            <Card className="flex flex-col justify-between border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md group">
              <CardHeader className="space-y-3">
                <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t("comm.c2.title")}
                  </CardTitle>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">
                    {t("comm.c2.sub")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t("comm.c2.desc")}
                </p>
              </CardContent>
            </Card>

            {/* 3. İletişim & Etkinlik Komitesi */}
            <Card className="flex flex-col justify-between border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md group">
              <CardHeader className="space-y-3">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t("comm.c3.title")}
                  </CardTitle>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1">
                    {t("comm.c3.sub")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t("comm.c3.desc")}
                </p>
              </CardContent>
            </Card>

            {/* 4. Teknoloji Komitesi */}
            <Card className="flex flex-col justify-between border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md group">
              <CardHeader className="space-y-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t("comm.c4.title")}
                  </CardTitle>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                    {t("comm.c4.sub")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t("comm.c4.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Events Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsCarousel events={allEvents} />
        </div>
      </section>

      {/* 4. Announcements Section */}
      <section className="py-16 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary mb-2">
                {t("ann.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl">
                {t("ann.desc")}
              </p>
            </div>
            
            <Link href="/duyurular" className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent/80 via-teal-400/80 to-accent/80 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-xl transition-all duration-300 pointer-events-none" />
              <Button size="lg" variant="outline" className="relative font-semibold bg-background hover:bg-background/95 text-primary border-border hover:border-accent/60 shadow-xs">
                {t("ann.allBtn")}
                <ArrowRight className="ml-1.5 h-4 w-4 text-accent group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestAnnouncements.map((item) => {
              const title = language === "en" ? (announcementTranslations[item.slug]?.title || item.title) : item.title;
              const excerpt = language === "en" ? (announcementTranslations[item.slug]?.excerpt || item.excerpt) : item.excerpt;

              return (
                <Card key={item.slug} className="flex flex-col justify-between overflow-hidden border-2 border-primary/70 hover:border-primary transition-colors duration-300 shadow-xs hover:shadow-md">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        {item.date}
                      </span>
                      {item.isOnline && (
                        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px]">
                          Online
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-bold text-xl text-primary line-clamp-2 hover:text-accent transition-colors">
                      <Link href={`/duyurular/${item.slug}`}>
                        {title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {excerpt}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border/40 bg-muted/20">
                    <Link href={`/duyurular/${item.slug}`} className="w-full">
                      <Button variant="ghost" size="sm" className="w-full justify-between font-semibold text-primary hover:text-accent hover:bg-background/80 group">
                        {t("ann.readMore")}
                        <ArrowUpRight className="h-4 w-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
