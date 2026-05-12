import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  ChevronRight,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  SearchCheck,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";

import { stats } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import animalImageOne from "../assets/animal-1.webp";
import animalImageTwo from "../assets/animal-2.webp";
import animalImageThree from "../assets/animal-3.webp";
import lowveldImage from "../assets/lowveld.webp";
import lectureImage from "../assets/lecture.webp";

const slideshowImports = import.meta.glob(
  "../assets/home-slideshow/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  },
);

const protectionPoints = [
  {
    icon: AlertTriangle,
    label: "The threat is moving",
    text: "Poaching syndicates that have depleted wildlife populations in neighbouring countries are increasingly placing pressure on Zimbabwe.",
  },
  {
    icon: SearchCheck,
    label: "Prevention comes first",
    text: "The most effective response is not to wait for losses, but to strengthen intelligence, readiness, and relationships before incursions escalate.",
  },
  {
    icon: ShieldCheck,
    label: "Field capability matters",
    text: "Well-trained, well-equipped, and properly mentored teams are essential to protecting high-value target species in real-world conditions.",
  },
];

const storySteps = [
  {
    eyebrow: "The risk",
    title: "Zimbabwe holds wildlife populations of global importance.",
    body: "Elephant, black rhino, white rhino, lion, leopard, and pangolin remain vulnerable to organised poaching and illegal wildlife trade. The pressure is increasing, and Zimbabwe has a narrow opportunity to strengthen protection before losses become irreversible.",
  },
  {
    eyebrow: "The lesson",
    title: "Previous poaching waves showed what works.",
    body: "Southern Africa has experienced repeated waves of rhino poaching. These periods demonstrated the value of pre-emptive, information-led protection backed by trust-based, accountable co-operation between conservationists, civil society, and law enforcement.",
  },
  {
    eyebrow: "The response",
    title: "PROACTIVE connects people, intelligence, and operations.",
    body: "The model focuses on strengthening anti-poaching readiness, supporting specialist response capability, and building durable partnerships across conservancies, conservation organisations, and government law-enforcement agencies.",
  },
];

const theoryOfChange = [
  "Support protected areas to strengthen anti-poaching operations on the ground.",
  "Build accountable frameworks for communication, collaboration, and information sharing.",
  "Operationalise these partnerships through well-trained, well-equipped, mentored specialist teams.",
  "Improve pre-emptive prevention and long-term protection of endangered wildlife populations.",
];

function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  priority = false,
  position = "center",
}) {
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const isNearView = useInView(wrapperRef, {
    once: true,
    amount: 0.05,
    margin: priority ? "1000px 0px 1000px 0px" : "350px 0px 350px 0px",
  });

  useEffect(() => {
    if (!src || (!priority && !isNearView)) return undefined;

    let cancelled = false;
    const image = new Image();

    image.decoding = "async";
    image.src = src;

    async function finishLoading() {
      try {
        if (image.decode) {
          await image.decode();
        }
      } catch {
        // Some browsers throw on decode even when the image is still usable.
      }

      if (!cancelled) {
        setIsLoaded(true);
      }
    }

    if (image.complete) {
      finishLoading();
    } else {
      image.onload = finishLoading;
      image.onerror = finishLoading;
    }

    return () => {
      cancelled = true;
      image.onload = null;
      image.onerror = null;
    };
  }, [src, isNearView, priority]);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${wrapperClassName}`}
    >
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 bg-[#d6d4cd] transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />

      {isLoaded ? (
        <div
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          className={[
            "absolute inset-0 bg-cover bg-no-repeat opacity-100 transition-opacity duration-700",
            className,
          ].join(" ")}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: position,
          }}
        />
      ) : null}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={[
        "text-xs font-semibold uppercase tracking-[0.24em]",
        light ? "text-white/65" : "text-[#5f6858]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  const slideshowImages = useMemo(() => {
    const images = Object.entries(slideshowImports)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, src]) => src);

    return images.length > 0 ? images : [animalImageTwo];
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set());

  const nextSlide = useMemo(() => {
    if (slideshowImages.length <= 1) return 0;
    return (activeSlide + 1) % slideshowImages.length;
  }, [activeSlide, slideshowImages.length]);

  useEffect(() => {
    if (!slideshowImages.length) return undefined;

    let cancelled = false;

    slideshowImages.forEach((src, index) => {
      const img = new Image();

      img.decoding = "async";
      img.src = src;

      img.onload = async () => {
        try {
          if (img.decode) {
            await img.decode();
          }
        } catch {
          // Some browsers throw on decode even when the image is usable.
        }

        if (!cancelled) {
          setLoadedSlides((current) => {
            const next = new Set(current);
            next.add(index);
            return next;
          });
        }
      };
    });

    return () => {
      cancelled = true;
    };
  }, [slideshowImages]);

  useEffect(() => {
    const firstImage = slideshowImages[0];
    if (!firstImage) return undefined;

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
        const next = (current + 1) % slideshowImages.length;

        if (!loadedSlides.has(next)) {
          return current;
        }

        setPreviousSlide(current);
        return next;
      });
    }, 5500);

    return () => window.clearInterval(timer);
  }, [loadedSlides, slideshowImages.length]);

  const visibleSlideIndexes = useMemo(() => {
    const indexes = new Set();

    if (loadedSlides.has(activeSlide)) {
      indexes.add(activeSlide);
    }

    if (previousSlide !== null && loadedSlides.has(previousSlide)) {
      indexes.add(previousSlide);
    }

    return Array.from(indexes);
  }, [activeSlide, previousSlide, loadedSlides]);

  return (
    <div>
      <Seo {...pageSeo.home} />

      <section className="relative isolate min-h-screen overflow-hidden bg-stone-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${animalImageTwo})`,
          }}
        />

        {visibleSlideIndexes.map((index) => {
          const image = slideshowImages[index];
          const isActive = index === activeSlide;

          return (
            <div
              key={`${image}-${index}`}
              aria-hidden="true"
              className={[
                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1800ms] ease-out",
                isActive ? "scale-100 opacity-100" : "scale-105 opacity-0",
              ].join(" ")}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          );
        })}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,18,12,0.86)_0%,rgba(14,18,12,0.72)_38%,rgba(14,18,12,0.34)_66%,rgba(14,18,12,0.18)_100%)]" />
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
              PROACTIVE Wildlife Protection Trust strengthens pre-emptive,
              information-led anti-poaching and law-enforcement operations
              through accountable partnerships in Zimbabwe.
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
                if (!loadedSlides.has(index)) return;

                setPreviousSlide(activeSlide);
                setActiveSlide(index);
              }}
              className={[
                "h-2.5 rounded-full transition-all",
                index === activeSlide
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/75",
                !loadedSlides.has(index)
                  ? "cursor-not-allowed opacity-30"
                  : "cursor-pointer",
              ].join(" ")}
            />
          ))}
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Executive focus</Eyebrow>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Pre-emptive protection through specialist response capability.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-700">
              Zimbabwe is home to some of southern Africa&apos;s most important
              endangered wildlife populations. As poaching pressure intensifies
              across the region, the country has an opportunity to strengthen
              fragmented anti-poaching defences before the threat becomes
              irreversible.
            </p>

            <div className="mt-8 border-l-4 border-[#5f6858] pl-6">
              <p className="text-xl font-bold leading-8 text-[#3f473a]">
                The PROACTIVE model is built around prevention, intelligence,
                trusted partnerships, and practical field support.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <SmartImage
              src={animalImageOne}
              alt="Wildlife protection focus"
              priority
              wrapperClassName="h-[420px] rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-2xl shadow-black/10"
              position="center"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] border border-black/10 bg-[#d6d4cd]/95 p-5 shadow-xl shadow-black/10 backdrop-blur">
              <div className="flex items-start gap-4">
                <BadgeCheck className="mt-1 h-8 w-8 shrink-0 text-[#5f6858]" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f6858]">
                    Operational emphasis
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#3f473a]">
                    Supporting stronger readiness, response, and co-operation
                    across protected areas and law-enforcement structures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#4f5849] shadow-2xl shadow-black/10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <Eyebrow light>Impact model</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Practical field support backed by accountable partnerships.
              </h2>

              <p className="mt-5 leading-8 text-white/78">
                PROACTIVE supports protected areas through stronger operational
                readiness, specialist response capability, information sharing,
                and mentoring for anti-poaching teams.
              </p>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 p-7 sm:border-r lg:min-h-[180px]"
                >
                  <div className="text-4xl font-black text-white">
                    {item.value}
                  </div>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Why PROACTIVE</Eyebrow>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Zimbabwe is at a critical conservation juncture.
          </h2>

          <p className="mt-6 text-lg leading-9 text-stone-700">
            The threat is not only about isolated poaching incidents. It is
            about organised wildlife crime, shifting syndicate pressure, and the
            need for a co-ordinated response before high-value species are lost.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SmartImage
            src={animalImageTwo}
            alt="Endangered wildlife in Zimbabwe"
            wrapperClassName="h-[520px] rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10"
            position="center"
          />

          <div className="space-y-8">
            {protectionPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="grid gap-4 border-b border-black/10 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5f6858]/15 text-[#5f6858]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-stone-900">
                      {point.label}
                    </h3>

                    <p className="mt-3 leading-8 text-stone-700">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Eyebrow>The work</Eyebrow>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-900">
              From threat to response.
            </h2>

            <p className="mt-5 leading-8 text-stone-700">
              The PROACTIVE approach is easier to understand as a sequence:
              recognise the threat, apply lessons from past poaching waves, and
              build a stronger response through partnerships.
            </p>
          </div>

          <div className="space-y-0 lg:col-span-2">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-5 border-t border-black/10 py-8 first:border-t-0 first:pt-0 md:grid-cols-[140px_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
                    {step.eyebrow}
                  </p>

                  <p className="mt-2 text-4xl font-black text-[#5f6858]/20">
                    0{index + 1}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black leading-tight text-stone-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-stone-700">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <Eyebrow>Theory of change</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#3f473a] sm:text-4xl">
                Turning partnerships into practical protection.
              </h2>

              <p className="mt-5 leading-8 text-stone-700">
                PROACTIVE&apos;s theory of change links protected-area support,
                accountable co-operation, specialist response capability, and
                long-term prevention into one practical wildlife protection
                model.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-t border-black/10 bg-white/25 lg:border-l lg:border-t-0">
              {theoryOfChange.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5f6858]/15 text-[#5f6858]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="leading-8 text-stone-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <SmartImage
            src={lowveldImage}
            alt="Community conservation partnership"
            wrapperClassName="min-h-[360px] rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10"
            position="center"
          />

          <div className="grid gap-5">
            <SmartImage
              src={lectureImage}
              alt="Training and learning session"
              wrapperClassName="min-h-[220px] rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10"
              position="center"
            />

            <div className="rounded-[2rem] border border-black/10 bg-white/30 p-7 shadow-lg shadow-black/5 backdrop-blur">
              <Eyebrow>Geographic focus</Eyebrow>

              <h3 className="mt-3 text-3xl font-black leading-tight text-stone-900">
                South-east Lowveld, Zimbabwe
              </h3>

              <p className="mt-4 leading-8 text-stone-700">
                Phase 1 focuses on the wildlife-rich south-east Lowveld, an area
                containing more than 90% of Zimbabwe&apos;s rhino population and
                major elephant populations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#3f473a] shadow-2xl shadow-black/10">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <SmartImage
              src={animalImageThree}
              alt="Zimbabwe wildlife protection"
              wrapperClassName="min-h-[320px] bg-[#d6d4cd] lg:min-h-[520px]"
              position="center"
            />

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <Eyebrow light>The opportunity</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Fortify protection now, before the cost becomes irreversible.
              </h2>

              <p className="mt-6 leading-8 text-white/80">
                Zimbabwe can act before organised syndicates become entrenched.
                The priority is to strengthen information-led, accountable, and
                co-ordinated protection across the places and species most at
                risk.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Pre-emptive intelligence",
                  "Specialist response capability",
                  "Law-enforcement partnerships",
                  "Long-term wildlife security",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-t border-white/20 pt-4 text-sm font-semibold text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <NavLink
                  to="/partners"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#3f473a] shadow-xl shadow-black/20 transition hover:bg-white/90"
                >
                  View partnership model <ChevronRight className="h-4 w-4" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
