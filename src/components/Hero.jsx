export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-brand-mint opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="text-center">
          <p className="text-xs font-bold text-brand-blue2 uppercase tracking-[.2em] mb-4">AI Startup Copilot</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-ink break-keep">
            정해진 답변이 아니라,<br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">실전 경험</span>이 학습된<br />
            AI 창업 코파일럿
          </h1>

          <p className="mt-6 text-lg text-brand-slate leading-relaxed break-keep">
            대표가 창업 3일 만에 겪은 사업자등록·입점·정책자금의<br className="hidden md:block" />
            모든 시행착오가 그대로 담긴 대화형 AI입니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="rounded-full bg-brand-gradient text-white font-semibold px-8 py-4 shadow-card-lg hover:opacity-90 transition-opacity"
            >
              무료로 물어보기
            </button>
            <a
              href="#process"
              className="rounded-full border border-brand-ink/10 text-brand-ink font-semibold px-8 py-4 hover:bg-brand-ink/5 transition-colors"
            >
              어떻게 다른지 보기
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto">
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-brand-ink whitespace-nowrap">3일</p>
              <p className="text-xs text-brand-slate mt-1 break-keep">사업자등록→2채널 입점 실행 증명</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-brand-ink whitespace-nowrap">L1 → L4</p>
              <p className="text-xs text-brand-slate mt-1 break-keep">무료 질문부터 실전 판매까지</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-brand-ink whitespace-nowrap">실전 경험</p>
              <p className="text-xs text-brand-slate mt-1 break-keep">FAQ가 아닌, 겪어본 사람의 AI</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
          <div className="relative rounded-3xl bg-white shadow-card-lg ring-1 ring-black/5 p-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-brand-ink/10">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-mint" />
              <span className="text-sm font-bold text-brand-ink">Lumain AI</span>
              <span className="text-xs text-brand-slate">실전 경험 기반 코파일럿</span>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div className="self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-ink/5 px-4 py-3 text-sm text-brand-ink break-keep">
                스마트스토어 통신판매업 신고, 뭐부터 해야 하나요?
              </div>
              <div className="self-start max-w-[90%] rounded-2xl rounded-tl-sm bg-brand-gradient px-4 py-3 text-sm text-white leading-relaxed break-keep">
                정부24에서 통신판매업 신고부터 접수하세요. 구매안전서비스 이용확인증이 필요해요 — 제가 실제로 겪은 순서 그대로 안내할게요.
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-brand-ink/10">
              <p className="text-[11px] font-bold text-brand-slate uppercase tracking-wider mb-3">성장형 4단계</p>
              <div className="flex items-center gap-2">
                {[
                  { l: 'L1', p: '무료~' },
                  { l: 'L2', p: '9,900원' },
                  { l: 'L3', p: '19,900원' },
                  { l: 'L4', p: '49,900원' },
                ].map((s, i) => (
                  <div key={s.l} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full h-1.5 rounded-full ${i === 0 ? 'bg-brand-gradient' : 'bg-brand-ink/10'}`}
                    />
                    <span className={`text-[11px] font-bold ${i === 0 ? 'text-brand-ink' : 'text-brand-slate'}`}>{s.l}</span>
                    <span className="text-[10px] text-brand-slate whitespace-nowrap">{s.p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
