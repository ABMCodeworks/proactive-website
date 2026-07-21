import { ArrowRight, CheckCircle2, Landmark, Trees, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import ImageStrip from "../components/ui/ImageStrip";
import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { impactFacts, workAreas } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import heroImage from "../assets/animal-4.webp";
import landscapeImage from "../assets/home-slideshow/slide-25.webp";
import sectorImage from "../assets/home-slideshow/slide-17.webp";
import fieldCoordination from "../assets/home-slideshow/slide-15.webp";
import canineTeam from "../assets/home-slideshow/slide-16.webp";
import fieldTechnology from "../assets/home-slideshow/slide-22.webp";

const stakeholderGroups = [
  {
    icon: Landmark,
    title: "Law enforcement",
    label: "Authority and response",
    body: "Support intelligence-led, lawful intervention and stronger co-ordination with the Zimbabwe Republic Police Minerals, Flora and Fauna Unit.",
  },
  {
    icon: Trees,
    title: "Protected areas",
    label: "Readiness on the ground",
    body: "Help conservancies strengthen strategy, training, refresher courses, selection processes and practical field systems.",
  },
  {
    icon: UsersRound,
    title: "Conservation organisations",
    label: "Knowledge and resources",
    body: "Connect specialist expertise, funding, technology, public awareness and community-informed conservation practice.",
  },
];

export default function WorkPage() {
  return (
    <div>
      <Seo {...pageSeo.work} />
      <PageHero
        eyebrow="Our work"
        title="A partnership approach to practical protection."
        body="PROACTIVE builds the trusted relationships, shared information and operational capability needed to act before wildlife crime escalates."
        image={heroImage}
        imageAlt="White rhino grazing in Zimbabwe"
        position="center"
        align="right"
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why PROACTIVE</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
              Wildlife threats do not respect organisational boundaries.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-0">
            <p className="text-base leading-8 text-[#4f594d] sm:border-r sm:border-[#3f473a]/15 sm:pr-9">
              Fragmented information and uneven response capacity allow
              organised wildlife crime to exploit gaps between institutions and
              protected areas.
            </p>
            <p className="border-t border-[#3f473a]/15 pt-8 text-base leading-8 text-[#4f594d] sm:border-l-0 sm:border-t-0 sm:pl-9 sm:pt-0">
              PROACTIVE helps turn separate strengths into one connected system:
              earlier information, clearer responsibility and a better prepared
              response.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[#3f473a]/10 bg-[#ecebe7]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
              Leading from the front.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#596258]">
            <p>
              PROACTIVE’s management philosophy centres on leading from the
              front and fostering a culture of respect and mutual support. Our
              leadership ethos earns respect rather than expects it, emphasising
              self-respect, discipline and camaraderie among team members.
            </p>
            <p>
              By creating a practical framework where people work collaboratively,
              we build motivated and cohesive teams. Hard work is balanced with a
              positive, enriching environment because a productive and supported
              team delivers better outcomes for the wildlife it protects.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <ImageStrip
            images={[
              { src: fieldCoordination, alt: "Conservation personnel coordinating beside a field vehicle" },
              { src: canineTeam, alt: "A conservation professional working with a detection dog" },
              { src: fieldTechnology, alt: "Field personnel coordinating with radios and tracking technology" },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-[#d6d4cd]">
        <div className="text-center">
          <p className="eyebrow">The partnership model</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
            Three groups, working as one conservation network.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {stakeholderGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="relative rounded-[1.8rem] bg-[#ecebe7] p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#3f473a] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-4xl text-[#5f6858]/35">0{index + 1}</span>
                </div>
                <p className="mt-9 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#5f6858]">{group.label}</p>
                <h3 className="mt-3 font-serif text-4xl text-[#3f473a]">{group.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#596258]">{group.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="eyebrow">How delivery works</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a]">From connection to impact.</h2>
            <p className="mt-6 max-w-md leading-8 text-[#596258]">
              Each stage strengthens the next, turning relationships into
              practical improvements on the ground.
            </p>
          </div>
          <div className="divide-y divide-[#3f473a]/10 border-y border-[#3f473a]/10">
            {workAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:py-9">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-[#5f6858]/30 text-[#5f6858]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#5f6858]">Step {index + 1}</p>
                    <h3 className="mt-2 font-serif text-3xl text-[#3f473a]">{area.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#596258]">{area.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-[#3f473a] text-white">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">
            <img src={landscapeImage} alt="Rocky escarpment and woodland in the south-east Lowveld" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 max-w-md rounded-[1.4rem] bg-[#ecebe7] p-6 text-[#3f473a] sm:bottom-7 sm:left-7">
              <p className="eyebrow">Geographic focus</p>
              <h2 className="mt-3 font-serif text-4xl">South-east Lowveld, Zimbabwe</h2>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10">
            {impactFacts.slice(0, 2).map((fact) => (
              <div key={fact.value} className="flex flex-col justify-center bg-[#4f5849] p-8 sm:p-10">
                <p className="font-serif text-6xl text-[#d6d4cd]">{fact.value}</p>
                <p className="mt-4 max-w-md leading-7 text-white/62">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid overflow-hidden rounded-[2rem] bg-[#d6d4cd] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-11 lg:p-12">
            <p className="eyebrow">Learning from the sector</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a]">Local solutions. Global standards.</h2>
            <p className="mt-6 leading-8 text-[#596258]">
              We learn from established landscape-scale conservation models,
              including Singita Frontier Conservation, while designing systems
              suited to Zimbabwean institutions, law and conservation priorities.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#435141]">
              <CheckCircle2 className="h-5 w-5 text-[#5f6858]" /> Evidence-led and locally accountable
            </div>
          </div>
          <img src={sectorImage} alt="Conservation personnel and a detection dog working in the field" loading="lazy" decoding="async" className="h-full min-h-[400px] w-full object-cover" />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-[2rem] bg-[#5f6858] p-8 text-white sm:p-12">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <h2 className="max-w-4xl font-serif text-5xl leading-none tracking-[-0.035em]">Bring your capability into the network.</h2>
            <NavLink to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-[#9d4c2e]">
              Work with us <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
