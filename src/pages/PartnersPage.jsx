import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  Landmark,
  Trees,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Seo from "../components/seo/Seo";

import { trustees, advisors } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import communityImage from "../assets/community.webp";
import animalImageOne from "../assets/animal-4.webp";
import animalImageTwo from "../assets/animal-5.webp";
import animalImageFour from "../assets/animal-6.webp";

import animalImageThree from "../assets/animal-3.webp";
import lowveldImage from "../assets/lowveld-2.webp";

import oakFoundationLogo from "../assets/partners/oak-foundation.webp";
import internationalRhinoFoundationLogo from "../assets/partners/international-rhino-foundation.webp";
import rhinoRecoveryFundLogo from "../assets/partners/rhino-recovery-fund.webp";
import alineaInternationalLogo from "../assets/partners/alinea-international.webp";
import lowveldRhinoTrustLogo from "../assets/partners/lowveld-rhino-trust.webp";
import ezytrackLogo from "../assets/partners/ezytrack.webp";
import zrpMmfuLogo from "../assets/partners/zrp-mffu.webp";

const partnershipApproach = [
  {
    number: "01",
    icon: Landmark,
    title: "ZRP Special Response Team",
    subtitle: "Law-enforcement response and intelligence capability",
    body: "PROACTIVE will work in conjunction with the Zimbabwe Republic Police to establish and support a Special Response Team of highly trained, carefully selected officers who are resourced, motivated, and prepared to respond proactively to the growing threat of armed poachers.",
    points: [
      "Strengthen intelligence gathering and anti-poaching strategies alongside the ZRP Minerals, Flora and Fauna Unit.",
      "Support police-led response to incursions across private reserves, national parks, and protected areas.",
      "Connect field response with informer networks, prosecutors, cyber unit, ballistics, INTERPOL, and transboundary agencies.",
    ],
  },
  {
    number: "02",
    icon: Trees,
    title: "Private Conservancies",
    subtitle: "Ground-level protection and reserve support",
    body: "PROACTIVE will continue to support private conservancies to enhance anti-poaching measures, strengthen reserve security, and improve the practical systems that protect wildlife on the ground.",
    points: [
      "Provide advisory support for training and anti-poaching strategy.",
      "Assist with operations, refresher courses, and selection courses tailored to each area.",
      "Guide engagement between conservancies and neighbouring communities.",
    ],
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Conservation Organisations",
    subtitle: "Technical expertise, awareness, and wider alignment",
    body: "PROACTIVE will partner with conservation NGOs and related organisations to provide technical support for anti-poaching initiatives and strengthen public awareness around wildlife protection.",
    points: [
      "Draw on specialist conservation knowledge and technical expertise.",
      "Support aligned anti-poaching initiatives.",
      "Raise awareness about conservation and the consequences of poaching.",
    ],
  },
];

const partners = [
  {
    name: "Oak Foundation",
    website: "https://oakfnd.org/",
    logo: oakFoundationLogo,
    description:
      "The Oak Foundation is a major international philanthropic foundation that provides financial support to nonprofit organisations working to address some of the world’s most pressing social and environmental challenges. Established in 1983 by businessman Alan Parker, the foundation focuses on funding initiatives that promote human rights, environmental sustainability, social justice, and the protection of vulnerable populations. Headquartered in Geneva, Switzerland, the organisation works with partner NGOs across dozens of countries, providing grants and long-term support to programmes that aim to create meaningful and lasting change. Through its strategic funding areas, such as climate and environmental protection, preventing child abuse, advancing gender equality, and strengthening civil society, the foundation seeks to build a fairer, safer, and more sustainable world.",
  },
  {
    name: "International Rhino Foundation",
    website: "https://rhinos.org/",
    logo: internationalRhinoFoundationLogo,
    description:
      "The International Rhino Foundation is a global nonprofit organisation dedicated to the conservation and protection of the world’s five remaining rhinoceros species. Founded in 1989 and headquartered in Fort Worth, Texas, the organisation works with governments, conservation groups, and local communities to ensure rhinos survive in the wild. Its work focuses on anti-poaching efforts, biological management, habitat protection, scientific research, and community partnerships in key rhino range countries across Africa and Asia. The International Rhino Foundation both funds conservation projects and implements programmes directly, supporting ranger patrols, wildlife monitoring, breeding initiatives, and efforts to reduce illegal wildlife trafficking. The foundation also collaborates widely with other conservation organisations and researchers to strengthen global strategies aimed at securing stable and growing rhino populations.",
  },
  {
    name: "Rhino Recovery Fund",
    website: "https://wildnet.org/wildlife-fund/rhino-recovery-fund/",
    logo: rhinoRecoveryFundLogo,
    description:
      "The Rhino Recovery Fund is a global conservation funding initiative created by the Wildlife Conservation Network to support projects that protect and restore the world’s remaining rhino populations. Launched in 2020, the fund provides financial support to frontline conservation organisations working across Africa and Asia to address the major threats facing rhinos, particularly poaching driven by the illegal rhino horn trade and the loss of natural habitat. Rhino Recovery Fund invests in initiatives such as anti-poaching operations, wildlife crime prevention, and habitat protection.",
  },
  {
    name: "Alinea International",
    website: "https://www.alineainternational.com/",
    logo: alineaInternationalLogo,
    description:
      "Alinea International is a global international development consultancy that provides technical expertise and project management to support social, economic, and environmental development around the world. Founded in 1986, originally as Agriteam Canada, the organisation works with governments, multilateral institutions, private sector partners, and local communities to design and implement development programmes.",
  },
  {
    name: "Lowveld Rhino Trust",
    website: "https://www.lowveldrhinotrust.org/",
    logo: lowveldRhinoTrustLogo,
    description:
      "The Lowveld Rhino Trust is a Zimbabwean conservation organisation dedicated to protecting and increasing populations of black and white rhinos, particularly in the south-eastern Lowveld region of Zimbabwe. Its work focuses on intensive rhino monitoring, veterinary care, translocations to safer habitats, community engagement, and supporting anti-poaching efforts.",
  },
  {
    name: "Ezytrack Zimbabwe",
    website: "https://www.ezytrack.co.zw/",
    logo: ezytrackLogo,
    description:
      "Ezytrack Zimbabwe is a Zimbabwe-based technology company that provides GPS vehicle tracking and fleet management solutions for businesses and individuals. Its services include live vehicle tracking, driver behaviour monitoring, geofencing, and vehicle recovery support through 24-hour monitoring systems.",
  },
  {
    name: "Zimbabwe Republic Police – MMFU",
    website: "",
    logo: zrpMmfuLogo,
    description:
      "The Zimbabwe Republic Police Minerals, Flora and Fauna Unit supports law-enforcement efforts linked to the protection of wildlife and natural resources. The unit plays an important role in wildlife crime response, enforcement collaboration, and the protection of Zimbabwe’s natural heritage.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SmartLogo({ src, alt }) {
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const isNearView = useInView(wrapperRef, {
    once: true,
    amount: 0.05,
    margin: "250px 0px 250px 0px",
  });

  useEffect(() => {
    if (!isNearView || !src) return undefined;

    let cancelled = false;
    const image = new Image();

    image.decoding = "async";
    image.src = src;

    async function markLoaded() {
      try {
        if (image.decode) {
          await image.decode();
        }
      } catch {
        // Some browsers throw on decode even when the image is usable.
      }

      if (!cancelled) {
        setIsLoaded(true);
      }
    }

    if (image.complete) {
      markLoaded();
    } else {
      image.onload = markLoaded;
      image.onerror = markLoaded;
    }

    return () => {
      cancelled = true;
      image.onload = null;
      image.onerror = null;
    };
  }, [isNearView, src]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-[96px] w-full items-center justify-center"
    >
      <div
        aria-hidden="true"
        className={[
          "absolute h-16 w-44 rounded-2xl bg-[#d6d4cd]/60 transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />

      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          width="240"
          height="96"
          decoding="async"
          className="max-h-24 w-auto max-w-[240px] object-contain opacity-100 transition-transform duration-300 ease-out group-hover:scale-[1.035]"
        />
      ) : null}
    </div>
  );
}

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

function AnimatedGrid({ children, className }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -80px 0px",
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
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

function PartnerLogoPanel({ partner }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionWrapper = shouldReduceMotion ? "article" : motion.article;

  return (
    <MotionWrapper
      variants={shouldReduceMotion ? undefined : cardVariants}
      className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/30 shadow-sm shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/45 hover:shadow-xl hover:shadow-black/10"
    >
      <div className="flex min-h-[150px] items-center justify-center border-b border-black/10 bg-white/35 px-6 py-7">
        <SmartLogo src={partner.logo} alt={`${partner.name} logo`} />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black leading-tight text-stone-900">
          {partner.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-stone-700">
          {partner.description}
        </p>

        {partner.website ? (
          <a
            href={partner.website}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#5f6858] transition hover:text-[#3f473a]"
          >
            Visit website <ExternalLink className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </MotionWrapper>
  );
}

export default function PartnersPage() {
  return (
    <div>
      <Seo {...pageSeo.partners} />

      <section className="relative isolate overflow-hidden bg-stone-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${animalImageOne})`,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,18,12,0.88)_0%,rgba(14,18,12,0.72)_42%,rgba(14,18,12,0.38)_72%,rgba(14,18,12,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(255,255,255,0.14),transparent_32%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1600px] items-center px-5 py-28 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Partners
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Collaboration is at the centre of the PROACTIVE model
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/82">
              PROACTIVE works alongside conservation funders, specialist
              organisations, technology partners, local trusts, and
              law-enforcement structures to strengthen wildlife protection in
              Zimbabwe.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 xl:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Eyebrow>Partnership approach</Eyebrow>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Three stakeholder groups. One co-ordinated protection model.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-stone-700">
              PROACTIVE&apos;s work is designed to create tangible synergies
              between law enforcement, private conservancies, and conservation
              organisations. The aim is to connect intelligence, response,
              technical support, field readiness, and long-term conservation
              outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Law enforcement",
                "Private conservancies",
                "Conservation organisations",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#5f6858]/20 bg-[#5f6858]/10 px-4 py-2 text-sm font-semibold text-[#4f5849]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#4f5849] shadow-2xl shadow-black/10">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <SmartImage
              src={communityImage}
              alt="Conservation partnership and community engagement"
              priority
              wrapperClassName="min-h-[360px] bg-[#d6d4cd] lg:min-h-[600px]"
              position="center"
            />

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <Eyebrow light>Shared responsibility</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Strong wildlife protection depends on trusted partnerships.
              </h2>

              <p className="mt-6 leading-8 text-white/80">
                PROACTIVE&apos;s role is to help connect the people,
                institutions, skills, and resources needed to protect
                Zimbabwe&apos;s wildlife heritage. That means working with
                law-enforcement structures, private conservancies, conservation
                organisations, technical specialists, funders, and local
                stakeholders in a more co-ordinated and accountable way.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Trust", "Capability", "Co-operation"].map((item) => (
                  <div
                    key={item}
                    className="border-t border-white/20 pt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#4f5849] shadow-2xl shadow-black/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-12"
            style={{
              backgroundImage: `url(${animalImageTwo})`,
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(79,88,73,0.97)_0%,rgba(79,88,73,0.93)_45%,rgba(79,88,73,0.82)_100%)]" />

          <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <Eyebrow light>How it works</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Building a stronger protection network from the ground up.
              </h2>

              <p className="mt-5 leading-8 text-white/78">
                The partnership model is best understood as a working system:
                police-led capability, reserve-level support, and conservation
                expertise reinforcing one another.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10 bg-black/5 lg:border-l lg:border-t-0">
              {partnershipApproach.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-5 p-7 sm:grid-cols-[90px_1fr] sm:p-8"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="mt-4 text-3xl font-black text-white/20">
                        {item.number}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-8 text-white/75">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 xl:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Delivery focus</Eyebrow>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-900">
              What each partnership stream makes possible.
            </h2>

            <p className="mt-5 leading-8 text-stone-700">
              Each stakeholder group contributes a different part of the
              response. Together, they strengthen intelligence gathering,
              training, operational readiness, reserve security, community
              co-operation, and public awareness.
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10">
              <SmartImage
                src={lowveldImage}
                alt="Lowveld wildlife landscape"
                wrapperClassName="min-h-[280px] bg-[#d6d4cd]"
                position="center"
              />
            </div>
          </div>

          <div className="space-y-0">
            {partnershipApproach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-5 border-t border-black/10 py-8 first:border-t-0 first:pt-0 md:grid-cols-[180px_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
                    NO. {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-stone-900">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="grid gap-3 sm:grid-cols-[auto_1fr]"
                    >
                      <ArrowRight className="mt-1 h-4 w-4 text-[#5f6858]" />

                      <p className="text-sm leading-7 text-stone-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Our partners"
          title="Organisations supporting the work"
          body="These organisations contribute funding, technical expertise, conservation experience, technology, local knowledge, or law-enforcement capability to strengthen wildlife protection in Zimbabwe."
        />

        <AnimatedGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <PartnerLogoPanel key={partner.name} partner={partner} />
          ))}
        </AnimatedGrid>
      </Section>

      <Section>
        <div>
          <div className="mb-10">
            <Eyebrow>Board of trustees</Eyebrow>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-900 sm:text-5xl">
              Experienced leadership and oversight.
            </h2>

            <p className="mt-5 max-w-5xl text-lg leading-9 text-stone-700">
              The trust&apos;s leadership brings together conservation
              management, rhino protection, field operations, and
              law-enforcement expertise.
            </p>
          </div>

          <div className="divide-y divide-black/10 rounded-[2rem] border border-black/10 bg-white/25 shadow-lg shadow-black/5 backdrop-blur">
            {trustees.map((person) => (
              <div key={person.name} className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f6858]">
                  Trustee
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight text-stone-900">
                  {person.name}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#5f6858]">
                  {person.role}
                </p>

                <p className="mt-5 text-base leading-8 text-stone-700">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <SmartImage
            src={animalImageFour}
            alt="Wildlife protection and conservation work"
            wrapperClassName="min-h-[360px] rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10"
            position="center"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url(${animalImageThree})`,
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(214,212,205,0.98)_0%,rgba(214,212,205,0.92)_50%,rgba(214,212,205,0.76)_100%)]" />

            <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-7 sm:p-10">
                <Eyebrow>Technical advisory team</Eyebrow>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[#3f473a] sm:text-4xl">
                  Specialist knowledge supporting delivery.
                </h2>

                <p className="mt-5 leading-8 text-stone-700">
                  The advisory team spans legal, veterinary, conservation,
                  strategy, and international law expertise.
                </p>
              </div>

              <div className="divide-y divide-black/10 border-t border-black/10 bg-white/20 lg:border-l lg:border-t-0">
                {advisors.map((advisor) => (
                  <div
                    key={advisor}
                    className="px-7 py-5 text-sm leading-7 text-stone-700 sm:px-8"
                  >
                    {advisor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-black/10 bg-[#3f473a] p-7 text-center shadow-2xl shadow-black/10 sm:p-10">
          <ShieldCheck className="mx-auto h-10 w-10 text-white/70" />

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Strong partnerships are the foundation of pre-emptive wildlife
            protection.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/75">
            PROACTIVE exists to help connect the people, systems, knowledge, and
            resources needed to protect Zimbabwe&apos;s wildlife heritage before
            the cost of inaction becomes irreversible.
          </p>
        </div>
      </Section>
    </div>
  );
}
