import { Metadata } from "next";
import { getEvents } from "@/lib/content";
import { EventsPageClient } from "@/components/events/EventsPageClient";

export const metadata: Metadata = {
  title: "Etkinlik Arşivi",
  description: "18-28 Gençlik Derneği bünyesinde gerçekleştirilen fiziki ve online geçmiş etkinliklerin fotoğraf galerisi ve arşiv özetleri.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return <EventsPageClient events={events} />;
}
