import "../styles/globals.scss";
import "swiper/scss";
import type { AppProps } from "next/app";
import Layout from "../components/templates/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
