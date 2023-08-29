import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Chat />
        <>
          <Navbar
            color="default"
            logo="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-.svg"
            logoInverted="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-beyaz.svg"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-.svg"
            logoInverted="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-beyaz.svg"
            sticky={true}
          />
        </>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
