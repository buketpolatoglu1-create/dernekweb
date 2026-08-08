"use client";

import { Calendar, Image as ImageIcon } from "lucide-react";
import { EventItem } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { eventTranslations } from "@/lib/i18n/contentTranslations";

interface EventsPageClientProps {
  events: EventItem[];
}

export function EventsPageClient({ events }: EventsPageClientProps) {
  const { language } = useLanguage();

  // Strict sorting: Newest events first (En güncelden geçmişe doğru)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
            {language === "en" ? "Looking Back" : "Geriye Dönüp Baktığımızda"}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            {language === "en" ? "Our Event Archive" : "Etkinlik Arşivimiz"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Moments compiled from festivals, workshops, speaking clubs, and networking gatherings we have held to date (Sorted newest to oldest)."
              : "Bugüne kadar gerçekleştirdiğimiz şenlikler, eğitimler, konuşma kulüpleri ve networking buluşmalarından derlediğimiz anlar (En güncelden geçmişe doğru sıralı)."}
          </p>
        </div>

        {/* Gallery / Archive List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {sortedEvents.map((event) => {
            const title = language === "en" ? (eventTranslations[event.slug]?.title || event.title) : event.title;
            const description = language === "en" ? (eventTranslations[event.slug]?.description || event.description) : event.description;
            const body = language === "en" ? (eventTranslations[event.slug]?.body || event.body) : event.body;

            return (
              <Card id={event.slug} key={event.slug} className="flex flex-col overflow-hidden border-2 border-primary/80 hover:border-primary hover:shadow-md transition-all duration-300 scroll-mt-24">
                {/* Event Image Grid preview */}
                <div className="grid grid-cols-2 gap-1.5 p-4 bg-muted/20 border-b border-border/40">
                  {event.images && event.images.length > 0 ? (
                    <div className={`h-36 rounded-lg overflow-hidden border border-border/30 relative ${event.images[0].includes("kariyer-yolculugu.png") ? "bg-slate-950/5 dark:bg-slate-900/40 p-1 flex items-center justify-center" : ""}`}>
                      <img
                        src={event.images[0]}
                        alt={`${title} - Image 1`}
                        className={`h-full w-full hover:scale-105 transition-transform duration-300 ${
                          event.images[0].includes("functional-training-poster")
                            ? "object-cover object-top"
                            : event.images[0].includes("kariyer-yolculugu.png")
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="h-36 rounded-lg bg-linear-to-tr from-primary/10 to-accent/10 flex items-center justify-center border border-border/30 group">
                      <ImageIcon className="h-6 w-6 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                  {event.images && event.images.length > 1 ? (
                    <div className={`h-36 rounded-lg overflow-hidden border border-border/30 relative ${event.images[1].includes("kariyer-yolculugu.png") ? "bg-slate-950/5 dark:bg-slate-900/40 p-1 flex items-center justify-center" : ""}`}>
                      <img
                        src={event.images[1]}
                        alt={`${title} - Image 2`}
                        className={`h-full w-full hover:scale-105 transition-transform duration-300 ${
                          event.images[1].includes("functional-training-poster")
                            ? "object-cover object-top"
                            : event.images[1].includes("kariyer-yolculugu.png")
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="h-36 rounded-lg bg-linear-to-bl from-secondary/10 to-accent/10 flex items-center justify-center border border-border/30 group">
                      <ImageIcon className="h-6 w-6 text-secondary/40 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {description}
                  </p>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-border/40 pt-4 mt-2">
                    {body}
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {events.length === 0 && (
            <div className="col-span-full text-center py-16 bg-muted/20 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground text-sm">
                {language === "en" ? "No archived events found." : "Henüz arşivlenmiş bir etkinlik bulunmuyor."}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
