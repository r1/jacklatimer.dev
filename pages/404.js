import Link from "next/link";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";

export default function NotFound() {
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

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <NextSeo
        title="Jack Latimer - 404"
        description="404"
      />
      <header>
        <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-white sticky-nav md-auto dark:bg-black bg-opacity-60">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                )}
              </svg>
            )}
          </button>
          <div>
            <NextLink href="/">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                Home
              </a>
            </NextLink>
            <NextLink href="/projects">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                Projects
              </a>
            </NextLink>
            <NextLink href="/">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">CV</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <div className="flex flex-col justify-center mx-auto mb-16 text-center max-w-2x1">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404 – Unavailable
        </h1>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
      <footer className="flex flex-col items-center mb-8 footer-typing">
        <div className="flex mb-4 space-x-4">
          <ExternalLink href="https://github.com">
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
          <ExternalLink href="https://www.linkedin.com/">
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
      </footer>
    </div>
  );
}
