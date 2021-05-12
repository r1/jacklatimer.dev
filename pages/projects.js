import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import projects from "@/components/Project/ProjectList";
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

export default function project() {
  return (
    <LayoutGA>
      <Container>
        <Head>
          <title>jacklatimer.dev</title>
          <link rel="icon" href="./favicon.png" />
          <meta
            name="keywords"
            content="Jack Latimer, Jack Latimer Projects, Portfolio project, r1"
          ></meta>
        </Head>
        <NextSeo
          title="Jack Latimer - Projects"
          description="My Personal Project Portfolio"
        />
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <section id="projects">
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              Projects
            </h3>
            <h2 className="mb-10 text-gray-600 dark:text-gray-400">
              My best projects that I have been working on for the past year.
              Click on the project titles to learn more about them.
            </h2>
            <div className="my-5 space-y-14">
              {projects.map((project, index) => (
                <article
                  className="flex flex-wrap md:justify-between md:items-center"
                  key={index}
                >
                  <img
                    src={`${project.image}.webp`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    width="068px"
                    height="575px"
                    loading="lazy"
                    alt={project.title}
                    className={
                      index % 2 === 0
                        ? "w-full md:w-6/12 rounded-lg shadow-lg "
                        : "w-full md:w-6/12 rounded-lg shadow-lg md:order-1"
                    }
                  />
                  <div className="flex flex-col w-full mx-1 my-3 space-y-3 overflow-auto md:w-5/12 ">
                    <a href={project.url}>
                      <h3 className="text-lg font-bold text-black uppercase dark:text-white">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-black dark:text-gray-500">
                      {project.description}
                    </p>
                    <div className="flex pb-2 space-x-3 overflow-auto">
                      {project.tools.map((disc, index) => (
                        <span
                          className="flex px-2 py-1 text-sm text-black border border-gray-500 rounded-lg dark:text-gray-500 "
                          key={index}
                        >
                          {disc}
                        </span>
                      ))}
                    </div>
                    <div className="relative flex w-auto space-x-4">
                      <div className="flex">
                        <ExternalLink
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Github</span>
                          <svg className="w-8 h-7" viewBox="0 0 24 24">
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
                      </div>
                      <div className="relative flex w-auto">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <img
                            src="./images/external-link.svg"
                            alt="link to live website"
                            width="27px"
                            height="27px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </LayoutGA>
  );
}
