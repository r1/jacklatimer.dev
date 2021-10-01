import Head from "next/head";
import Container from "@/components/Header";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <LayoutGA>
      <Container>
        <div>
          <Head>
            <title>jacklatimer.dev</title>
            <link rel="icon" href="./favicon.ico" />
            <meta name="keywords" content="Jack Latimer, r1"></meta>
          </Head>
          <NextSeo
            title="Jack Latimer - Home"
            description="Frontend Developer Based In Liverpool, England"
          />
          <HomePage />
        </div>
      </Container>
      <Footer />
    </LayoutGA>
  );
}
