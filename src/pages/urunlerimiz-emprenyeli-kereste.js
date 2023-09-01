import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizEmprenyeliKerestePage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Emprenyeli Kereste" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Emprenyeli Kereste"
        subtitle="Emprenyeli işlemi uygulanan ahşap beton, demir ve plastikten daha uzun ömürlü olur. Bu işlem ahşabın rutubet almasını engeller mantar oluşumundan koruduğu gibi zararlı böceklerinde ahşaba yaklaşmasını engeller. Emprenye işleminden geçmiş ahşabın bakım problemi olmadığı gibi metal bağlantılar kullanılması korozyona (aşınma) sebep olmaz. Koku problemi yoktur tamamen güvenlidir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/emprenyeli-kereste-web.jpg"
        buttonText="İletişime geç"
        buttonColor="primary"
        buttonPath="/iletisim"
      />
    </>
  );
}

export default UrunlerimizEmprenyeliKerestePage;
