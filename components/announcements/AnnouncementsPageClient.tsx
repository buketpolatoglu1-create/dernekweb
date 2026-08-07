"use client";

import Link from "next/link";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Announcement } from "@/lib/content";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { announcementTranslations } from "@/lib/i18n/contentTranslations";

interface AnnouncementsPageClientProps {
  announcements: Announcement[];
}

export function AnnouncementsPageClient({ announcements }: AnnouncementsPageClientProps) {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
            {language === "en" ? "Platform Developments" : "Platform Gelişmeleri"}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            {language === "en" ? "Announcements & Application Periods" : "Duyurular ve Başvuru Dönemleri"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Follow workshops, summits, and ongoing mentorship/volunteering application periods organized by our association."
              : "Derneğimiz tarafından düzenlenen atölyeleri, zirveleri ve devam eden mentorluk/gönüllülük başvurularını buradan takip edebilirsiniz."}
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {announcements.map((announcement) => {
            const title = language === "en" ? (announcementTranslations[announcement.slug]?.title || announcement.title) : announcement.title;
            const excerpt = language === "en" ? (announcementTranslations[announcement.slug]?.excerpt || announcement.excerpt) : announcement.excerpt;

            return (
              <Card id={announcement.slug} key={announcement.slug} className="flex flex-col rounded-2xl border-2 border-primary/80 hover:border-primary hover:shadow-md transition-all duration-300 scroll-mt-24">
                <CardHeader className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="flex gap-2">
                      {announcement.isOnline !== undefined && (
                        <Badge variant="outline" className={announcement.isOnline ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-blue-50 text-blue-700 border-blue-200"}>
                          {announcement.isOnline ? "Online" : (language === "en" ? "In-Person" : "Yüz Yüze")}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {excerpt}
                  </p>
                  {announcement.eventTime && (
                    <div className="flex items-center text-xs text-muted-foreground gap-1.5 pt-2">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span>{announcement.eventTime}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-4 bg-muted/10">
                  <Link href={`/duyurular/${announcement.slug}`} className="w-full">
                    <Button variant="outline" className="w-full justify-between font-semibold group">
                      {t("ann.readMore")}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
          {announcements.length === 0 && (
            <div className="col-span-full text-center py-16 bg-muted/20 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground text-sm">
                {language === "en" ? "No announcements published yet." : "Henüz yayınlanmış bir duyuru bulunmuyor."}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
