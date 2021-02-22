import Head from "next/head";
import Container from "@/components/Container";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Project/Projects";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

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
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Hey, I'm Jack <span className="emoji-wave">👋</span>
              </h1>
              <div className="flex mb-4 space-x-4">
                <ExternalLink href="https://github.com/r1">
                  <span className="sr-only">Github</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </g>
                  </svg>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/jack-latimer-10a01b1a6/">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </g>
                  </svg>
                </ExternalLink>
                <ExternalLink href="mailto:jacklatimer03@gmail.com">
                  <span className="sr-only">Email</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </g>
                  </svg>
                </ExternalLink>
              </div>
              <h2 className="animate-pulse mb-10 text-gray-600 dark:text-gray-400">
                I'm a Front-End React Developer based in Liverpool, England. I
                have been coding for nearly 2 years, specializing in React and
                Tailwind CSS for just over 1 year. Feel free to contact me
                through email at jacklatimer03@gmail.com or click the mail icon
                above.
              </h2>
              <Projects />
              <Skills />
            </div>
          </div>
        </Container>
      </body>
    </LayoutGA>
  );
}
