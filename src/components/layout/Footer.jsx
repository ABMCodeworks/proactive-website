import { NavLink } from "react-router-dom";
import { navItems } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-[#d9d7d1]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <img
            src="/proactive-logo.png"
            alt="Proactive Wildlife Protection"
            className="h-12 w-auto"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="transition hover:text-black"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
