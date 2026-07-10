const pains = [
  {
    icon: '📄',
    title: '막막한 서류 작업과 행정 절차',
    desc: '사업자 등록부터 각종 신고까지, 어디서부터 시작해야 할지 모르는 복잡한 행정 프로세스.',
  },
  {
    icon: '🕒',
    title: '무한한 시간이 드는 상세페이지 제작',
    desc: '카피라이팅, 디자인, 이미지 제작까지 — 콘텐츠 하나에 며칠씩 소요되는 비효율.',
  },
  {
    icon: '🔗',
    title: '복잡한 쇼핑몰 가입 및 API 연동',
    desc: '플랫폼마다 다른 정책과 연동 방식, 반복되는 설정 작업에 소진되는 초기 자원.',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-brand-ink/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Pain Points</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight break-keep">
            창업의 첫 걸음이 가장 무겁습니다
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-8 shadow-card hover:shadow-card-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gradient/10 flex items-center justify-center text-2xl">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-ink break-keep">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed break-keep">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="rounded-3xl bg-brand-ink text-white shadow-card-lg p-8 md:p-12">
            <p className="text-lg md:text-xl italic text-brand-mint leading-relaxed break-keep">
              “버튼을 누르는 챗봇이 아니라,<br className="hidden md:block" />
              실전을 겪어본 사람의 경험이 대화로 학습된 AI.”
            </p>
            <p className="mt-5 text-sm text-white/70 leading-relaxed break-keep">
              정해진 FAQ 트리가 아닌 자유 대화형 AI입니다. 대표가 3일간 겪은 사업자등록·입점·정책자금 신청의
              모든 시행착오가 그대로 지식베이스로 탑재되어 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
