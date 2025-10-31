import Image from "next/image";
import Link from "next/link";
import type { ProfileData } from "@/data/profile";

/**
 * PUBLIC_INTERFACE
 * Hero component renders the top section with image, name, role, and CTA buttons.
 */
export default function Hero({ data }: { data: ProfileData }) {
  const { name, role, summary, resumeLink } = data;
  return (
    <section
      className="hero rounded-lg p-6 md:p-10 surface"
      aria-label="Introduction"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-[rgba(37,99,235,0.25)]">
          <Image
            src="/images/profile.jpg"
            alt={`${name} profile picture`}
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <div className="badge mb-3">Open to Opportunities</div>
          <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>
          <p className="text-muted">{role}</p>
          <p className="mt-3 text-[15px] text-muted">{summary}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Download resume"
            >
              ↓ Download Resume
            </a>
            <Link href="#contact" className="btn btn-secondary" aria-label="Contact section">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
