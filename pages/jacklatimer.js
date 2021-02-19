import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";

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

export default function project() {
  return (
    <Container>
      <Head>
        <title>jacklatimer.dev</title>
        <link rel="icon" href="./favicon.png" />
        <meta name="keywords" content="Jack Latimer, r1"></meta>
      </Head>
      <NextSeo
        title="Jack Latimer - jacklatimer.dev"
        description="My personal website built with Next.js & Tailwind CSS"
      />
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          JACKLATIMER.DEV
        </h3>
        <h2 className="mb-10 text-gray-600 dark:text-gray-400">
          jacklatimer.dev is my very own personal website build with Next.js and Tailwind CSS hosted on ▲Vercel.
        </h2>
        <img src="./images/jacklatimer.webp"></img>
        <h2 className="mb-10 text-gray-600 dark:text-gray-400">
          Coming Soon.
        </h2>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          
        </h2>
      </div>
    </Container>
  );
}
