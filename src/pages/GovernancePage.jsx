import { BadgeCheck, FileCheck2, Landmark, Scale, ShieldCheck } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import ImageStrip from "../components/ui/ImageStrip";
import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { advisors, trustees } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import heroImage from "../assets/animal-5.webp";
import trainingImage from "../assets/home-slideshow/slide-4.webp";
import leadershipImage from "../assets/home-slideshow/slide-5.webp";
import fieldTeamImage from "../assets/home-slideshow/slide-21.webp";

const governancePrinciples = [
  {
    icon: Landmark,
    title: "Registered PVO",
    body: "PROACTIVE operates as a Zimbabwean public voluntary organisation with a public-benefit purpose.",
  },
  {
    icon: FileCheck2,
    title: "Audited",
    body: "Financial oversight and audit are central to responsible stewardship of partner and donor resources.",
  },
  {
    icon: Scale,
    title: "Accountable",
    body: "Trustees provide oversight while specialist advisors strengthen legal, operational and conservation decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Security aware",
    body: "Transparency is balanced with the duty to protect sensitive people, information and wildlife-protection operations.",
  },
];

export default function GovernancePage() {
  return (
    <div>
      <Seo {...pageSeo.governance} />
      <PageHero
        eyebrow="Governance"
        title="Accountability is part of the protection model."
        body="Strong conservation partnerships depend on trust. PROACTIVE combines experienced oversight, specialist knowledge, audit and clear organisational responsibility."
        image={heroImage}
        imageAlt="Young white rhino in warm light"
        position="center"
      />

      <Section>
        <div className="grid gap-8 border-y border-[#3f473a]/15 py-10 md:grid-cols-2 xl:grid-cols-4">
          {governancePrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 shrink-0 text-[#5f6858]" />
                  <h2 className="font-serif text-3xl text-[#3f473a]">{item.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#596258]">{item.body}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-12">
          <ImageStrip
            images={[
              { src: trainingImage, alt: "A professional conservation training session" },
              { src: leadershipImage, alt: "PROACTIVE leadership addressing a training group" },
              { src: fieldTeamImage, alt: "Conservation personnel conferring in the field" },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-[#3f473a] text-white">
        <div className="w-full">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6d4cd]">Board of trustees</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">Experienced oversight.</h2>
            <p className="mt-6 max-w-lg leading-8 text-white/65">
              PROACTIVE’s Board of Trustees offers invaluable oversight and a
              fiduciary function, helping to guide strategy, ensure compliance
              and oversee progress. The board brings together conservation
              leadership, protected-area management, field operations and
              rhino-protection experience.
            </p>
          </div>

          <div className="divide-y divide-white/12 border-y border-white/12">
            {trustees.map((person) => (
              <article key={person.name} className="py-10">
                <div>
                  <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#d6d4cd]">
                    <BadgeCheck className="h-4 w-4" /> Trustee
                  </div>
                  <h3 className="mt-5 font-serif text-4xl">{person.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase leading-6 tracking-[0.1em] text-white/45">{person.role}</p>
                </div>
                <p className="mt-6 text-lg leading-8 text-white/85">{person.summary}</p>
                {person.bio ? <p className="mt-4 text-base leading-8 text-white/68">{person.bio}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="eyebrow">Technical advisory team</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a]">Specialist knowledge supporting delivery.</h2>
            <p className="mt-6 max-w-lg leading-8 text-[#596258]">
              Legal, veterinary, strategy, law-enforcement and conservation
              expertise helps PROACTIVE make informed and responsible decisions.
            </p>
          </div>

          <div className="divide-y divide-[#3f473a]/10 border-y border-[#3f473a]/10">
            {advisors.map((advisor) => {
              const [name, role] = advisor.split(" – ");
              return (
                <div key={advisor} className="grid gap-2 py-5 sm:grid-cols-[0.72fr_1.28fr] sm:gap-6">
                  <p className="font-serif text-xl text-[#3f473a]">{name}</p>
                  <p className="text-sm leading-7 text-[#596258]">{role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-[#d6d4cd]">
        <div className="relative overflow-hidden border-y border-[#3f473a]/15 py-12 lg:py-16">
          <img
            src="/horn-stamp.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -bottom-28 right-0 w-[380px] opacity-[0.045]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="eyebrow">Thank you</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
                Protection is a shared achievement.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#596258]">
              <p>
                PROACTIVE Wildlife Protection Trust extends its sincere gratitude
                to our Board of Trustees, technical advisors, partners, funders,
                law-enforcement counterparts, protected areas and the wider
                conservation community. Their guidance, support and commitment
                help us pursue our mission with integrity and transparency.
              </p>
              <p>
                PROACTIVE is a wholly Zimbabwean conservation NGO operating as a
                registered Public Voluntary Organisation (PVO). We are committed
                to sound governance, fiduciary oversight, compliance and audited
                stewardship of every resource entrusted to the organisation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
