const ExternalLink = ({ href, children }) => (
  <a
    className="text-black hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-700 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-8">
      <div className="flex text-white space-x-4">
        <ExternalLink href="https://github.com/r1">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/jacklatimer">
        Linkedin
        </ExternalLink>
        <ExternalLink href="mailto:jacklatimer03@gmail.com">
          Email
        </ExternalLink>
      </div>
    </footer>
  );
}
