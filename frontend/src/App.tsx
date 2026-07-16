import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SocialProofSection from './components/SocialProofSection'
import ProblemSection from './components/ProblemSection'
import ValuePropsSection from './components/ValuePropsSection'
import FinalCtaSection from './components/FinalCtaSection'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'

// Import New Pages
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import SecurityPage from './components/SecurityPage'
import ContactPage from './components/ContactPage'
import RampTimePage from './components/RampTimePage'
import CoachingPage from './components/CoachingPage'
import QualityAutomationPage from './components/QualityAutomationPage'
import PricingPage from './components/PricingPage'
import AiPersonaPage from './components/AiPersonaPage'
import AiCopilotPage from './components/AiCopilotPage'
import FaqPage from './components/FaqPage'
import CompanyPage from './components/CompanyPage'
import PilotProgramPage from './components/PilotProgramPage'

type PageType = 'home' | 'privacy' | 'terms' | 'contact' | 'security' | 'ramp-time' | 'coaching' | 'ai-persona' | 'ai-copilot' | 'quality-automation' | 'pricing' | 'faq' | 'company' | 'pilot-program';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>('home')

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

  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} onOpenPopup={() => setIsPopupOpen(true)} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

export default App
