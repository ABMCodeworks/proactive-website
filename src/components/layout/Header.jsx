import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { navItems } from "../../data/siteData";

const linkClass = ({ isActive }) =>
  `relative px-1 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] transition ${
    isActive
      ? "text-[#5f6858] after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:bg-[#5f6858]"
      : "text-[#374136] hover:text-[#5f6858]"
  }`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#233022]/10 bg-[#ecebe7]/95 backdrop-blur-xl">
      <div className="bg-[#3f473a] px-5 py-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#ecebe7]/85">
        Registered PVO <span className="mx-2 text-[#d6d4cd]">•</span> Zimbabwe-led
      </div>

      <div className="mx-auto flex min-h-[84px] w-full max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <NavLink to="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <img
            src="/proactive-logo.webp"
            alt="PROACTIVE Wildlife Protection Trust"
            width="180"
            height="72"
            className="h-11 w-auto sm:h-12"
          />
        </NavLink>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}

        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#3f473a]/15 text-[#3f473a] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-[#233022]/10 bg-[#ecebe7] px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto grid max-w-[1480px] gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] ${
                    isActive ? "bg-[#3f473a] text-white" : "text-[#374136]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
