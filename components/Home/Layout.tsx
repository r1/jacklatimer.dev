import Projects from "@/components/Work/Projects";
import Skills from "@/components/Skills/Skills";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start">
        <div className="p-4 md:p-4 lg:p-0">
          <h1 className="Inter-Bold text-3xl tracking-tight text-black md:text-4xl">
            Jack Latimer - Frontend Developer
          </h1>
        </div>
        <h2 className="text-md mb-12 pr-10 pt-0 pl-4 text-gray-700 sm:text-lg md:pr-0 md:pt-0 md:pl-4 lg:pt-4 lg:pl-0">
          Junior Frontend Developer from Liverpool, UK. My future career goals are collaborating and helping build beautiful
          UI for the web.
        </h2>
        <Projects />
        <Skills />
      </div>
    </>
  );
}
