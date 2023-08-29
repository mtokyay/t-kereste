import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizIthalLarexDSemePage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Ithal Larex D Seme" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İthal Larex Döşeme"
        subtitle="Dış cephe kaplamaları, kapı, pencere doğraması, döşeme tahtası olarak, lambri, mobilya ve yonga levha endüstrisinde, kimyasal malzeme fıçıları yapımı, tornacılık, tel direği, çit direği, toprakla temas eden yerlerde, su içi inşaatlar da, gemi yapımında kullanılır."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-ithal-larex-d%C3%B6%C5%9Feme-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default UrunlerimizIthalLarexDSemePage;
