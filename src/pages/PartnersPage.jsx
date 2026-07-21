import { ArrowUpRight } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import ImageStrip from "../components/ui/ImageStrip";
import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { pageSeo } from "../data/seoData";

import heroImage from "../assets/partners-hero.webp";
import zrpLogo from "../assets/partners/zrp-mffu.webp";
import oakLogo from "../assets/partners/oak-foundation.svg";
import alineaLogo from "../assets/partners/alinea-international.webp";
import irfLogo from "../assets/partners/international-rhino-foundation.webp";
import lrtLogo from "../assets/partners/lowveld-rhino-trust.webp";
import ezytrackLogo from "../assets/partners/ezytrack.webp";
import stopRhinoPoachingLogo from "../assets/partners/stop-rhino-poaching.webp";
import fieldBriefing from "../assets/home-slideshow/slide-6.webp";
import sharedInformation from "../assets/home-slideshow/slide-20.webp";
import radioCoordination from "../assets/home-slideshow/slide-23.webp";

const partners = [
  {
    name: "Zimbabwe Republic Police",
    subtitle: "MFFU",
    type: "Law-enforcement partner",
    website: "",
    logo: zrpLogo,
    description: "The Zimbabwe Republic Police Minerals, Flora and Fauna Unit supports law-enforcement efforts linked to the protection of wildlife and natural resources. The unit plays an important role in wildlife crime response, enforcement collaboration, and the protection of Zimbabwe’s natural heritage.",
  },
  {
    name: "Oak Foundation",
    type: "Funding partner",
    website: "https://oakfnd.org/",
    logo: oakLogo,
    description: "The Oak Foundation is a major international philanthropic foundation that provides financial support to nonprofit organisations working to address some of the world’s most pressing social and environmental challenges. The organisation works with partner NGOs across dozens of countries, providing grants and long-term support to programmes that aim to create meaningful and lasting change.",
  },
  {
    name: "Alinea International",
    type: "Development partner",
    website: "https://www.alineainternational.com/",
    logo: alineaLogo,
    description: "Alinea International is a global international development consultancy that provides technical expertise and project management to support social, economic, and environmental development around the world. It works with governments, multilateral institutions, private sector partners, and local communities to design and implement development programmes.",
  },
  {
    name: "International Rhino Foundation",
    type: "Conservation partner",
    website: "https://rhinos.org/",
    logo: irfLogo,
    description: "The International Rhino Foundation is a global nonprofit organisation dedicated to the conservation and protection of the world’s five remaining rhinoceros species. Its work focuses on anti-poaching efforts, biological management, habitat protection, scientific research, and community partnerships in key rhino range countries across Africa and Asia.",
  },
  {
    name: "Stop Rhino Poaching",
    type: "Conservation partner",
    website: "https://www.stoprhinopoaching.com/",
    logo: stopRhinoPoachingLogo,
    description: "Stop Rhino Poaching is a specialist conservation organisation supporting strategic, needs-led interventions that strengthen rhino protection in Africa.",
  },
  {
    name: "Lowveld Rhino Trust",
    type: "Zimbabwean conservation partner",
    website: "https://www.lowveldrhinotrust.org/",
    logo: lrtLogo,
    description: "The Lowveld Rhino Trust is a Zimbabwean conservation organisation dedicated to protecting and increasing populations of black and white rhinos, particularly in the south-eastern Lowveld region of Zimbabwe. Its work focuses on intensive rhino monitoring, veterinary care, translocations to safer habitats, community engagement, and supporting anti-poaching efforts.",
  },
  {
    name: "Ezytrack Zimbabwe",
    type: "Technology partner",
    website: "https://www.ezytrack.co.zw/",
    logo: ezytrackLogo,
    description: "Ezytrack Zimbabwe is a Zimbabwe-based technology company that provides GPS vehicle tracking and fleet management solutions. Its services include live vehicle tracking, driver behaviour monitoring, geofencing, and vehicle recovery support through 24-hour monitoring systems.",
  },
];

export default function PartnersPage() {
  return (
    <div>
      <Seo {...pageSeo.partners} />
      <PageHero
        eyebrow="Our partners"
        title="The network behind the work."
        body="PROACTIVE works alongside law enforcement, funders, conservation organisations, development specialists and technology partners to strengthen wildlife protection in Zimbabwe."
        image={heroImage}
        imageAlt="Close portrait of a black rhino"
        position="center"
        align="right"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Partnership first</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a] sm:text-6xl">
              Different strengths. Shared responsibility.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#596258]">
            Each partner contributes a different part of the response—from
            authority and intelligence to funding, field experience, specialist
            conservation knowledge and technology. Together, these capabilities
            form a stronger and more accountable protection network.
          </p>
        </div>
        <div className="mt-12">
          <ImageStrip
            images={[
              { src: fieldBriefing, alt: "A conservation team moving together along a field track" },
              { src: sharedInformation, alt: "Conservation colleagues reviewing information in the field" },
              { src: radioCoordination, alt: "A conservation team member coordinating by radio" },
            ]}
          />
        </div>
      </Section>

      <Section className="border-t border-[#3f473a]/10 bg-[#d6d4cd]">
        <div className="divide-y divide-[#3f473a]/15 border-y border-[#3f473a]/15">
          {partners.map((partner) => (
            <article key={partner.name} className="grid gap-8 py-10 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-14 lg:py-14">
              <div>
                <div className="flex min-h-32 items-center">
                  {partner.logo ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-28 max-w-[320px] object-contain" />
                  ) : (
                    <div className="font-serif text-4xl leading-none text-[#3f473a]">Stop Rhino<br />Poaching</div>
                  )}
                </div>
                <h2 className="mt-5 font-serif text-3xl text-[#3f473a]">{partner.name}</h2>
                {partner.subtitle ? (
                  <p className="mt-1 text-sm font-black uppercase tracking-[0.16em] text-[#5f6858]">{partner.subtitle}</p>
                ) : null}
                {partner.website ? (
                  <a href={partner.website} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-[#5f6858] underline underline-offset-4">
                    Visit website <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <p className="text-base leading-8 text-[#596258]">{partner.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
