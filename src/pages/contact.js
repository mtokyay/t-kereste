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
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
      />
    </>
  );
}

export default ContactPage;
