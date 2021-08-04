import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
