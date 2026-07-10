const plans = [
  {
    tag: 'L1',
    name: '창업 셋업',
    price: '무료 ~ 건당 1,000원',
    featured: false,
    live: true,
    features: ['사업자등록·통신판매업·입점 실시간 질의응답', 'AI 창업 진단 · 창업 따라가기 (체크리스트)', 'AI 지원금 매칭'],
  },
  {
    tag: 'L2',
    name: 'CS + 재무/세금',
    price: '월 9,900원',
    featured: false,
    live: false,
    features: ['고객 CS 응대 지원', '세금 신고 안내', '정산 관리'],
  },
  {
    tag: 'L3',
    name: '소싱 확장',
    price: '월 19,900원',
    featured: false,
    live: false,
    features: ['검증된 공급처 발굴', '소싱 품목 확장 지원'],
  },
  {
    tag: 'L4',
    name: '실전 판매 시그널',
    price: '월 49,900원',
    priceNote: '오픈 초기 29,900원',
    featured: true,
    badge: '출시 예정',
    live: false,
    features: ['검증된 상위 판매자 데이터 기반 정보', '1:1 멘토링 매칭', '유료 강의·자료 연결'],
  },
]

const policies = [
  'L1(창업 셋업)은 지금 무료로 이용하실 수 있으며, L2~L4는 순차적으로 오픈될 예정입니다',
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
        L1부터 L4까지, 성장 단계에 맞춰 열리는 구독형 구조입니다. 아래 가격은 베타 운영 결과에 따라 조정될 수 있는
        잠정안이며, 지금은 L1(창업 셋업)의 진단·따라가기 기능을 무료로 체험해보실 수 있어요.
      </p>

      <div className="flex flex-col gap-2.5 mb-7">
        {plans.map((p) => (
          <div
            key={p.tag}
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
              <div className="text-[13px] font-bold text-noir-muteddim tracking-wide uppercase">
                {p.tag} · {p.name}
                {p.live && (
                  <span className="ml-2 normal-case text-[10px] font-bold text-noir-gold">지금 이용 가능</span>
                )}
              </div>
              <div className="text-right">
                <div className="text-[17px] font-bold text-noir-gold break-keep">{p.price}</div>
                {p.priceNote && <div className="text-[10.5px] text-noir-muteddim">{p.priceNote}</div>}
              </div>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-noir-muted leading-relaxed pl-4 relative break-keep">
                  <span className="absolute left-0 top-0 text-noir-golddim">—</span>
                  {f}
                </li>
              ))}
            </ul>
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
