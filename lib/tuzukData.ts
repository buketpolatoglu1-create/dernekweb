export interface TuzukMadde {
  id: number;
  title: string;
  shortTitle: string;
  content: string[];
  subSections?: {
    subtitle?: string;
    items: string[];
  }[];
}

export const tuzukMaddeleri: TuzukMadde[] = [
  {
    id: 1,
    title: "Madde 1- Derneğin Adı ve Merkezi",
    shortTitle: "Derneğin Adı ve Merkezi",
    content: [
      "Derneğin Adı: 'OnSekiz YirmiSekiz Gençlik Derneği'dir.",
      "Derneğin merkezi İSTANBUL'dur.",
      "Dernek, yurt içinde ve yurt dışında şube açabilir."
    ]
  },
  {
    id: 2,
    title: "Madde 2- Derneğin Amacı ve Bu Amacı Gerçekleştirmek İçin Dernekçe Sürdürülecek Çalışma Konuları ve Biçimleri İle Faaliyet Alanı",
    shortTitle: "Derneğin Amacı ve Faaliyet Alanı",
    content: [
      "Derneğin Amacı: Türkiye Cumhuriyeti'nin çağdaş uygarlık hedef ve ilkelerine sadık bir toplumsal yapıyı desteklemek üzere demokrasi, insan hakları, sürdürülebilirlik, eşitlik ve kapsayıcılık ilkelerine bağlı olarak, gençlerin iş hayatına hazırlanması, kişisel gelişimlerinin desteklenmesi ve toplumsal hayata aktif katılımlarının artırılması için yurt içinde ve yurt dışında uluslararası düzeyde faaliyet göstermek amacıyla kurulmuştur.",
      "Faaliyet Alanı: Dernek sosyal alanda faaliyet gösterir. 18–28 yaş aralığındaki gençlerin bireysel, sosyal, kültürel ve mesleki gelişimlerini desteklemek; iş hayatına hazırlamak, iş hayatı ile gençler arasında güçlü bağlar kurmak, aktif vatandaşlık bilincini güçlendirmek; kapsayıcılık, eşitlik ve sürdürülebilir kalkınma ilkeleri doğrultusunda sosyal etki yaratmak amacıyla faaliyet gösterir. Bu kapsamda dernek;",
      "• Gençlerin eğitim, istihdam, liderlik ve girişimcilik kapasitelerini geliştirmeyi,",
      "• Mesleki becerilerini, kişisel farkındalıklarını, kariyer planlama ve iş bulma yetkinliklerini artırmayı,",
      "• Mentorluk, koçluk ve deneyim temelli öğrenme programları geliştirmeyi ve uygulamayı,",
      "• Dijital dönüşüme uyum kapsamında teknolojik ve dijital beceriler, yeni nesil becerilerin kazanılmasını desteklemeyi,",
      "• Gençler ile iş dünyası arasında iş birlikleri oluşturmayı, toplum temelli girişimlerin desteklenmesi yoluyla sürdürülebilir ve ölçülebilir sosyal etki yaratmayı,",
      "• Gönüllülük kültürünü yaygınlaştırmayı (sosyal sorumluluk projeleri ile toplum temelli girişimlerin desteklenmesi, sürdürülebilir ve ölçülebilir sosyal etki yaratmayı),",
      "• Gençlerin karar alma süreçlerine katılımını teşvik etmeyi ve savunuculuk faaliyetleri yürütmeyi; politika geliştirme süreçlerine katkı sağlamak amacıyla ilgili alanlarda araştırmalar, raporlar ve yayınlar hazırlamayı,",
      "• Faaliyetlerinin etkinliğini artırmak amacıyla izleme ve değerlendirme mekanizmaları geliştirmeyi, elde edilen çıktıları raporlayarak sürdürülebilir etki oluşturmayı amaçlar."
    ],
    subSections: [
      {
        subtitle: "Dernekçe Sürdürülecek Çalışma Konuları ve Biçimleri",
        items: [
          "1- Faaliyetlerinin etkinleştirilmesi ve geliştirilmesi için araştırmalar yapar.",
          "2- Eğitim, kurs, seminer, konferans, zirve, panel, yarışma ve benzeri gelişim programları düzenler ve gelişim temelli programlara katılımı destekler. Mentorluk, koçluk ve deneyim temelli öğrenme modelleri geliştirir, uygular ve bu konuda gençleri destekler.",
          "3- Gençlerin mesleki, kişisel ve liderlik gelişimlerini desteklemek amacıyla kariyer planlama, beceri geliştirme ve istihdam odaklı programlar yürütür.",
          "4- Gençlik değişim programları, gönüllülük faaliyetleri, staj programları ve uluslararası hareketlilik projeleri organize eder.",
          "5- Dernek çalışma konuları ve amaçları çerçevesinde stajyer ve çalışan olarak personel istihdam eder.",
          "6- Yüz yüze ve Dijital platformlar aracılığıyla eğitim, farkındalık ve bilgi paylaşımı faaliyetleri yürütür; dijital becerilerin geliştirilmesini destekler.",
          "7- Amacın gerçekleştirilmesi için gerekli olan her türlü bilgi, belge, doküman ve yayınları temin etmek, dokümantasyon merkezi oluşturmak, çalışmalarını duyurmak için yayın faaliyetleri yürütmek; kitap, dergi, bülten ve benzeri yayınlar hazırlamak ve yayımlamak.",
          "8- Amacın gerçekleştirilmesi için sağlıklı bir çalışma ortamını sağlamak, her türlü teknik araç ve gereci, demirbaş ve kırtasiye malzemelerini temin etmek.",
          "9- Gerekli izinler alınmak şartıyla yardım toplama faaliyetlerinde bulunmak, burs vermek ve yurt içinden ve yurt dışından bağış kabul etmek.",
          "10- Tüzük amaçlarının gerçekleştirilmesi için ihtiyaç duyduğu gelirleri temin etmek amacıyla iktisadi, ticari ve sanayi işletmeler kurmak ve işletmek, her türlü gerçek ve tüzel kişi ile sponsorluk anlaşmaları yapmak.",
          "11- Üyelerinin ve gençlerin yararlanmaları ve boş zamanlarını değerlendirebilmeleri için lokal açmak, sosyal ve kültürel tesisler kurmak ve bunları tefriş etmek.",
          "12- Üyelerin ve gençlerin arasında sosyal ilişkilerin geliştirilmesi ve devam ettirilmesi için yemekli toplantılar, konser, balo, tiyatro, sergi, gezi ve eğlenceli etkinlikler vb. düzenlemek.",
          "13- Dernek faaliyetleri için ihtiyaç duyulan taşınır, taşınmaz mal satın almak, satmak, kiralamak, kiraya vermek ve taşınmazlar üzerinde ayni hak tesis etmek.",
          "14- Amacın gerçekleştirilmesi için gerek görülmesi durumunda yurt içinde ve yurt dışında vakıf kurmak, federasyon kurmak veya kurulu bir federasyona katılmak.",
          "15- Uluslararası faaliyette bulunmak, yurt dışındaki dernek veya kuruluşlara üye olmak ve bu kuruluşlarla ortak çalışmalar yapmak veya yardımlaşmak.",
          "16- Kamu kurum ve kuruluşları ile görev alanlarına giren konularda ortak projeler yürütmek.",
          "17- Dernek üyelerinin ve gençlerin yiyecek, giyecek gibi zaruri ihtiyaç maddelerini ve diğer mal ve hizmetlerle kısa vadeli kredi ihtiyaçlarını karşılamak amacıyla sandık kurmak.",
          "18- Diğer derneklerle veya vakıf, sendika ve benzeri sivil toplum kuruluşlarıyla ortak bir amacı gerçekleştirmek için platformlar oluşturmak, ortak projeler yürütmek.",
          "19- Amacın gerçekleştirilmesi için ihtiyaç duyulan ve kanunların yasaklamadığı her türlü faaliyette bulunmak.",
          "20- Mentorluk, Koçluk faaliyetlerinin uluslararası genel kabul görmüş kurallar çerçevesinde gençlere ulaşması için çalışmalar yapmak.",
          "21- Gençlerin iş, mesleki donanım ve becerilerini geliştirmek, katılımını teşvik etmek, yeni fikirlerin hayata geçmesi için desteklemek, ticarileştirmek, Ar-ge çalışmaları gerçekleştirmelerini desteklemek.",
          "22- Kendisini, faaliyetlerini ve amacını anlatmak için toplantılar, tanıtım günleri düzenlemek.",
          "23- Yurtiçinde ve yurtdışında gerekli görülen yerlerde şube ve temsilcilikler açmak.",
          "24- Dünya Bankası, Ulusal Ajanslar, Avrupa Birliği Fonları, Kalkınma Ajansları, TÜBİTAK, KOSGEB, Ticaret Odaları başta olmak üzere projeler geliştirmek ve başvuruda bulunmak.",
          "25- Stratejik iş birlikleri kurmak ve alt yükleniciler kullanmak.",
          "26- Düzenleyeceği her türlü eğitim, konferans, panel, gezi ve kültürel faaliyetlerden bağış ve sponsorluklar aracılığıyla gelir sağlamak.",
          "27- Kültürlerarası diyalog, uluslararası hareketlilik ve iş birliği faaliyetleri kapsamında gençlik değişimleri ve gönüllülük programları gerçekleştirmek.",
          "28- Erasmus+ ve Avrupa Dayanışma Programı kapsamında uluslararası hibe projeleri hazırlamak ve uygulamak.",
          "29- Gençlerin iyi olma halini, sağlıklı yaşamı, gönüllülük, sanat ve kültür etkinliklerini destekleyici çalışmalar yürütmek.",
          "30- Konferanslar, paneller, sergiler, turnuvalar, yarışlar düzenlemek.",
          "31- Kamu yararına dernek olabilmek amacıyla başvurular yapmak ve kamusal projeleri desteklemek.",
          "32- Toplumsal cinsiyet eşitliği, kadın liderliği, genç kızların güçlendirilmesi ve NEET gençlerin sosyal-ekonomik hayata katılımını desteklemek.",
          "33- Çevre bilinci, sürdürülebilir yaşam alışkanlıkları ve aktif vatandaşlık konularında farkındalık çalışmaları yürütmek.",
          "34- Web sitesi ve sosyal medya hesapları kurmak ve yönetmek.",
          "35- İhtiyaç sahibi gençlere mevzuata uygun şekilde ayni ve nakdi destek sağlamak.",
          "36- Gönüllülük kültürünü yaygınlaştırmak amacıyla sosyal sorumluluk projeleri geliştirmek.",
          "37- Staj, gönüllülük ve değişim programları organize etmek.",
          "38- İş hayatı ile güçlü networking bağları kurulması için çalışmalar yürütmek.",
          "39- Sürdürülebilir büyümeyi desteklemek.",
          "40- 18-28 Yaş aralığındaki gençler tüm faaliyetlerden ÜCRETSİZ faydalanır."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Madde 3- Üye Olma Hakkı ve Üyelik İşlemleri",
    shortTitle: "Üye Olma Hakkı ve Üyelik İşlemleri",
    content: [
      "Fiil ehliyetine sahip bulunan ve derneğin amaç ve ilkelerini benimseyerek bu doğrultuda çalışmayı kabul eden ve Mevzuatın öngördüğü koşulları taşıyan her gerçek ve tüzel kişi bu derneğe üye olma hakkına sahiptir. Ancak, yabancı gerçek kişilerin üye olabilmesi için Türkiye'de yerleşme hakkına sahip olması da gerekir. Onursal üyelik için bu koşul aranmaz.",
      "Dernek başkanlığına yazılı olarak yapılacak üyelik başvurusu, dernek yönetim kurulunca en çok otuz gün içinde üyeliğe kabul veya isteğin reddi şeklinde karara bağlanır ve sonuç yazıyla başvuru sahibine bildirilir. Başvurusu kabul edilen üye, bu amaçla tutulacak deftere kaydedilir.",
      "Derneğin asıl üyeleri, derneğin kurucuları ile müracaatları üzerine yönetim kurulunca üyeliğe kabul edilen kişilerdir.",
      "Derneğe maddi ve manevi bakımdan önemli destek sağlamış bulunanlar yönetim kurulunun teklifi, genel kurulun onayı ile onursal üye olarak kabul edilebilir.",
      "Onursal Üyeler ve Akademik/Kamu/Gönüllü üyelerinin seçme ve seçilme hakları yoktur. Diledikleri taktirde ödenti verirler."
    ],
    subSections: [
      {
        subtitle: "Derneğin 4 Çeşit Üyelik Tipi Vardır:",
        items: [
          "a) Asıl Gerçek Kişi Üyelik: Dernek üyeliğinin gerektirdiği her türlü yükümlülükleri ve sorumlulukları üstlenmiş, seçme ve seçilme hakkına sahip üyelerdir.",
          "b) Asıl Tüzel Kişi Üyelik: Dernek üyeliğinin gerektirdiği her türlü yükümlülükleri ve sorumlulukları üstlenmiş, başkanları ya da kendilerini temsil ile görevlendirdikleri gerçek kişiler yolu ile seçme ve seçilme hakkına sahip üyelerdir.",
          "c) Onursal Üyelik: Dernek amaçlarına uygun seçkin hizmetlerde bulunmuş kişilere yönetim kurulunun teklifi ve genel kurulun onayı ile Onursal Üyelik sıfatı verilebilir.",
          "d) Akademik/Kamu/Gönüllü Üyeliği: Konusunda uzman Akademisyenler ile Dernekle ilgili kamu ya da gönüllü alanlarında çalışanlara yönetim kurulunun teklifi ve onayı ile Akademik/Kamu/Gönüllü Üyeliği sıfatı verilebilir."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Madde 4- Üyelikten Çıkma",
    shortTitle: "Üyelikten Çıkma",
    content: [
      "Her üye yazılı olarak bildirmek kaydıyla, dernekten çıkma hakkına sahiptir.",
      "Üyenin istifa dilekçesi yönetim kuruluna ulaştığı anda çıkış işlemleri sonuçlanmış sayılır. Üyelikten ayrılma, üyenin derneğe olan birikmiş borçlarını sona erdirmez."
    ]
  },
  {
    id: 5,
    title: "Madde 5- Üyelikten Çıkarılma",
    shortTitle: "Üyelikten Çıkarılma",
    content: [
      "Dernek üyeliğinden çıkarılmayı gerektiren haller aşağıda gösterilmiştir:",
      "1- Dernek tüzüğüne aykırı davranışlarda bulunmak,",
      "2- Verilen görevlerden sürekli kaçınmak,",
      "3- Yazılı ikazlara rağmen üyelik aidatını bir yıl içinde ödememek,",
      "4- Dernek organlarınca verilen kararlara uymamak,",
      "5- Üye olma şartlarını kaybetmiş olmak.",
      "Yukarıda sayılan durumlardan birinin tespiti halinde yönetim kurulu kararı ile üyelikten çıkarılabilir.",
      "Dernekten çıkan veya çıkarılanlar, üye kayıt defterinden silinir ve dernek malvarlığında hak iddia edemez."
    ]
  },
  {
    id: 6,
    title: "Madde 6- Dernek Organları",
    shortTitle: "Dernek Organları",
    content: [
      "Derneğin organları aşağıda gösterilmiştir:",
      "1- Genel Kurul",
      "2- Yönetim Kurulu",
      "3- Denetim Kurulu"
    ]
  },
  {
    id: 7,
    title: "Madde 7- Dernek Genel Kurulunun Kuruluş Şekli, Toplanma Zamanı ve Çağrı ve Toplantı Usulü",
    shortTitle: "Genel Kurul Kuruluş Şekli ve Toplanma Usulü",
    content: [
      "Genel kurul, derneğin en yetkili karar organı olup; derneğe kayıtlı üyelerden ve şube delegelerinden oluşur.",
      "Genel kurul;",
      "1- Bu tüzükte belli edilen zamanda olağan,",
      "2- Yönetim veya denetim kurulunun gerekli gördüğü hallerde veya dernek üyelerinden beşte birinin yazılı başvurusu üzerine, yönetim kurulunca olağanüstü toplantıya çağrılır.",
      "3- Olağan genel kurul, 2 yılda bir Mayıs ayı içerisinde, yönetim kurulunca belirlenecek gün, yer ve saatte fiziksel veya çevrim içi olarak toplanır.",
      "4- Çağrı Usulü: Yönetim kurulu, genel kurula katılma hakkı bulunan üyelerin listesini düzenler. Üyeler en az on beş gün önceden toplantının günü, saati, yeri ve gündemi bildirilerek çağrılır."
    ]
  },
  {
    id: 8,
    title: "Madde 8- Genel Kurulun Oy kullanma ve Karar Alma Usul ve Şekilleri",
    shortTitle: "Genel Kurulda Oy Kullanma ve Karar Alma",
    content: [
      "Genel kurulda, aksine karar alınmamışsa oylamalar açık olarak yapılır. Açık oylamada, genel kurul başkanının belirteceği yöntem uygulanır.",
      "Gizli oylama yapılacak olması durumunda ise, toplantı başkanı tarafından mühürlenmiş kağıtlar veya oy pusulaları kullanılır.",
      "Genel kurul kararları, toplantıya katılan üyelerin salt çoğunluğuyla alınır. Şu kadar ki, tüzük değişikliği ve derneğin feshi kararları, ancak toplantıya katılan üyelerin üçte iki çoğunluğuyla alınabilir.",
      "Toplantısız veya Çağrısız Alınan Kararlar: Bütün üyelerin bir araya gelmeksizin yazılı katılımıyla alınan kararlar ile dernek üyelerinin tamamının tüzükte yazılı çağrı usulüne uymaksızın bir araya gelerek aldığı kararlar geçerlidir."
    ]
  },
  {
    id: 9,
    title: "Madde 9- Genel Kurulun Görev ve Yetkileri",
    shortTitle: "Genel Kurulun Görev ve Yetkileri",
    content: [
      "Aşağıda yazılı hususlar genel kurulca görüşülüp karara bağlanır:",
      "1- Bir sonraki olağan Genel Kurul'a kadar görev yapacak olan dernek organlarının seçilmesi,",
      "2- Dernek tüzüğünün değiştirilmesi,",
      "3- Yönetim ve denetim kurulları raporlarının görüşülmesi ve yönetim kurulunun ibrası,",
      "4- Yönetim kurulunca hazırlanan bütçenin görüşülüp, aynen veya değiştirilerek kabul edilmesi,",
      "5- Derneğin diğer organlarının denetlenmesi ve gerek görüldüğünde haklı sebeplerle onların görevden alınması,",
      "6- Üyeliğin reddi veya üyelikten çıkarma hakkında verilen yönetim kurulu kararlarına karşı yapılan itirazların incelenmesi,",
      "7- Taşınmaz malların satın alınması veya mevcut taşınmaz malların satılması hususunda yönetim kuruluna yetki verilmesi,",
      "8- Yönetmeliklerin incelenip onaylanması,",
      "9- Derneğin federasyona katılması ve ayrılmasının kararlaştırılması,",
      "10- Derneğin uluslararası faaliyette bulunması, yurt dışındaki dernek ve kuruluşlara üye olarak katılması veya ayrılması,",
      "11- Derneğin feshedilmesi."
    ]
  },
  {
    id: 10,
    title: "Madde 10- Yönetim Kurulunun Oluşumu, Görev ve Yetkileri",
    shortTitle: "Yönetim Kurulunun Oluşumu, Görev ve Yetkileri",
    content: [
      "Yönetim Kurulu Yedi (7) asıl ve Yedi (7) yedek üye olarak genel kurulca seçilir. Yönetim kurulu, seçimden sonraki ilk toplantısında bir kararla görev bölüşümü yaparak başkan, başkan yardımcısı, sekreter, sayman ve üye'yi belirler.",
      "Üst üste 2 dönem Yönetim Kurulu başkanlığı yapan üye, 3. Dönem için tekrar başkanlığa seçilemez. Aynı üye ancak bir dönem sonra yeniden başkanlığa seçilebilir.",
      "Yönetim kurulu aşağıdaki hususları yerine getirir:",
      "1- Derneği temsil etmek veya bu hususta kendi üyelerinden birine veya bir üçüncü kişiye yetki vermek,",
      "2- Gelir ve gider hesaplarına ilişkin işlemleri yapmak ve gelecek döneme ait bütçeyi hazırlayarak genel kurula sunmak,",
      "3- Derneğin çalışmaları ile ilgili yönetmelikleri hazırlayarak genel kurul onayına sunmak,",
      "4- Taşınır ve taşınmaz mal satın almak, satmak, kiralama yapmak,",
      "5- Şube açmaya ilişkin işlemleri yürütmek ve şubeleri denetlemek,",
      "6- Derneğin amacını gerçekleştirmek için yetkisi dahilinde her çeşit kararı almak ve uygulamak."
    ]
  },
  {
    id: 11,
    title: "Madde 11- Denetim Kurulunun Oluşumu, Görev ve Yetkileri",
    shortTitle: "Denetim Kurulunun Oluşumu, Görev ve Yetkileri",
    content: [
      "Denetim Kurulu, üç asıl ve üç yedek üye olarak genel kurulca seçilir.",
      "Denetim kurulu; derneğin, tüzüğünde gösterilen amaç ve amacın gerçekleştirilmesi için sürdürüleceği belirtilen çalışma konuları doğrultusunda faaliyet gösterip göstermediğini, defter, hesap ve kayıtların mevzuata ve dernek tüzüğüne uygun olarak tutulup tutulmadığını, bir yılı geçmeyen aralıklarla denetler ve denetim sonuçlarını bir rapor halinde yönetim kuruluna ve genel kurula sunar."
    ]
  },
  {
    id: 12,
    title: "Madde 12- Derneğin Gelir Kaynakları",
    shortTitle: "Derneğin Gelir Kaynakları",
    content: [
      "Derneğin gelir kaynakları aşağıda sayılmıştır:",
      "1- Üye aidatı: Bireysel üyelerden yıllık olarak 5.000 TL aidat ücreti alınır. Üye; üyelik kabul tarihini takiben 30 gün içerisinde üyelik aidatını öder.",
      "Onursal Üyeler ve Akademik/Kamu/Gönüllü üyelerden giriş ödentisi veya yıllık aidat alınmaz.",
      "2- Kurumsal Üyeler: Kurumsal üyelerden yıllık olarak 25.000 TL üyelik aidatı alınır.",
      "3- Bağış ve Yardımlar: Gerçek ve tüzel kişilerin kendi isteği ile derneğe yaptıkları bağış, hibe ve nakdi/ayni destekler,",
      "4- Dernek tarafından tertiplenen çay, yemekli toplantı, gezi, eğlence, temsil, konser, konferans gibi faaliyetlerden sağlanan gelirler,",
      "5- İktisadi ve ticari işletme gelirleri, sponsorluk anlaşmaları ve hibe projelerinden elde edilen kazançlar."
    ]
  },
  {
    id: 13,
    title: "Madde 13- Derneğin Defter Tutma Esas ve Usulleri ve Tutulacak Defterler",
    shortTitle: "Defter Tutma Esas ve Usulleri",
    content: [
      "Dernekte, işletme hesabı esasına göre defter tutulur. Ancak, yıllık brüt gelirin Dernekler Yönetmeliğinde belirtilen haddi aşması durumunda bilanço esasına geçilir.",
      "Tutulacak Defterler:",
      "1- Karar Defteri",
      "2- Üye Kayıt Defteri",
      "3- Evrak Kayıt Defteri",
      "4- İşletme Hesabı Defteri",
      "5- Alındı Belgesi Kayıt Defteri",
      "6- Demirbaş Defteri"
    ]
  },
  {
    id: 14,
    title: "Madde 14- Derneğin Gelir ve Gider İşlemleri",
    shortTitle: "Derneğin Gelir ve Gider İşlemleri",
    content: [
      "Dernek gelirleri 'Alındı Belgesi' ile tahsil edilir. Banka aracılığı ile tahsilatta dekont veya hesap özeti alındı belgesi yerine geçer.",
      "Dernek giderleri fatura, perakende satış fişi, serbest meslek makbuzu gibi harcama belgeleri ile yapılır."
    ]
  },
  {
    id: 15,
    title: "Madde 15- Beyanname Verilmesi",
    shortTitle: "Beyanname Verilmesi",
    content: [
      "Derneğin, bir önceki yıla ait faaliyetleri ile gelir ve gider işlemlerinin yılsonu itibarıyla sonuçlarına ilişkin 'Dernek Beyannamesi' her takvim yılının ilk dört ayı içinde dernek başkanı tarafından mülki idare amirliğine verilir."
    ]
  },
  {
    id: 16,
    title: "Madde 16- Bildirim Yükümlülüğü",
    shortTitle: "Bildirim Yükümlülüğü",
    content: [
      "Genel kurul toplantılarını izleyen kırk beş gün içinde, organlara seçilen asıl ve yedek üyeleri içeren Genel Kurul Sonuç Bildirimi mülki idare amirliğine bildirilir.",
      "Derneğin edindiği taşınmazlar tapuya tescilinden itibaren otuz gün içinde bildirilir.",
      "Yurtdışından yardım alınacak olması durumunda önceden bildirimde bulunulur."
    ]
  },
  {
    id: 17,
    title: "Madde 17- Derneğin İç Denetimi",
    shortTitle: "Derneğin İç Denetimi",
    content: [
      "Dernekte genel kurul, yönetim kurulu veya denetim kurulu tarafından iç denetim yapılabileceği gibi, bağımsız denetim kuruluşlarına da denetim yaptırılabilir.",
      "Denetim kurulu tarafından en geç yılda bir defa derneğin denetimi gerçekleştirilir."
    ]
  },
  {
    id: 18,
    title: "Madde 18- Derneğin Borçlanma Usulleri",
    shortTitle: "Derneğin Borçlanma Usulleri",
    content: [
      "Dernek amacını gerçekleştirmek ve faaliyetlerini yürütebilmek için ihtiyaç duyulması halinde genel kurul kararı ile borçlanma yapabilir. Ancak bu borçlanma derneğin gelir kaynakları ile karşılanamayacak miktarlarda yapılamaz."
    ]
  },
  {
    id: 19,
    title: "Madde 19- Derneğin Şubelerinin Kuruluşu",
    shortTitle: "Şubelerin Kuruluşu",
    content: [
      "Dernek, gerekli görülen yerlerde genel kurul kararıyla şube açabilir. En az üç kişilik kurucular kurulu ilgili mülki amirliğe başvuruda bulunur."
    ]
  },
  {
    id: 20,
    title: "Madde 20- Şubelerin Görev ve Yetkileri",
    shortTitle: "Şubelerin Görev ve Yetkileri",
    content: [
      "Şubeler, tüzel kişiliği olmayan, dernek amaç ve hizmet konuları doğrultusunda özerk faaliyetlerde bulunmakla görev ve yetkili organizasyonlardır."
    ]
  },
  {
    id: 21,
    title: "Madde 21- Şubelerin Organları ve Şubelere Uygulanacak Hükümler",
    shortTitle: "Şube Organları",
    content: [
      "Şubenin organları: Genel kurul, yönetim kurulu (5 asıl, 5 yedek) ve denetim kurulu (3 asıl, 3 yedek)'dur."
    ]
  },
  {
    id: 22,
    title: "Madde 22- Şubelerin Genel Kurullarının Toplanma Zamanı",
    shortTitle: "Şube Genel Kurulları ve Temsil",
    content: [
      "Şubeler, genel kurul olağan toplantılarını genel merkez genel kurulu toplantısından en az iki ay önce bitirmek zorundadırlar. Şube genel kurulu 2 yılda bir Şubat ayı içerisinde toplanır."
    ]
  },
  {
    id: 23,
    title: "Madde 23- Temsilcilik Açma",
    shortTitle: "Temsilcilik Açma",
    content: [
      "Dernek, gerekli gördüğü yerlerde dernek faaliyetlerini yürütmek amacıyla yönetim kurulu kararıyla temsilcilik açabilir."
    ]
  },
  {
    id: 24,
    title: "Madde 24- Tüzüğün Ne Şekilde Değiştirileceği",
    shortTitle: "Tüzük Değişikliği Usulü",
    content: [
      "Tüzük değişikliği genel kurul kararı ile yapılabilir. Genel kurulda tüzük değişikliği yapılabilmesi için genel kurula katılma ve oy kullanma hakkı bulunan üyelerin 2/3 çoğunluğu aranır."
    ]
  },
  {
    id: 25,
    title: "Madde 25- Derneğin Feshi ve Mal Varlığının Tasfiye Şekli",
    shortTitle: "Fesih ve Tasfiye Şekli",
    content: [
      "Genel kurul, her zaman derneğin feshine karar verebilir. Fesih kararının alınabilmesi için oy kullanma hakkı bulunan üyelerin 2/3'ünün oyu gerekir.",
      "Tasfiye İşlemleri: Derneğin para, mal ve haklarının tasfiyesi son yönetim kurulu üyelerinden oluşan tasfiye kurulunca yapılır. Kalan mal varlıkları Genel Kurulca belirlenen veya amacına en yakın derneğe devredilir."
    ]
  },
  {
    id: 26,
    title: "Madde 26- Hüküm Eksikliği",
    shortTitle: "Hüküm Eksikliği",
    content: [
      "Bu tüzükte belirtilmemiş hususlarda Dernekler Kanunu, Türk Medeni Kanunu ve Dernekler Yönetmeliği hükümleri uygulanır.",
      "Bu tüzük 26 (Yirmialtı) maddeden ibarettir."
    ]
  }
];
