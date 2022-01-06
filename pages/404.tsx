import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Jack Latimer" description="404" />
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-32 text-center max-w-2x1">
        <h1 className="mb-4 text-5xl tracking-tight text-black">
          404 – Unavailable
        </h1>
        <Link href="/">
          <a className="w-64 p-1 mx-auto text-center sm:p-4 text-black underline">
            Return Home
          </a>
        </Link>
      </div>
      <div className="pt-96">
        <div className="pt-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
