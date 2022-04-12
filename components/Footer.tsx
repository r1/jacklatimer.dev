export default function Footer() {
  return (
    <footer className="mx-auto mb-6 flex max-w-2xl flex-col p-4 lg:mb-12 lg:p-0">
      <div className="Inter-Medium flex space-x-9 font-semibold">
        <a
          href="https://github.com/r1"
          className="text-[#4c4c4c] transition hover:text-black"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jacklatimer"
          className="text-[#4c4c4c] transition hover:text-black"
        >
          Linkedin
        </a>
        <a
          href="mailto:jacklatimer03@gmail.com"
          className="text-[#4c4c4c] transition hover:text-black"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
