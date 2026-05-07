import {
    Shield,
    Users,
    MapPinned,
    Target,
    Landmark,
    Trees,
    HeartHandshake,
} from "lucide-react";

export const navItems = [
    { to: "/", label: "Home" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact Us" },
];

export const stats = [
    {
        value: "90%+",
        label:
            "of Zimbabwe's rhino population represented in the south-east Lowveld focus area",
    },
    {
        value: "Phase 1",
        label: "centred on the wildlife-rich south-east Lowveld of Zimbabwe",
    },
    {
        value: "3",
        label: "core stakeholder groups in the partnership model",
    },
    {
        value: "35 years",
        label: "of combined experience leveraged by the core team",
    },
];

export const pillars = [
    {
        icon: Shield,
        title: "Pre-emptive protection",
        body: "A proactive, information-led model focused on preventing poaching before losses occur.",
    },
    {
        icon: Users,
        title: "Trusted partnerships",
        body: "Built on accountable collaboration between law enforcement, conservancies, NGOs, and communities.",
    },
    {
        icon: MapPinned,
        title: "Lowveld focus",
        body: "Phase 1 prioritises Zimbabwe's south-east Lowveld, home to critically important rhino and elephant populations.",
    },
    {
        icon: Target,
        title: "Operational capability",
        body: "Training, equipping, mentoring, and supporting specialist teams for real-world anti-poaching response.",
    },
];

export const partnerGroups = [
    {
        icon: Landmark,
        title: "ZRP Special Response Team (SRT)",
        description:
            "A hand-picked, highly trained police unit working with the Zimbabwe Republic Police to strengthen intelligence gathering, response capability, lawful intervention, and co-ordinated anti-poaching operations.",
        bullets: [
            "Jurisdiction across private reserves and national parks in Zimbabwe",
            "Police-led response to poaching incursions",
            "Cross-training with scouts, rangers, and partner teams",
            "Links to prosecutors, cyber unit, ballistics, and transboundary agencies",
        ],
    },
    {
        icon: Trees,
        title: "Private Conservancies",
        description:
            "Operational collaboration with private conservancies to improve strategy, training, refresher courses, selection processes, and community engagement linked to conservation outcomes.",
        bullets: [
            "Anti-poaching strategy advisory",
            "Joint operations and refresher courses",
            "Support tailored to each area",
            "Facilitated engagement with neighbouring communities",
        ],
    },
    {
        icon: HeartHandshake,
        title: "Conservation Organisations",
        description:
            "Partnerships with conservation NGOs and related organisations to provide technical support, shared expertise, and broader public awareness around wildlife protection.",
        bullets: [
            "Technical expertise for anti-poaching initiatives",
            "Shared conservation awareness campaigns",
            "Support for strong local collaboration",
            "Broader conservation alignment across stakeholders",
        ],
    },
];

export const trustees = [
    {
        name: "Mike Ball",
        role: "CEO – PROACTIVE Wildlife Protection",
        bio: "Zimbabwean conservation leader with operational anti-poaching, intelligence, training, and law-enforcement collaboration experience.",
    },
    {
        name: "Mark Saunders",
        role: "CEO – The Malilangwe Trust",
        bio: "Experienced conservation executive with deep roots in Zimbabwe and long-standing leadership across major conservation properties and stakeholder relationships.",
    },
    {
        name: "Howard Hunter",
        role: "CEO – Bubye Valley Conservancy",
        bio: "Conservation manager with decades of field and leadership experience in Zimbabwe and Mozambique.",
    },
    {
        name: "Lovemore Mangwashu",
        role: "Operations Co-ordinator – Lowveld Rhino Trust",
        bio: "Former National Parks ranger and chief warden with broad logistical, rhino security, government liaison, and field operations experience.",
    },
    {
        name: "Commissioner Crispen Charumbira",
        role: "Officer Commanding Police, Masvingo Province – Zimbabwe Republic Police",
        bio: "Senior law-enforcement leader with strong criminal investigation and wildlife protection experience.",
    },
];

export const advisors = [
    "George Lock – Senior Legal Practitioner",
    "Hugo van der Westhuizen – Conservation Director, Zimbabwe and Mozambique, Frankfurt Zoological Society",
    "Dr Chap Masterson – Wildlife Veterinarian and SAT-WILD Programmes Co-ordinator",
    "Simon Capon – Director, Gonarezhou Conservation Trust",
    "More Blessing Rusere – International Law Specialist",
    "Jennifer Conaghan – Rhino Behavioural Specialist and Strategy Development",
];
