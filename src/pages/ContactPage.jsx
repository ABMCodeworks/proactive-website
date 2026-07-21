import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowUpRight, HandCoins, Handshake, Mail, Send, Wrench } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Seo from "../components/seo/Seo";
import { pageSeo } from "../data/seoData";

import heroImage from "../assets/animal-1.webp";
import rhinoImage from "../assets/animal-6.webp";

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const dpoDonationUrl = import.meta.env.VITE_DPO_DONATION_URL;
const paypalDonationUrl = import.meta.env.VITE_PAYPAL_DONATION_URL;

const waysToHelp = [
  {
    icon: Handshake,
    title: "Partner",
    body: "Bring institutional reach, conservation expertise, technology or funding into a trusted protection network.",
  },
  {
    icon: Wrench,
    title: "Contribute expertise",
    body: "Share specialist knowledge in conservation, law, training, intelligence, veterinary science or organisational development.",
  },
  {
    icon: HandCoins,
    title: "Support delivery",
    body: "Help fund practical training, equipment, information systems and co-ordinated wildlife protection.",
  },
];

export default function ContactPage() {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!recaptchaToken) return;
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Your message could not be sent.");

      setStatus({ type: "success", message: result.message || "Thank you. Your message has been sent." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Please email admin@proactivewildlife.org directly." });
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Seo {...pageSeo.involved} />
      <PageHero
        eyebrow="Get involved"
        title="Make stronger wildlife protection possible."
        body="Every meaningful contribution—funding, knowledge, technology or institutional support—helps the conservation network act sooner and work better."
        image={heroImage}
        imageAlt="Rhino and other wildlife in a Zimbabwean landscape"
        position="center"
      />

      <Section>
        <div className="text-center">
          <p className="eyebrow">Ways to contribute</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl tracking-[-0.035em] text-[#3f473a] sm:text-6xl">Choose the role you can play.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {waysToHelp.map((way) => {
            const Icon = way.icon;
            return (
              <article key={way.title} className="rounded-[1.7rem] border border-[#3f473a]/10 bg-white/45 p-7">
                <Icon className="h-7 w-7 text-[#5f6858]" />
                <h3 className="mt-10 font-serif text-3xl text-[#3f473a]">{way.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#596258]">{way.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="donate" className="bg-[#3f473a] text-white">
        <div id="donate" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6d4cd]">Donate</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">Back practical protection.</h2>
            <p className="mt-6 max-w-lg leading-8 text-white/65">
              Your support strengthens the people, systems and partnerships that
              keep Zimbabwe’s wildlife safer. Choose a secure payment route or
              contact us for alternative giving options.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "DPO Pay",
                note: "Secure card and regional payment options",
                url: dpoDonationUrl,
                subject: "DPO donation details",
              },
              {
                name: "PayPal",
                note: "International online donations",
                url: paypalDonationUrl,
                subject: "PayPal donation details",
              },
            ].map((option) => (
              <article key={option.name} className="rounded-[1.7rem] bg-[#ecebe7] p-7 text-[#3f473a]">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#5f6858]">Donation gateway</p>
                <h3 className="mt-3 font-serif text-4xl">{option.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#596258]">{option.note}</p>
                <a
                  href={option.url || `mailto:admin@proactivewildlife.org?subject=${encodeURIComponent(option.subject)}`}
                  target={option.url ? "_blank" : undefined}
                  rel={option.url ? "noreferrer" : undefined}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#5f6858] px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-white"
                >
                  {option.url ? `Donate with ${option.name}` : `Request ${option.name} details`}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid overflow-hidden rounded-[2rem] border border-[#3f473a]/10 bg-white/45 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[420px]">
            <img src={rhinoImage} alt="White rhino at a waterhole" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] bg-[#3f473a] p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d6d4cd]">Connect directly</p>
              <a href="mailto:admin@proactivewildlife.org" className="mt-3 flex items-center gap-3 text-sm text-white/80 hover:text-white">
                <Mail className="h-4 w-4" /> admin@proactivewildlife.org
              </a>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.035em] text-[#3f473a]">Connect with us.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#596258]">
              Tell us whether you would like to partner, support the work or
              contribute expertise. Sensitive operational information should
              never be sent through this public form.
            </p>

            {recaptchaSiteKey ? (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["name", "Name", "text", "Your name"],
                  ["email", "Email", "email", "your@email.com"],
                ].map(([name, label, type, placeholder]) => (
                  <label key={name} className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#526050]">
                    {label}
                    <input
                      name={name}
                      type={type}
                      required
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="mt-2 w-full rounded-xl border border-[#3f473a]/12 bg-[#ecebe7] px-4 py-3.5 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#5f6858]"
                    />
                  </label>
                ))}
                <label className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#526050] sm:col-span-2">
                  Subject
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Partnership enquiry"
                    className="mt-2 w-full rounded-xl border border-[#3f473a]/12 bg-[#ecebe7] px-4 py-3.5 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#5f6858]"
                  />
                </label>
                <label className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#526050] sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How would you like to get involved?"
                    className="mt-2 w-full resize-none rounded-xl border border-[#3f473a]/12 bg-[#ecebe7] px-4 py-3.5 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#5f6858]"
                  />
                </label>
                <div className="sm:col-span-2">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} onChange={(token) => setRecaptchaToken(token || "")} />
                </div>
                {status.message ? (
                  <p className={`text-sm sm:col-span-2 ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>{status.message}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3f473a] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white disabled:opacity-50 sm:col-span-2 sm:justify-self-start"
                >
                  {isSubmitting ? "Sending…" : "Send enquiry"} <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="mt-8 rounded-[1.5rem] bg-[#d6d4cd] p-6">
                <p className="text-sm leading-7 text-[#4e594d]">
                  The secure web form is being configured. Please email us
                  directly and we will respond as soon as possible.
                </p>
                <a href="mailto:admin@proactivewildlife.org" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#5f6858]">
                  Email PROACTIVE <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
