import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <LayoutGA>
      <Head>
        <title>jacklatimer.dev</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="keywords" content="Jack Latimer, r1"></meta>
      </Head>
      <NextSeo
        title="Jack Latimer - Home"
        description="Frontend Developer based in Liverpool, England"
      />
      <Header />
      <HomePage />
      <Footer />
    </LayoutGA>
  );
}
