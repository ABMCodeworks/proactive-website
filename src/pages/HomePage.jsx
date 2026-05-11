import { useEffect, useMemo, useState } from "react";
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

const slideshowImports = import.meta.glob(
  "../assets/home-slideshow/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  },
);

export default function HomePage() {
  const slideshowImages = useMemo(() => {
    const images = Object.entries(slideshowImports)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, src]) => src);

    return images.length > 0 ? images : [animalImageTwo];
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);

  const nextSlide = useMemo(() => {
    if (slideshowImages.length <= 1) return 0;
    return (activeSlide + 1) % slideshowImages.length;
  }, [activeSlide, slideshowImages.length]);

  useEffect(() => {
    const firstImage = slideshowImages[0];
    if (!firstImage) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = firstImage;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [slideshowImages]);

  useEffect(() => {
    if (slideshowImages.length <= 1) return undefined;

    const nextImage = new Image();
    nextImage.decoding = "async";
    nextImage.src = slideshowImages[nextSlide];

    return undefined;
  }, [nextSlide, slideshowImages]);

  useEffect(() => {
    if (slideshowImages.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        setPreviousSlide(current);
        return (current + 1) % slideshowImages.length;
      });
    }, 5500);

    return () => window.clearInterval(timer);
  }, [slideshowImages.length]);

  const visibleSlideIndexes = useMemo(() => {
    const indexes = new Set([activeSlide]);

    if (previousSlide !== null) {
      indexes.add(previousSlide);
    }

    return Array.from(indexes);
  }, [activeSlide, previousSlide]);

  return (
    <div>
      <Seo {...pageSeo.home} />

      <section className="relative isolate min-h-screen overflow-hidden bg-stone-950">
        {visibleSlideIndexes.map((index) => {
          const image = slideshowImages[index];
          const isActive = index === activeSlide;

          return (
            <img
              key={`${image}-${index}`}
              src={image}
              alt=""
              width="1920"
              height="1080"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className={[
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms] ease-out",
                isActive ? "scale-100 opacity-100" : "scale-105 opacity-0",
              ].join(" ")}
            />
          );
        })}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,18,12,0.84)_0%,rgba(14,18,12,0.68)_36%,rgba(14,18,12,0.28)_64%,rgba(14,18,12,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(255,255,255,0.16),transparent_32%)]" />

        <div className="relative z-10 flex min-h-screen items-center px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
              <Leaf className="h-4 w-4" />
              Protecting Zimbabwe&apos;s wildlife heritage
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Imagine a world where they didn&apos;t need our protection.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
              PROACTIVE Wildlife Protection Trust exists to strengthen
              pre-emptive, information-led anti-poaching and law-enforcement
              operations through strong, accountable partnerships in Zimbabwe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/partners"
                className="inline-flex items-center gap-2 rounded-full bg-[#5f6858] px-6 py-3 font-semibold text-white shadow-xl shadow-black/20 transition hover:bg-[#4f5849]"
              >
                Explore partnerships <ChevronRight className="h-4 w-4" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur-md sm:flex">
          {slideshowImages.map((image, index) => (
            <button
              key={`${image}-dot`}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => {
                setPreviousSlide(activeSlide);
                setActiveSlide(index);
              }}
              className={[
                "h-2.5 rounded-full transition-all",
                index === activeSlide
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/75",
              ].join(" ")}
            />
          ))}
        </div>
      </section>

      <Section>
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/25 p-4 shadow-2xl shadow-black/10 backdrop-blur"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white">
              <div className="h-80 overflow-hidden bg-[#d6d4cd] sm:h-96 lg:h-[420px]">
                <img
                  src={animalImageOne}
                  alt="Wildlife protection focus"
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="bg-[#d6d4cd] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
                      Executive focus
                    </p>

                    <h2 className="mt-2 max-w-xl text-3xl font-black leading-tight text-[#3f473a] sm:text-4xl">
                      Pre-emptive protection through specialist response
                      capability
                    </h2>
                  </div>

                  <BadgeCheck className="mt-1 h-10 w-10 shrink-0 text-[#5f6858]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col justify-center rounded-[2rem] border border-black/10 bg-[#4f5849] p-6 shadow-xl shadow-black/10 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Impact model
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Practical field support backed by accountable partnerships.
            </h2>

            <p className="mt-5 leading-8 text-white/82">
              PROACTIVE supports protected areas through stronger operational
              readiness, specialist response capability, information sharing,
              and mentoring for anti-poaching teams.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-black text-white">
                    {item.value}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

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
