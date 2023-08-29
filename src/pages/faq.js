import React from "react";
import Meta from "components/Meta";
import FaqSection from "components/FaqSection";
import CtaSection4 from "components/CtaSection4";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Sıkça Sorulan Sorular"
        subtitle=""
      />
      <CtaSection4
        bgColor="primary"
        size="medium"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/insaatl%C4%B1k-kereste-web+serit.jpg"
        bgImageOpacity={1}
        title="Tokyay Kereste ayrıcalıklarından yararlanmak için bize ulaşın."
        subtitle=""
        buttonText="iletişe geç "
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default FaqPage;
