import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizInsaatlikKerestePage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Insaatlik Kereste" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İnşaatlık Kereste"
        subtitle="İnşaatlık kereste adı üzerinde inşaatlarda ve yapılarda kullanılır. 2,6 cm kalınlığında, muhtelif genişliklerdeki tahtalar; döşeme ve kapatma malzemesi olarak kullanılır. Kadron dediğimiz 5x10 ve 10x10 ölçüler, yatay taşıyıcı veya dikey yük tutucu olarak kullanılır. 5x15, 5x20, 10x15 ve 10x20 ölçüler ise taşıyıcı olarak kullanılır."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-kereste-insaatl%C4%B1k-kereste-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/contact"
      />
    </>
  );
}

export default UrunlerimizInsaatlikKerestePage;
