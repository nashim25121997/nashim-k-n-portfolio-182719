type Social = {
  github?: string;
  linkedin?: string;
  twitter?: string; // X/Twitter
};

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.41.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor">
      <path d="M100.28 448H7.4V149.9h92.88zm-46.44-338C24.6 110 0 85.4 0 55.72A55.72 55.72 0 1 1 110 55.72C110 85.4 85.4 110 55.72 110zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.5-2.8 13.1-2.8 20.8V448h-92.3s1.2-241.7 0-266.5h92.3v37.8c-.2.3-.4.7-.6 1h.6v-1c12.2-18.9 33.9-45.8 82.6-45.8 60.3 0 105.5 39.5 105.5 124.3z"/>
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M22 4s-.8 2.1-2.2 3.1c0 8.5-6.5 14.6-14.6 14.6A14.5 14.5 0 0 1 2 20c2 .1 4-.6 5.6-1.9-1.7 0-3.1-1.1-3.6-2.6.5.1 1 .1 1.5-.1-1.8-.4-3.1-2-3.1-3.8.5.3 1.1.5 1.7.5-1.6-1-2.1-3-1.1-4.5 1.9 2.3 4.8 3.8 8.1 4-.6-2.7 1.4-5.2 4.2-5.2 1.2 0 2.3.5 3.1 1.2.9-.2 1.9-.5 2.7-1-.3.9-1 1.7-1.8 2.2.8-.1 1.6-.3 2.4-.6z" />
    </svg>
  );
}

/**
 * PUBLIC_INTERFACE
 * SocialLinks renders accessible list of social profile links.
 */
export default function SocialLinks({ links }: { links: Social }) {
  const items = [
    { href: links.github, label: "GitHub", Icon: IconGithub },
    { href: links.linkedin, label: "LinkedIn", Icon: IconLinkedIn },
    { href: links.twitter, label: "X / Twitter", Icon: IconTwitter },
  ].filter((i) => i.href);

  return (
    <ul className="flex items-center gap-3">
      {items.map((i) => (
        <li key={i.label}>
          <a
            href={i.href!}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary py-2"
            aria-label={i.label}
          >
            <i.Icon /> <span className="sr-only">{i.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
