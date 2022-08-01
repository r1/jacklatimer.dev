/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Projects from "@/components/Work/Projects";
import Skills from "@/components/Skills/Skills";

const images = [
  "/images/Liverpool.jpg",
  "/images/Liverpool1.jpg",
  "/images/Liverpool2.jpg",
  "/images/Liverpool3.jpg",
  "/images/Liverpool4.jpg",
  "/images/Liverpool5.jpg",
  "/images/Liverpool6.jpg",
];

export default function HomePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);

    return () => clearInterval(timerId);
  }, []);

  const image = images[count % images.length];
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start">
        <div className="mt-12 p-4 md:p-4 lg:p-0">
          <h1 className="Inter-Medium text-2xl tracking-tight text-black md:text-3xl">
            Hey, I'm Jack
          </h1>
        </div>
        <h2 className="text-md Inter-Medium relative mb-6 inline pr-10 pt-0 pl-4 text-[#202020] sm:text-lg md:pr-0 md:pt-0 md:pl-4 lg:pt-5 lg:pl-0">
          I'm a frontend developer living in{" "}
          <div className="relative inline">
            <div className="show Inter-SemiBold inline text-black">
              Liverpool, UK
            </div>
            <div className="hide z-10 ml-[25rem] hidden w-56 ">
              <img src={image} alt="Liverpool city" className="rounded-lg" />
            </div>
          </div>
          . Currently interested in anything code or design related.
        </h2>
        <h2 className="text-md Inter-Medium relative mb-12 inline pr-10 pl-4 text-[#202020] sm:text-lg md:pr-0 md:pt-0 md:pl-4 lg:pl-0">
          I'm currently working as a junior developer at{" "}
          <a
            href="https://heyhihello.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="Inter-SemiBold anim"
          >
            HeyHiHello
          </a>
          .
        </h2>
        <Projects />
        <Skills />
      </div>
    </>
  );
}
