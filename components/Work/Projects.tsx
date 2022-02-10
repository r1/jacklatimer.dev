/* eslint-disable @next/next/no-img-element */
import { Work } from "./Work";

export default function Project() {
  return (
    <>
      <h2 className="text-black text-3xl tracking-tight md:text-4xl sm:mb-11 mb-0 p-4 md:p-4 lg:p-0">
        Work
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 p-4 md:p-4 lg:p-0">
        {Work.map((i) => {
          return (
            <div
              className="max-w-xs rounded overflow-hidden inline-block"
              key=""
            >
              <img
                src={`${i.image}.png`}
                alt={i.title}
                className="rounded-lg shadow-lg"
              />
              <div className="pr-4 py-4">
                <div className="text-black font-bold text-xl mb-2">
                  {i.title}
                </div>
                <p className="text-gray-600 text-base">{i.description}</p>
              </div>
              <div className="relative flex w-auto space-x-4">
                <div className="relative flex w-auto">
                  <a
                    className="transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={i.github}
                  >
                    <span className="sr-only">Github</span>
                    <svg className="w-8 h-7" viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke="#161616"
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
                  <a
                    href={i.link}
                    aria-label="External Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#161616"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
          );
        })}
      </div>
    </>
  );
}
