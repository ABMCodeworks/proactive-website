import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { navItems } from "../../data/siteData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#d6d4cd]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/proactive-logo.webp"
            alt="PROACTIVE Wildlife Protection Trust"
            width="180"
            height="72"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-12 w-auto sm:h-14"
          />
        </NavLink>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#5f6858] text-white"
                    : "text-stone-700 hover:bg-black/5 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/35 text-stone-900 transition hover:bg-white/60 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen ? (
        <div className="border-t border-black/10 bg-[#d6d4cd] px-6 py-4 shadow-xl shadow-black/10 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#5f6858] text-white"
                      : "text-stone-700 hover:bg-black/5 hover:text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
