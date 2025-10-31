import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import SocialLinks from "@/components/SocialLinks";
import ContactCard from "@/components/ContactCard";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero data={profile} />
      <Section
        id="about"
        title="About"
        description={profile.summary}
      >
        <div className="card p-6">
          <p className="text-muted">
            {profile.about}
          </p>
        </div>
      </Section>

      <Section
        id="experience"
        title="Experience"
        description="Roles where I designed, built, and scaled modern web applications."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.experience.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} experience={exp} />
          ))}
        </div>
      </Section>

      <Section
        id="education"
        title="Education"
        description="Academic background and certifications."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.education.map((ed) => (
            <EducationCard key={`${ed.institution}-${ed.degree}`} education={ed} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        description="Feel free to reach out for opportunities, collaborations, or just to say hello."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContactCard contact={profile.contact} />
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-muted mb-4">
              Follow or message me on my social profiles.
            </p>
            <SocialLinks links={profile.social} />
          </div>
        </div>
      </Section>
    </div>
  );
}
