/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-900"
            : "Inter-Medium text-gray-700",
          "p-1 pr-4 sm:p-4"
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container() {
  return (
    <>
      <nav className="sticky-nav md-auto Inter-Regular mx-auto my-0 flex w-full max-w-4xl items-center justify-between p-3 py-8 text-gray-400">
        <div className="p-1 md:p-4">
          <a aria-label="Square" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#161616"></rect>
            </svg>
          </a>
        </div>
        <div>
          <NavItem href="/" text="Home" />
          <NavItem href="/now" text="Now" />
          <a
            href="https://jacklatimer.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="Inter-Medium p-1 text-gray-700 sm:p-4"
          >
            Design
          </a>
        </div>
      </nav>
    </>
  );
}
