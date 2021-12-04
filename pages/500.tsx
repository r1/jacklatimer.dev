import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Jack Latimer - 500" description="500" />
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-12 text-center max-w-2x1">
        <h1 className="mb-4 text-6xl tracking-tight md:text-5xl text-white">
          500 – Server-side error occurred
        </h1>
      </div>
      <div className="pt-96">
        <div className="pt-72">
          <Footer />
        </div>
      </div>
    </div>
  );
}
