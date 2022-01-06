const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-900 hover:text-gray-500 transition"
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
      <div className="flex space-x-4 Inter-Medium">
        <ExternalLink href="https://github.com/r1">GitHub</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/jacklatimer">
          Linkedin
        </ExternalLink>
        <ExternalLink href="mailto:jacklatimer03@gmail.com">Email</ExternalLink>
      </div>
    </footer>
  );
}
