import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import PageHero from "../components/ui/PageHero";
import Seo from "../components/seo/Seo";

import { trustees, advisors } from "../data/siteData";
import { pageSeo } from "../data/seoData";

import oakFoundationLogo from "../assets/partners/oak-foundation.webp";
import internationalRhinoFoundationLogo from "../assets/partners/international-rhino-foundation.webp";
import rhinoRecoveryFundLogo from "../assets/partners/rhino-recovery-fund.webp";
import alineaInternationalLogo from "../assets/partners/alinea-international.webp";
import lowveldRhinoTrustLogo from "../assets/partners/lowveld-rhino-trust.webp";
import ezytrackLogo from "../assets/partners/ezytrack.webp";
import zrpMmfuLogo from "../assets/partners/zrp-mffu.webp";

const partners = [
  {
    name: "Oak Foundation",
    website: "https://oakfnd.org/",
    logo: oakFoundationLogo,
    description:
      "The Oak Foundation is a major international philanthropic foundation that provides financial support to nonprofit organisations working to address some of the world’s most pressing social and environmental challenges.",
    focus:
      "The foundation supports initiatives that promote human rights, environmental sustainability, social justice, and the protection of vulnerable populations.",
  },
  {
    name: "International Rhino Foundation",
    website: "https://rhinos.org/",
    logo: internationalRhinoFoundationLogo,
    description:
      "The International Rhino Foundation is a global nonprofit organisation dedicated to the conservation and protection of the world’s five remaining rhinoceros species.",
    focus:
      "Its work focuses on anti-poaching efforts, biological management, habitat protection, scientific research, and community partnerships in key rhino range countries across Africa and Asia.",
  },
  {
    name: "Rhino Recovery Fund",
    website: "https://wildnet.org/wildlife-fund/rhino-recovery-fund/",
    logo: rhinoRecoveryFundLogo,
    description:
      "The Rhino Recovery Fund is a global conservation funding initiative created by the Wildlife Conservation Network to support projects that protect and restore the world’s remaining rhino populations.",
    focus:
      "The fund invests in anti-poaching operations, wildlife crime prevention, habitat protection, and community engagement programmes that encourage local people to participate in rhino conservation.",
  },
  {
    name: "Alinea International",
    website: "https://www.alineainternational.com/",
    logo: alineaInternationalLogo,
    description:
      "Alinea International is a global international development consultancy that provides technical expertise and project management to support social, economic, and environmental development around the world.",
    focus:
      "The organisation works with governments, multilateral institutions, private sector partners, and local communities to design and implement development programmes that improve livelihoods and strengthen institutions.",
  },
  {
    name: "Lowveld Rhino Trust",
    website: "https://www.lowveldrhinotrust.org/",
    logo: lowveldRhinoTrustLogo,
    description:
      "The Lowveld Rhino Trust is a Zimbabwean conservation organisation dedicated to protecting and increasing populations of black and white rhinos, particularly in the south-eastern Lowveld region of Zimbabwe.",
    focus:
      "Its work includes intensive rhino monitoring, veterinary care, translocations to safer habitats, community engagement, research, and support for anti-poaching efforts.",
  },
  {
    name: "Ezytrack Zimbabwe",
    website: "https://www.ezytrack.co.zw/",
    logo: ezytrackLogo,
    description:
      "Ezytrack Zimbabwe is a Zimbabwe-based technology company that provides GPS vehicle tracking and fleet management solutions for businesses and individuals.",
    focus:
      "Its services include live vehicle tracking, driver behaviour monitoring, geofencing, vehicle recovery support, and 24-hour monitoring systems.",
  },
  {
    name: "Zimbabwe Republic Police – MMFU",
    website: "",
    logo: zrpMmfuLogo,
    description:
      "The Zimbabwe Republic Police Minerals, Flora and Fauna Unit supports law-enforcement efforts linked to the protection of wildlife and natural resources.",
    focus:
      "The unit plays an important role in wildlife crime response, enforcement collaboration, and protecting Zimbabwe’s natural heritage.",
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

function PartnerCard({ partner }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionWrapper = shouldReduceMotion ? "article" : motion.article;

  return (
    <MotionWrapper
      variants={shouldReduceMotion ? undefined : cardVariants}
      className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/25 shadow-lg shadow-black/5 backdrop-blur transition-colors duration-300 hover:bg-white/40 hover:shadow-xl hover:shadow-black/10"
    >
      <div className="flex min-h-[160px] items-center justify-center border-b border-black/10 bg-white/45 px-8 py-8">
        <SmartLogo src={partner.logo} alt={`${partner.name} logo`} />
      </div>

      <div className="p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5f6858]/15 text-[#5f6858] transition-colors duration-300 group-hover:bg-[#5f6858] group-hover:text-white">
          <ShieldCheck className="h-5 w-5" />
        </div>

        <h3 className="text-2xl font-black text-stone-900">{partner.name}</h3>

        <p className="mt-4 text-sm leading-7 text-stone-700">
          {partner.description}
        </p>

        <div className="mt-5 rounded-2xl border border-black/10 bg-white/35 p-4 transition-colors duration-300 group-hover:bg-white/50">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f6858]">
            Focus
          </p>

          <p className="mt-2 text-sm leading-7 text-stone-700">
            {partner.focus}
          </p>
        </div>

        {partner.website ? (
          <a
            href={partner.website}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#5f6858] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#4f5849]"
          >
            Visit website <ExternalLink className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </MotionWrapper>
  );
}

function TrusteeCard({ person }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionWrapper = shouldReduceMotion ? "article" : motion.article;

  return (
    <MotionWrapper
      variants={shouldReduceMotion ? undefined : cardVariants}
      className="rounded-[1.6rem] border border-black/10 bg-white/25 p-6 shadow-lg shadow-black/5 backdrop-blur transition-colors duration-300 hover:bg-white/35 hover:shadow-xl hover:shadow-black/10"
    >
      <div className="inline-block rounded-full border border-[#5f6858]/25 bg-[#5f6858]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#5f6858]">
        Trustee
      </div>

      <h3 className="mt-4 text-2xl font-black text-stone-900">{person.name}</h3>

      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#5f6858]">
        {person.role}
      </p>

      <p className="mt-4 text-sm leading-7 text-stone-700">{person.bio}</p>
    </MotionWrapper>
  );
}

export default function PartnersPage() {
  return (
    <div>
      <Seo {...pageSeo.partners} />

      <PageHero
        eyebrow="Partners"
        title="Collaboration is at the centre of the PROACTIVE model"
        body="PROACTIVE works alongside conservation funders, specialist organisations, technology partners, local trusts, and law-enforcement structures to strengthen wildlife protection in Zimbabwe."
      />

      <Section>
        <SectionHeader
          eyebrow="Our partners"
          title="Working together to protect wildlife"
          body="Each partner contributes specialist knowledge, funding, operational support, technology, or law-enforcement capability to help strengthen long-term conservation outcomes."
        />

        <AnimatedGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </AnimatedGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Board of trustees"
          title="Experienced leadership and oversight"
          body="The trust's leadership brings together conservation management, rhino protection, field operations, and law-enforcement expertise."
        />

        <AnimatedGrid className="grid gap-5 lg:grid-cols-2">
          {trustees.map((person) => (
            <TrusteeCard key={person.name} person={person} />
          ))}
        </AnimatedGrid>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 shadow-lg shadow-black/5 backdrop-blur md:p-10">
          <SectionHeader
            eyebrow="Technical advisory team"
            title="Specialist knowledge supporting delivery"
            body="The advisory team spans legal, veterinary, conservation, strategy, and international law expertise."
          />

          <AnimatedGrid className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {advisors.map((advisor) => (
              <motion.div
                key={advisor}
                variants={cardVariants}
                className="rounded-2xl border border-black/10 bg-white/30 px-5 py-4 text-sm leading-7 text-stone-700 shadow-sm shadow-black/5 transition-colors duration-300 hover:bg-white/45"
              >
                {advisor}
              </motion.div>
            ))}
          </AnimatedGrid>
        </div>
      </Section>
    </div>
  );
}
