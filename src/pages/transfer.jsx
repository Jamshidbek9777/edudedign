import React from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";

const Transfer = () => {
  const cards = [
    {
      title: "Özbekistan’dan Türkiye’ye Öğrenci Transferi",
      content: [
        "Türk üniversitelerindeki kaliteli eğitim, uluslararası fırsatlar ve kültürel zenginliklerden faydalanmak isteyen Özbek öğrencileri, hayallerine ulaştırıyoruz.",
        "• Başvuru ve Kayıt Süreçleri: Üniversite seçiminden belge hazırlığına kadar tüm süreçlerde rehberlik.",
        "• Danışmanlık Hizmetleri: Eğitim programları, burslar ve vize işlemleri hakkında tam destek.",
        "• Uyum Programları: Öğrencilerin Türkiye’de akademik ve sosyal yaşama hızlı adapte olmasını sağlayan oryantasyon hizmetleri.",
      ],
    },
    {
      title: "Türkiye’den Özbekistan’a Eğitim Uzmanı Transferi",
      content: [
        "Özbekistan’daki eğitim kurumlarının ihtiyaçlarına yönelik olarak Türkiye’den alanında uzman eğitimciler ve akademisyenleri transfer ediyoruz.",
        "• Nitelikli Uzman Seçimi: Eğitim sektöründeki deneyimiyle fark yaratan uzmanların seçimi ve yerleştirilmesi.",
        "• Eğitim Projeleri Yönetimi: Öğretmen eğitimi, müfredat geliştirme ve danışmanlık hizmetleri.",
        "• Kültürel Uyum Desteği: Türk eğitim uzmanlarının Özbek kültürüne adaptasyonu için özel programlar.",
      ],
    },
    {
      title: "Kültürel Bağların Gücü, Akademik İş Birliği",
      content: [
        "EduAgency olarak, Türk ve Özbek halkları arasındaki tarihi ve kültürel bağları güçlendirme misyonuyla hareket ediyoruz.",
        "Eğitim, sadece bilgi transferi değil, aynı zamanda kültürler arası bir köprüdür.",
        "Bu anlayışla, öğrenciler ve eğitim uzmanları için en güvenilir çözüm ortağı olmaktan gurur duyuyoruz.",
      ],
    },
  ];

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div data-aos="fade-up" className="pt-40  flex flex-col items-center">
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                İki Ülke Arasında Eğitim Köprüsü
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                EduAgency olarak, Özbekistan ve Türkiye arasında güçlü bir
                eğitim köprüsü kurarak iki ülkenin kültürel bağlarını ve
                akademik potansiyelini bir araya getiriyoruz. Uzman ekibimiz ve
                yıllara dayanan deneyimimizle öğrenci transferi ve eğitim uzmanı
                değişiminde profesyonel hizmetler sunuyoruz.
              </p>
            </div>
            <div>
              <img
                src="/img/transferpic.png"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 w-full ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-[#e63f38] mb-4">
                  {card.title}
                </h3>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                  {card.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default Transfer;
