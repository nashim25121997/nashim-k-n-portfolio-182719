"use client";

import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Header component renders the sticky site navigation with anchor links.
 */
export default function Header() {
  return (
    <header className="header">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-[var(--color-text)]">
          <span aria-label="Site home">Nashim K N</span>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <a className="btn btn-secondary py-2" href="#about">About</a>
          </li>
          <li>
            <a className="btn btn-secondary py-2" href="#experience">Experience</a>
          </li>
          <li>
            <a className="btn btn-secondary py-2" href="#education">Education</a>
          </li>
          <li>
            <a className="btn btn-primary py-2" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
