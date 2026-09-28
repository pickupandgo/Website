import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DispatchModal } from './components/DispatchModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { DriverPartnersPage } from './pages/DriverPartnersPage';
import { SafetyPage } from './pages/SafetyPage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPage } from './pages/RefundPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';
import { GrievancePage } from './pages/GrievancePage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [dispatchModalOpen, setDispatchModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#181c20]">
        <Header onOpenDispatch={() => setDispatchModalOpen(true)} />
        
        <main className="grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage onOpenDispatch={() => setDispatchModalOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onOpenDispatch={() => setDispatchModalOpen(true)} />} />
            <Route path="/how-it-works" element={<HowItWorksPage onOpenDispatch={() => setDispatchModalOpen(true)} />} />
            <Route path="/vehicles" element={<VehiclesPage onOpenDispatch={() => setDispatchModalOpen(true)} />} />
            <Route path="/driver-partners" element={<DriverPartnersPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-cancellation" element={<RefundPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
            <Route path="/grievance-redressal" element={<GrievancePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        <DispatchModal
          isOpen={dispatchModalOpen}
          onClose={() => setDispatchModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
