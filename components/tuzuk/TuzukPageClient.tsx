"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Plus, Minus, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { tuzukMaddeleri } from "@/lib/tuzukData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TuzukPageClient() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([1]); // Madde 1 open by default

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((i) => i !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const expandAll = () => {
    setOpenItems(tuzukMaddeleri.map((m) => m.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  const filteredMaddeler = tuzukMaddeleri.filter((m) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      m.title.toLowerCase().includes(term) ||
      m.shortTitle.toLowerCase().includes(term) ||
      m.content.some((c) => c.toLowerCase().includes(term)) ||
      m.subSections?.some((s) => s.items.some((i) => i.toLowerCase().includes(term)))
    );
  });

  return (
    <div className="flex flex-col w-full min-h-screen py-8 sm:py-12 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/hakkimizda">
            <Button variant="ghost" size="sm" className="gap-2 font-semibold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to About Us" : "Hakkımızda Sayfasına Dön"}
            </Button>
          </Link>
          <Badge variant="outline" className="border-accent/40 text-accent font-bold px-3 py-1 text-xs">
            {language === "en" ? "Official Bylaws (26 Articles)" : "Resmi Tüzük (26 Madde)"}
          </Badge>
        </div>

        {/* Header Title Section */}
        <div className="text-center space-y-4 pt-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent mb-2">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary uppercase">
            {language === "en" ? "ASSOCIATION BYLAWS" : "DERNEK TÜZÜĞÜ"}
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Official governance principles, membership criteria, and operational rules of 18-28 Youth Association."
              : "ONSEKİZ YİRMİSEKİZ GENÇLİK DERNEĞİ kuruluş amacı, çalışma ilkeleri, üyelik hakları ve kurumsal organlarını içeren 26 maddelik resmi tüzük belgesidir."}
          </p>
        </div>

        {/* Search & Expand Controls Bar */}
        <div className="bg-background border-2 border-primary/15 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === "en" ? "Search articles (e.g., Membership, Aid)..." : "Madde veya kelime ara (Örn: Üyelik, Bağış)..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm rounded-xl border-border/60 focus:border-accent"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={expandAll}
              className="text-xs font-semibold text-primary border-primary/30 hover:bg-primary/5"
            >
              {language === "en" ? "Expand All" : "Tümünü Aç"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={collapseAll}
              className="text-xs font-semibold text-muted-foreground border-border/50 hover:bg-muted"
            >
              {language === "en" ? "Collapse All" : "Tümünü Kapat"}
            </Button>
          </div>
        </div>

        {/* Articles Accordion List (TUGİM Format) */}
        <div className="space-y-3">
          {filteredMaddeler.length === 0 ? (
            <div className="text-center py-12 bg-background border border-border/40 rounded-2xl text-muted-foreground">
              Aradığınız kriterlere uygun tüzük maddesi bulunamadı.
            </div>
          ) : (
            filteredMaddeler.map((madde) => {
              const isOpen = openItems.includes(madde.id);

              return (
                <div
                  key={madde.id}
                  className={`bg-background rounded-xl border transition-all duration-300 shadow-2xs overflow-hidden ${
                    isOpen
                      ? "border-accent/60 shadow-md ring-1 ring-accent/20"
                      : "border-border/60 hover:border-accent/40"
                  }`}
                >
                  {/* Article Trigger Bar */}
                  <button
                    type="button"
                    onClick={() => toggleItem(madde.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center gap-4 cursor-pointer select-none group transition-colors hover:bg-muted/30"
                  >
                    {/* Plus / Minus Box Icon (TUGİM Style) */}
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 font-bold transition-colors ${
                        isOpen
                          ? "bg-accent text-white"
                          : "bg-primary text-primary-foreground group-hover:bg-accent"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4 stroke-[3]" /> : <Plus className="h-4 w-4 stroke-[3]" />}
                    </div>

                    {/* Article Title */}
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? "text-accent" : "text-primary group-hover:text-accent"
                      }`}
                    >
                      {madde.title}
                    </span>
                  </button>

                  {/* Article Content Drawer */}
                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-border/30 bg-muted/10 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {madde.content.map((paragraph, idx) => (
                        <p key={idx} className="tracking-wide">
                          {paragraph}
                        </p>
                      ))}

                      {/* Sub-sections if any */}
                      {madde.subSections?.map((sub, sIdx) => (
                        <div key={sIdx} className="pt-3 space-y-2 border-t border-border/30 mt-3">
                          {sub.subtitle && (
                            <h4 className="font-extrabold text-primary text-xs sm:text-sm uppercase tracking-wider">
                              {sub.subtitle}
                            </h4>
                          )}
                          <div className="grid grid-cols-1 gap-2 pt-1">
                            {sub.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="p-3 rounded-xl bg-background border border-border/40 flex items-start gap-2.5 shadow-2xs"
                              >
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground pt-4 pb-8 space-y-1">
          <p>T.C. İçişleri Bakanlığı Sivil Toplumla İlişkiler Genel Müdürlüğü Standartlarına Uygun Olarak Yayımlanmıştır.</p>
          <p className="font-semibold text-primary">ONSEKİZ YİRMİSEKİZ GENÇLİK DERNEĞİ © {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  );
}
