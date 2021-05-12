import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body className="text-white bg-white dark:bg-black dark:text-black">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </body>
    </ThemeProvider>
  );
}
