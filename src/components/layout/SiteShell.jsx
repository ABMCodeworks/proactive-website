import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-stone-900">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
