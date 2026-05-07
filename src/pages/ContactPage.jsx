import { useState } from "react";
import { Mail, Send } from "lucide-react";

import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import ContactRow from "../components/ui/ContactRow";
import { pageSeo } from "../data/seoData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      setStatus({
        type: "success",
        message: result.message || "Thank you. Your message has been sent.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please email admin@proactivewildlife.org directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Seo {...pageSeo.contact} />

      <PageHero
        eyebrow="Contact us"
        title="Connect with PROACTIVE Wildlife Protection Trust"
        body="For partnership discussions, support, or general enquiries, please get in touch by email."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white/30 p-8 md:p-10">
            <h3 className="text-3xl font-black text-stone-900">Get in touch</h3>

            <p className="mt-4 max-w-2xl leading-8 text-stone-700">
              PROACTIVE is building stronger, more accountable partnerships for
              wildlife protection in Zimbabwe.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value="admin@proactivewildlife.org"
                href="mailto:admin@proactivewildlife.org"
              />
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-[0.18em] text-[#5f6858]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#5f6858] focus:bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-[0.18em] text-[#5f6858]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#5f6858] focus:bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-[0.18em] text-[#5f6858]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#5f6858] focus:bg-white"
                  placeholder="Partnership enquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-[0.18em] text-[#5f6858]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#5f6858] focus:bg-white"
                  placeholder="How can we help?"
                />
              </div>

              {status.message ? (
                <div
                  className={
                    status.type === "success"
                      ? "rounded-2xl border border-green-700/20 bg-green-50 px-5 py-4 text-sm font-semibold text-green-900"
                      : "rounded-2xl border border-red-700/20 bg-red-50 px-5 py-4 text-sm font-semibold text-red-900"
                  }
                >
                  {status.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#5f6858] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 transition hover:bg-[#4b5446] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(145deg,rgba(95,104,88,0.92),rgba(70,75,66,0.96))] p-8 shadow-xl shadow-black/10 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
              What PROACTIVE stands for
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Professional partnerships between conservation stakeholders and law-enforcement agencies",
                "Information-led anti-poaching and interdiction",
                "Training, equipping, and mentoring specialist response teams",
                "Long-term protection of endangered wildlife populations",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                  <p className="text-sm leading-7 text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
