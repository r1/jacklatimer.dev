import React from "react";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-200 hover:text-white transition"
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
      <div className="flex space-x-4 Inter-Regular">
        <ExternalLink href="https://github.com/r1">GitHub</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/jacklatimer">
          Linkedin
        </ExternalLink>
        <ExternalLink href="mailto:jacklatimer03@gmail.com">Email</ExternalLink>
      </div>
    </footer>
  );
}
