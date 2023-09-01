import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import ContentCardsSection from "components/ContentCardsSection";
import ContentCardsSection2 from "components/ContentCardsSection2";
import ClientsSection from "components/ClientsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-giris-fotograf-web.jpg"
        bgImageOpacity={100}
        title="Tüm kereste ihtiyaçlarınız için doğru adres."
        subtitle="Lambiriden Keresteye, Larexden Döşemeye kadar ahşaba dair aradığınız her şey tek adreste"
        buttonText="iletişime geç"
        buttonColor="default"
        buttonPath="/iletisim"
      />
      <ContentCardsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ürünlerimiz"
        subtitle=""
      />
      <ContentCardsSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <ClientsSection
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
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-insaatl%C4%B1k-kereste-web+serit.jpg"
        bgImageOpacity={1}
        title="Tokyay Kereste ayrıcalıklarından yararlanmak için bize ulaşın."
        subtitle=""
        buttonText="iletişe geç "
        buttonColor="default"
        buttonPath="/iletisim"
      />
    </>
  );
}

export default IndexPage;
