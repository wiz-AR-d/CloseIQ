import { useState, useEffect, lazy, Suspense } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SocialProofSection from './components/SocialProofSection'
import ProblemSection from './components/ProblemSection'
import ValuePropsSection from './components/ValuePropsSection'
import FinalCtaSection from './components/FinalCtaSection'
import Footer from './components/Footer'

// Lazy Load Secondary Pages & Modals
const PopupForm = lazy(() => import('./components/PopupForm'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const SecurityPage = lazy(() => import('./components/SecurityPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const RampTimePage = lazy(() => import('./components/RampTimePage'));
const CoachingPage = lazy(() => import('./components/CoachingPage'));
const QualityAutomationPage = lazy(() => import('./components/QualityAutomationPage'));
const PricingPage = lazy(() => import('./components/PricingPage'));
const AiPersonaPage = lazy(() => import('./components/AiPersonaPage'));
const AiCopilotPage = lazy(() => import('./components/AiCopilotPage'));
const FaqPage = lazy(() => import('./components/FaqPage'));
const CompanyPage = lazy(() => import('./components/CompanyPage'));
const PilotProgramPage = lazy(() => import('./components/PilotProgramPage'));
const TryPage = lazy(() => import('./components/TryPage'));

type PageType = 'home' | 'privacy' | 'terms' | 'contact' | 'security' | 'ramp-time' | 'coaching' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'faq' | 'company' | 'pilot-program' | 'try';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/try')) {
      return 'try';
    }
    return 'home';
  })

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      if (path.startsWith('/try')) {
        setCurrentPage('try');
      } else {
        setCurrentPage(prev => prev === 'try' ? 'home' : prev);
      }
    };
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  useEffect(() => {
    if (currentPage === 'try') {
      if (!window.location.pathname.startsWith('/try')) {
        window.history.pushState(null, '', '/try');
      }
    } else {
      if (window.location.pathname.startsWith('/try')) {
        window.history.pushState(null, '', '/');
      }
    }
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentPage('home')} />;
      case 'security':
        return <SecurityPage onBack={() => setCurrentPage('home')} />;
      case 'contact':
        return <ContactPage onBack={() => setCurrentPage('home')} />;
      case 'ramp-time':
        return <RampTimePage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'coaching':
        return <CoachingPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'ai-persona':
        return <AiPersonaPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'ai-copilot':
        return <AiCopilotPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'quality-automation':
        return <QualityAutomationPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'faq':
        return <FaqPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'company':
        return <CompanyPage onBack={() => setCurrentPage('home')} />;
      case 'pilot-program':
        return <PilotProgramPage onBack={() => setCurrentPage('home')} />;
      case 'pricing':
        return <PricingPage onBack={() => setCurrentPage('home')} onOpenPopup={() => setIsPopupOpen(true)} />;
      case 'try':
        return <div className="min-h-screen bg-background"></div>;
      case 'home':
      default:
        return (
          <>
            <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />
            <SocialProofSection />
            <ProblemSection />
            <ValuePropsSection />
            <FinalCtaSection onNavigateContact={() => setCurrentPage('contact')} />
          </>
        );
    }
  };

  if (currentPage === 'try') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <TryPage onBack={() => setCurrentPage('home')} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} onOpenPopup={() => setIsPopupOpen(true)} />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          {renderContent()}
        </Suspense>
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Suspense fallback={null}>
        {isPopupOpen && <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
      </Suspense>
    </div>
  )
}

export default App
