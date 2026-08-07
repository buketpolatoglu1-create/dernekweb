"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Check, 
  Copy, 
  CreditCard, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function DonationPageClient() {
  const { language } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeCurrency, setActiveCurrency] = useState<"TL" | "USD" | "EUR">("TL");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCorporate, setIsCorporate] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorNote, setDonorNote] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const bankDetails = {
    bank: "Yapı Kredi Bankası",
    accountHolder: "ONSEKİZ YİRMİSEKİZ GENÇLİK DERNEĞİ",
    accounts: [
      {
        id: "TL",
        name: "Vadesiz TL Hesabı",
        currency: "Türk Lirası (TL)",
        symbol: "₺",
        accountNo: "307874641",
        ibanFormatted: "TR25 0006 7010 0000 0307 8746 41",
        ibanRaw: "TR250006701000000307874641"
      },
      {
        id: "USD",
        name: "Vadesiz USD (Dolar) Hesabı",
        currency: "Amerikan Doları (USD)",
        symbol: "$",
        accountNo: "307873524",
        ibanFormatted: "TR17 0006 7010 0000 0307 8735 24",
        ibanRaw: "TR170006701000000307873524"
      },
      {
        id: "EUR",
        name: "Vadesiz EUR (Euro) Hesabı",
        currency: "Euro (EUR)",
        symbol: "€",
        accountNo: "307869988",
        ibanFormatted: "TR41 0006 7010 0000 0307 8699 88",
        ibanRaw: "TR410006701000000307869988"
      }
    ]
  };

  const handleCopyIban = (ibanRaw: string, id: string) => {
    navigator.clipboard.writeText(ibanRaw);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Smooth scroll to bank details card
    const element = document.getElementById("banka-hesap-bilgileri");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectedAccount = bankDetails.accounts.find((acc) => acc.id === activeCurrency) || bankDetails.accounts[0];

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
            {language === "en" ? "18-28 Youth Association Donation & Support" : "18-28 Gençlik Derneği Bağış & Destek"}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary max-w-4xl mx-auto leading-tight">
            {language === "en" ? "Support the Future of Youth Together" : "Gençlerin Geleceğine Birlikte Destek Olun"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "You can support us in creating a sustainable social impact by contributing to the education, mentorship, internship, and career development of young people aged 18-28."
              : "18-28 yaş aralığındaki gençlerin eğitim, mentorluk, staj ve kariyer gelişimine katkıda bulunarak sürdürülebilir toplumsal etki yaratmamıza destek olabilirsiniz."}
          </p>
        </div>

        {/* Main Grid: Interactive Form & Bank Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Donation Form / Amount Selector */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="border-2 border-primary/80 shadow-md rounded-2xl overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent fill-accent/20" />
                    {language === "en" ? "Donation & Support Form" : "Bağış ve Destek Formu"}
                  </CardTitle>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {language === "en" ? "100% Volunteer Driven" : "%100 Gönüllülük Esaslı"}
                  </span>
                </div>
                <CardDescription className="text-xs sm:text-sm">
                  {language === "en" ? "Select your donation type and amount below." : "Bağış türünüzü ve destek miktarını seçebilirsiniz."}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 space-y-5">
                {/* Donation Type Tabs */}
                <div className="grid grid-cols-2 gap-2 bg-muted/40 p-1.5 rounded-xl border border-border/40">
                  <button
                    type="button"
                    onClick={() => setDonationType("once")}
                    className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                      donationType === "once"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === "en" ? "One-Time Donation" : "Tek Seferlik Bağış"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                      donationType === "monthly"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === "en" ? "Monthly Regular Support" : "Aylık Düzenli Destek"}
                  </button>
                </div>

                {/* Amount Pill Buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                    {language === "en" ? "Select Amount" : "Bağış Miktarını Seçin"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {[250, 500, 1000, 2500].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-2.5 sm:py-3 px-2 text-xs sm:text-sm font-extrabold rounded-xl border transition-all ${
                          selectedAmount === amt
                            ? "bg-accent text-white border-accent shadow-xs scale-[1.02]"
                            : "bg-background border-border/80 hover:border-accent text-primary"
                        }`}
                      >
                        ₺{amt.toLocaleString("tr-TR")}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSelectedAmount("custom")}
                      className={`py-3 px-2 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                        selectedAmount === "custom"
                          ? "bg-accent text-white border-accent shadow-xs scale-[1.02]"
                          : "bg-background border-border/80 hover:border-accent text-primary"
                      }`}
                    >
                      {language === "en" ? "Custom" : "Diğer Miktar"}
                    </button>
                  </div>

                  {selectedAmount === "custom" && (
                    <div className="pt-2">
                      <input
                        type="number"
                        placeholder={language === "en" ? "Enter amount in TL" : "TL cinsinden miktar giriniz"}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-primary/40 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  )}
                </div>

                {/* Donor Details Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2 border-t border-border/40">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="corpCheck"
                      checked={isCorporate}
                      onChange={(e) => setIsCorporate(e.target.checked)}
                      className="h-4 w-4 rounded-sm border-primary text-accent focus:ring-accent"
                    />
                    <label htmlFor="corpCheck" className="text-xs sm:text-sm font-semibold text-primary cursor-pointer">
                      {language === "en" ? "I am making a corporate donation" : "Kurumsal bağış yapacağım"}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        {isCorporate ? (language === "en" ? "Company / Institution Name *" : "Kurum / Şirket Adı *") : (language === "en" ? "Full Name *" : "Ad Soyad *")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isCorporate ? "ABC Şirketi A.Ş." : "Buket Polatoğlu"}
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-border text-sm focus:outline-hidden focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        {language === "en" ? "Email Address *" : "E-posta Adresi *"}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ornek@email.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-border text-sm focus:outline-hidden focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      {language === "en" ? "Note or Message (Optional)" : "Not veya Mesajınız (Opsiyonel)"}
                    </label>
                    <input
                      type="text"
                      placeholder={language === "en" ? "Support note..." : "Gençlerin geleceği için başarılar dilerim..."}
                      value={donorNote}
                      onChange={(e) => setDonorNote(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-border text-sm focus:outline-hidden focus:border-accent"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold bg-accent hover:bg-accent/90 text-white shadow-xs">
                    {language === "en" ? "View Bank Transfer Details & Complete" : "Banka Hesap Bilgilerini Göster & Tamamla"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-600" />
                      {language === "en" ? "Form notification received!" : "Bağış bildiriminiz alındı!"}
                    </p>
                    <p>
                      {language === "en"
                        ? "Please complete your transfer using the Yapı Kredi bank account details on the right."
                        : "Lütfen EFT / Havale işleminizi sağ taraftaki Yapı Kredi Bankası hesap bilgilerimiz ile gerçekleştiriniz."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Corporate Support Card — Positioned directly under Donation Form */}
            <Card className="border border-teal-500/30 bg-linear-to-r from-teal-500/5 via-primary/5 to-teal-500/5 rounded-2xl p-6 space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    {language === "en" ? "Corporate Sponsorship" : "Kurumsal Bağış & Sponsorluk"}
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold">
                    {language === "en" ? "CSR Projects & Institutional Support" : "Sosyal Sorumluluk & Kurumsal Destek"}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "For corporate donation receipts, strategic partnership, or project sponsorship, please contact us directly via email."
                  : "Kurumunuz adına makbuzlu bağış, stratejik iş birliği ve proje sponsorlukları için doğrudan kurumsal e-posta adresimiz üzerinden bizimle iletişime geçebilirsiniz."}
              </p>
              <a href="mailto:iletisim@18-28genclikdernegi.org?subject=Kurumsal%20Bağış%20ve%20Sponsorluk" className="block pt-1">
                <Button size="sm" variant="outline" className="w-full font-bold border-teal-500/40 text-teal-700 dark:text-teal-300 hover:bg-teal-500/10">
                  iletisim@18-28genclikdernegi.org
                </Button>
              </a>
            </Card>
          </div>

          {/* Right Column: Official Bank Account Card (Yapı Kredi Bankası TL / USD / EUR) */}
          <div id="banka-hesap-bilgileri" className="lg:col-span-5 space-y-6 scroll-mt-24">
            <Card className="border-2 border-accent/80 shadow-lg rounded-2xl overflow-hidden bg-background">
              <CardHeader className="bg-linear-to-r from-primary to-primary/95 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 px-3 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center font-extrabold text-white text-sm tracking-tight border border-white/20">
                      Yapı Kredi
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">Banka Hesap Bilgileri</CardTitle>
                      <p className="text-xs text-white/80">Resmi Dernek Banka Hesabı</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                    EFT / Havale / SWIFT
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-5">
                {/* Account Name */}
                <div className="space-y-1 border-b border-border/40 pb-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                    {language === "en" ? "Account Holder" : "Hesap Sahibi"}
                  </span>
                  <p className="font-extrabold text-base text-primary">
                    {bankDetails.accountHolder}
                  </p>
                </div>

                {/* Currency Switcher Tabs */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                    {language === "en" ? "Select Currency Account" : "Hesap Para Birimini Seçin"}
                  </span>
                  <div className="grid grid-cols-3 gap-2 bg-muted/40 p-1 rounded-xl border border-border/50">
                    {bankDetails.accounts.map((acc) => (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => setActiveCurrency(acc.id as "TL" | "USD" | "EUR")}
                        className={`py-2 px-2 text-xs font-extrabold rounded-lg transition-all ${
                          activeCurrency === acc.id
                            ? "bg-accent text-white shadow-xs"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {acc.symbol} {acc.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Selected Currency Box */}
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase">
                      {selectedAccount.name}
                    </span>
                    <Badge variant="secondary" className="font-bold text-xs">
                      {selectedAccount.id}
                    </Badge>
                  </div>

                  {/* IBAN Box with Copy Button */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      IBAN NO
                    </span>
                    <div className="flex items-center justify-between gap-2 bg-background p-3 rounded-xl border border-border/60">
                      <span className="font-mono font-extrabold text-xs sm:text-sm text-primary tracking-wide break-all">
                        {selectedAccount.ibanFormatted}
                      </span>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleCopyIban(selectedAccount.ibanRaw, selectedAccount.id)}
                        className={`shrink-0 font-bold gap-1.5 transition-all ${
                          copiedKey === selectedAccount.id
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "bg-accent hover:bg-accent/90 text-white"
                        }`}
                      >
                        {copiedKey === selectedAccount.id ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            {language === "en" ? "Copied!" : "Kopyalandı!"}
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            {language === "en" ? "Copy" : "Kopyala"}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-semibold">Hesap No:</span>
                    <span className="font-bold font-mono text-primary text-sm">{selectedAccount.accountNo}</span>
                  </div>
                </div>

                {/* All Accounts Summary List */}
                <div className="space-y-2 border-t border-border/40 pt-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                    {language === "en" ? "All Bank Accounts" : "Tüm Banka Hesaplarımız"}
                  </span>
                  <div className="space-y-2 text-xs">
                    {bankDetails.accounts.map((acc) => (
                      <div key={acc.id} className="p-3 rounded-xl bg-muted/30 border border-border/40 flex items-center justify-between gap-2">
                        <div className="space-y-0.5 min-w-0">
                          <p className="font-bold text-primary text-xs flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">
                              {acc.id}
                            </span>
                            {acc.name}
                          </p>
                          <p className="font-mono text-[11px] text-muted-foreground truncate">
                            {acc.ibanFormatted}
                          </p>
                        </div>
                        <Button
                          type="button"
                          size="xs"
                          variant="outline"
                          onClick={() => handleCopyIban(acc.ibanRaw, `list-${acc.id}`)}
                          className={`shrink-0 font-bold h-7 px-2.5 ${
                            copiedKey === `list-${acc.id}`
                              ? "border-emerald-600 text-emerald-600 bg-emerald-50"
                              : "border-border text-primary hover:bg-muted"
                          }`}
                        >
                          {copiedKey === `list-${acc.id}` ? "Kopyalandı!" : "Kopyala"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notice Box */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                    <Info className="h-4 w-4 shrink-0" />
                    {language === "en" ? "Important Transfer Note" : "Önemli Açıklama Uyarısı"}
                  </p>
                  <p>
                    {language === "en"
                      ? "Please write your Full Name and Contact Info (Phone or Email) in the EFT/Havale transfer description."
                      : "EFT / Havale / SWIFT işlemlerinizde açıklama kısmına Ad Soyad ve İletişim bilginizi (Telefon / E-posta) yazmanızı rica ederiz."}
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Impact Areas Section — Where does your donation go? */}
        <div className="pt-10 border-t border-border/40 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">
              {language === "en" ? "Where Does Your Support Go?" : "Bağışınız Nereye Ulaşıyor?"}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              {language === "en"
                ? "Every contribution directly supports young people's educational and professional growth."
                : "Derneğimize yaptığınız her katkı, 18-28 yaş arasındaki gençlerin eğitsel ve mesleki gelişimine doğrudan aktarılır."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Free Trainings" : "Ücretsiz Eğitimler"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Workshops and skill programs held throughout the year for university students and NEET youth."
                  : "Üniversite öğrencileri ve NEET gençlere yönelik yıl boyu ücretsiz düzenlenen kişisel & teknik gelişim atölyeleri."}
              </p>
            </Card>

            <Card className="border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Mentorship Programs" : "Birebir Mentorluk"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Matching young talents with experienced industry executives for 3-month career guidance."
                  : "Sektör profesyonelleri ile gençleri eşleştiren 3 aylık ücretsiz koçluk ve kariyer mentorluğu süreçleri."}
              </p>
            </Card>

            <Card className="border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Internships & Career" : "Staj & İstihdam Ağı"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Company visits, networking events, and career opportunities bridging youth with corporate leaders."
                  : "Firma ziyaretleri, networking buluşmaları ve gençlerin iş dünyasına uyumunu sağlayan staj imkanları."}
              </p>
            </Card>

            <Card className="border-2 border-primary/70 hover:border-primary transition-all duration-300 shadow-xs p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Social Impact Projects" : "Sosyal Fayda Projeleri"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Encouraging young people to develop community-based social responsibility and active citizenship initiatives."
                  : "Gençlerin aktif vatandaşlık bilinciyle topluma faydalı sosyal sorumluluk projeleri geliştirmesini destekleme."}
              </p>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
