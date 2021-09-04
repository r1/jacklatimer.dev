import NextLink from "next/link";

export default function Container({ children }) {
  return (
    <>
      <header>
        <nav className="z-0 text-white flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 sticky-nav md-auto">
          <a href="/" className="p-1 text-3xl font-bold sm:p-4">
            JL
          </a>
          <div>
            <NextLink href="/">
              <a className="p-1 sm:p-4 pr-6">Home</a>
            </NextLink>
            <NextLink href="/projects">
              <a className="p-1 sm:p-4">Projects</a>
            </NextLink>
            <NextLink href="https://jacklatimer.design/">
              <a className="p-1 sm:p-4">Design</a>
            </NextLink>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center px-8">
        {children}
      </main>
    </>
  );
}
