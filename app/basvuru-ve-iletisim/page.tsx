"use client";

import { ArrowUpRight, Building2, GraduationCap, Instagram, Linkedin, Mail, Users } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ApplicationAndContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
            {t("app.subtitle")}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            {t("app.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t("app.desc")}
          </p>
        </div>

        {/* CTA Application Cards — Horizontal Banner Style */}
        <div className="space-y-6 pt-4">
          {/* Bize Katılın */}
          <div className="bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs hover:shadow-[0_12px_35px_-8px_rgba(20,184,166,0.4)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary group-hover:text-accent transition-colors">{t("app.vol.title")}</h3>
                  <p className="text-xs sm:text-sm text-primary font-medium">{t("app.vol.sub")}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t("app.vol.desc")}
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <a
                href={siteConfig.forms.volunteer}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto block"
              >
                <Button size="lg" className="w-full sm:w-auto min-w-[290px] justify-center font-bold bg-primary hover:bg-accent text-primary-foreground hover:text-white px-6 group transition-all duration-300">
                  {t("app.vol.btn")}
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Gönüllü Mentor Başvurusu */}
          <div className="bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs hover:shadow-[0_12px_35px_-8px_rgba(20,184,166,0.4)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary group-hover:text-accent transition-colors">{t("app.mentor.title")}</h3>
                  <p className="text-xs sm:text-sm text-primary font-medium">{t("app.mentor.sub")}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t("app.mentor.desc")}
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <a
                href={siteConfig.forms.mentor}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto block"
              >
                <Button size="lg" className="w-full sm:w-auto min-w-[290px] justify-center font-bold bg-primary hover:bg-accent text-primary-foreground hover:text-white px-6 group transition-all duration-300">
                  {t("app.mentor.btn")}
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Kurumsal Üyelik */}
          <div className="bg-linear-to-r from-teal-500/5 via-primary/5 to-teal-500/5 border-2 border-teal-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs hover:shadow-[0_12px_35px_-8px_rgba(20,184,166,0.4)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t("app.corp.title")}</h3>
                  <p className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 font-medium">{t("app.corp.sub")}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t("app.corp.desc")}
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <a
                href={`mailto:${siteConfig.links.contactEmail}?subject=Kurumsal%20Üyelik%20Başvurusu`}
                className="w-full sm:w-auto block"
              >
                <Button size="lg" className="w-full sm:w-auto min-w-[290px] justify-center font-bold bg-teal-600 hover:bg-teal-700 text-white px-6 group transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("app.corp.btn")}
                </Button>
              </a>
            </div>
          </div>

          {/* Bireysel Üyelik */}
          <div className="bg-linear-to-r from-accent/5 via-primary/5 to-accent/5 border-2 border-accent/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs hover:shadow-[0_12px_35px_-8px_rgba(20,184,166,0.4)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary group-hover:text-accent transition-colors">{t("app.ind.title")}</h3>
                  <p className="text-xs sm:text-sm text-accent font-medium">{t("app.ind.sub")}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t("app.ind.desc")}
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <a
                href={`mailto:${siteConfig.links.contactEmail}?subject=Bireysel%20Üyelik%20Başvurusu`}
                className="w-full sm:w-auto block"
              >
                <Button size="lg" className="w-full sm:w-auto min-w-[290px] justify-center font-bold bg-accent hover:bg-accent/90 text-white px-6 group transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("app.ind.btn")}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Separator / Contact Form Header */}
        <div className="pt-10 border-t border-border/40 space-y-8">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary text-center">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto">
              {t("contact.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Info Cards */}
            <div className="lg:col-span-4 flex flex-row flex-wrap gap-4">
              {/* Email */}
              <div className="flex-1 min-w-[180px] border border-border/40 p-5 rounded-xl bg-background shadow-3xs flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">E-posta</h4>
                  <a href={`mailto:${siteConfig.links.contactEmail}`} className="text-sm text-muted-foreground hover:text-accent transition-colors block mt-1 break-all">
                    {siteConfig.links.contactEmail}
                  </a>
                </div>
              </div>
              {/* Instagram */}
              <div className="flex-1 min-w-[180px] border border-border/40 p-5 rounded-xl bg-background shadow-3xs flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-pink-50 dark:bg-pink-950 flex items-center justify-center text-pink-500 shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Instagram</h4>
                  <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors block mt-1 break-all">
                    @18_28genclikdernegi
                  </a>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="flex-1 min-w-[180px] border border-border/40 p-5 rounded-xl bg-background shadow-3xs flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 shrink-0">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">LinkedIn</h4>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors block mt-1 break-all">
                    18-28 Gençlik Derneği
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-8 border border-border/40 p-6 sm:p-8 rounded-2xl bg-background shadow-2xs">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
