import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import LeadershipSection from './components/LeadershipSection'
import SalesAssistantSection from './components/SalesAssistantSection'
import ManagementSuiteSection from './components/ManagementSuiteSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'
import ContactSection from './components/ContactSection'
import RealEstateInsightsSection from './components/RealEstateInsightsSection'

// Import New Pages
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import SecurityPage from './components/SecurityPage'
import ContactPage from './components/ContactPage'

type PageType = 'home' | 'privacy' | 'terms' | 'contact' | 'security';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  useEffect(() => {
    window.scrollTo({ top: 0 });
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
      case 'home':
      default:
        return (
          <>
            <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />
            <LeadershipSection />
            <SalesAssistantSection />
            <ManagementSuiteSection />
            <KeyFeaturesSection />
            <RealEstateInsightsSection />
            <CallToActionSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar onOpenPopup={() => setIsPopupOpen(true)} onNavigate={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

export default App
