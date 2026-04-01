import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SocialProof from './components/SocialProof'
import LeadershipSection from './components/LeadershipSection'
import SalesAssistantSection from './components/SalesAssistantSection'
import ManagementSuiteSection from './components/ManagementSuiteSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'
import ContactSection from './components/ContactSection'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <NavBar onOpenPopup={() => setIsPopupOpen(true)} />
      <main>
        <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />
        <SocialProof />
        <LeadershipSection />
        <SalesAssistantSection />
        <ManagementSuiteSection />
        <KeyFeaturesSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

export default App
