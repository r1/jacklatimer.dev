export default function Now() {
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start">
        <div className="mt-12 p-4 md:p-4 lg:p-0">
          <div className="pb-4 md:pb-4 lg:pb-0">
            <h2 className="Inter-Medium text-2xl tracking-tight text-black md:text-3xl">
              Now
            </h2>
          </div>
          <div className="space-y-6 pt-0 md:pr-0 md:pt-0 md:pl-4 lg:pt-5 lg:pl-0">
            <p className="text-md Inter-Medium text-[#202020] sm:text-lg">
              Getting settled in at my new developer job at{" "}
              <a
                href="https://heyhihello.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="Inter-SemiBold anim"
              >
                HeyHiHello
              </a>
              . Super excited to work with everyone and looking forward to
              seeing what we make.
            </p>
            <p className="text-md Inter-Medium text-[#202020] sm:text-lg">
              Aside from that, I&apos;m currently working on my newest side
              project, Ring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
