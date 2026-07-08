const steps = [
  {
    day: 'Day 1',
    title: 'AI 비즈니스 구조화 및 사업자 등록',
    desc: '알고리즘이 아이템과 시장을 분석해 최적의 사업 구조를 설계하고, 등록 절차를 자동 진행합니다.',
  },
  {
    day: 'Day 2',
    title: 'AI 콘텐츠 생성 및 플랫폼 통합',
    desc: '상세페이지·상품 콘텐츠를 AI가 생성하고, 주요 쇼핑몰 플랫폼과 자동으로 연동합니다.',
  },
  {
    day: 'Day 3',
    title: '판매 준비 완료 및 자동 런칭',
    desc: '검수를 마친 스토어가 자동으로 오픈되며, 바로 판매를 시작할 수 있는 상태로 인도됩니다.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Solution</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight">
            Lumain만의 3단계 비즈니스 알고리즘
          </h2>
        </div>

        <div id="process" className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.day} className="relative rounded-2xl border border-brand-ink/10 p-8">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gradient text-white text-sm font-bold">
                {i + 1}
              </span>
              <p className="mt-5 text-xs font-bold text-brand-mint tracking-wider">{s.day}</p>
              <h3 className="mt-2 text-lg font-bold text-brand-ink leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <img
            src={`${import.meta.env.BASE_URL}process-timeline.png`}
            alt="Lumain 3일 프로세스 타임라인"
            className="w-full rounded-3xl shadow-card-lg ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  )
}
