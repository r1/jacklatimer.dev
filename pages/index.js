import Head from "next/head";
import Container from "@/components/Container";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Project/Projects";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";

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

export default function Home() {
  return (
    <LayoutGA>
      <body className="text-white bg-white dark:bg-black dark:text-black">
        <Container>
          <div>
            <Head>
              <title>jacklatimer.dev</title>
              <link rel="icon" href="./favicon.png" />
              <meta name="keywords" content="Jack Latimer, r1"></meta>
            </Head>
            <NextSeo
              title="Jack Latimer - Home"
              description="Front-End React Developer Based In Liverpool, England"
            />
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
              <div className="mb-2 justify-center mx-auto">
                <img className="w-64" src="./images/memoji1.png"></img>
              </div>
              <div className="justify-center mx-auto">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                  Hey! I'm Jack <span className="emoji-wave">👋</span>
                </h1>
              </div>
              <div className="flex justify-center font-semibold mx-auto mb-4 space-x-4 text-gray-700 dark:text-gray-500">
                Software Engineer
              </div>
              <h2 className="mb-2 text-lg text-gray-700 font-semibold dark:text-gray-500 text-center mx-auto">
                I'm a Front-End React Developer based in Liverpool, England. I
                have been coding for nearly 2 years and have been using React
                for just over 1 year.
              </h2>
              <h2 className="mb-2 text-gray-700 font-semibold dark:text-gray-500 text-center mx-auto">
                · · ·
              </h2>
              <h2 className="mb-24 text-lg text-gray-700 font-semibold dark:text-gray-500 text-center mx-auto">
                Reach me via email at <a href="mailto:jacklatimer03@gmail.com" className="underline">jacklatimer03@gmail.com</a>
              </h2>
              <Projects />
              <Skills />
            </div>
          </div>
        </Container>
        <Footer />
      </body>
    </LayoutGA>
  );
}
