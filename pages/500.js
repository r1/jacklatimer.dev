import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  const ExternalLink = ({ href, children }) => (
    <a
      className="text-gray-700 transition hover:text-gray-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <NextSeo title="Jack Latimer - 500" description="500" />
      <header>
        <nav className="z-0 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 sticky-nav md-auto bg-black">
          <a className="p-1 text-lg font-bold sm:p-4 text-gray-100">J</a>
          <div>
            <NextLink href="/">
              <a className="p-1  sm:p-4 text-gray-100">Home</a>
            </NextLink>
            <NextLink href="/projects">
              <a className="p-1 sm:p-4 text-gray-100">Projects</a>
            </NextLink>
            <NextLink href="/jacklatimer.pdf">
              <a className="p-1  sm:p-4 text-gray-100">CV</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <div className="flex flex-col justify-center mx-auto mt-12 text-center max-w-2x1">
        <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-5xl text-white">
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
