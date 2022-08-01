/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { projectData } from "./Work";
import Image from "next/image";

const LENGTH = 8;
const LIMIT = 4;

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  const [isLoading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(true);
  const [index, setIndex] = useState(LIMIT);
  const inititalLimit = LIMIT;

  const [limit, setLimit] = useState(inititalLimit);

  const showMoreDocuments = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    setLimit(limit + 4);
    setIndex(newIndex);
    setShowMore(newShowMore);
  };

  const RenderProjects = (
    ProjectData: {
      title: string;
      image: string;
      description: string;
      github: string;
      link: string;
    }[]
  ) => {
    return ProjectData.slice(0, limit).map((ProjectData) => {
      return (
        <>
          <div className="p-4 md:p-4 lg:p-0">
            <div className="inline-block max-w-lg overflow-hidden">
              <Image
                src={`${ProjectData.image}.png`}
                alt={ProjectData.title}
                width={370}
                height={210}
                className={cn(
                  "rounded-lg shadow-sm duration-700 ease-in-out",
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
              />
              <div className="py-4 pr-4">
                <div className="Inter-Medium mb-2 text-xl text-black">
                  {ProjectData.title}
                </div>
                <p className="Inter-Medium text-base text-[#202020]">
                  {ProjectData.description}
                </p>
              </div>
              <div className="relative flex w-auto space-x-4">
                <div className="relative flex w-auto">
                  <a
                    className="transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={ProjectData.github}
                  >
                    <span className="sr-only">Github</span>
                    <svg className="h-7 w-8" viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.5"
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
                    href={ProjectData.link}
                    aria-label="External Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
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
        </>
      );
    });
  };

  const RenderFinal = (
    ProjectData: {
      title: string;
      image: string;
      description: string;
      github: string;
      link: string;
    }[]
  ) => {
    return (
      <div>
        <div className="mb-4 flex flex-col gap-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {RenderProjects(ProjectData)}
        </div>
        <div className="p-3 sm:p-3 md:p-3 lg:p-0">
          {showMore && (
            <button
              className="Inter-Medium w-full rounded-full border border-[#999999] py-2 px-5 text-center text-[0.9rem] text-black focus:outline-none"
              onClick={showMoreDocuments}
            >
              Show All{" "}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="Inter-Medium mb-1 px-4 text-2xl tracking-tight text-black md:px-4 md:text-3xl lg:mb-6 lg:px-0">
        Side Projects
      </h2>
      {RenderFinal(projectData)}
    </>
  );
}
