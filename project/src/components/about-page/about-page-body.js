import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./about-page-body.scss";

const AboutPageBody = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="mb-5">
            Oyun Portalı, her gün binlerce oyuncunun alışveriş yaptığı bir oyun
            pazarıdır. Bu platform üzerinden, e-pin kodları, oyun parası,
            itemler, ön ödemeli kartlar, CD key'ler gibi oyunlarla ilgili
            ihtiyaç duyulan ürünleri güvenli bir şekilde temin edebilirsiniz.
            2023 yılında hizmete başladığımızdan beri oyun sektöründeki
            gelişmeleri yakından takip ediyor ve sizlerden gelen geri
            bildirimleri değerlendirerek sürekli olarak kendimizi yeniliyoruz.
            Hizmet verdiğimiz oyun kategorisine her gün yeni oyunlar ekleyerek
            ürün yelpazemizi genişletmekteyiz. 2023 yılı itibariyle milyonlarca
            oyuncuya ve bayi üyemize hizmet sunmaktan mutluluk duyuyoruz. Oyun
            Portalı sadece oyuncuların oyunlarla ilgili ihtiyaçlarını
            karşılayabildiği bir web sitesi olmanın ötesinde, aynı zamanda
            oyuncuların kendi aralarında alışveriş yapabildiği ve oyunlardan
            gelir elde edebildiği bir platform haline gelmiştir. Onbinlerce item
            ve karakter satışına aracılık ettiğimiz item pazar alanımızı,
            üyelerimizden gelen tavsiyeler ve talepler doğrultusunda sürekli
            olarak geliştiriyoruz ve bu gelişime devam ediyoruz.
          </div>
          <Image src="images/aboutPage/about.webp"  className="mb-5"/>
          <div className="mb-5">
            Hizmet vermeye başladığımız ilk günlerden itibaren üyelerimizin
            ihtiyaç duyduğu konularda Canlı Destek ekibimiz ve mail iletişim
            kanallarımız ile her zaman yanlarında olduğumuzu hissettirmeye özen
            gösterdik. Sanal ortamla sınırlı kalmayıp düzenlediğimiz turnuva ve
            etkinliklerle üyelerimizle yüz yüze görüşme fırsatı yakalayarak,
            onların öneri, şikayet ve ihtiyaçlarını dinleyerek yeniliklerimize
            yön verdik. Oyun sektöründeki hızlı gelişimin farkındayız. Bu
            değişimleri takip ederek ve satış ağımıza yeni oyunlar ekleyerek,
            değerli üyelerimize kaliteli ve güvenli hizmet anlayışımızı ilk
            günkü gibi gelecek yıllardaki hizmet hayatımızda da devam
            ettireceğiz.
          </div>
          <div className="mb-5">
            Oyun dünyası bizim için fazlasıyla önemlidir. Biz, oyuncuların her
            alanda desteklenmesini ve gelişmesini sağlamak adına çaba
            gösteriyoruz. Bu yüzden, sadece bir alışveriş platformu olmanın
            ötesinde, etkinliklere sponsor olmak ve oyuncuların bulunduğu her
            platformda yanlarında olmak önemli bir misyonumuzdur. Kopazar
            olarak, oyun tutkunlarını desteklemeye ve onların oyun deneyimlerini
            en üst seviyeye çıkarmaya kararlıyız. Biz işimizi bir oyun gibi
            görüyoruz, mutluluğu hedefleyerek kuralları birlikte belirliyor,
            sizi de oyunlarımıza dahil ediyoruz. Çünkü biz, hayatın bir oyun
            olduğuna inanıyoruz.
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPageBody;
