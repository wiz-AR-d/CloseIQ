import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SocialProof from './components/SocialProof'
import LeadershipSection from './components/LeadershipSection'
import SalesAssistantSection from './components/SalesAssistantSection'
import ManagementSuiteSection from './components/ManagementSuiteSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <SocialProof />
        <LeadershipSection />
        <SalesAssistantSection />
        <ManagementSuiteSection />
        <KeyFeaturesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
