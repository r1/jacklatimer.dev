import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Projects from "@/components/Projects/ProjectList";
import LayoutGA from "@/components/LayoutGA";
import Footer from "@/components/Footer";

export default function project() {
  return (
    <LayoutGA>
      <Head>
        <title>jacklatimer.dev</title>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="keywords"
          content="Jack Latimer, Jack Latimer Projects, Portfolio project"
        ></meta>
      </Head>
      <NextSeo
        title="Jack Latimer - Projects"
        description="My Personal Project Portfolio"
      />
      <Header />
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <section id="projects">
          <h3 className="mb-4 text-3xl tracking-tight md:text-5xl text-gray-200 p-4 md:p-4 lg:p-0">
            Projects
          </h3>
          <h2 className="text-gray-500 mb-12 text-lg p-4 md:p-4 lg:p-0">
            My main projects that I have been working on.
          </h2>
          <div className="my-5 space-y-14 p-4 md:p-4 lg:p-0">
            {Projects.map((project, index) => (
              <article
                className="flex flex-wrap md:justify-between md:items-center"
                key={index}
              >
                <img
                  src={`${project.image}.webp`}
                  alt={project.title}
                  width="340"
                  height="190"
                  className={
                    index % 2 === 0
                      ? "rounded-lg shadow-lg"
                      : "rounded-lg shadow-lg md:order-1"
                  }
                />
                <div className="flex flex-col w-full mx-1 my-3 space-y-3  md:w-5/12 ">
                  <h2>
                    <h3 className="text-lg text-white">
                      {project.title}
                    </h3>
                  </h2>
                  <p className="text-gray-500 Inter-Regular">
                    {project.description}
                  </p>
                  <div className="flex pb-2 space-x-3">
                    {project.tools.map((disc, index) => (
                      <span
                        className="flex px-2 py-1 text-sm border border-gray-700 rounded-lg text-gray-500 Inter-Regular"
                        key={index}
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                  <div className="relative flex w-auto space-x-4">
                    <div className="flex">
                      <a
                        className="text-gray-700 transition hover:text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                      >
                        <span className="sr-only">Github</span>
                        <svg className="w-8 h-7" viewBox="0 0 24 24">
                          <g
                            fill="none"
                            stroke="#4d4d4d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </g>
                        </svg>
                      </a>
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
      <Footer />
    </LayoutGA>
  );
}
