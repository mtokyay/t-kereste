import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizIthalLarex2SinifLambriPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Ithal Larex 2 Sinif Lambri" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İthal Larex 2. Sınıf Lambri"
        subtitle="İğne yapraklı ağaçların içinde en sert yapıya sahip olanıdır. Yerli katran ağacı yerine kullanılan bu malzemenin renk verme, boyama ve cilalanma özellikleri çok iyidir. Her türlü masif doğrama ve mobilya imalatında kullanılır. Özellikle dış cephelerde suya dayanıklılığı nedeniyle tercih sebebidir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-ithal-larex-2-sinif-lambri-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/iletisim"
      />
    </>
  );
}

export default UrunlerimizIthalLarex2SinifLambriPage;
