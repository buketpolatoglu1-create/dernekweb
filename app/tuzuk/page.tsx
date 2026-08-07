import { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Dernek Tüzüğü",
  description: "18-28 Gençlik Derneği resmi tüzüğü, çalışma ilkeleri, üyelik şartları ve kurumsal organları.",
};

export default function TuzukPage() {
  return (
    <div className="flex flex-col w-full min-h-screen py-10">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Button */}
        <div>
          <Link href="/hakkimizda">
            <Button variant="ghost" size="sm" className="gap-2 font-semibold text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Hakkımızda Sayfasına Dön
            </Button>
          </Link>
        </div>

        {/* Banner Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 font-semibold text-xs tracking-wider uppercase">
            Resmi Kurumsal Belge
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary">
            ONSEKİZ YİRMİSEKİZ GENÇLİK DERNEĞİ TÜZÜĞÜ
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Derneğimizin kuruluş amacı, faaliyet alanları, üyelik hakları ve yönetim organlarını içeren resmi tüzük metnidir.
          </p>
          
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a href="/documents/18-28_Genclik_Dernegi_Tuzugu.txt" download="18-28_Genclik_Dernegi_Tuzugu.txt">
              <Button size="lg" className="font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Download className="h-4 w-4" />
                Tüzük Metnini İndir (.TXT)
              </Button>
            </a>
          </div>
        </div>

        {/* Tüzük İçeriği */}
        <Card className="border-2 border-primary/20 shadow-md rounded-2xl overflow-hidden bg-background">
          <CardHeader className="bg-muted/30 border-b border-border/40 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-primary">Tüzük Metni</CardTitle>
                <p className="text-xs text-muted-foreground">T.C. İçişleri Bakanlığı Sivil Toplumla İlişkiler Genel Müdürlüğü Standartlarına Uygundur</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-10 space-y-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
            
            {/* Madde 1 */}
            <div className="space-y-2 border-b border-border/40 pb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Derneğin Adı ve Merkezi (Madde 1)
              </h3>
              <p><strong>Madde 1-</strong> Derneğin Adı: &quot;OnSekiz YirmiSekiz Gençlik Derneği&quot;dir.</p>
              <p>Derneğin merkezi <strong>İSTANBUL</strong>&apos;dur. Dernek, yurt içinde ve yurt dışında şube açabilir.</p>
            </div>

            {/* Madde 2 */}
            <div className="space-y-3 border-b border-border/40 pb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Derneğin Amacı ve Faaliyet Alanı (Madde 2)
              </h3>
              <p>
                <strong>Madde 2- Derneğin Amacı:</strong> Türkiye Cumhuriyeti’nin çağdaş uygarlık hedef ve ilkelerine sadık bir toplumsal yapıyı desteklemek üzere demokrasi, insan hakları, sürdürülebilirlik, eşitlik ve kapsayıcılık ilkelerine bağlı olarak, gençlerin iş hayatına hazırlanması, kişisel gelişimlerinin desteklenmesi ve toplumsal hayata aktif katılımlarının artırılması için yurt içinde ve yurt dışında uluslararası düzeyde faaliyet göstermek amacıyla kurulmuştur.
              </p>
              <p><strong>Faaliyet Alanı:</strong> Dernek sosyal alanda faaliyet gösterir. 18–28 yaş aralığındaki gençlerin bireysel, sosyal, kültürel ve mesleki gelişimlerini desteklemek; iş hayatına hazırlamak, iş hayatı ile gençler arasında güçlü bağlar kurmak, aktif vatandaşlık bilincini güçlendirmek amaçlanır.</p>
              
              <ul className="list-disc pl-6 space-y-1.5 text-sm pt-2">
                <li>Gençlerin eğitim, istihdam, liderlik ve girişimcilik kapasitelerini geliştirmek,</li>
                <li>Mesleki becerilerini, kişisel farkındalıklarını, kariyer planlama ve iş bulma yetkinliklerini artırmak,</li>
                <li>Mentorluk, koçluk ve deneyim temelli öğrenme programları geliştirmek ve uygulamak,</li>
                <li>Dijital dönüşüme uyum kapsamında teknolojik ve dijital becerilerin kazanılmasını desteklemek,</li>
                <li>18-28 yaş aralığındaki tüm gençlerin dernek faaliyetlerinden <strong>ücretsiz</strong> yararlanmasını sağlamak.</li>
              </ul>
            </div>

            {/* Madde 3 */}
            <div className="space-y-3 border-b border-border/40 pb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Üye Olma Hakkı ve Üyelik İşlemleri (Madde 3)
              </h3>
              <p>
                Fiil ehliyetine sahip bulunan ve derneğin amaç ve ilkelerini benimseyerek bu doğrultuda çalışmayı kabul eden ve Mevzuatın öngördüğü koşulları taşıyan her gerçek ve tüzel kişi bu derneğe üye olma hakkına sahiptir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40">
                  <h4 className="font-bold text-primary text-sm mb-1">a) Asıl Gerçek Kişi Üyelik</h4>
                  <p className="text-xs text-muted-foreground">Dernek üyeliğinin gerektirdiği tüm sorumlulukları üstlenmiş, seçme ve seçilme hakkına sahip üyelerdir.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40">
                  <h4 className="font-bold text-primary text-sm mb-1">b) Asıl Tüzel Kişi Üyelik</h4>
                  <p className="text-xs text-muted-foreground">Şirketler ve kurumlar düzeyinde dernek çalışmalarına destek olan tüzel kişi üyelerdir.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40">
                  <h4 className="font-bold text-primary text-sm mb-1">c) Onursal Üyelik</h4>
                  <p className="text-xs text-muted-foreground">Dernek amaçlarına seçkin hizmetlerde bulunmuş kişilere Yönetim Kurulu teklifi ve Genel Kurul onayı ile verilir.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40">
                  <h4 className="font-bold text-primary text-sm mb-1">d) Akademik / Gönüllü Üyeliği</h4>
                  <p className="text-xs text-muted-foreground">Uzman akademisyenler ve dernek çalışmalarına katkı sunan gönüllülere verilen üyelik sıfatıdır.</p>
                </div>
              </div>
            </div>

            {/* Madde 6-10 */}
            <div className="space-y-3 border-b border-border/40 pb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Dernek Organları ve Yönetim (Madde 6-11)
              </h3>
              <p>Derneğin zorunlu organları: <strong>Genel Kurul</strong>, <strong>Yönetim Kurulu</strong> ve <strong>Denetim Kurulu</strong>&apos;dur.</p>
              <p>Yönetim Kurulu 7 asıl ve 7 yedek üye olarak Genel Kurul tarafından seçilir. Denetim Kurulu ise 3 asıl ve 3 yedek üyeden oluşur.</p>
            </div>

            {/* Geçici Yönetim Kurulu */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Kurucular & Yönetim Kurulu
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-medium">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Seda Erzen (Yön. Kur. Bşk.)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Ebru Timur (Başk. Yrd.)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Banu Göksever (Sekreter)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Simla Seden Özveren (Sayman)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Aysun Zaman (Üye)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Ali Ertan Çakır (Üye)</div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">Rüya Özdemir (Üye)</div>
              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}
