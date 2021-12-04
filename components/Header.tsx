import React from "react";
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
            ? "font-semibold text-gray-200"
            : "font-normal text-gray-400 ",
          "p-1 sm:p-4 pr-4"
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
        <nav className="z-0 text-gray-400 flex items-center justify-between w-full max-w-4xl p-3 py-8 mx-auto my-0 sticky-nav md-auto Inter-Regular">
          <div className="p-1 sm:p-4">
            <a aria-label="Square" href="/">
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
            <NavItem href="/" text="Home" />
            <NavItem href="/projects" text="Projects" />
            <a
              href="https://jacklatimer.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-4"
            >
              Design
            </a>
          </div>
        </nav>
    </>
  );
}
