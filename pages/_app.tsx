import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { Helmet } from "react-helmet";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body>
        <DefaultSeo {...SEO} />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </body>
    </ThemeProvider>
  );
}
