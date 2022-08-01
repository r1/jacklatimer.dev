import Link from "next/link";
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Jack Latimer" description="500" />
      <Header />
      <div className="max-w-2x1 mx-auto mt-12 flex flex-col justify-center text-center">
        <h1 className="Inter-Regular mb-4 text-6xl tracking-tight text-black md:text-5xl">
          500 – Server-side error occurred
        </h1>
        <Link href="/">
          <a className="Inter-Medium mx-auto w-64 p-1 text-center text-black underline sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
      <div className="pt-[40rem]">
        <Footer />
      </div>
    </div>
  );
}
