import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "./Footer";

export default function Container({ children, dir, pos, atHome, isMobile }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <header>
        <nav className="z-0 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-white sticky-nav md-auto dark:bg-black">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-black focus:outline-none"
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
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                ) : (
                  <svg
                    class="icon sun"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
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
            <NextLink href="/jacklatimer.pdf">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">CV</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
      </main>
    </div>
  );
}
