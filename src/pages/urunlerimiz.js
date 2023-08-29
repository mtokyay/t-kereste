import React from "react";
import Meta from "components/Meta";
import ContentCardsSection3 from "components/ContentCardsSection3";
import ContentCardsSection4 from "components/ContentCardsSection4";

function UrunlerimizPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz" />
      <ContentCardsSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ürünlerimiz"
        subtitle=""
      />
      <ContentCardsSection4
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
    </>
  );
}

export default UrunlerimizPage;
