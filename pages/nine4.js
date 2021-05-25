import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";

export default function project() {
  return (
    <LayoutGA>
      <Container>
        <Head>
          <title>jacklatimer.dev</title>
          <link rel="icon" href="./favicon.png" />
          <meta name="keywords" content="Jack Latimer, r1"></meta>
        </Head>
        <NextSeo
          title="Jack Latimer - nine4.app"
          description="Free To Use Template Sites Built With Next.js"
        />
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            NINE4
          </h3>
          <h2 className="mb-10 text-gray-600 dark:text-gray-400"></h2>
          <img src="./images/nine4.webp"></img>
          <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400"></h2>
        </div>
      </Container>
      <Footer />
    </LayoutGA>
  );
}
