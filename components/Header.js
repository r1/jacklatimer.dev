import NextLink from "next/link";
import Image from "next/image";

export default function Container({ children }) {
  return (
    <>
      <header>
        <nav className="z-0 text-gray-400 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 sticky-nav md-auto">
          <div className="p-1 sm:p-4">
            <a href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="#d0d0d0"></rect>
              </svg>
            </a>
          </div>
          <div>
            <NextLink href="/">
              <a className="p-1 sm:p-4 pr-4">Home</a>
            </NextLink>
            <NextLink href="/projects">
              <a className="p-1 sm:p-4 pr-4">Projects</a>
            </NextLink>
            <NextLink href="https://jacklatimer.design/">
              <a className="p-1 sm:p-4">Design</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center px-8">{children}</main>
    </>
  );
}
