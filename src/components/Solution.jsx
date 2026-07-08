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

        <div className="mt-16">
          <img
            src={`${import.meta.env.BASE_URL}lumain-5day-process.png`}
            alt="Lumain 5일 프로세스 타임라인"
            className="w-full rounded-3xl shadow-card-lg ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  )
}
