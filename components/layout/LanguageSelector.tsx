"use client";

import * as React from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; name: string }[] = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
  ];

  const currentLangName = languages.find((l) => l.code === language)?.name || "Türkçe";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Dil Değiştir / Select Language"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 bg-background/80 hover:bg-muted text-sm font-semibold text-foreground transition-colors cursor-pointer"
      >
        <Globe className="h-4 w-4 text-primary shrink-0" />
        <span>{currentLangName}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border/60 bg-background/95 backdrop-blur-md shadow-lg py-1.5 z-50 animate-in fade-in-80 zoom-in-95">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                language === lang.code
                  ? "bg-accent/10 text-primary font-bold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span>{lang.name}</span>
              {language === lang.code && <Check className="h-4 w-4 text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
