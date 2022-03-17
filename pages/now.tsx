/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";
import Now from "@/components/Now/Now"

export default function Work() {
  return (
    <LayoutGA>
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="keywords"
          content="Jack Latimer · Frontend Developer from Liverpool, UK"
        ></meta>
      </Head>
      <NextSeo title="Now" description="What I'm working on now." />
      <Header />
      <Now />
    </LayoutGA>
  );
}
