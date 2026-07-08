export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-brand-mint opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-4 py-1.5 text-xs font-semibold text-brand-blue">
            대전창조경제혁신센터 Startup:D 선정
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-ink">
            복잡한 온라인 창업,<br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              수학적 알고리즘으로 5일
            </span>{' '}
            만에 끝내세요.
          </h1>

          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            수학 분야 전공자가 설계한 AI 엔진으로<br className="hidden md:block" />
            4주 걸리던 셋업을 5일로 단축합니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToForm}
              className="rounded-full bg-brand-gradient text-white font-semibold px-8 py-4 shadow-card-lg hover:opacity-90 transition-opacity"
            >
              5일 만에 창업하기
            </button>
            <a
              href="#process"
              className="rounded-full border border-brand-ink/10 text-brand-ink font-semibold px-8 py-4 hover:bg-brand-ink/5 transition-colors"
            >
              프로세스 보기
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-2xl font-extrabold text-brand-ink">4주 → 5일</p>
              <p className="text-xs text-brand-slate mt-1">셋업 기간 단축</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-ink">5단계</p>
              <p className="text-xs text-brand-slate mt-1">비즈니스 알고리즘</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-ink">AI 자동화</p>
              <p className="text-xs text-brand-slate mt-1">콘텐츠·연동 전과정</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
          <img
            src={`${import.meta.env.BASE_URL}hero-main.png`}
            alt="Lumain AI 창업 엔진 대시보드"
            className="relative w-full rounded-3xl shadow-card-lg ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  )
}
