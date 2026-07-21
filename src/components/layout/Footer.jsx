import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navItems } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3f473a] text-white">
      <img
        src="/horn-stamp.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 w-[520px] text-white opacity-[0.035]"
      />

      <div className="relative mx-auto grid w-full max-w-[1480px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-10">
        <div>
          <img
            src="/proactive-logo.webp"
            alt="PROACTIVE Wildlife Protection Trust"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
            Connecting partners, information and action to protect Zimbabwe’s
            wildlife and natural ecosystems.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#d6d4cd]">
            Registered PVO · Accountable
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
            Explore
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="text-white/72 hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
            Connect
          </p>
          <a
            href="mailto:admin@proactivewildlife.org"
            className="mt-5 inline-flex items-center gap-3 text-sm text-white/75 hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#d6d4cd]" />
            admin@proactivewildlife.org
          </a>
          <p className="mt-7 max-w-xs text-xs leading-6 text-white/45">
            For operational security, we do not publish photographs or details
            that could identify people involved in sensitive protection work.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs leading-6 text-white/42">
        <p>© {new Date().getFullYear()} PROACTIVE Wildlife Protection Trust · With sincere thanks to Jenny Hishin for the use of her photographs</p>
        <p>
          African hoopoe photograph by{" "}
          <a href="https://commons.wikimedia.org/wiki/File:African_Hoopoe_(Upupa_africana)_(52014881391).jpg" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-white">
            Bernard DUPONT
          </a>{" "}
          via Wikimedia Commons ·{" "}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-white">
            CC BY-SA 2.0
          </a>{" "}
          · Cropped and converted to WebP
        </p>
      </div>
    </footer>
  );
}
