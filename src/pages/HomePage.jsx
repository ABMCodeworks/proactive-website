import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { impactFacts, workAreas } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import rhinoHero from "../assets/home-hero.webp";
import wildlifeScene from "../assets/home-slideshow/slide-3.webp";
import woodlandCanopy from "../assets/home-slideshow/slide-7.webp";
import communityGathering from "../assets/home-slideshow/slide-11.webp";
import elephantLandscape from "../assets/home-slideshow/slide-26.webp";
import zrpLogo from "../assets/partners/zrp-mffu.webp";
import oakLogo from "../assets/partners/oak-foundation.svg";
import alineaLogo from "../assets/partners/alinea-international.webp";
import irfLogo from "../assets/partners/international-rhino-foundation.webp";
import lrtLogo from "../assets/partners/lowveld-rhino-trust.webp";
import ezytrackLogo from "../assets/partners/ezytrack.webp";
import stopRhinoPoachingLogo from "../assets/partners/stop-rhino-poaching.webp";

const partnerLogos = [
  [zrpLogo, "Zimbabwe Republic Police – MFFU"],
  [oakLogo, "Oak Foundation"],
  [alineaLogo, "Alinea International"],
  [irfLogo, "International Rhino Foundation"],
  [lrtLogo, "Lowveld Rhino Trust"],
  [ezytrackLogo, "Ezytrack Zimbabwe"],
  [stopRhinoPoachingLogo, "StopRhinoPoaching.com"],
];

export default function HomePage() {
  return (
    <div>
      <Seo {...pageSeo.home} />

      <section className="bg-[#d8d4c8] sm:relative sm:min-h-[calc(100vh-116px)] sm:overflow-hidden">
          <img
            src={rhinoHero}
            alt="Three rhinos walking together through the Zimbabwean bush"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-[340px] w-full object-cover object-[58%_bottom] sm:absolute sm:inset-0 sm:h-full"
          />

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10 flex w-full flex-col justify-end bg-[#ecebe7]/96 p-7 shadow-2xl shadow-black/15 sm:min-h-[calc(100vh-116px)] sm:max-w-[560px] sm:p-10"
          >
            <p className="eyebrow">Wildlife protection, connected</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.045em] text-[#3f473a] sm:text-6xl">
              Imagine a future where they don’t need our protection.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#4d574b] sm:text-lg">
              PROACTIVE brings law enforcement, conservation organisations and
              protected areas together to prevent wildlife crime and protect
              Zimbabwe’s biodiversity.
            </p>

          </motion.div>
      </section>

      <Section className="border-b border-[#3f473a]/10 pb-16 pt-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-0">
          <article className="md:border-r md:border-[#3f473a]/15 md:pr-12 lg:pr-16">
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#3f473a] sm:text-5xl">
              A Zimbabwean organisation built for collaboration.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#596258]">
              PROACTIVE is a wholly Zimbabwean conservation organisation and
              registered public voluntary organisation. Our core team brings
              together seasoned professionals with more than 35 years of
              experience addressing southern Africa’s conservation challenges.
            </p>
          </article>

          <article className="md:pl-12 lg:pl-16">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#3f473a] sm:text-5xl">
              We connect information, capability and action.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#596258]">
              We strengthen information sharing, operational readiness and
              co-ordination between law enforcement, protected areas and
              conservation organisations—developing strong, effective local
              partnerships that can grow into a wider regional model.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">What PROACTIVE does</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
              Stronger connections. Earlier action. Lasting protection.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[#596258]">
              Wildlife crime, habitat loss and emerging threats cross boundaries.
              Our role is to make the conservation response more connected,
              capable and accountable.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#3f473a]/12 sm:grid-cols-2">
            {workAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="bg-[#e5e4df] p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[#5f6858]" />
                    <span className="text-xs font-black tracking-[0.18em] text-[#3f473a]/25">{area.number}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-3xl text-[#3f473a]">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b6458]">{area.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-[#3f473a] text-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6d4cd]">Why now</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">
              Prevention is more powerful than recovery.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Zimbabwe still holds wildlife populations of global importance.
              The opportunity is to strengthen protection before organised crime
              becomes entrenched and losses become irreversible.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-3">
            {impactFacts.map((fact) => (
              <div key={fact.value} className="bg-[#4f5849] p-7 lg:min-h-[230px]">
                <p className="font-serif text-5xl text-[#d6d4cd]">{fact.value}</p>
                <p className="mt-5 text-sm leading-7 text-white/62">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">The whole landscape</p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.035em] text-[#3f473a]">Fauna. Flora. Communities.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#5b6458]">
            Protecting a rhino also means protecting the habitat, ecological
            systems and neighbouring communities on which its future depends.
          </p>
        </div>

        <div className="grid auto-rows-[240px] gap-4 md:grid-cols-3 md:auto-rows-[300px]">
          {[
            [wildlifeScene, "A rhino grazing among zebras in Zimbabwe", "Wildlife"],
            [woodlandCanopy, "Looking up into a mature woodland canopy", "Habitat"],
            [communityGathering, "Community members gathered outdoors", "Communities"],
            [elephantLandscape, "Elephants moving across a Zimbabwean landscape", "Ecosystems"],
          ].map(([src, alt, label], index) => (
            <figure key={src} className={`relative overflow-hidden rounded-[1.7rem] ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}>
              <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#ecebe7] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#3f473a]">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="pt-8">
        <div className="rounded-[2rem] border border-[#3f473a]/10 bg-white/42 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Working together</p>
              <h2 className="mt-3 font-serif text-4xl text-[#3f473a]">Our conservation network</h2>
            </div>
            <NavLink to="/partners" className="text-xs font-black uppercase tracking-[0.14em] text-[#5f6858] underline underline-offset-4">
              Meet our partners
            </NavLink>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {partnerLogos.map(([src, name]) => (
              <div key={name} className="flex min-h-24 items-center justify-center rounded-xl bg-white px-4 py-5">
                <img src={src} alt={name} loading="lazy" decoding="async" className="max-h-14 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Section>

    </div>
  );
}
