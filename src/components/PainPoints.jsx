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
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight">
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
              <h3 className="mt-5 text-lg font-bold text-brand-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="rounded-3xl bg-white shadow-card-lg p-6 md:p-10">
            <p className="text-center text-sm font-semibold text-brand-slate mb-6">
              Lumain의 기술적 깊이 — 알고리즘이 문제를 대체합니다
            </p>
            <img
              src={`${import.meta.env.BASE_URL}tech-depth.png`}
              alt="Lumain 기술 아키텍처"
              className="w-full rounded-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
