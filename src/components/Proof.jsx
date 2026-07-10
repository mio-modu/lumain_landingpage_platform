const proofs = [
  {
    icon: '✅',
    title: '사업자등록 신청 당일 승인',
    desc: '대표가 직접 신청 전 과정을 겪고 검증한 실행 기록입니다.',
  },
  {
    icon: '🚀',
    title: '3일 만에 2개 채널 입점 완료',
    desc: '네이버 스마트스토어 · 토스쇼핑, 두 플랫폼에 동시 입점했습니다.',
  },
  {
    icon: '🔗',
    title: '공급파트너 API 연동까지 완료',
    desc: '행운프레시와 연동해 상품이 실제로 라이브 판매 중입니다.',
  },
]

export default function Proof() {
  return (
    <section className="py-24 bg-brand-ink/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Proof, Not Promise</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight break-keep">
            말이 아니라, 실행으로 증명합니다
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed break-keep">
            정보성 챗봇이나 1회성 컨설팅과 달리, 처음 발걸음부터 함께하고 실제 성과 데이터로 검증합니다.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {proofs.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-8 shadow-card hover:shadow-card-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-gradient/10 flex items-center justify-center text-2xl">
                {p.icon}
              </div>
              <h3 className="mt-5 text-base font-bold text-brand-ink break-keep">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed break-keep">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
