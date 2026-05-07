import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ChevronRight, ArrowRight, BadgeCheck } from "lucide-react";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import CardPanel from "../components/ui/CardPanel";
import Seo from "../components/seo/Seo";

import { stats, pillars } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import animalImageOne from "../assets/animal-1.webp";
import animalImageTwo from "../assets/animal-2.webp";
import communityImage from "../assets/community.webp";
import lectureImage from "../assets/lecture.webp";

export default function HomePage() {
  return (
    <div>
      <Seo {...pageSeo.home} />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#d6d4cd]">
          <img
            src={animalImageTwo}
            alt="Protected wildlife in Zimbabwe"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-[0.90]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,244,239,0.94)_0%,rgba(245,244,239,0.78)_48%,rgba(245,244,239,0.35)_100%)]" />
        </div>

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5f6858]/20 bg-[#5f6858]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
              <Leaf className="h-4 w-4" />
              Protecting Zimbabwe&apos;s wildlife heritage
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-[#3f473a] sm:text-6xl lg:text-7xl">
              Imagine a world where they didn&apos;t need our protection.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              PROACTIVE Wildlife Protection Trust exists to strengthen
              pre-emptive, information-led anti-poaching and law-enforcement
              operations through strong, accountable partnerships in Zimbabwe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/partners"
                className="inline-flex items-center gap-2 rounded-full bg-[#5f6858] px-6 py-3 font-semibold text-white transition hover:bg-[#4f5849]"
              >
                Explore partnerships <ChevronRight className="h-4 w-4" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-semibold text-stone-900 transition hover:bg-black/5"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#5f6858]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/25 p-4 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white">
                <div className="relative h-72 overflow-hidden bg-[#d6d4cd] sm:h-80 lg:h-96">
                  <img
                    src={animalImageOne}
                    alt="Wildlife protection focus"
                    width="1200"
                    height="900"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.58)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                          Executive focus
                        </p>

                        <h2 className="mt-2 max-w-xl text-2xl font-bold text-white">
                          Pre-emptive protection through specialist response
                          capability
                        </h2>
                      </div>

                      <BadgeCheck className="mt-1 h-10 w-10 shrink-0 text-white/90" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 bg-[#4f5849] p-6 sm:grid-cols-2 sm:p-8">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
                    >
                      <div className="text-2xl font-black text-white">
                        {item.value}
                      </div>

                      <p className="mt-2 text-sm leading-6 text-white/85">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Why PROACTIVE"
          title="A co-ordinated response to a growing wildlife threat"
          body="Zimbabwe is home to globally significant populations of elephant, rhino, lion, leopard, and pangolin. PROACTIVE's model responds to rising poaching pressure with stronger partnerships, better information, and practical field capability."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="rounded-[1.5rem] border border-black/10 bg-white/25 p-6 shadow-lg shadow-black/5 backdrop-blur"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5f6858]/15 text-[#5f6858]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold text-stone-900">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <CardPanel className="overflow-hidden border-black/10 bg-white/25 p-0">
            <div className="h-64 overflow-hidden bg-[#d6d4cd]">
              <img
                src={communityImage}
                alt="Community conservation partnership"
                width="900"
                height="500"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
                Geographic focus – phase 1
              </p>

              <h3 className="mt-3 text-3xl font-black text-stone-900">
                South-east Lowveld, Zimbabwe
              </h3>

              <p className="mt-4 leading-8 text-stone-700">
                Phase 1 focuses on the wildlife-rich south-east Lowveld, an area
                containing more than 90% of Zimbabwe&apos;s rhino population and
                major elephant populations.
              </p>
            </div>
          </CardPanel>

          <CardPanel className="overflow-hidden border-black/10 bg-white/25 p-0">
            <div className="h-64 overflow-hidden bg-[#d6d4cd]">
              <img
                src={lectureImage}
                alt="Training and learning session"
                width="900"
                height="500"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
                Theory of change
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Support protected areas to strengthen anti-poaching operations on the ground.",
                  "Build accountable frameworks for communication, collaboration, and information sharing.",
                  "Operationalise these partnerships through well-trained, well-equipped, mentored specialist teams.",
                  "Improve pre-emptive prevention and long-term protection of endangered wildlife populations.",
                ].map((step) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-black/10 bg-white/30 p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5f6858]" />
                    <p className="text-sm leading-7 text-stone-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardPanel>
        </div>
      </Section>
    </div>
  );
}
