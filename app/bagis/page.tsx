import { Metadata } from "next";
import { DonationPageClient } from "@/components/bagis/DonationPageClient";

export const metadata: Metadata = {
  title: "Bağış ve Destek",
  description: "18-28 Gençlik Derneği resmi bağış sayfası. QNB banka hesap bilgileri, EFT/Havale ve gençlik gelişim projelerine destek olun.",
};

export default function BagisPage() {
  return <DonationPageClient />;
}
