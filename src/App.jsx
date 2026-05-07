import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
