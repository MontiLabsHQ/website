# Progressus Gizlilik Politikası

Son güncelleme: 17 Ekim 2026

Bu politika, Progressus uygulamasının verilerinle ne yaptığını anlatır. Şu adreste yayımlanır:
https://montilabs.co/progressus/privacy. Progressus'u Monti Labs ("biz") geliştirir. Bize
info@montilabs.co adresinden ulaşabilirsin.

## Kısaca

- Progressus'ta hesap, giriş ve bize ait bir sunucu yoktur. İlerlemen iPhone'unda ve iCloud
  kullanıyorsan kendi özel iCloud alanında durur; biz o alanı okuyamayız.
- Progressus'un Apple Sağlık'tan okuduğu sayılar iPhone'unda kalır. iCloud'a, bize ya da başka
  birine hiç gitmez.
- Veri satmayız, reklam göstermeyiz, seni başka uygulama ve sitelerde izlemeyiz.
- Uygulamayı iki hizmetle çalıştırırız: TelemetryDeck adsız kullanım olaylarını sayar, RevenueCat
  Premium aboneliğinin etkin olup olmadığını denetler. İkisi de kim olduğunu öğrenmez.

## iPhone'undaki ve iCloud'undaki veriler

Progressus ilk sorulara verdiğin cevapları (seçtiğin seçenekler olarak), görevlerini, günlük
ilerlemelerini, günlerini, XP'ni, seviyeni, rank'ını, sınıfını, kapılarını, sınavlarını,
unvanlarını ve ayarlarını saklar. Bu veriler iPhone'unda uygulamanın deposunda tutulur. Progressus
widget'ları aynı iPhone'da aynı depoyu okur.

Progressus için iCloud açıksa bu veriler iCloud hesabının özel veritabanına da (Apple CloudKit)
kopyalanır; böylece aynı iCloud hesabıyla giriş yaptığın diğer cihazlarında da aynı ilerlemeyi
görürsün. O veritabanını yalnız sen okuyabilirsin, bizim erişimimiz yoktur. Kopyalamayı iOS Ayarlar
uygulamasında en üstteki adına, ardından iCloud'a dokunup Progressus'u kapatarak durdurabilirsin.
Progressus bundan sonra yalnız iPhone'daki verilerle çalışmayı sürdürür.

## Apple Sağlık

Progressus, Apple Sağlık erişimini yalnız sen bağlamayı seçersen ister; Apple Sağlık doğrulaması
Premium'a dahildir. Hayır diyebilir ve uygulamanın tamamını Sağlık olmadan kullanabilirsin.

İzin verirsen Progressus şunları okur, hiçbirini yazmaz:

- adımlar,
- antrenmanlar ve türleri,
- uyku,
- farkındalık dakikaları,
- su.

Progressus bu okumalarla şunları yapar:

- Apple Sağlık'a bağladığın görevleri (ör. "8.000 adım yürü") tamamlar ve ilerlemelerini gösterir.
  Bu yolla biten görev 1,25 kat XP kazandırır.
- İlk sorular sırasında başlangıç hedefleri önermek için son 14 günün ortalamalarını okuyabilir.
  Her ortalama en yakın cevap seçeneğine yuvarlanır (ör. "günde 5.000 adım") ve yalnız o seçenek,
  sanki sen seçmişsin gibi saklanır.
- Uygulama açıkken adımlarını ve antrenmanlarını haftanın kapısına sayar.

Ne nerede kalır:

- Apple Sağlık'tan okunan sayılar (adım, dakika, saat, litre, antrenman) Progressus çalışırken
  yalnız iPhone'un belleğinde tutulur. Progressus onları saklamaz, iCloud'a kopyalamaz, bize ya da
  başka bir hizmete asla göndermez.
- Progressus'un ilerlemenle birlikte Sağlık'la ilgili sakladığı tek bilgiler, ilk sorulardaki
  cevap seçimlerin, bir görevin bittiği ve onu Apple Sağlık'ın tamamladığıdır. Diğer ilerlemen gibi
  bu bilgiler de iCloud açıksa özel iCloud veritabanına kopyalanır. İçlerinde hiçbir ölçüm yoktur.
- Progressus ayrıca yalnız bu iPhone'da, Apple Sağlık'ı son denediğinde okuyabildiğini hatırlar;
  böylece programının geçebileceği haftalık kapıyı seçer. Bu evet ya da hayır bilgisi cihazda
  kalır, iCloud'a kopyalanmaz.
- Apple Sağlık verileri reklam ya da pazarlama için asla kullanılmaz, satılmaz, TelemetryDeck ve
  RevenueCat dahil hiçbir üçüncü tarafla paylaşılmaz.

Erişimi istediğin zaman iOS Ayarlar uygulamasında Gizlilik ve Güvenlik, Sağlık, Progressus
bölümünden değiştirebilir ya da kaldırabilirsin. Bundan sonra Apple Sağlık'a bağlı görevleri elle
işaretlersin.

## Kullanım analitiği (TelemetryDeck)

Progressus'un hangi bölümlerinin insanlara yardım ettiğini öğrenmek için uygulama TelemetryDeck'e
(TelemetryDeck GmbH, Almanya) birkaç adsız olay gönderir: örneğin ilk soruların bittiği, bir
görevin tamamlandığı, bir günün başarıyla geçtiği, bir kapının geçildiği, ödeme ekranının
gösterildiği ya da kapatıldığı, bir abonelik ya da denemenin başladığı. Bir olay, ilk soruların
kaçıncı ekranında olduğunu, bir plan adını (yıllık ya da aylık), bir rank harfini ya da Zor Mod'un
açılıp açılmadığını taşıyabilir. Olaylar asla görev adı, cevap, senin yazdığın bir şey ya da Apple
Sağlık sayısı taşımaz. TelemetryDeck'in yazılımı her olaya kendiliğinden cihaz modelini ve ekran
boyutunu, işletim sistemi ve uygulama sürümünü, dili, bölgeyi ve saat dilimini, görünüm ve
erişilebilirlik ayarlarını (ör. koyu mod ya da büyük yazı), haftanın gününü ve saati, uygulamayı kaç
oturumda ve kaç gün kullandığını ve oturumların ne kadar sürdüğünü ekler; ayrıca bir oturum
başladığında ve uygulama ilk kez açıldığında kendi olaylarını gönderir.

Her olay, iPhone'unda oluşturulan tuzlanmış bir karma (hash) kimlikle gelir. Bu kimlikten
cihazına ya da kimliğine geri dönülemez ve sana bağlanmaz. TelemetryDeck'in kendi politikası:
https://telemetrydeck.com/privacy/.

## Satın almalar (Apple ve RevenueCat)

Premium ödemesini Apple alır; ödeme bilgilerini biz hiç görmeyiz. RevenueCat (RevenueCat, Inc.,
ABD), uygulamanın Premium'un etkin olup olmadığını anlaması ve onu diğer cihazlarında geri
yükleyebilmesi için Progressus'a ait App Store işlemlerinin satın alma kayıtlarını, kendi
oluşturduğu adsız bir kimlikle alır. Her çevrim içi hizmette olduğu gibi, uygulama RevenueCat'e
bağlandığında onun sunucuları cihazının IP adresini ve uygulama sürümünü de görür. RevenueCat'e
adını, e-posta adresini ya da herhangi bir Sağlık verisini vermeyiz. RevenueCat'in politikası:
https://www.revenuecat.com/privacy/.

## Bildirimler

Progressus hatırlatmalarını iPhone'unda planlar. Hiçbir hatırlatma bize ait bir sunucudan geçmez.
İlerlemen eşitlensin diye iCloud uygulamayı arka planda uyandırabilir; bu Apple üzerinden olur.

## Çocuklar

Progressus, çocuklar dahil hiç kimseden kişisel veri toplamaz.

## Verilerin saklanması ve silinmesi

İlerlemen sen silene kadar kalır. Uygulamayı silmek o iPhone'daki verileri kaldırır. iCloud'daki
kopyayı kaldırmak için iOS Ayarlar uygulamasında en üstteki adına, iCloud'a, Hesap Saklama Alanını
Yönet'e (ya da Saklama Alanını Yönet'e), ardından Progressus'a dokunup verilerini sil.
TelemetryDeck ve RevenueCat kayıtlarını kendi politikalarına göre saklar; bu kayıtlar sana bağlı
olmadığı için seninkileri ayırt edemeyiz.

## Hakların

Yaşadığın yere göre (ör. AB ve Birleşik Krallık GDPR'ı ya da Türkiye'de KVKK) hakkındaki kişisel
verileri sorma, düzeltme ya da silme hakkın vardır. Seni tanıtan hiçbir veriyi tutmuyoruz; yine de
her sorun için info@montilabs.co adresine yazabilirsin.

## Değişiklikler

Bu politika değişirse yeni sürüm yeni bir tarihle bu adreste yayımlanır.

## İletişim

Monti Labs, info@montilabs.co
