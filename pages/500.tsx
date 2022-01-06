import Link from "next/link";
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Jack Latimer" description="500" />
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-12 text-center max-w-2x1">
        <h1 className="mb-4 text-6xl tracking-tight md:text-5xl text-black">
          500 – Server-side error occurred
        </h1>
        <Link href="/">
          <a className="w-64 p-1 mx-auto text-center sm:p-4 text-black underline">
            Return Home
          </a>
        </Link>
      </div>
      <div className="pt-96">
        <div className="pt-72">
          <Footer />
        </div>
      </div>
    </div>
  );
}
