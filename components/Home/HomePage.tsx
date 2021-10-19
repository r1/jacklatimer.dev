import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16">
        <div className="p-4 md:p-4 lg:p-0">
          <h2 className="text-gray-200 md:mb-4 mb-0 text-3xl font-bold tracking-tight md:text-4xl">
            Hey! I'm Jack - Frontend Developer
          </h2>
        </div>
        <h2 className="text-gray-500 mb-12 text-lg font-semibold p-4 md:p-4 lg:p-0">
          Currently working on{" "}
          <a
            href="https://bedrck.co"
            target="_blank"
            rel="noopener noreferrer"
            className="link font-bold hover:underline"
          >
            Bedrock
          </a>{" "}
          as the sole maintainer. My future career goals are collaborating and
          helping build beautiful UI for the web.
        </h2>
        <Projects />
        <Skills />
      </div>
    </>
  );
}
