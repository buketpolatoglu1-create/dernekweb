"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Monitor } from "lucide-react";
import { Announcement } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { announcementTranslations } from "@/lib/i18n/contentTranslations";

interface AnnouncementDetailClientProps {
  announcement: Announcement;
}

export function AnnouncementDetailClient({ announcement }: AnnouncementDetailClientProps) {
  const { language } = useLanguage();

  const title = language === "en" ? (announcementTranslations[announcement.slug]?.title || announcement.title) : announcement.title;
  const body = language === "en" ? (announcementTranslations[announcement.slug]?.body || announcement.body) : announcement.body;

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link href="/duyurular">
            <Button variant="ghost" size="sm" className="gap-2 font-semibold text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to Announcements" : "Duyurulara Geri Dön"}
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4 border-b border-border/40 pb-6">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center text-xs text-muted-foreground gap-1.5 mr-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{announcement.date}</span>
            </div>
            {announcement.isOnline !== undefined && (
              <Badge variant="outline" className={announcement.isOnline ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-blue-50 text-blue-700 border-blue-200"}>
                {announcement.isOnline ? "Online" : (language === "en" ? "In-Person" : "Yüz Yüze")}
              </Badge>
            )}
          </div>
          
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            {title}
          </h1>

          {(announcement.eventTime || announcement.isOnline !== undefined) && (
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border/30">
              {announcement.eventTime && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{language === "en" ? "Time: " : "Zaman: "}{announcement.eventTime}</span>
                </div>
              )}
              {announcement.isOnline !== undefined && (
                <div className="flex items-center gap-1.5">
                  <Monitor className="h-4 w-4 text-accent" />
                  <span>{language === "en" ? "Platform: " : "Platform: "}{announcement.isOnline ? "Zoom / Online" : (language === "en" ? "In-Person Attendance" : "Yüz Yüze Katılım")}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Body */}
        <article className="prose max-w-none pt-4">
          {renderMarkdown(body)}
        </article>

      </div>
    </div>
  );
}

function renderMarkdown(text: string) {
  const blocks = text.split(/\n\s*\n/);
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (trimmed === "---") {
          return <hr key={index} className="my-6 border-border/40" />;
        }
        if (trimmed.startsWith("###")) {
          return (
            <h3 key={index} className="font-heading text-lg sm:text-xl font-extrabold text-primary mt-8 mb-2">
              {trimmed.replace(/^###\s*/, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("##")) {
          return (
            <h2 key={index} className="font-heading text-xl sm:text-2xl font-extrabold text-primary mt-10 mb-3">
              {trimmed.replace(/^##\s*/, "")}
            </h2>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const rawItems = trimmed.split(/\n(?=\d+\.\s)/);
          const items = rawItems
            .map(item => item.replace(/^\d+\.\s*/, "").trim())
            .filter(Boolean);
            
          return (
            <ol key={index} className="list-decimal pl-5 space-y-3 mt-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx}>{parseInlineStyles(item)}</li>
              ))}
            </ol>
          );
        }
        if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
          const rawItems = trimmed.split(/\n[-*]\s*/);
          const items = rawItems
            .map(item => item.replace(/^[-*]\s*/, "").trim())
            .filter(Boolean);
            
          return (
            <ul key={index} className="list-disc pl-5 space-y-2 mt-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx}>{parseInlineStyles(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{parseInlineStyles(trimmed)}</p>;
      })}
    </div>
  );
}

function parseInlineStyles(text: string) {
  const tokenRegex = /(\[([\s\S]*?)\]\((https?:\/\/[\s\S]*?)\))|(\*\*([\s\S]*?)\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      const label = match[2];
      const url = match[3];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-bold underline underline-offset-4 hover:text-accent/80 transition-colors"
        >
          {label}
        </a>
      );
    } else if (match[4]) {
      const boldText = match[5];
      parts.push(
        <strong key={match.index} className="font-bold text-primary">
          {boldText}
        </strong>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
