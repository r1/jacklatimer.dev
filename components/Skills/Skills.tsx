/* eslint-disable @next/next/no-html-link-for-pages */

function Skills() {
  return (
    <section className="mb-1 mt-14 lg:mb-6">
      <h3 className="mb-1 p-4 text-3xl tracking-tight text-black md:p-4 md:text-4xl lg:mb-8 lg:p-0">
        Technologies
      </h3>
      <div className="gap-26  grid w-full grid-cols-1 p-4 sm:mb-11 sm:grid-cols-3 md:p-4 lg:p-0">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg text-gray-800">Languages</h2>
          <h3 className="text-gray-700">HTML</h3>
          <h3 className="text-gray-700">CSS</h3>
          <h3 className="text-gray-700">JavaScript</h3>
          <h3 className="text-gray-700">TypeScript</h3>
        </div>
        <div className="flex flex-col space-y-4 pt-12 sm:pt-0">
          <h2 className="text-lg text-gray-800">Frameworks & Libraries</h2>
          <h3 className="text-gray-700">React.js</h3>
          <h3 className="text-gray-700">Next.js</h3>
          <h3 className="text-gray-700">Tailwind CSS</h3>
        </div>
        <div className="flex flex-col space-y-4 pl-0 pt-12 sm:pl-24 sm:pt-0">
          <h2 className="text-lg text-gray-800">Tools</h2>
          <h3 className="text-gray-700">Git</h3>
          <h3 className="text-gray-700">Storybook</h3>
          <h3 className="text-gray-700">npm</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
