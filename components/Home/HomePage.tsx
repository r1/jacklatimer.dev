import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Work/Projects";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16">
        <div className="p-4 md:p-4 lg:p-0">
          <h2 className="text-black text-3xl tracking-tight md:text-4xl Inter-Bold">
            Hey! I&apos;m Jack - Frontend Developer
          </h2>
        </div>
        <h2 className="text-gray-600 mb-12 text-lg pt-0 lg:pt-4 md:pt-0 pl-4 lg:pl-0 md:pl-4">
          Currently working on{" "}
          <a
            href="https://bedrck.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black ud"
          >
            Bedrock
          </a>{" "}
          as the sole maintainer. My future career goals are collaborating and
          helping build beautiful UI for the web.
        </h2>
        <Projects />
        <Skills />
      </div>
    </>
  );
}
