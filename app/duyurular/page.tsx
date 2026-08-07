import { Metadata } from "next";
import { getAnnouncements } from "@/lib/content";
import { AnnouncementsPageClient } from "@/components/announcements/AnnouncementsPageClient";

export const metadata: Metadata = {
  title: "Duyurular ve Programlar",
  description: "18-28 Gençlik Derneği güncel duyuruları, eğitimleri, mentorluk başvuru dönemleri ve projeleri.",
};

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return <AnnouncementsPageClient announcements={announcements} />;
}
