import Head from "next/head";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home/Layout";

export default function Home() {
  return (
    <LayoutGA>
      <Head>
        <title>jacklatimer.dev</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="keywords" content="Jack Latimer"></meta>
      </Head>
      <NextSeo
        title="Jack Latimer"
        description="Jack Latimer · Frontend Developer from Liverpool, UK"
      />
      <Header />
      <HomePage />
      <Footer />
    </LayoutGA>
  );
}
