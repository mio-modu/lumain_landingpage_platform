import { useEffect, useMemo, useState } from 'react'
import { CATEGORY_LIST, stagesFor } from './diagnosisData.js'

function storageKey(category) {
  return 'lumain_tracker_' + category
}

function loadChecked(category) {
  try {
    const raw = window.localStorage.getItem(storageKey(category))
    if (raw) {
      const arr = JSON.parse(raw)
      if (Array.isArray(arr)) return { set: new Set(arr), ok: true }
    }
    return { set: new Set(), ok: true }
  } catch {
    return { set: new Set(), ok: false }
  }
}

function saveChecked(category, set) {
  try {
    window.localStorage.setItem(storageKey(category), JSON.stringify(Array.from(set)))
    return true
  } catch {
    return false
  }
}

export default function TrackerPanel({ activeCategory }) {
  const [category, setCategory] = useState(activeCategory && CATEGORY_LIST.includes(activeCategory) ? activeCategory : CATEGORY_LIST[0])
  const [checked, setChecked] = useState(() => loadChecked(category).set)
  const [persistOk, setPersistOk] = useState(true)
  const [expandedStage, setExpandedStage] = useState(null)

  useEffect(() => {
    if (activeCategory && CATEGORY_LIST.includes(activeCategory) && activeCategory !== category) {
      setCategory(activeCategory)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  useEffect(() => {
    const { set, ok } = loadChecked(category)
    setChecked(set)
    setPersistOk(ok)
    setExpandedStage(null)
  }, [category])

  const stages = useMemo(() => stagesFor(category), [category])
  const totalItems = stages.reduce((sum, s) => sum + s.detail.length, 0)
  const doneCount = checked.size
  const pct = totalItems ? Math.round((doneCount / totalItems) * 100) : 0

  const stageDone = stages.map((s, si) => s.detail.every((_, ii) => checked.has(si + '-' + ii)))
  const nextIdx = stageDone.findIndex((d) => !d)

  useEffect(() => {
    if (nextIdx !== -1) setExpandedStage(nextIdx)
  }, [category]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (si, ii) => {
    const key = si + '-' + ii
    const next = new Set(checked)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    setChecked(next)
    const ok = saveChecked(category, next)
    setPersistOk(ok)
    setExpandedStage(si)
  }

  return (
    <div className="bg-noir-card border border-noir-line rounded-md p-8 sm:p-11 pt-9">
      <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[.22em] text-noir-gold uppercase mb-5">
        lumain · 창업 따라가기
        <span className="flex-1 h-px bg-noir-line" />
      </div>

      <h1 className="font-black text-[23px] leading-[1.4] tracking-tight mb-3 text-noir-ink">당신의 창업 진행표</h1>
      <p className="text-sm text-noir-muted leading-[1.7] mb-5">
        단계를 체크할 때마다 다음 할 일을 알려드려요. 순서대로 해도 되고, 원하는 순서로 진행해도 괜찮아요.
      </p>

      <div className="flex items-center gap-2.5 mb-5">
        <label className="text-[11.5px] font-bold text-noir-muteddim tracking-wide uppercase">품목</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-white/[0.02] border border-noir-line text-noir-ink text-[13.5px] font-medium px-3 py-2.5 rounded cursor-pointer"
        >
          {CATEGORY_LIST.map((c) => (
            <option key={c} value={c} className="bg-noir-card">
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-[11.5px] font-bold text-noir-muted mb-2 tabular-nums">
          <span>
            {doneCount} / {totalItems} 완료
          </span>
          <span className="text-noir-gold">{pct}%</span>
        </div>
        <div className="h-px bg-noir-line relative">
          <i className="absolute left-0 -top-px block h-[3px] bg-noir-gold transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {nextIdx === -1 ? (
        <div className="border border-noir-line bg-white/[0.02] text-noir-muted rounded px-4 py-3.5 text-sm mb-6 leading-relaxed">
          모든 단계를 완료했어요. 이제 실제 판매를 시작해보세요.
        </div>
      ) : (
        <div className="border border-noir-golddim bg-noir-gold/[0.07] text-noir-ink rounded px-4 py-3.5 text-sm mb-6 leading-relaxed">
          다음으로 할 일 · <b className="text-noir-gold">{stages[nextIdx].title}</b> — {stages[nextIdx].summary}
        </div>
      )}

      <div className="relative">
        {stages.map((s, si) => {
          const isDone = stageDone[si]
          const isActive = si === nextIdx
          const isExpanded = expandedStage === si
          const isLast = si === stages.length - 1
          return (
            <div key={s.title} className={`relative pl-9 ${isLast ? 'pb-1' : 'pb-6'}`}>
              {!isLast && (
                <span
                  className={`absolute left-[13px] top-[26px] bottom-[-4px] w-px ${isDone ? 'bg-noir-golddim' : 'bg-noir-line'}`}
                />
              )}
              <div
                className={`absolute left-0 top-0 w-[27px] h-[27px] rounded-full border flex items-center justify-center text-[11px] font-bold tabular-nums transition-colors duration-300 ${
                  isDone
                    ? 'bg-noir-gold border-noir-gold text-noir-bg'
                    : isActive
                      ? 'border-noir-gold text-noir-gold bg-noir-card'
                      : 'border-noir-line text-noir-muteddim bg-noir-card'
                }`}
              >
                {isDone ? '✓' : String(si + 1).padStart(2, '0')}
              </div>

              <div className="cursor-pointer flex justify-between items-start gap-2.5 pt-0.5" onClick={() => setExpandedStage(isExpanded ? null : si)}>
                <div>
                  <div className={`font-bold text-sm leading-snug ${isDone ? 'text-noir-muted line-through decoration-noir-muteddim' : 'text-noir-ink'}`}>
                    {s.title}
                  </div>
                  <div className="text-xs text-noir-muted mt-1 leading-snug">{s.summary}</div>
                </div>
                <span
                  className={`text-noir-muteddim text-[11px] mt-1 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  ▾
                </span>
              </div>

              <div className="overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{ maxHeight: isExpanded ? 800 : 0 }}>
                <div className="pt-3">
                  {s.detail.map((d, ii) => {
                    const key = si + '-' + ii
                    const isChecked = checked.has(key)
                    return (
                      <div
                        key={key}
                        className="flex items-start gap-2.5 py-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggle(si, ii)
                        }}
                      >
                        <span
                          className={`w-4 h-4 rounded-[3px] border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? 'bg-noir-gold border-noir-gold' : 'border-noir-line'
                          }`}
                        >
                          {isChecked && (
                            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                              <path d="M1 5l2.5 2.5L9 2" stroke="#0A0C11" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className={`text-xs leading-relaxed ${isChecked ? 'text-noir-muteddim line-through' : 'text-noir-muted'}`}>{d}</span>
                      </div>
                    )
                  })}
                  {(s.glossary || []).map((g) => (
                    <div
                      key={g.term}
                      className="bg-noir-gold/[0.07] border border-noir-golddim rounded px-3.5 py-2.5 text-xs text-noir-muted leading-relaxed mt-2"
                    >
                      <b className="text-noir-gold font-bold">{g.term}</b> — {g.explain}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-center text-[10.5px] text-noir-muteddim mt-6 leading-relaxed">
        {persistOk ? '체크 상태는 자동으로 저장됩니다' : '이 화면을 벗어나면 체크 상태가 초기화될 수 있어요 (저장 기능이 지원되지 않는 환경입니다)'}
      </p>
    </div>
  )
}
