const steps = [
  {
    day: 'Day 1',
    icon: '🚀',
    title: 'AI 비즈니스 구조화',
    desc: '아이템·시장을 분석해 최적의 사업 구조를 설계합니다.',
  },
  {
    day: 'Day 2',
    icon: '📝',
    title: '사업자 등록',
    desc: '행정 절차를 AI가 안내하며 등록을 진행합니다.',
  },
  {
    day: 'Day 3',
    icon: '✍️',
    title: 'AI 콘텐츠 생성',
    desc: '상세페이지·상품 콘텐츠를 AI가 생성합니다.',
  },
  {
    day: 'Day 4',
    icon: '🔗',
    title: '플랫폼 통합',
    desc: '주요 쇼핑몰 플랫폼과 자동으로 연동합니다.',
  },
  {
    day: 'Day 5',
    icon: '🛒',
    title: '판매 준비 완료',
    desc: '검수를 마친 스토어가 오픈, 바로 판매를 시작합니다.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Solution</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight">
            Lumain만의 5단계 비즈니스 알고리즘
          </h2>
        </div>

        <div id="process" className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.day} className="relative rounded-2xl border border-brand-ink/10 p-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-gradient text-white text-xs font-bold">
                {i + 1}
              </span>
              <p className="mt-4 text-xs font-bold text-brand-mint tracking-wider">{s.day}</p>
              <h3 className="mt-1.5 text-sm font-bold text-brand-ink leading-snug">{s.title}</h3>
              <p className="mt-2 text-xs text-brand-slate leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-brand-ink/[0.03] p-8 md:p-12">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-brand-ink">
            4 Weeks to <span className="bg-brand-gradient bg-clip-text text-transparent">5 Days</span>
          </h3>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-4">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-24 h-40 rounded-xl bg-gradient-to-b from-orange-400 to-red-500 flex items-end justify-center pb-3">
                <span className="text-white text-xs font-bold leading-tight text-center px-1">
                  4 Weeks
                  <br />
                  (28 Days)
                </span>
              </div>
              <p className="mt-3 text-xs font-bold text-brand-ink">전통적 방식</p>
            </div>

            <div className="hidden md:flex text-3xl text-brand-mint">→</div>

            <div className="flex-1 grid grid-cols-5 gap-2 md:gap-3 w-full">
              {steps.map((s) => (
                <div key={s.day} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-gradient flex items-center justify-center text-xl md:text-2xl shadow-card">
                    {s.icon}
                  </div>
                  <p className="mt-2 text-[11px] md:text-xs font-bold text-brand-ink">{s.day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
