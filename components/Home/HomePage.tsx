import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16">
        <div className="justify-center mx-auto">
          <h1 className="text-gray-200 mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Hey! I'm Jack <span className="emoji-wave">👋</span>
          </h1>
        </div>
        <div className="text-gray-300 flex justify-center mx-auto mb-4 space-x-4 font-semibold">
          <div className="mr-2">Frontend Developer</div>
          <a
            className="eth-52"
            href="https://etherscan.io/address/0x73D7ab52820288538895A74e834355b6f451DB5D"
            rel="noreferrer"
            target="_blank"
          >
            <div className="eth-58">
              <div className="eth-64">0x73D7</div>
            </div>
          </a>
        </div>
        <h2 className="text-gray-200 mx-auto mb-2 text-lg font-semibold text-center">
          Junior Frontend Developer who also likes design. Based in Liverpool,
          England
        </h2>
        <h2 className="text-gray-200 mx-auto mb-2 font-semibold text-center">
          · · ·
        </h2>
        <h2 className="text-gray-200 mx-auto mb-16 text-lg font-semibold text-center">
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
    </>
  );
}
