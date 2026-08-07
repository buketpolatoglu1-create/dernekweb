"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, GraduationCap, Heart, Milestone, Users, Palette, Globe, FolderCheck, FileText, Download, ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const faqs = language === "en" ? [
    {
      value: "q1",
      question: "What is 18-28 Youth Association?",
      answer: "18-28 Youth Association is an independent, non-governmental, volunteer-based organization aiming to support the educational, social, and professional development of youth aged 18 to 28, without any political affiliation."
    },
    {
      value: "q2",
      question: "How can I benefit from the association's activities?",
      answer: "If you are between 18-28 years old, you can benefit from all our training, events, and development programs for free by filling out the application form on our Instagram account or website."
    },
    {
      value: "q3",
      question: "What are the criteria to benefit from free support?",
      answer: "The only requirement to benefit from our free development support is being between 18 and 28 years of age."
    },
    {
      value: "q4",
      question: "Can we join from anywhere in Turkey?",
      answer: "Yes. Since some of our activities are conducted online, you can easily participate from anywhere in Turkey."
    },
    {
      value: "q5",
      question: "Are events online or in person?",
      answer: "Our association has a hybrid structure. Our activities take place both in person and online."
    },
    {
      value: "q6",
      question: "Is there any political affiliation or membership fee?",
      answer: "No. Our association is entirely volunteer-based and non-profit; there are no membership or participation fees, nor any political affiliations."
    },
    {
      value: "q7",
      question: "How can I become a volunteer?",
      answer: "You can join us by filling out the volunteer application form on our Application & Contact page."
    },
    {
      value: "q8",
      question: "Which committees can I serve on?",
      answer: "We have 4 main focus areas: Education Committee, Job & Internship Committee, Communication & Events Committee, and Technology Committee."
    },
    {
      value: "q9",
      question: "What is corporate membership?",
      answer: "Corporate membership is a membership model aimed at companies, institutions, and organizations collaborating with our association to contribute to youth development."
    },
    {
      value: "q10",
      question: "How to apply for corporate membership?",
      answer: "After filling out the Corporate Membership Application Form, our team evaluates the application and contacts the institution to discuss partnership options."
    },
    {
      value: "q11",
      question: "What activities can be conducted under corporate membership?",
      answer: "Within the scope of corporate membership; mentorship support, career talks, technical trainings and workshops, internship and job support, social responsibility projects, joint events and organizations, as well as sponsorship and project collaborations can be carried out."
    }
  ] : [
    {
      value: "q1",
      question: "18-28 Gençlik Derneği nedir?",
      answer: "18-28 Gençlik Derneği; 18 ila 28 yaş arasındaki gençlerin eğitsel, sosyal ve mesleki gelişimlerini desteklemeyi amaçlayan, tamamen gönüllülük esasına dayalı, siyasi bağlantısı bulunmayan bağımsız bir sivil toplum kuruluşudur."
    },
    {
      value: "q2",
      question: "Derneğin Çalışmalarından Faydalanmak için Ne Yapmalıyım?",
      answer: "18-28 yaş aralığındaysanız, derneğimiz tarafından sunulan tüm eğitim, etkinlik ve gelişim programlarından ücretsiz olarak yararlanabilirsiniz. Katılım sağlamak için Instagram hesabımız veya web sitemiz üzerinden yer alan başvuru formunu doldurmanız yeterlidir. Programlarımız yalnızca üniversite öğrencilerine yönelik değildir. Eğitimine devam eden gençlerin yanı sıra, ne eğitimde ne de istihdamda (NEET) yer alan, yani hâlihazırda okumayan veya çalışmayan gençler de tüm faaliyetlerimize ve programlarımıza ücretsiz olarak katılabilir."
    },
    {
      value: "q3",
      question: "Ücretsiz Desteklerden Faydalanmak İçin Başvuru Şartı Nedir?",
      answer: "Derneğimizin sunduğu ücretsiz gelişim desteklerinden faydalanabilmek için tek şart 18-28 yaş aralığında olmaktır."
    },
    {
      value: "q4",
      question: "Türkiye’nin Her Yerinden Katılım Sağlayabilir miyiz?",
      answer: "Evet. Bazı çalışmalarımız online (çevrimiçi) olarak yürütüldüğü için Türkiye'nin her yerinden rahatlıkla katılım sağlayabilirsiniz."
    },
    {
      value: "q5",
      question: "Etkinlikler Online mı, Yoksa Yüz Yüze mi Gerçekleşiyor?",
      answer: "Derneğimiz hibrit bir yapıdadır. Faaliyetlerimiz hem yüz yüze hem de online (çevrimiçi) olarak gerçekleştirilmektedir."
    },
    {
      value: "q6",
      question: "Derneğin Herhangi Bir Siyasi Bağlantısı Veya Üyelik Ücreti Var Mı?",
      answer: "Derneğimiz tamamen gönüllülük esasına dayalıdır ve kâr amacı gütmemektedir; dolayısıyla herhangi bir üyelik veya katılım ücreti yoktur. Aynı zamanda hiçbir siyasi parti veya akımla bağlantımız bulunmamaktadır; tek amacımız gençlerin yetkinliğini geliştirmek ve iş dünyası ile bağ kurarak istihdamlarını desteklemektir."
    },
    {
      value: "q7",
      question: "Gönüllü Olmak İstiyorum, Nasıl Olabilirim?",
      answer: "Başvuru ve İletişim sayfamızda yer alan gönüllü başvuru formunu doldurarak aramıza katılabilirsiniz. İlgili komitelerimiz başvurunuzu inceleyip en kısa sürede sizinle iletişime geçecektir."
    },
    {
      value: "q8",
      question: "Hangi komitelerde görev alabilirim?",
      answer: "Eğitim Komitesi, İş & Staj Komitesi, İletişim & Etkinlik Komitesi veya Teknoloji Komitesi olmak üzere 4 ana odak alanımız bulunmaktadır. Kendi ilgi ve yetkinliklerinize en uygun komiteyi seçebilirsiniz."
    },
    {
      value: "q9",
      question: "Kurumsal üyelik nedir?",
      answer: "Kurumsal üyelik; şirketlerin, kurumların ve kuruluşların derneğimizle iş birliği yaparak gençlerin gelişimine katkı sağlamasını amaçlayan üyelik modelidir."
    },
    {
      value: "q10",
      question: "Kurumsal üyelik başvurusu nasıl yapılır?",
      answer: "Kurumsal Üyelik Başvuru Formu doldurulduktan sonra ekibimiz başvuruyu değerlendirir ve iş birliği sürecini görüşmek üzere kurumla iletişime geçer."
    },
    {
      value: "q11",
      question: "Kurumsal üyelik kapsamında hangi çalışmalar yapılabilir?",
      answer: "Kurumsal üyelik kapsamında; mentorluk desteği, kariyer söyleşileri, teknik eğitimler ve atölyeler, staj ve iş desteği, sosyal sorumluluk projeleri, ortak etkinlik ve organizasyonlar ile sponsorluk ve proje iş birlikleri gerçekleştirilebilir."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner Section */}
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            {t("about.title")}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {t("about.desc")}
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl space-y-4 relative overflow-hidden shadow-xs">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-xl" />
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Milestone className="h-5 w-5 text-accent" />
            </div>
            <h2 className="font-heading text-xl font-bold">{t("about.mission.title")}</h2>
            <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
              {t("about.mission.desc")}
            </p>
          </div>
          <div className="bg-linear-to-br from-primary/95 via-secondary/95 to-accent/90 text-primary-foreground p-8 rounded-2xl space-y-4 relative overflow-hidden shadow-xs border-0">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-xl" />
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-xl font-bold">{t("about.vision.title")}</h2>
            <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
              {t("about.vision.desc")}
            </p>
          </div>

          <div className="bg-accent text-accent-foreground p-8 rounded-2xl space-y-4 relative overflow-hidden shadow-xs border-0">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-xl" />
            <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-xl font-bold">{t("about.what.title")}</h2>
            <p className="text-xs sm:text-sm text-accent-foreground/90 leading-relaxed">
              {t("about.what.desc")}
            </p>
          </div>
        </div>

        {/* Biz Kimiz Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-border/40">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">
              {t("about.values.title")}
            </h2>
            <div className="bg-linear-to-b from-accent/5 to-teal-500/5 border border-accent/20 rounded-2xl p-6 shadow-xs space-y-4">
              <p className="text-base text-primary font-semibold leading-relaxed">
                {t("about.values.desc")}
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Derneğimiz, ülke genelinde eğitim gören veya eğitimini tamamlamış; iş hayatında olan ya da henüz iş hayatına başlamamış gençlerin kişisel gelişimlerini desteklemeyi amaçlamaktadır.
            </p>
            <p>
              Bu doğrultuda, eğitim programları düzenleyerek gençlerin bilgi paylaşımında bulunabilecekleri, deneyim kazanabilecekleri ve kendilerini geliştirebilecekleri bir ortam sunmaktadır.
            </p>
          </div>
        </div>

        {/* Gençlere ve Topluma Taahhüdümüz Section */}
        <div className="space-y-8 pt-8 border-t border-border/40">
          <div className="text-center space-y-2">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
              {language === "en" ? "Our Commitments" : "Temel İlkelerimiz"}
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              {language === "en" ? "Our Commitment to Youth & Society" : "Gençlere ve Topluma Taahhüdümüz"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {language === "en"
                ? "Our core promises and principles guiding all activities of 18-28 Youth Association."
                : "18-28 Gençlik Derneği olarak tüm faaliyetlerimize yön veren temel taahhütlerimiz ve ilkelerimiz;"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-primary transition-all">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "100% Free Support" : "%100 Ücretsiz Hizmet"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "All training, mentorship, and development programs for youth aged 18-28 are unconditionally free."
                  : "18-28 yaş arasındaki gençlere yönelik tüm eğitim, mentorluk ve gelişim programlarımız istisnasız ve koşulsuz ücretsizdir."}
              </p>
            </div>

            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-primary transition-all">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Political Independence" : "Siyasi Bağımsızlık"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We have no affiliation with any political party or organization; our sole focus is youth empowerment."
                  : "Hiçbir siyasi parti veya akımla bağlantımız yoktur; tek odağımız gençlerin yetkinliğini geliştirmek ve istihdamı desteklemektir."}
              </p>
            </div>

            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-primary transition-all">
              <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Equal Opportunity" : "Fırsat Eşitliği & NEET"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We support both university students and youth not in education or employment (NEET) equally."
                  : "Üniversite öğrencilerinin yanı sıra ne eğitimde ne istihdamda (NEET) yer alan tüm gençlere kapılarımız sonuna kadar açıktır."}
              </p>
            </div>

            <div className="bg-background border-2 border-primary/20 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-primary transition-all">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-primary">
                {language === "en" ? "Transparency & Governance" : "Şeffaflık & Denetim"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Entirely volunteer-driven management, open corporate bylaws, and fully auditable non-profit structure."
                  : "Derneğimiz tamamen gönüllülük esasına ve kâr amacı gütmeyen şeffaf kurumsal yönetim ilkelerine dayanır."}
              </p>
            </div>
          </div>
        </div>

        {/* Dernek Tüzüğü Banner Card */}
        <div className="bg-linear-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary">
                  {language === "en" ? "Association Bylaws" : "Dernek Tüzüğümüz"}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-semibold">
                  {language === "en" ? "Official Corporate Governance & Membership Document" : "Resmi Kurumsal Yönetim & Üyelik Mevzuatı"}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              {language === "en"
                ? "Our official association bylaws detailing our establishment goals, membership rights, governing bodies, and operational principles. You can read the full text online or download the file."
                : "Derneğimizin kuruluş amacı, yönetim organları, çalışma ilkeleri ve üyelerimizin hak/yükümlülüklerini belirleyen resmi tüzük belgemizdir. Tüzüğü web sitemiz üzerinden online inceleyebilir veya doğrudan indirebilirsiniz."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link href="/tuzuk">
              <Button size="lg" className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90 text-primary-foreground">
                {language === "en" ? "Read Online" : "Tüzüğü İncele"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="/documents/18-28_Genclik_Dernegi_Tuzugu.txt" download="18-28_Genclik_Dernegi_Tuzugu.txt">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold border-primary/40 text-primary hover:bg-primary/5">
                <Download className="mr-2 h-4 w-4" />
                {language === "en" ? "Download (.TXT)" : "Tüzük İndir"}
              </Button>
            </a>
          </div>
        </div>

        {/* SSS Section (Accordion) */}
        <div id="sss" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">
              {t("about.faq.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("about.faq.desc")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto border border-border/40 rounded-xl bg-background p-4 shadow-2xs">
            <Accordion className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value} className="border-b border-border/30 last:border-b-0">
                  <AccordionTrigger className="text-primary font-bold hover:text-accent hover:no-underline text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
    </div>
  );
}
