export type ProfileData = {
  name: string;
  role: string;
  summary: string;
  about: string;
  resumeLink: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    location?: string;
    highlights: string[];
    tech?: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    details?: string[];
  }>;
  contact: {
    email: string;
    phone?: string;
    location?: string;
  };
};

/**
 * PUBLIC_INTERFACE
 * profile exports structured data for the portfolio UI.
 * This is intended to be easily customized by the user later.
 */
export const profile: ProfileData = {
  name: "Nashim K N",
  role: "Senior Full Stack Developer",
  summary:
    "Senior Full Stack Developer with a focus on building scalable, maintainable applications using modern web technologies. Passionate about clean architecture, performance, and developer experience.",
  about:
    "I design and deliver modern web applications with an emphasis on scalability and DX. I enjoy collaborating across disciplines, mentoring teams, and continuously learning to improve product quality and impact.",
  resumeLink:
    "/resume.pdf", // Replace with your hosted resume link or local asset
  social: {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    twitter: "https://twitter.com/your-handle",
  },
  experience: [
    {
      company: "TechWave Solutions",
      role: "Senior Full Stack Developer",
      period: "2022 — Present",
      location: "Remote",
      highlights: [
        "Led a cross-functional squad to migrate a monolithic app to a micro-frontend architecture, improving deployment speed by 40%.",
        "Designed and implemented a GraphQL gateway, consolidating multiple services and reducing client complexity.",
        "Drove performance optimizations that cut TTFB by 30% and improved Lighthouse scores across the product.",
      ],
      tech: ["TypeScript", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    },
    {
      company: "InnoLabs",
      role: "Full Stack Engineer",
      period: "2019 — 2022",
      location: "Bengaluru, IN",
      highlights: [
        "Built a multi-tenant SaaS platform with role-based access control and modular feature sets.",
        "Implemented CI/CD pipelines and code quality gates that reduced production defects by 25%.",
      ],
      tech: ["React", "Express", "MongoDB", "Docker", "Jest"],
    },
  ],
  education: [
    {
      institution: "National Institute of Technology",
      degree: "B.Tech in Computer Science",
      period: "2015 — 2019",
      details: ["Graduated with Honors", "Lead, Coding Club"],
    },
    {
      institution: "Coursera / Online",
      degree: "Specialization: Cloud Architecture",
      period: "2020 — 2021",
      details: ["AWS, containers, microservices patterns"],
    },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+91 98765 43210",
    location: "Kerala, India",
  },
};
