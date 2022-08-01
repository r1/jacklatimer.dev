import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Jack Latimer" description="404" />
      <Header />
      <div className="max-w-2x1 mx-auto mt-32 flex flex-col justify-center text-center">
        <h1 className="mb-4 text-5xl Inter-Regular tracking-tight text-black">
          404 – Unavailable
        </h1>
        <Link href="/">
          <a className="mx-auto w-64 Inter-Medium p-1 text-center text-black underline sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
      <div className="pt-[35rem]">
          <Footer />
      </div>
    </div>
  );
}
