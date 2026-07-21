import { ArrowRight, EyeOff, HeartHandshake, Scale, Target } from "lucide-react";
import { NavLink } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { pageSeo } from "../data/seoData";

import heroImage from "../assets/animal-8.webp";
import landscapeImage from "../assets/lowveld-3.webp";
import wildlifeImage from "../assets/animal-7.webp";

const values = [
  {
    icon: HeartHandshake,
    title: "Collaboration",
    body: "We achieve more when public institutions, conservation organisations and protected areas work as one network.",
  },
  {
    icon: Scale,
    title: "Integrity",
    body: "We build trust through lawful action, clear accountability, responsible stewardship and respect for our partners.",
  },
  {
    icon: Target,
    title: "Impact",
    body: "We focus on practical improvements that make wildlife protection stronger, earlier and more sustainable.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Seo {...pageSeo.about} />
      <PageHero
        eyebrow="About PROACTIVE"
        title="Conservation works better when it works together."
        body="PROACTIVE was established to strengthen collaboration across the conservation sector, recognising that wildlife crime, habitat loss and emerging threats cannot be addressed by any single organisation."
        image={heroImage}
        imageAlt="Rhino mother and calf at a waterhole"
        position="center"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
              Wholly Zimbabwean. Informed by 35 years of experience.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#596258]">
            <p>
              PROACTIVE is a wholly Zimbabwean conservation organisation, with
              a core team of seasoned professionals who have a deep understanding
              of southern Africa’s conservation challenges and opportunities.
            </p>
            <p>
              Our mission leverages the team’s diverse experience and skills,
              accumulated over more than 35 years, to help end wildlife poaching
              in Zimbabwe and build a conservation model that can expand across
              borders through strong, effective local partnerships.
            </p>
            <p>
              PROACTIVE exists to close the gaps between good work: strengthening
              trusted relationships, enabling responsible information sharing,
              building practical capability and helping partners act together
              before a threat becomes a crisis.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#d6d4cd]">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem] bg-[#3f473a] p-8 text-white sm:p-11">
            <img src="/horn-stamp.svg" alt="" aria-hidden="true" className="absolute -bottom-24 -right-8 w-80 opacity-[0.05]" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6d4cd]">Our vision</p>
            <h2 className="relative mt-5 max-w-xl font-serif text-5xl leading-none tracking-[-0.035em]">
              Imagine a future where they didn’t need our protection.
            </h2>
            <p className="relative mt-6 max-w-xl leading-8 text-white/65">
              We envision a future where Zimbabwe’s endangered wildlife
              populations are secure, not because threats have disappeared, but
              because conservation stakeholders work seamlessly together to
              identify and address them before irreversible losses occur.
            </p>
            <p className="relative mt-4 max-w-xl leading-8 text-white/65">
              Strong, accountable partnerships between law enforcement,
              protected areas, conservation organisations and communities will
              safeguard biodiversity and natural ecosystems for future
              generations. The model developed in Zimbabwe can then support
              wider collaboration across borders and contribute to the
              protection of Africa’s iconic species.
            </p>
          </article>

          <article className="rounded-[2rem] bg-[#5f6858] p-8 text-white sm:p-11">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/65">Our mission</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-none tracking-[-0.035em]">
              Turn partnerships into lasting conservation outcomes.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/75">
              Our mission is to enhance the protection of valuable wildlife
              populations through pre-emptive, information-led anti-poaching
              and law-enforcement operations, underpinned by professional and
              accountable partnerships.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-white/75">
              We bring together the Zimbabwe Republic Police, protected areas,
              conservation organisations and local communities; strengthen
              communication and information sharing; and build the training,
              equipment, leadership and operational capability needed to
              disrupt poaching before animals are lost. We monitor results,
              adapt our approach and develop a practical model that can expand
              across Zimbabwe and, over time, into neighbouring countries.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <p className="eyebrow">Our values</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
            How we choose to work.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="rounded-[1.7rem] border border-[#3f473a]/10 bg-white/45 p-7">
                <Icon className="h-7 w-7 text-[#5f6858]" />
                <h3 className="mt-10 font-serif text-3xl text-[#3f473a]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5b6458]">{value.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#3f473a] lg:grid-cols-[1.1fr_0.9fr]">
          <img src={landscapeImage} alt="A Lowveld conservation landscape" className="h-full min-h-[420px] w-full object-cover" />
          <div className="flex flex-col justify-center p-8 text-white sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6d4cd]">A whole-system view</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em]">More than a single species.</h2>
            <p className="mt-6 leading-8 text-white/65">
              Rhino protection is an urgent focus, but conservation is
              interconnected. Healthy fauna depends on healthy flora, intact
              habitat and resilient relationships with neighbouring communities.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <img src={wildlifeImage} alt="African wild dogs in a conservation landscape" className="h-full min-h-[360px] w-full rounded-[2rem] object-cover" />
          <div className="rounded-[2rem] border border-[#3f473a]/10 bg-white/45 p-8 sm:p-11">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f473a] text-white">
              <EyeOff className="h-5 w-5" />
            </div>
            <h2 className="mt-8 font-serif text-4xl tracking-[-0.03em] text-[#3f473a]">Protection includes discretion.</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#596258]">
              Because of the sensitive nature of wildlife protection, we do not
              publish identifiable photographs or operational details about the
              people involved. This is a deliberate security measure—not an
              absence of people from the work.
            </p>
            <NavLink to="/governance" className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#5f6858]">
              See how we are governed <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
