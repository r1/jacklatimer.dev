export default function Now() {
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start">
        <div className="p-4 md:p-4 lg:p-0">
          <h1 className="Inter-Bold text-3xl tracking-tight text-black md:text-4xl">
            Now
          </h1>
          <h2 className="Inter-Bold mt-4 text-xl tracking-tight text-gray-700">
            Things I&apos;m working on or interested in doing.
          </h2>
        </div>
        <ul className="pl-4 pr-4">
          <li className="mb-2 pt-0 pl-4 text-lg text-gray-700 md:pt-0 md:pl-4 lg:pt-8 lg:pl-0">
            - Building the UI for{" "}
            <a
              href="https://bedrck.co"
              target="_blank"
              rel="noopener noreferrer"
              className="ud text-black"
            >
              Bedrock
            </a>{" "}
          </li>
          <li className="mb-2 pl-4 text-lg text-gray-700 md:pl-4 lg:pl-0">
            - Learning some Vue.js
          </li>
          <li className="mb-2 pl-4 text-lg text-gray-700 md:pl-4 lg:pl-0">
            - Getting{" "}
            <a
              href="https://cssbuttons.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ud text-black"
            >
              cssbuttons.app
            </a>{" "}
            to 100 buttons
          </li>
          <li className="mb-2 pl-4 text-lg text-gray-700 md:pl-4 lg:pl-0">
            - Learning TypeScript & AWS
          </li>
          <li className="mb-2 pl-4 text-lg text-gray-700 md:pl-4 lg:pl-0">
            - Strengthening my fundamental CSS skills (layouts, responsiveness,
            etc)
          </li>
          <li className="mb-2 pl-4 text-lg text-gray-700 md:pl-4 lg:pl-0">
            - Learning Framer Motion
          </li>
        </ul>
        <h2 className="text-md mt-8 italic tracking-tight text-gray-700">
          Last updated 12/04/22
        </h2>
      </div>
    </>
  );
}
