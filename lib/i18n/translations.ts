export type Language = "tr" | "en";

export const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımızda",
    "nav.announcements": "Duyurular",
    "nav.events": "Etkinliklerimiz",
    "nav.contact": "Başvuru ve İletişim",
    "nav.donate": "Bağış Yap",
    "nav.membership": "Üyelik",

    // Hero Section
    "hero.badge": "18-28 Gençlik Derneği",
    "hero.title1": "Bugünün Gençleri,",
    "hero.title2": "Yarının Liderleri",
    "hero.desc": "18-28 yaş arasındaki gençlere eğitim, mentorluk, staj ve kariyer desteği sunarak geleceğin liderlerini birlikte yetiştiriyoruz.",
    "hero.btnMore": "Daha Fazla Bilgi",

    // Section 2: Why 18-28
    "why.title": "Neden 18-28?",
    "why.p1": "Gençlik dönemi (18-28 yaş), hayatın en kritik karar eşiklerini barındırır. Eğitimden kariyer hayatına geçişte gençlerin rehberliğe, tecrübe paylaşımına ve fırsat eşitliğine ihtiyacı vardır.",
    "why.p2": "Bizler, alanında uzman mentorlarımız ve heyecanlı gönüllü ekibimizle bu kritik dönemdeki gençlerin yanındayız. Yılda en az 100 gence birebir dokunarak geleceklerine yön vermelerine katkıda bulunmayı hedefliyoruz.",
    "why.link": "Hakkımızda detaylarını gör",
    "why.card1.title": "Eğitim Desteği",
    "why.card1.desc": "Gençlerin teknik ve sosyal becerilerini geliştirecek atölyeler ve eğitim serileri düzenliyoruz.",
    "why.card2.title": "Koç & Mentorluk",
    "why.card2.desc": "Sektörden profesyonellerle gençleri eşleştirerek 3 aylık mentorluk süreçleri yürütüyoruz.",
    "why.card3.title": "İş & Staj Desteği",
    "why.card3.desc": "Gençlerin iş dünyasına adapte olabilmeleri için staj imkanları ve networking fırsatları yaratıyoruz.",
    "why.card4.title": "Sosyal Etki",
    "why.card4.desc": "Gençleri topluma faydalı sosyal sorumluluk projeleri üretmeye ve aktif gönüllülüğe teşvik ediyoruz.",

    // Committees Section
    "comm.title": "Komitelerimiz",
    "comm.subtitle": "Gençlerin gelişimine yön veren ve aktif projeler üreten 4 ana çalışma komitemiz;",
    "comm.btn": "Komitelerde Görev Alın",
    "comm.c1.title": "Eğitim Komitesi",
    "comm.c1.sub": "Koçluk & Mentorluk",
    "comm.c1.desc": "Gençlerin teknik ve sosyal becerilerini geliştirecek atölyeler, eğitim serileri ile koçluk & mentorluk süreçlerini yürütür.",
    "comm.c2.title": "Üyelik Komitesi",
    "comm.c2.sub": "İş & Staj",
    "comm.c2.desc": "İş dünyası ve lider kuruluşlarla köprü kurarak üyelerimizin staj imkanlarına ve kariyer fırsatlarına erişmesini sağlar.",
    "comm.c3.title": "Etkinlik & Sosyal Medya Komitesi",
    "comm.c3.sub": "Topluluk & Organizasyon",
    "comm.c3.desc": "Derneğin sosyal medya yönetimi, networking buluşmaları, zirveler ve yüz yüze/online etkinliklerini organize eder.",
    "comm.c4.title": "Teknoloji Komitesi",
    "comm.c4.sub": "Yazılım & Dijital Altyapı",
    "comm.c4.desc": "Mobil uygulama, web platformları ve dijital altyapı projeleri geliştirerek gençlerin teknik portföy oluşturmasına katkı sunar.",

    // Events Section
    "events.title": "Etkinliklerimizden Kareler",
    "events.desc": "Birlikte öğrendiğimiz, eğlendiğimiz ve paylaştığımız tüm etkinliklerimiz;",
    "events.allBtn": "Tüm Etkinlik Arşivini Gör",

    // Announcements Section
    "ann.title": "Duyurular & Güncel Haberler",
    "ann.desc": "Derneğimizden en son gelişmeleri ve önemli duyuruları takip edin.",
    "ann.allBtn": "Tüm Duyuruları İncele",
    "ann.readMore": "Detayları Gör",

    // Contact & Application Page
    "app.title": "Başvuru ve İletişim",
    "app.subtitle": "Aramıza Katılın",
    "app.desc": "Derneğimizin bir parçası olmak için başvuruda bulunabilir veya her türlü görüş, öneri ve sponsorluk talepleriniz için bize ulaşabilirsiniz.",
    
    "app.vol.title": "Bize Katılın",
    "app.vol.sub": "Komitelerimizde aktif görev alarak fark yaratın.",
    "app.vol.desc": "18-28 yaş aralığındaysanız derneğimize üye olarak kişisel gelişim eğitimlerine katılabilir, birebir koçluk ve mentorluk desteği alabilir; firma ziyaretleri, atölye çalışmaları ve etkinliklerimizden yararlanabilirsiniz. Ayrıca Eğitim, İş & Staj, İletişim & Etkinlik veya Teknoloji komitelerimizde aktif görev alarak projeler geliştirebilir ve kariyerinize güçlü bir yön verebilirsiniz.",
    "app.vol.btn": "Başvuru Formu",

    "app.mentor.title": "Gönüllü Mentor Başvurusu",
    "app.mentor.sub": "Bilgi ve tecrübelerinizle gençlere rehberlik edin.",
    "app.mentor.desc": "Sektörel tecrübenizi 18-28 yaş aralığındaki gençlerle paylaşarak onların kariyer planlamalarına ışık tutabilirsiniz. Yılda 3 ay süren mentorluk dönemlerimizde yer alarak gençlerin yol arkadaşı olun. (Gönüllü mentorluk başvurularında özel sektör veya kamu kurumlarında en az 15 yıl yönetim pozisyonu deneyimi şartı aranmaktadır.)",
    "app.mentor.btn": "Gönüllü Mentor Başvuru Formu",

    "app.corp.title": "Kurumsal Üyelik",
    "app.corp.sub": "Gençlerin gelişimine birlikte katkı sağlayın.",
    "app.corp.desc": "Kurumunuzla derneğimizin çalışmalarına destek olabilir; eğitim, mentorluk, staj, etkinlik ve sosyal sorumluluk projelerinde birlikte yer alabilirsiniz. Kurumsal üyelik sayesinde çalışanlarınız gönüllü mentor olabilir, genç yeteneklerle buluşabilir ve ortak projeler geliştirebilirsiniz.",
    "app.corp.btn": "iletisim@18-28genclikdernegi.org",

    "app.ind.title": "Bireysel Üyelik",
    "app.ind.sub": "Gençlerin geleceğine bireysel katkıda bulunun.",
    "app.ind.desc": "Derneğimize bireysel olarak üye olup gönüllü katkılarınızla 18-28 yaş arasındaki gençlerin eğitim, mentorluk ve kariyer yolculuklarına destek olabilirsiniz. Bireysel üyelik hakkında detaylı bilgi için doğrudan bizimle e-posta üzerinden iletişime geçebilirsiniz.",
    "app.ind.btn": "iletisim@18-28genclikdernegi.org",

    "contact.title": "Bizimle İletişime Geçin",
    "contact.desc": "Bir sorunuz mu var? Sponsorluk veya iş birlikleri hakkında görüşmek için aşağıdaki formu doldurarak doğrudan bizimle irtibata geçebilirsiniz.",
    "form.name": "Ad Soyad",
    "form.email": "E-posta Adresi",
    "form.subject": "Konu",
    "form.message": "Mesajınız",
    "form.submit": "Mesaj Gönder",
    "form.sending": "Gönderiliyor...",
    "form.success": "Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.",

    // About Page
    "about.title": "18-28 Yaş Arası Gençlerin Yanındayız",
    "about.desc": "18-28 Gençlik Derneği; bu yaş aralığındaki gençlerin potansiyeline inanan, onların bilgi, beceri ve farkındalıklarını geliştirmeyi amaçlayan, hiçbir siyasi parti ve akımla bağlantısı olmayan, kar amacı gütmeyen gönüllü bir organizasyondur.",
    "about.mission.title": "Misyonumuz & Hedefimiz",
    "about.mission.desc": "Derneğimiz; farklı disiplinlerden gelen gençleri, iş profesyonelleri, akademisyenler, kurumsal firmalarla buluşturarak gençlerin; öğrenme, üretme, yetkinliklerini geliştirme ve topluma katkı sağlama kültürünü yaygınlaştırmayı hedeflemektedir. Hedefimiz her yıl en az 100 öğrencinin hayatına dokunabilmektir.",
    "about.vision.title": "Vizyonumuz",
    "about.vision.desc": "Gençlerin kişisel, eğitsel ve mesleki gelişimlerini destekleyerek iş dünyası ile güçlü bağlar kurmalarını sağlamak; bu doğrultuda yeni nesil liderleri yetiştiren, fırsat eşitliğini önceleyen ve sürdürülebilir toplumsal katkıyı hedefleyen yenilikçi bir gençlik ekosistemi oluşturmaktır.",
    "about.what.title": "Neler Yapıyoruz?",
    "about.what.desc": "Derneğimiz; gençlerin mesleki gelişimlerini destekleyerek, sorumluluk bilincini güçlendiren, inovatif fikirler üretmelerine yardım eden ve onları geleceğin liderleri olarak yetiştirip, iş dünyası ile biraraya getiren çalışmalar yürütmektedir.",
    "about.values.title": "Değerlerimiz ve İlkelerimiz",
    "about.values.desc": "18-28 Gençlik Derneği; Gönüllülük, kapsayıcılık, eşit fırsat ve sürdürülebilir gelişim ilkeleri üzerine kurulmuştur.",
    "about.faq.title": "Sıkça Sorulan Sorular",
    "about.faq.desc": "Derneğimiz ve işleyişimiz hakkında merak edilen temel soruların cevapları.",

    // Footer
    "footer.desc": "18-28 yaş arası gençlerin kişisel, eğitsel ve mesleki gelişimini destekleyen bağımsız gençlik derneği.",
    "footer.rights": "Tüm Hakları Saklıdır.",
    "footer.links": "Hızlı Bağlantılar",
    "footer.contact": "İletişim",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.announcements": "Announcements",
    "nav.events": "Events",
    "nav.contact": "Application & Contact",
    "nav.donate": "Donate",
    "nav.membership": "Membership",

    // Hero Section
    "hero.badge": "18-28 Youth Association",
    "hero.title1": "Youth of Today,",
    "hero.title2": "Leaders of Tomorrow",
    "hero.desc": "We raise the leaders of tomorrow together by offering training, mentorship, internship, and career support to young people aged 18-28.",
    "hero.btnMore": "Learn More",

    // Section 2: Why 18-28
    "why.title": "Why 18-28?",
    "why.p1": "The youth period (ages 18-28) contains the most critical decision thresholds of life. Young people need guidance, experience sharing, and equal opportunities during their transition from education to career life.",
    "why.p2": "We stand by young people during this critical period with our expert mentors and enthusiastic volunteer team. We aim to touch the lives of at least 100 young people every year and contribute to shaping their futures.",
    "why.link": "View About Us details",
    "why.card1.title": "Education Support",
    "why.card1.desc": "We organize workshops and training series to develop young people's technical and soft skills.",
    "why.card2.title": "Coaching & Mentorship",
    "why.card2.desc": "We run 3-month mentorship programs by matching young people with industry professionals.",
    "why.card3.title": "Job & Internship Support",
    "why.card3.desc": "We create internship and networking opportunities for young people to adapt to the business world.",
    "why.card4.title": "Social Impact",
    "why.card4.desc": "We encourage young people to produce social responsibility projects and engage in active volunteering.",

    // Committees Section
    "comm.title": "Our Committees",
    "comm.subtitle": "Our 4 main working committees guiding youth development and building active projects;",
    "comm.btn": "Join a Committee",
    "comm.c1.title": "Education Committee",
    "comm.c1.sub": "Coaching & Mentorship",
    "comm.c1.desc": "Organizes workshops, training series, and manages coaching & mentorship processes to enhance youth skills.",
    "comm.c2.title": "Membership Committee",
    "comm.c2.sub": "Jobs & Internships",
    "comm.c2.desc": "Bridges the corporate world and leading organizations to connect members with internship and career opportunities.",
    "comm.c3.title": "Events & Social Media Committee",
    "comm.c3.sub": "Community & Organization",
    "comm.c3.desc": "Manages social media presence, community outreach, networking gatherings, summits, and hybrid events.",
    "comm.c4.title": "Technology Committee",
    "comm.c4.sub": "Software & Digital Tools",
    "comm.c4.desc": "Develops mobile apps, web platforms, and digital tools to help young people build hands-on technical portfolios.",

    // Events Section
    "events.title": "Highlights From Our Events",
    "events.desc": "All our events where we learn, have fun, and share together;",
    "events.allBtn": "View Full Event Archive",

    // Announcements Section
    "ann.title": "Announcements & Latest News",
    "ann.desc": "Follow the latest developments and important announcements from our association.",
    "ann.allBtn": "Browse All Announcements",
    "ann.readMore": "View Details",

    // Contact & Application Page
    "app.title": "Application & Contact",
    "app.subtitle": "Join Us",
    "app.desc": "You can apply to become part of our association or contact us for all kinds of inquiries, suggestions, and sponsorship requests.",
    
    "app.vol.title": "Join Us",
    "app.vol.sub": "Make a difference by actively serving in our committees.",
    "app.vol.desc": "If you are between the ages of 18-28, you can join our association as a member, participate in personal development trainings, receive one-on-one coaching and mentorship; benefit from company visits, workshops, and events. You can also actively serve in our Education, Job & Internship, Communication & Events, or Technology committees to develop projects and steer your career.",
    "app.vol.btn": "Application Form",

    "app.mentor.title": "Volunteer Mentor Application",
    "app.mentor.sub": "Guide young people with your knowledge and experience.",
    "app.mentor.desc": "Share your industry experience with young people aged 18-28 to illuminate their career planning. Join our 3-month mentorship periods and become a companion to youth. (Volunteer mentorship applications require a minimum of 15 years of management position experience in the private or public sector.)",
    "app.mentor.btn": "Volunteer Mentor Application Form",

    "app.corp.title": "Corporate Membership",
    "app.corp.sub": "Contribute together to the development of youth.",
    "app.corp.desc": "Support our association's work with your institution; participate together in training, mentorship, internships, events, and social responsibility projects. Corporate membership enables your employees to become volunteer mentors, connect with young talent, and develop joint projects.",
    "app.corp.btn": "iletisim@18-28genclikdernegi.org",

    "app.ind.title": "Individual Membership",
    "app.ind.sub": "Contribute individually to the future of youth.",
    "app.ind.desc": "You can join our association as an individual member and support the education, mentorship, and career journeys of youth aged 18-28 with your volunteer contributions. For detailed information about individual membership, please contact us directly via email.",
    "app.ind.btn": "iletisim@18-28genclikdernegi.org",

    "contact.title": "Contact Us",
    "contact.desc": "Have a question? Fill out the form below to get in touch with us directly for sponsorship or partnership inquiries.",
    "form.name": "Full Name",
    "form.email": "Email Address",
    "form.subject": "Subject",
    "form.message": "Your Message",
    "form.submit": "Send Message",
    "form.sending": "Sending...",
    "form.success": "Your message has been sent successfully. We will get back to you shortly.",

    // About Page
    "about.title": "Standing By Youth Aged 18-28",
    "about.desc": "18-28 Youth Association is a non-profit volunteer organization independent of political parties and movements, believing in the potential of youth in this age range and aiming to enhance their knowledge, skills, and awareness.",
    "about.mission.title": "Our Mission & Goal",
    "about.mission.desc": "Our association aims to bring together youth from diverse disciplines with business professionals, academics, and corporate firms to spread a culture of learning, producing, developing skills, and contributing to society. Our goal is to touch the lives of at least 100 students every year.",
    "about.vision.title": "Our Vision",
    "about.vision.desc": "To create an innovative youth ecosystem that fosters next-generation leaders, prioritizes equal opportunity, and aims for sustainable social contribution by supporting the personal, educational, and professional development of youth to build strong ties with the business world.",
    "about.what.title": "What We Do",
    "about.what.desc": "Our association carries out activities that support young people's professional growth, strengthen their sense of responsibility, help them generate innovative ideas, and bring them together with the business world as future leaders.",
    "about.values.title": "Our Values & Principles",
    "about.values.desc": "18-28 Youth Association is founded on the principles of volunteerism, inclusivity, equal opportunity, and sustainable development.",
    "about.faq.title": "Frequently Asked Questions",
    "about.faq.desc": "Answers to fundamental questions about our association and its operations.",

    // Footer
    "footer.desc": "An independent youth platform supporting the personal, educational, and professional development of youth aged 18-28.",
    "footer.rights": "All Rights Reserved.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
  }
};
