import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PainPoints from './components/PainPoints.jsx'
import Solution from './components/Solution.jsx'
import DiagnosisSection from './components/diagnosis/DiagnosisSection.jsx'
import CTAForm from './components/CTAForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <DiagnosisSection />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
