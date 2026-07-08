import { useState } from 'react'
import DiagnosisQuiz from './DiagnosisQuiz.jsx'
import TrackerPanel from './TrackerPanel.jsx'
import PricingPanel from './PricingPanel.jsx'

export default function DiagnosisSection() {
  const [tab, setTab] = useState('diagnosis')
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section id="diagnosis" className="relative noir-grid-bg noir-glow py-24 overflow-hidden">
      <div className="relative mx-auto max-w-[600px] px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-noir-gold uppercase tracking-[.22em]">Try It Now</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-noir-ink tracking-tight">
            내 창업, AI가 먼저 진단해드립니다
          </h2>
        </div>

        <div className="flex gap-1 mb-4 border border-noir-line rounded-md p-1 bg-white/[0.015]">
          <button
            onClick={() => setTab('diagnosis')}
            className={`flex-1 text-sm font-bold py-2.5 px-3 rounded transition-colors ${
              tab === 'diagnosis' ? 'bg-noir-ink text-noir-bg' : 'text-noir-muted hover:text-noir-ink'
            }`}
          >
            AI 창업 진단
          </button>
          <button
            onClick={() => setTab('tracker')}
            className={`flex-1 text-sm font-bold py-2.5 px-3 rounded transition-colors ${
              tab === 'tracker' ? 'bg-noir-ink text-noir-bg' : 'text-noir-muted hover:text-noir-ink'
            }`}
          >
            창업 따라가기
          </button>
          <button
            onClick={() => setTab('pricing')}
            className={`flex-1 text-sm font-bold py-2.5 px-3 rounded transition-colors ${
              tab === 'pricing' ? 'bg-noir-ink text-noir-bg' : 'text-noir-muted hover:text-noir-ink'
            }`}
          >
            요금제 안내
          </button>
        </div>

        {tab === 'diagnosis' && <DiagnosisQuiz onCategoryChange={setActiveCategory} />}
        {tab === 'tracker' && <TrackerPanel activeCategory={activeCategory} />}
        {tab === 'pricing' && <PricingPanel />}

        <footer className="text-center text-[11px] font-medium text-noir-muteddim mt-5 tracking-wide">
          lumain — AI로 세상을 밝히고, 새로운 길을 열어가다
        </footer>
      </div>
    </section>
  )
}
