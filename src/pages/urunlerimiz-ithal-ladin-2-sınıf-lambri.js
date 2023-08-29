import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizIthalLadin2SNFLambriPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Ithal Ladin 2 S N F Lambri" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İthal Ladin 2. Sınıf Lambri"
        subtitle="Lambri yapıların iç veya dış cephesinde tavan, çatı, duvar gibi yüzey alanların kaplanmasını sağlayan, çeşitli ağaç türlerinden üretilmiş olan ve çeşitli şekillerde yan yana getirilerek bütünleştirilen ( yatay, dikey ) bir yüzey kaplama malzemesidir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/ithal-ladin-2-s%C4%B1n%C4%B1f-lambrijpg.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default UrunlerimizIthalLadin2SNFLambriPage;
