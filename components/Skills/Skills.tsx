/* eslint-disable @next/next/no-html-link-for-pages */

function Skills() {
  return (
    <section className="mb-10 mt-10">
      <h3 className="text-black text-3xl tracking-tight md:text-4xl lg:mb-11 mb-1 p-4 md:p-4 lg:p-0">
        Technologies
      </h3>
      <div className="w-full grid grid-cols-1 gap-26 pb-16 sm:grid-cols-3 sm:mb-11 mb-6 p-4 md:p-4 lg:p-0">
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-800 text-lg">Languages</h2>
          <h3 className="text-gray-700">HTML</h3>
          <h3 className="text-gray-700">CSS</h3>
          <h3 className="text-gray-700">JavaScript</h3>
          <h3 className="text-gray-700">TypeScript</h3>
        </div>
        <div className="flex flex-col space-y-4 pt-12 sm:pt-0">
          <h2 className="text-gray-800 text-lg">Frameworks & Libraries</h2>
          <h3 className="text-gray-700">React.js</h3>
          <h3 className="text-gray-700">Next.js</h3>
          <h3 className="text-gray-700">Tailwind CSS</h3>
        </div>
        <div className="flex flex-col space-y-4 pl-0 sm:pl-24 pt-12 sm:pt-0">
          <h2 className="text-gray-800 text-lg">Tools</h2>
          <h3 className="text-gray-700">Git</h3>
          <h3 className="text-gray-700">Storybook</h3>
          <h3 className="text-gray-700">npm</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
