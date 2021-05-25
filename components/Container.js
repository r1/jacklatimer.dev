import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "./Footer";

export default function Container({ children, dir, pos, atHome, isMobile }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-black">
      <header>
        <nav className="z-0 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0  sticky-nav md-auto bg-black">
          <a className="p-1 text-lg font-bold sm:p-4 text-gray-100">
            J
          </a>
          <div>
            <NextLink href="/">
              <a className="p-1 sm:p-4 text-gray-100">
                Home
              </a>
            </NextLink>
            <NextLink href="/projects">
              <a className="p-1 sm:p-4 text-gray-100">
                Projects
              </a>
            </NextLink>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center px-8 bg-black">
        {children}
      </main>
    </div>
  );
}
