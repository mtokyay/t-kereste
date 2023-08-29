import React from "react";
import Meta from "components/Meta";
import ContactSection2 from "components/ContactSection2";

function ContactPage(props) {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Bizimle İletişime Geçin"
        subtitle="100. Yıl Mh. Manyas Cd. No:99 GÖNEN Tel: 0 266 762 60 30 - 762 60 50 Faks: 0 266 762 63 79"
        buttonText="Mesaj at"
        buttonColor="primary"
        showNameField={true}
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.704157509447!2d27.6747515561482!3d40.10430850132182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6917d24fef54f%3A0xb02e6c3234b99fd8!2sTokyay%20Kereste%20Orman%20%C3%9Cr%C3%BCnleri%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1693318855167!5m2!1str!2str"
      />
    </>
  );
}

export default ContactPage;

