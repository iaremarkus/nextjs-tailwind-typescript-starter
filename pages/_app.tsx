import NProgress from "nprogress";
import Router from "next/router";
import "../src/styles/global.css";
import "nprogress/nprogress.css";


import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
