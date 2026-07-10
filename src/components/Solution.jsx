const levels = [
  {
    tag: 'L1',
    name: '창업 셋업',
    price: '무료 ~ 건당 1,000원',
    desc: '사업자등록·통신판매업·입점 관련 실시간 질의응답.',
    status: '지금 이용 가능',
    live: true,
  },
  {
    tag: 'L2',
    name: 'CS + 재무/세금',
    price: '월 9,900원',
    desc: '고객 응대, 세금 신고, 정산 관리를 함께 챙겨드립니다.',
    status: '출시 예정',
    live: false,
  },
  {
    tag: 'L3',
    name: '소싱 확장',
    price: '월 19,900원',
    desc: '검증된 공급처 발굴로 판매 품목을 확장합니다.',
    status: '출시 예정',
    live: false,
  },
  {
    tag: 'L4',
    name: '실전 판매 시그널',
    price: '월 49,900원',
    priceNote: '오픈 초기 29,900원',
    desc: '검증된 상위 판매자의 데이터 기반 실전 정보를 제공합니다.',
    status: '출시 예정',
    live: false,
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Solution</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight break-keep">
            질문 하나로 시작해서,<br className="md:hidden" /> 실전 판매까지 함께 성장하는 4단계
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed break-keep">
            L1부터 무료로 시작해, 필요해지는 순간마다 다음 단계를 열면 됩니다.
          </p>
        </div>

        <div id="process" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {levels.map((lv, i) => (
            <div
              key={lv.tag}
              className={`relative rounded-2xl border p-6 ${
                lv.live ? 'border-brand-blue/30 bg-brand-blue/[0.03]' : 'border-brand-ink/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-gradient text-white text-xs font-bold">
                  {lv.tag}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                    lv.live ? 'bg-brand-mint/15 text-brand-mint' : 'bg-brand-ink/5 text-brand-slate'
                  }`}
                >
                  {lv.status}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold text-brand-ink leading-snug break-keep">{lv.name}</h3>
              <p className="mt-1.5 text-xs font-bold text-brand-blue2 break-keep">
                {lv.price}
                {lv.priceNote && <span className="block text-[10px] font-medium text-brand-slate mt-0.5">{lv.priceNote}</span>}
              </p>
              <p className="mt-2 text-xs text-brand-slate leading-relaxed break-keep">{lv.desc}</p>
              {i < levels.length - 1 && (
                <span className="hidden md:block absolute right-[-19px] top-1/2 -translate-y-1/2 text-base text-brand-ink/20 font-bold">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
