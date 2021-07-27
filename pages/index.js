import Head from "next/head";
import Container from "@/components/Container";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Project/Projects";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LayoutGA>
      <Container>
        <div>
          <Head>
            <title>jacklatimer.dev</title>
            <link rel="icon" href="./favicon.ico" />
            <meta name="keywords" content="Jack Latimer, r1"></meta>
          </Head>
          <NextSeo
            title="Jack Latimer - Home"
            description="Front-End Developer Based In Liverpool, England"
          />
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
            <div className="justify-center mx-auto mb-2">
              <img className="w-64" src="./images/memoji.png"></img>
            </div>
            <div className="justify-center mx-auto">
              <h1 className="text-white mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Hey! I'm Jack <span className="emoji-wave">👋</span>
              </h1>
            </div>
            <div className="text-gray-400 flex justify-center mx-auto mb-4 space-x-4 font-semibold">
              Frontend Developer
            </div>
            <h2 className="text-gray-400 mx-auto mb-2 text-lg font-semibold text-center">
              Self-taught frontend dev who also likes design. Based in Liverpool, England.
            </h2>
            <h2 className="text-gray-400 mx-auto mb-2 font-semibold text-center">
              · · ·
            </h2>
            <h2 className="text-gray-400 mx-auto mb-24 text-lg font-semibold text-center">
              Reach me via email at{" "}
              <a
                href="mailto:jacklatimer03@gmail.com"
                className="text-gray-400 underline"
              >
                jacklatimer03@gmail.com
              </a>
            </h2>
            <Projects />
            <Skills />
          </div>
        </div>
      </Container>
      <Footer />
    </LayoutGA>
  );
}
