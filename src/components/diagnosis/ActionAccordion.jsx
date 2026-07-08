import { useState } from 'react'

export default function ActionAccordion({ actions }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <ul className="list-none m-0 mb-6">
      {actions.map((act, i) => {
        const isOpen = openIdx === i
        return (
          <li
            key={act.title}
            className="border border-noir-line rounded bg-white/[0.015] mb-2 overflow-hidden"
          >
            <div
              className="flex items-start justify-between gap-3 px-4 py-3.5 cursor-pointer select-none"
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <div className="flex gap-3 items-start">
                <span className="text-[11px] font-bold text-noir-golddim tabular-nums pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="font-bold text-[13.5px] text-noir-ink leading-snug">{act.title}</div>
                  <div className="text-xs text-noir-muted mt-1 leading-snug">{act.summary}</div>
                </div>
              </div>
              <span
                className={`text-noir-muteddim text-[11px] mt-0.5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </div>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? 600 : 0 }}
            >
              <div className="px-4 pb-4 pl-[42px]">
                <ul className="list-none m-0 mb-2.5 pl-4 text-xs text-noir-muted leading-[1.75]">
                  {act.detail.map((d) => (
                    <li key={d} className="mb-1 list-['—'] pl-1">
                      {d}
                    </li>
                  ))}
                </ul>
                {(act.glossary || []).map((g) => (
                  <div
                    key={g.term}
                    className="bg-noir-gold/[0.07] border border-noir-golddim rounded px-3.5 py-2.5 text-xs text-noir-muted leading-relaxed mt-2"
                  >
                    <b className="text-noir-gold font-bold">{g.term}</b> — {g.explain}
                  </div>
                ))}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
