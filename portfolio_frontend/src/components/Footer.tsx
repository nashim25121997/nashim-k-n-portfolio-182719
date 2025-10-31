import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

/**
 * PUBLIC_INTERFACE
 * Footer component renders site footer with social links and copyright notice.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold">Nashim K N</div>
          <div className="text-sm text-muted">Senior Full Stack Developer</div>
        </div>
        <SocialLinks links={profile.social} />
      </div>
      <div className="container pb-8 text-sm text-muted">
        © {new Date().getFullYear()} Nashim K N. All rights reserved.
      </div>
    </footer>
  );
}
