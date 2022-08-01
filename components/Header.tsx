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
            ? "Inter-Regular font-semibold text-black"
            : "Inter-Medium text-[#202020]",
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
      <nav className="sticky-nav Inter-Regular mx-auto my-0 flex w-full max-w-2xl justify-end py-8 text-gray-400">
        <div>
          <NavItem href="/" text="Home" />
          <NavItem href="/now" text="Now" />
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="Inter-Medium p-1 pr-4 text-gray-700 sm:p-4"
            href="https://read.cv/jacklatimer"
          >
            CV
          </a>
        </div>
      </nav>
    </>
  );
}
