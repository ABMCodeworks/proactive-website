import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GovernancePage from "./pages/GovernancePage";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import WorkPage from "./pages/WorkPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#ecebe7] text-[#1d241d]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-work" element={<WorkPage />} />
          <Route path="/get-involved" element={<ContactPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
