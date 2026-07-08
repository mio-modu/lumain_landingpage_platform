import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gradient" />
          <span className="text-xl font-extrabold tracking-tight text-brand-ink">Lumain</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-slate">
          <a href="#solution" className="hover:text-brand-blue transition-colors">솔루션</a>
          <a href="#process" className="hover:text-brand-blue transition-colors">프로세스</a>
          <a href="#diagnosis" className="hover:text-brand-blue transition-colors">AI 진단</a>
          <a href="#beta-form" className="hover:text-brand-blue transition-colors">베타 신청</a>
        </nav>
        <button
          onClick={scrollToForm}
          className="rounded-full bg-brand-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-brand-blue transition-colors"
        >
          베타 신청
        </button>
      </div>
    </header>
  )
}
