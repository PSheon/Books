// ** React Imports
import { Fragment } from "react";

// ** Next Imports
import { AppProps } from "next/app";
import { Noto_Sans_TC } from "next/font/google";

// ** Global css styles
import "../styles/globals.css";

// ** Google Fonts
const NOTO_FONT = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <style jsx global>{`
        html {
          font-family: ${NOTO_FONT.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default RootApp;
