import { useEffect, useRef, useState } from 'react'
import Dial, { PulseDial } from './Dial.jsx'
import ActionAccordion from './ActionAccordion.jsx'
import { questions, buildDiagnosis } from './diagnosisData.js'

const SCREENS = { INTRO: 'intro', QUIZ: 'quiz', LOADING: 'loading', RESULT: 'result' }

export default function DiagnosisQuiz({ onCategoryChange }) {
  const [screen, setScreen] = useState(SCREENS.INTRO)
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [dots, setDots] = useState('.')
  const dotsTimer = useRef(null)

  useEffect(() => {
    if (screen === SCREENS.LOADING) {
      let n = 1
      dotsTimer.current = setInterval(() => {
        n = (n % 3) + 1
        setDots('.'.repeat(n))
      }, 450)
    } else if (dotsTimer.current) {
      clearInterval(dotsTimer.current)
    }
    return () => {
      if (dotsTimer.current) clearInterval(dotsTimer.current)
    }
  }, [screen])

  const startQuiz = () => {
    setQIndex(0)
    setScreen(SCREENS.QUIZ)
  }

  const selectOption = (q, opt) => {
    const nextAnswers = { ...answers, [q.key]: opt }
    setAnswers(nextAnswers)
    const nextIndex = qIndex + 1
    if (nextIndex >= questions.length) {
      runDiagnosis(nextAnswers)
    } else {
      setQIndex(nextIndex)
    }
  }

  const runDiagnosis = async (finalAnswers) => {
    setScreen(SCREENS.LOADING)
    await new Promise((res) => setTimeout(res, 1100))
    const r = buildDiagnosis(finalAnswers)
    setResult(r)
    onCategoryChange?.(finalAnswers.category)
    setScreen(SCREENS.RESULT)
  }

  const restart = () => {
    setAnswers({})
    setQIndex(0)
    setResult(null)
    setScreen(SCREENS.INTRO)
  }

  const dialPct = screen === SCREENS.QUIZ ? qIndex / questions.length : screen === SCREENS.LOADING || screen === SCREENS.RESULT ? 1 : 0
  const dialLit = screen === SCREENS.LOADING || screen === SCREENS.RESULT

  const q = questions[qIndex]

  return (
    <div className="relative bg-noir-card border border-noir-line rounded-md p-8 sm:p-11 pt-9 min-h-[440px] flex flex-col">
      <Dial pct={dialPct} lit={dialLit} />

      <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[.22em] text-noir-gold uppercase mb-5">
        lumain · AI 창업 진단
        <span className="flex-1 h-px bg-noir-line" />
      </div>

      {screen === SCREENS.INTRO && (
        <div className="flex flex-col flex-1 animate-[fadeIn_.4s_ease]">
          <h1 className="font-black text-[27px] leading-[1.4] tracking-tight mb-3 max-w-[430px] text-noir-ink break-keep">
            5일 만에 시작하는
            <br />
            온라인 창업, 먼저 진단하세요
          </h1>
          <p className="text-sm text-noir-muted leading-[1.7] mb-7 max-w-[430px] break-keep">
            5개 질문에 답하면 AI가 창업 유형, 예상 준비기간, 우선 실행 과제를 바로 정리해드립니다. 무료이며, 결과는 저장되지 않습니다.
          </p>
          <div className="mt-auto">
            <button
              onClick={startQuiz}
              className="bg-noir-ink text-noir-bg font-bold text-sm tracking-wide px-8 py-4 rounded hover:opacity-85 active:translate-y-px transition"
            >
              진단 시작하기 →
            </button>
          </div>
        </div>
      )}

      {screen === SCREENS.QUIZ && q && (
        <div className="flex flex-col flex-1 animate-[fadeIn_.4s_ease]">
          <div className="flex items-center gap-2.5 mb-7">
            <span className="text-[11px] font-bold tracking-[.08em] text-noir-muteddim whitespace-nowrap tabular-nums">
              {String(qIndex + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-noir-line relative">
              <i
                className="absolute left-0 -top-px block h-[3px] bg-noir-gold transition-all duration-500"
                style={{ width: `${(qIndex / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-xs font-bold text-noir-gold tracking-[.1em] mb-2.5">QUESTION</div>
          <h1 className="font-black text-[21px] leading-[1.4] tracking-tight mb-1.5 text-noir-ink break-keep">{q.text}</h1>
          <div className="flex flex-col gap-2 mt-1.5">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => selectOption(q, opt)}
                className={`text-left border rounded px-4 py-4 text-sm font-medium text-noir-ink flex items-center justify-between gap-3 transition-colors group ${
                  answers[q.key] === opt ? 'border-noir-gold bg-noir-gold/[0.09]' : 'border-noir-line hover:border-noir-golddim hover:bg-noir-gold/5'
                }`}
              >
                <span className="break-keep">{opt}</span>
                <span className="text-noir-muteddim opacity-0 group-hover:opacity-100 group-hover:text-noir-gold transition-opacity shrink-0">→</span>
              </button>
            ))}
          </div>
          {qIndex > 0 && (
            <button
              onClick={() => setQIndex(qIndex - 1)}
              className="mt-5 text-xs text-noir-muteddim hover:text-noir-muted self-start bg-transparent border-none cursor-pointer"
            >
              ← 이전 질문
            </button>
          )}
        </div>
      )}

      {screen === SCREENS.LOADING && (
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-5">
          <PulseDial />
          <div className="text-xs font-medium text-noir-muted tracking-wide">
            AI가 답변을 분석하고 있습니다<span className="text-noir-gold font-bold">{dots}</span>
          </div>
        </div>
      )}

      {screen === SCREENS.RESULT && result && (
        <div className="flex flex-col flex-1 animate-[fadeIn_.4s_ease]">
          <ResultBody r={result} />
          <div className="mt-auto pt-2 flex flex-col items-center gap-3">
            <button
              onClick={restart}
              className="bg-transparent text-noir-muted border border-noir-line font-medium text-sm px-8 py-3.5 rounded hover:text-noir-ink hover:border-noir-golddim transition"
            >
              처음부터 다시 진단하기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function ResultBody({ r }) {
  return (
    <div>
      <div className="text-[11px] font-bold text-noir-gold tracking-[.16em] uppercase mb-2.5">진단 결과</div>
      <h1 className="font-black text-2xl leading-[1.35] tracking-tight mb-3 text-noir-ink break-keep">{r.archetype}</h1>
      <p className="text-[13.5px] text-noir-muted leading-[1.7] mb-6 break-keep">{r.archetype_description}</p>

      <div className="flex gap-px mb-6 border border-noir-line rounded overflow-hidden">
        <div className="flex-1 bg-white/[0.02] px-4 py-4 text-center">
          <div className="text-[10.5px] font-semibold tracking-wide text-noir-muteddim mb-1.5 uppercase">예상 준비기간</div>
          <div className="text-lg font-bold text-noir-gold">{r.prep_days}</div>
        </div>
        <div className="flex-1 bg-white/[0.02] px-4 py-4 text-center border-l border-noir-line">
          <div className="text-[10.5px] font-semibold tracking-wide text-noir-muteddim mb-1.5 uppercase">예상 초기비용</div>
          <div className="text-lg font-bold text-noir-gold">{r.initial_cost_range}</div>
        </div>
      </div>

      <SectionTitle>초기비용 세부 내역</SectionTitle>
      <ul className="list-none m-0 mb-6 border border-noir-line rounded overflow-hidden">
        {r.cost_breakdown.map(([label, amount], i) => (
          <li
            key={label}
            className={`flex justify-between gap-3 px-3.5 py-2.5 text-xs text-noir-muted ${i > 0 ? 'border-t border-noir-line' : ''}`}
          >
            <span className="break-keep">{label}</span>
            <b className="text-noir-ink font-semibold shrink-0">{amount}</b>
          </li>
        ))}
      </ul>

      <SectionTitle>단계별 실행 과제 · 클릭하면 상세 내용이 열려요</SectionTitle>
      <ActionAccordion actions={r.actions} />

      <SectionTitle>주의할 점</SectionTitle>
      <ul className="list-none m-0 mb-6 flex flex-col gap-2.5">
        {r.watch_outs.map((w) => (
          <li key={w} className="text-[13.5px] text-noir-muted leading-relaxed pl-4 relative break-keep">
            <span className="absolute left-0 top-0 text-noir-danger font-bold">!</span>
            {w}
          </li>
        ))}
      </ul>

      <div className="text-[11px] font-bold tracking-[.14em] uppercase text-noir-muteddim mb-3 pb-2.5 border-b border-noir-line text-center">
        추천 lumain 기능
      </div>
      <div className="flex flex-wrap gap-2 mb-2 justify-center">
        {r.recommended_features.map((f) => (
          <span
            key={f}
            className="text-xs font-semibold text-noir-gold border border-noir-golddim rounded-[3px] px-3.5 py-1.5"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="text-[11px] font-bold tracking-[.14em] uppercase text-noir-muteddim mb-3 pb-2.5 border-b border-noir-line">
      {children}
    </div>
  )
}
