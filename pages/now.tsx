/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";

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
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16">
        <div className="p-4 md:p-4 lg:p-0">
          <h1 className="text-black text-3xl tracking-tight md:text-4xl Inter-Bold">
            Now
          </h1>
          <h2 className="text-gray-700 text-xl tracking-tight Inter-Bold mt-4">
            Things I&apos;m working on or interested in.
          </h2>
        </div>
        <ul className="pl-4">
          <li className="text-gray-700 mb-2 text-lg pt-0 lg:pt-8 md:pt-0 pl-4 lg:pl-0 md:pl-4">
            - Working on making{" "}
            <a
              href="https://bedrck.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black ud"
            >
              Bedrock
            </a>{" "}
            look good
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Cloning{" "}
            <a
              href="https://revolut.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black ud"
            >
              revolut.com
            </a>{" "}
            using Tailwind CSS v3
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Getting{" "}
            <a
              href="https://cssbuttons.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black ud"
            >
              cssbuttons.app
            </a>{" "}
            to 100 buttons
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Expanding my TypeScript knowledge
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Strengthening my fundamental CSS skills (layouts, responsiveness,
            etc)
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Animations
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Finishing books - currently reading{" "}
            <a
              href="https://www.amazon.co.uk/Infinite-Machine-Crypto-hackers-Building-Internet-ebook/dp/B07X8HS2WC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black ud"
            >
              The Infinite Machine
            </a>{" "}
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4">
            - Get started on an ecommerce website
          </li>
          <li className="text-gray-700 mb-2 text-lg pl-4 lg:pl-0 md:pl-4"></li>
        </ul>
        <h2 className="text-gray-700 text-md tracking-tight mt-8">
          Last updated 09/02/22
        </h2>
      </div>
    </LayoutGA>
  );
}
