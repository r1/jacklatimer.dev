import React from "react";
import Projects from "@/components/Projects/FeaturedProjectList";

export default function Project() {
  return (
    <>
      <h2 className="text-gray-200 text-3xl tracking-tight md:text-4xl sm:mb-11 mb-0 p-4 md:p-4 lg:p-0">
        Featured Projects
      </h2>
      <div className="mb-14 space-y-14 p-4 md:p-4 lg:p-0">
        {Projects.map((project, index) => (
          <div
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
            <div className="flex flex-col w-full mx-1 my-3 space-y-3  md:w-5/12">
              <h3 className="text-gray-200 text-lg">
                {project.title}
              </h3>
              <p className="text-gray-500 Inter-Regular">
                {project.description}
              </p>
              <div className="flex pb-2 space-x-3">
                {project.tools.map((disc, index) => (
                  <span
                    className="text-gray-500 flex px-2 py-1 text-sm border border-gray-700 rounded-lg Inter-Regular"
                    key={index}
                  >
                    {disc}
                  </span>
                ))}
              </div>
              <div className="relative flex w-auto space-x-4">
                <div className="flex">
                  <a
                    className="transition"
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
                <div className="text-gray-500 relative flex w-auto">
                  <a
                    href={project.link}
                    aria-label="External Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#4d4d4d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="feather feather-link-2 h-7 w-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
