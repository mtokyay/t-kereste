import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function UrunlerimizEmprenyeliLambriPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Emprenyeli Lambri" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Emprenyeli Lambri"
        subtitle="Emprenye işlemi ekolojik ve ekonomik açıdan en uygun çözümdür. Ağaçlar dünya üzerinde yaşayan en uzun ömürlü canlılarıdır. Ağaç kaynaklarının tüketimini azaltmak ve kullanılan ağacın ömrünü uzatmak için emprenye işlemi uygulanmalıdır. Farklı yöntemler kullanılarak ağacın içerisine kimyasal maddelerin emdirilmesi işlemine denir. Bu işlem sayesinde ağacın içinde bulunabilecek bütün bakteri, ağaç kurdu ve termitler gibi zararlı haşerelerin ahşaba zarar vermesini engelleyerek ahşabın ömrünün 10 kat artmasını sağlanır."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/emprenyeli-lambri-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default UrunlerimizEmprenyeliLambriPage;
