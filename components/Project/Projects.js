import React from "react";
import Image from "next/image";
import projects from "@/components/Project/ProjectList";

const ExternalLink = ({ href, children }) => (
  <a
    className="transition text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Project = () => {
  return (
    <>
      <section id="projects">
        <h3 className="text-2xl font-bold tracking-tight md:text-4xl mb-11 text-white">
          Projects
        </h3>
        <div className="mb-14 space-y-14">
          {projects.map((project, index) => (
            <article
              className="flex flex-wrap md:justify-between md:items-center"
              key={index}
            >
              <img
                src={`${project.image}.webp`}
                alt={project.title}
                className={
                  index % 2 === 0
                    ? "w-full h-full md:w-6/12 rounded-lg shadow-lg "
                    : "w-full h-full md:w-6/12 rounded-lg shadow-lg md:order-1"
                }
              />
              <div className="flex flex-col w-full mx-1 my-3 space-y-3 overflow-auto md:w-5/12 ">
                <a>
                  <h3 className="text-lg font-bold uppercase text-white">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex pb-2 space-x-3 overflow-auto">
                  {project.tools.map((disc, index) => (
                    <span
                      className="flex px-2 py-1 text-sm border border-gray-600 rounded-lg text-gray-500"
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
                          stroke="#4c4c4c"
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
                      <Image
                        src="/images/external-link.svg"
                        alt="Link to live website"
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
    </>
  );
};

export default Project;
