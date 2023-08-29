import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import ClientsSection2 from "components/ClientsSection2";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection2 from "components/CtaSection2";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Hakkımızda"
        subtitle="Tokyay Kereste, 20.000 m² alanı ile başta emprenye, kereste, lambri ve döşeme ürünleri ile sektöründe öncü firmalardan biri olmuştur. 1997 yılından bu yana hizmet vermekte olan firmamız gelişen teknolojiye ayak uydurarak son teknoloji ekipmanlar ve alanında uzman personeli ile günümüzde de faaliyetlerine hız kesmeden devam etmektedir. Sektöründe en iyiler arasına adını yazdırmayı başarmış olan Tokyay Kereste başarısını işine verdiği önem, kaliteli ekipman, profesyonel personel ve kusursuz müşteri memnuniyetine borçludur."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-insaatl%C4%B1k-kereste-web.jpg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <ClientsSection2
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Çözüm Ortaklarımız"
        subtitle=""
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <CtaSection2
        bgColor="primary"
        size="medium"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/insaatl%C4%B1k-kereste-web+serit.jpg"
        bgImageOpacity={1}
        title="Tokyay Kereste ayrıcalıklarından yararlanmak için bize ulaşın."
        subtitle=""
        buttonText="iletişe geç "
        buttonColor="default"
        buttonPath="/contact"
      />
    </>
  );
}

export default AboutPage;
