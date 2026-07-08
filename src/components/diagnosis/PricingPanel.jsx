const plans = [
  {
    name: '무료',
    price: '0원',
    featured: false,
    features: ['AI 창업 진단', 'AI 지원금 매칭', '창업 따라가기 (체크리스트)'],
  },
  {
    name: '단건 결제',
    price: '5만원 ~ 20만원',
    featured: false,
    features: ['AI 상세페이지 생성기 — 건당 5만원', '창업 셋업 패키지 — 20만원 (사업자등록·소싱·오픈까지 전 과정 동행)'],
  },
  {
    name: '구독',
    price: '월 9,900원~ (잠정)',
    featured: true,
    badge: '구독형',
    features: [
      'Basic — 마진 대시보드 + 트렌드 리포트',
      'Standard — Basic 전체 + 상세페이지 월 1개',
      'Pro — Standard 전체 + 상세페이지 월 3개 + 1:1 상담',
    ],
    note: '* 구독 등급별 정확한 가격은 베타 운영 결과를 반영해 확정할 예정입니다.',
  },
]

const policies = [
  '결제 수단: 정식 오픈 시 카드 · 간편결제 지원 예정',
  '환불: 단건 서비스는 작업 착수 전, 구독은 다음 결제주기 전 해지 시 환불 가능 (정식 약관은 오픈 시 공지)',
  '구독 해지는 언제든 가능하며, 해지 시 이용 중인 결제주기까지는 기능이 유지됩니다',
  '문의: 루메인(lumain) · 루메인스토어',
]

export default function PricingPanel() {
  return (
    <div className="bg-noir-card border border-noir-line rounded-md p-8 sm:p-11 pt-9">
      <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[.22em] text-noir-gold uppercase mb-5">
        lumain · 요금제
        <span className="flex-1 h-px bg-noir-line" />
      </div>

      <h1 className="font-black text-[23px] leading-[1.4] tracking-tight mb-3 text-noir-ink break-keep">
        무료로 시작해서,
        <br />
        필요한 만큼만 확장하세요
      </h1>
      <p className="text-sm text-noir-muted leading-[1.7] mb-6 break-keep">
        아래 요금제는 정식 서비스 오픈 시 적용될 예정이며, 베타 운영 결과에 따라 조정될 수 있는 잠정안입니다. 지금은 진단·따라가기 기능을 무료로 체험해보실 수 있어요.
      </p>

      <div className="flex flex-col gap-2.5 mb-7">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative border rounded-md px-5 py-4 ${
              p.featured ? 'border-noir-golddim bg-noir-gold/5' : 'border-noir-line bg-white/[0.015]'
            }`}
          >
            {p.badge && (
              <span className="absolute -top-2.5 right-4 bg-noir-gold text-noir-bg text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-[3px]">
                {p.badge}
              </span>
            )}
            <div className="flex justify-between items-baseline gap-3 flex-wrap mb-3">
              <div className="text-[13px] font-bold text-noir-muteddim tracking-wide uppercase">{p.name}</div>
              <div className="text-[17px] font-bold text-noir-gold break-keep">{p.price}</div>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-noir-muted leading-relaxed pl-4 relative break-keep">
                  <span className="absolute left-0 top-0 text-noir-golddim">—</span>
                  {f}
                </li>
              ))}
            </ul>
            {p.note && <p className="text-[11px] text-noir-muteddim mt-3 leading-relaxed break-keep">{p.note}</p>}
          </div>
        ))}
      </div>

      <div className="text-[11px] font-bold tracking-[.14em] uppercase text-noir-muteddim mb-3 pb-2.5 border-b border-noir-line">
        이용 안내
      </div>
      <ul className="list-none m-0 flex flex-col gap-2.5">
        {policies.map((p) => (
          <li key={p} className="text-xs text-noir-muted leading-[1.7] pl-4 relative break-keep">
            <span className="absolute left-0 top-0 text-noir-muteddim font-bold">·</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
