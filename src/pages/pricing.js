import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";
import CtaSection5 from "components/CtaSection5";

function PricingPage(props) {
  return (
    <>
      <Meta title="Pricing" />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Bizimle İletişime Geçin"
        subtitle=""
        buttonText="mesaj at "
        buttonColor="primary"
        showNameField={true}
      />
      <CtaSection5
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

export default PricingPage;
