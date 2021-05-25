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
          title="Jack Latimer - jacklatimer.dev"
          description="My personal website built with Next.js & Tailwind CSS"
        />
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
            JACKLATIMER.DEV
          </h3>
          <h2 className="mb-10 text-gray-400">
            jacklatimer.dev is my very own personal website build with Next.js
            and Tailwind CSS hosted on ▲Vercel.
          </h2>
          <img src="./images/jacklatimer.dev.webp"></img>
          <h2 className="mb-10 text-gray-400"></h2>
          <h2 className="mt-5 mb-10 space-x-4 text-gray-400"></h2>
        </div>
      </Container>
      <Footer />
    </LayoutGA>
  );
}
