import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "./Footer";

export default function Container({ children, dir, pos, atHome, isMobile }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const headerClass = () => {
    let CLASS = "home-header";
    if (isMobile || pos >= 300) CLASS += " fill";
    if (!atHome && pos > 0) CLASS += " fill";
    switch (dir) {
      case "down":
        return (CLASS += " hide");
      case "up":
        return (CLASS += " show");
      case "top":
        return CLASS;
      default:
        break;
    }
    return CLASS;
  };

  return (
    <div className="bg-white dark:bg-black">
      <header className={headerClass()}>
        <nav className="z-0 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-white sticky-nav md-auto dark:bg-black">
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
            <NextLink href="/jacklatimer.pdf">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">CV</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <Footer />
      </main>
    </div>
  );
}
