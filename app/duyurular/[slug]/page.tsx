import { notFound } from "next/navigation";
import { getAnnouncementBySlug, getAnnouncements } from "@/lib/content";
import { AnnouncementDetailClient } from "@/components/announcements/AnnouncementDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const announcements = await getAnnouncements();
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const announcement = await getAnnouncementBySlug(slug);

  if (!announcement) {
    return {
      title: "Duyuru Bulunamadı",
    };
  }

  return {
    title: announcement.title,
    description: announcement.excerpt,
  };
}

export default async function AnnouncementDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const announcement = await getAnnouncementBySlug(slug);

  if (!announcement) {
    notFound();
  }

  return <AnnouncementDetailClient announcement={announcement} />;
}
