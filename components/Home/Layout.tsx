/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Projects from "@/components/Work/Projects";
import Skills from "@/components/Skills/Skills";
import bannerImg1 from "@/public/images/Liverpool.jpg";
import bannerImg2 from "@/public/images/Liverpool1.jpg";

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
        <div className="p-4 md:p-4 lg:p-0">
          <h1 className="Inter-Bold text-3xl tracking-tight text-black md:text-4xl">
            Jack Latimer - Frontend Developer
          </h1>
        </div>
        <h2 className="text-md relative mb-12 inline pr-10 pt-0 pl-4 text-gray-700 sm:text-lg md:pr-0 md:pt-0 md:pl-4 lg:pt-4 lg:pl-0">
          I&apos;m a Frontend Developer based in{" "}
          <div className="relative inline">
            <div className="show inline text-black">Liverpool, UK</div>
            <div className="hide z-10 hidden">
              <img
                src={image}
                alt="Liverpool"
                className="z-10 ml-[27rem] w-56 rounded-lg"
              />
            </div>
          </div>
          . I&apos;m currently interested in frontend development, animations &
          UI design.
        </h2>
        <Projects />
        <Skills />
      </div>
    </>
  );
}
