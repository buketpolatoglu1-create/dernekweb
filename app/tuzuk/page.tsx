import { Metadata } from "next";
import { TuzukPageClient } from "@/components/tuzuk/TuzukPageClient";

export const metadata: Metadata = {
  title: "Dernek Tüzüğü",
  description: "18-28 Gençlik Derneği resmi tüzüğü, 26 maddelik çalışma ilkeleri, üyelik şartları ve kurumsal organları.",
};

export default function TuzukPage() {
  return <TuzukPageClient />;
}
