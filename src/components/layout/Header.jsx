import { NavLink } from "react-router-dom";
import { navItems } from "../../data/siteData";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#d6d4cd]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <img
            src="/proactive-logo.png"
            alt="Proactive Wildlife Protection"
            className="h-12 w-auto sm:h-14"
          />
        </NavLink>

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
      </div>
    </header>
  );
}
