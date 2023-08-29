import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizIthalLarexEkstraLambriPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Ithal Larex Ekstra Lambri" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İthal Larex Ekstra Lambri"
        subtitle="Rusya ve İskandinav ülkelerinde yat, tekne, deck ve ıslak zeminlerde kullanılır. Suya karşı yüksek mukavemeti vardır. İyi kurutulduğunda su içinde veya nemli ortamlarda 100 yıldan fazla dayanabilir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-ithal-larex-ekstra-lambri-kereste-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default UrunlerimizIthalLarexEkstraLambriPage;
