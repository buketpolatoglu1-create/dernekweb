import { getAnnouncements, getEvents } from "@/lib/content";
import { HomePageClient } from "@/components/home/HomePageClient";

export default async function Home() {
  const allAnnouncements = await getAnnouncements();
  const latestAnnouncements = allAnnouncements.slice(0, 3);
  
  const allEvents = await getEvents();

  return (
    <HomePageClient
      latestAnnouncements={latestAnnouncements}
      allEvents={allEvents}
    />
  );
}
