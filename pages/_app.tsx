import { AppProps } from "next/app";
import "styles/globals.css";
import { Noto_Sans } from "@next/font/google";

// import localFont from "@next/font/local";
// const sbB = localFont({
//   src: "../assets/font/AppleSDGothicNeoB.woff2",
//   variable: "--sd-b",
// });
// const sbEB = localFont({
//   src: "../assets/font/AppleSDGothicNeoEB.woff2",
//   variable: "--sd-eb",
// });
// const sbH = localFont({
//   src: "../assets/font/AppleSDGothicNeoH.woff2",
//   variable: "--sd-H",
// });

const noto = Noto_Sans({
  weight: ["100", "400", "500", "600", "700"],
  variable: "--noto-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${noto.className} font-noto`}>
      <Component {...pageProps} />
    </main>
  );
}
