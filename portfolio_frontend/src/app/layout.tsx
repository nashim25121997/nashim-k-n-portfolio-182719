import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nashim K N — Senior Full Stack Developer",
  description:
    "Personal portfolio of Nashim K N, a Senior Full Stack Developer. Explore profile, work experience, education, and contact information.",
  applicationName: "Nashim K N Portfolio",
  authors: [{ name: "Nashim K N" }],
  openGraph: {
    title: "Nashim K N — Senior Full Stack Developer",
    description:
      "Explore profile, projects, experience, education, and contact details.",
    url: "https://example.com",
    siteName: "Nashim Portfolio",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Nashim profile banner" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashim K N — Senior Full Stack Developer",
    description:
      "Explore profile, projects, experience, education, and contact details.",
    images: ["/images/profile.jpg"],
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main className="container section">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
