"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { EventItem } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { eventTranslations } from "@/lib/i18n/contentTranslations";

interface EventsCarouselProps {
  events: EventItem[];
}

function getItemsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function EventsCarousel({ events }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const isAnimating = useRef(false);
  const { t, language } = useLanguage();

  // Debounced resize handler
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const next = getItemsPerView();
        setItemsPerView((prev) => {
          if (prev !== next) {
            setCurrentIndex((idx) => {
              const newMax = Math.max(0, events.length - next);
              return Math.min(idx, newMax);
            });
            return next;
          }
          return prev;
        });
      }, 100);
    };

    setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [events.length]);

  const maxIndex = Math.max(0, events.length - itemsPerView);

  const handlePrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setTimeout(() => { isAnimating.current = false; }, 520);
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setTimeout(() => { isAnimating.current = false; }, 520);
  }, [maxIndex]);

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No events added yet.
      </div>
    );
  }

  const cardWidthPct = 100 / itemsPerView;
  const translatePct = currentIndex * cardWidthPct;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary mb-2">
            {t("events.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {t("events.desc")}
          </p>
        </div>

        <Link href="/etkinlikler" className="relative group">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/90 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-xl transition-all duration-300 pointer-events-none" />
          <Button size="lg" variant="outline" className="relative font-semibold bg-background hover:bg-background/95 text-primary border-border hover:border-primary/60 shadow-xs">
            {t("events.allBtn")}
            <ArrowRight className="ml-1.5 h-4 w-4 text-accent group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative px-0 sm:px-10">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Önceki etkinlik"
          className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-primary/70 bg-background text-primary hover:border-primary hover:bg-primary hover:text-white shadow-lg transition-all duration-200 items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Sonraki etkinlik"
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-primary/70 bg-background text-primary hover:border-primary hover:bg-primary hover:text-white shadow-lg transition-all duration-200 items-center justify-center cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slider track */}
        <div className="overflow-hidden py-3">
          <div
            className="flex will-change-transform"
            style={{
              transform: `translateX(-${translatePct}%)`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {events.map((event) => {
              const title = language === "en" ? (eventTranslations[event.slug]?.title || event.title) : event.title;
              const description = language === "en" ? (eventTranslations[event.slug]?.description || event.description) : event.description;

              return (
                <div
                  key={event.slug}
                  className="shrink-0 px-3"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <Link href={`/etkinlikler#${event.slug}`} className="relative group cursor-pointer block h-full">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/55 via-secondary/45 to-primary/55 opacity-0 group-hover:opacity-100 blur-md group-hover:blur-xl transition-opacity duration-300 pointer-events-none" />
                    <div className="relative overflow-hidden rounded-2xl border-2 border-primary/80 bg-background/95 backdrop-blur-xs p-6 space-y-4 transition-colors duration-300 group-hover:border-primary shadow-xs flex flex-col justify-between h-full min-h-[350px]">
                      <div className={`h-36 w-full rounded-lg bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden relative border border-border/30 ${event.images && (event.images[0]?.includes("kariyer-yolculugu.png") || event.images[0]?.includes("functional-training-poster") || event.images[0]?.includes("poster")) ? "bg-slate-950/5 dark:bg-slate-900/40 p-1" : ""}`}>
                        {event.images && event.images.length > 0 ? (
                          <img
                            src={event.images[0]}
                            alt={title}
                            className={`h-full w-full ${event.images[0].includes("kariyer-yolculugu.png") || event.images[0].includes("functional-training-poster") || event.images[0].includes("poster") ? "object-contain" : "object-cover"}`}
                          />
                        ) : (
                          <Calendar className="h-10 w-10 text-primary/40" />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground font-medium">{event.date}</span>
                          <h3 className="font-bold text-lg text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
                            {title}
                          </h3>
                          <p className="text-sm text-slate-700 dark:text-slate-200 font-medium mt-2 line-clamp-3">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators & Mobile Controls */}
        <div className="flex items-center justify-between sm:justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Önceki"
            className="flex sm:hidden h-9 w-9 rounded-full border border-primary/50 items-center justify-center text-primary shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1}. etkinlik grubu`}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Sonraki"
            className="flex sm:hidden h-9 w-9 rounded-full border border-primary/50 items-center justify-center text-primary shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
