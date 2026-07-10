export const questions = [
  {
    key: 'category',
    label: 'Q1 / 5',
    text: '어떤 품목으로 창업을 고려하고 계신가요?',
    options: ['뷰티 · 화장품', '건강기능식품', '신선식품 · 농산물', '패션 · 잡화', '아직 품목을 못 정했어요'],
  },
  {
    key: 'budget',
    label: 'Q2 / 5',
    text: '초기에 준비 가능한 자금은 어느 정도인가요?',
    options: ['100만원 이하', '100 ~ 500만원', '500 ~ 1,000만원', '1,000만원 이상'],
  },
  {
    key: 'time',
    label: 'Q3 / 5',
    text: '창업 준비와 운영에 쓸 수 있는 시간은요?',
    options: ['주말에만 가능해요', '평일 포함 주 10시간 이내', '주 20시간 이상 투입 가능', '거의 풀타임으로 가능해요'],
  },
  {
    key: 'experience',
    label: 'Q4 / 5',
    text: '온라인 판매나 사업자 등록 경험이 있으신가요?',
    options: [
      '전혀 없어요, 처음이에요',
      '사업자등록만 해본 적 있어요',
      '스마트스토어 등 온라인 판매 경험 있어요',
      '이미 사업을 운영 중이에요',
    ],
  },
  {
    key: 'goal',
    label: 'Q5 / 5',
    text: '이번 창업의 목표는 무엇에 가까운가요?',
    options: ['소소한 부수입', '본업 전환을 위한 시작', '기존 사업의 확장 · 다각화'],
  },
]

const UNIVERSAL_STEP_1 = {
  title: '사업자등록 & 통신판매업 신고',
  summary: '온라인 판매의 법적 기반부터 갖춥니다',
  detail: [
    '홈택스에서 사업자등록을 신청합니다 (개인 온라인 판매업 기준, 보통 당일~1일 소요)',
    '정부24에서 통신판매업 신고를 접수합니다 (구매안전서비스 이용 확인증 필요)',
    '사업용 계좌·카드를 별도로 만들어 이후 정산과 세무 처리를 단순하게 관리합니다',
  ],
  glossary: [
    {
      term: '통신판매업 신고',
      explain:
        '사업자등록과는 별개로, 온라인으로 상품을 판매하려면 지자체(시·군·구청)에 추가로 신고해야 하는 절차입니다. 스마트스토어 등 오픈마켓 입점 시 사업자등록증과 함께 요구됩니다.',
    },
  ],
}

const CATEGORY_STEP = {
  '뷰티 · 화장품': {
    title: '화장품 판매 규정 확인',
    summary: '화장품은 일반 공산품과 다른 별도 규정이 적용됩니다',
    detail: [
      "공급처가 '화장품책임판매업' 등록이 되어 있는 정식 유통 경로인지 확인합니다",
      '제품의 전성분표, 사용기한, 제조번호 표기가 정확한지 점검합니다',
      '미백·주름개선 등 기능성을 표방한다면 식약처 심사 완료 여부를 반드시 확인합니다',
    ],
    glossary: [
      {
        term: '화장품책임판매업',
        explain:
          '화장품을 수입하거나 유통·판매하려면 반드시 등록해야 하는 사업자 유형입니다. 이 등록이 없는 공급처의 제품은 정식 유통 경로가 아닐 수 있어, 소싱 전에 반드시 확인이 필요합니다.',
      },
    ],
  },
  건강기능식품: {
    title: '건강기능식품 표시·광고 규정 확인',
    summary: '일반 식품과 달리 광고 문구에 엄격한 제한이 있습니다',
    detail: [
      "제품이 식약처가 인정한 '건강기능식품' 원료·인증을 받았는지 확인합니다",
      "'효과', '치료', '완치' 등 의학적 표현은 광고에 사용할 수 없다는 점을 숙지합니다",
      '필요한 경우 건강기능식품 표시·광고 사전심의를 거쳐 상세페이지 문구를 준비합니다',
    ],
    glossary: [
      {
        term: '사전심의',
        explain:
          '건강기능식품의 광고 문구가 과장되거나 허위 표시에 해당하지 않는지 관련 기관에서 미리 확인받는 절차입니다. 심의 없이 과장된 효능을 광고하면 행정처분 대상이 될 수 있습니다.',
      },
    ],
  },
  '신선식품 · 농산물': {
    title: '콜드체인 배송 & 유통기한 표기 확인',
    summary: '신선식품은 배송·표기 방식이 일반 상품과 완전히 다릅니다',
    detail: [
      '공급처가 냉장·냉동 전문 택배(콜드체인)를 사용하는지 확인합니다 — 일반 택배로 보내면 상품이 상할 수 있습니다',
      '박스에 보냉재(아이스팩, 스티로폼 등)가 기본으로 포함되는지 확인합니다',
      '상품 포장에 소비기한(유통기한)과 보관방법을 정확히 표기합니다',
    ],
    glossary: [
      {
        term: '콜드체인',
        explain:
          '상품이 출고돼서 고객에게 도착할 때까지 일정한 저온 상태를 계속 유지하는 물류 체계입니다. 일반 택배와 달리 냉장·냉동 전문 택배사를 이용하거나 보냉 포장을 추가해야 신선도가 유지됩니다.',
      },
      {
        term: '소비기한 (유통기한)',
        explain:
          '식품을 안전하게 섭취할 수 있는 기한을 상품 포장에 표기하는 것으로, 식품 표시기준 법령에 따라 의무적으로 기재해야 합니다. 미표기 시 판매가 제한될 수 있습니다.',
      },
    ],
  },
  '패션 · 잡화': {
    title: '사이즈 가이드 & 반품 정책 설계',
    summary: '반품·교환 비율이 높은 카테고리라 정책 설계가 특히 중요합니다',
    detail: [
      '실측 사이즈표를 상세페이지에 명확히 표기합니다 (브랜드마다 기준이 다르다는 점을 안내)',
      '원단 소재, 세탁 방법, 원산지를 표기합니다',
      '반품·교환 배송비 부담 기준을 미리 정해두어 고객 문의를 줄입니다',
    ],
    glossary: [],
  },
  '아직 품목을 못 정했어요': {
    title: '카테고리 선정 리서치',
    summary: '품목을 정하기 전에 데이터로 먼저 검증합니다',
    detail: [
      '네이버 데이터랩 등에서 후보 카테고리들의 검색량 추이를 비교합니다',
      '스마트스토어 내 동일 카테고리의 판매자 수·리뷰 수로 경쟁 강도를 가늠합니다',
      '공급처에 직접 문의해 최소주문수량(MOQ)과 예상 마진 구조를 먼저 확인합니다',
    ],
    glossary: [
      {
        term: 'MOQ (최소주문수량)',
        explain:
          '공급처가 요구하는 최소 주문 개수입니다. MOQ가 높으면 초기 자본 부담이 커지므로, 소자본으로 시작한다면 MOQ가 낮은 공급처를 우선 고려하는 것이 안전합니다.',
      },
    ],
  },
}

const UNIVERSAL_STEP_3 = {
  title: '공급처 계약 & 테스트 주문',
  summary: '실제 판매 전, 소량으로 먼저 검증합니다',
  detail: [
    '후보 공급처 2~3곳에 견적을 요청해 공급가와 최소주문수량(MOQ)을 비교합니다',
    '가장 적합한 곳과 소량(최소 단위)으로 테스트 주문해 품질과 배송 상태를 직접 확인합니다',
    '공급가 + 플랫폼 수수료 + 배송비를 모두 반영해 실제 마진 구조를 미리 계산합니다',
  ],
  glossary: [],
}

const UNIVERSAL_STEP_4 = {
  title: '상세페이지 제작 & 가격 정책',
  summary: '구매 결정을 좌우하는 단계입니다',
  detail: [
    '상품 사진(정면·측면·사용컷)과 실측 정보를 준비합니다',
    '원산지, 보관방법, 교환·환불 규정을 상세페이지에 명시합니다',
    '경쟁 상품 가격을 리서치한 뒤 최종 판매가와 프로모션 여부를 정합니다',
  ],
  glossary: [],
}

const UNIVERSAL_STEP_5 = {
  title: '스마트스토어 오픈 & 첫 판매',
  summary: '실제로 고객을 맞이하는 단계입니다',
  detail: [
    '스마트스토어에 상품을 등록하고, 검색 노출에 유리한 키워드를 상품명에 반영합니다',
    '배송·정산 계좌와 고객문의 응대 방식을 설정합니다',
    '첫 주문이 들어오면 포장부터 배송, CS 응대까지 전체 흐름을 직접 점검합니다',
  ],
  glossary: [],
}

export const CATEGORY_LIST = Object.keys(CATEGORY_STEP)

export function stagesFor(category) {
  const categoryStep = CATEGORY_STEP[category] || CATEGORY_STEP[CATEGORY_LIST[0]]
  return [UNIVERSAL_STEP_1, categoryStep, UNIVERSAL_STEP_3, UNIVERSAL_STEP_4, UNIVERSAL_STEP_5]
}

function costBreakdownFor(budget) {
  const table = {
    '100만원 이하': [
      ['사업자등록 · 통신판매업 신고', '0~3만원'],
      ['초도 물량 (테스트 소량)', '20~50만원'],
      ['상세페이지 제작 (자체 · AI 활용)', '0~5만원'],
      ['예비비 (포장재 · 소소한 마케팅)', '10~20만원'],
    ],
    '100 ~ 500만원': [
      ['사업자등록 · 통신판매업 신고', '0~3만원'],
      ['초도 물량', '80~250만원'],
      ['상세페이지 제작 (외주 일부 활용)', '5~30만원'],
      ['예비비 · 초기 마케팅', '20~50만원'],
    ],
    '500 ~ 1,000만원': [
      ['사업자등록 · 통신판매업 신고', '0~3만원'],
      ['초도 물량 확대', '300~600만원'],
      ['상세페이지 · 브랜딩', '30~80만원'],
      ['마케팅 · 샘플링', '50~150만원'],
    ],
    '1,000만원 이상': [
      ['초도 물량 (다품목)', '500만원~'],
      ['브랜딩 · 촬영', '50~150만원'],
      ['마케팅 예산', '100~300만원'],
      ['예비 운영자금', '여유분으로 확보 권장'],
    ],
  }
  return table[budget] || table['100 ~ 500만원']
}

// ============================================================
// AI 창업 진단 알고리즘 v2 — 가중치 기반 다층 스코어링
//
// STEP 1. 5개 응답 → 5개 잠재 차원(속도지향/안정지향/자본여력/전문성/확장의지)으로 환산
// STEP 2. 실행강도지수(driveIndex) 산출 → 1차 유형(4단계) 결정
// STEP 3. 전문성×자본여력 매트릭스 → 2차 세부전략(4분면) 결정
// STEP 4. 카테고리 리스크지수 반영 → 실행과제 우선순위·경고 조정
// ============================================================

const SCORE_TABLE = {
  time: {
    '주말에만 가능해요': { speed: 0, stability: 2 },
    '평일 포함 주 10시간 이내': { speed: 1, stability: 1 },
    '주 20시간 이상 투입 가능': { speed: 2, stability: 0 },
    '거의 풀타임으로 가능해요': { speed: 3, stability: 0 },
  },
  budget: {
    '100만원 이하': { capital: 0 },
    '100 ~ 500만원': { capital: 1 },
    '500 ~ 1,000만원': { capital: 2 },
    '1,000만원 이상': { capital: 3 },
  },
  experience: {
    '전혀 없어요, 처음이에요': { expertise: 0 },
    '사업자등록만 해본 적 있어요': { expertise: 1 },
    '스마트스토어 등 온라인 판매 경험 있어요': { expertise: 2 },
    '이미 사업을 운영 중이에요': { expertise: 3 },
  },
  goal: {
    '소소한 부수입': { ambition: 0, stability: 1 },
    '본업 전환을 위한 시작': { ambition: 2 },
    '기존 사업의 확장 · 다각화': { ambition: 3, expertise: 1 },
  },
  category: {
    '뷰티 · 화장품': { riskNeed: 2 },
    건강기능식품: { riskNeed: 3 },
    '신선식품 · 농산물': { riskNeed: 2 },
    '패션 · 잡화': { riskNeed: 1 },
    '아직 품목을 못 정했어요': { riskNeed: 1 },
  },
}

function computeScores(a) {
  const s = { speed: 0, stability: 0, capital: 0, expertise: 0, ambition: 0, riskNeed: 0 }
  ;[
    ['time', a.time],
    ['budget', a.budget],
    ['experience', a.experience],
    ['goal', a.goal],
    ['category', a.category],
  ].forEach(([dim, answer]) => {
    const add = (SCORE_TABLE[dim] && SCORE_TABLE[dim][answer]) || {}
    Object.keys(add).forEach((k) => {
      s[k] += add[k]
    })
  })
  return s
}

// 1차 유형: 실행강도지수(driveIndex) 기반 4단계
const TIER1_TABLE = [
  { max: 1.5, name: '천천히 단단하게형', tone: '무리하지 않는 속도로, 검증하며 나아가는 유형입니다.' },
  { max: 4.0, name: '균형 잡힌 실험형', tone: '속도와 안정 사이에서 균형을 잡으며 단계적으로 확장하는 유형입니다.' },
  { max: 7.0, name: '속도감 있는 실행형', tone: '투입 가능한 시간과 의지가 뚜렷해, 빠르게 실행하며 배우는 유형입니다.' },
  { max: Infinity, name: '올인 승부형', tone: '시간·자본·의지가 모두 강하게 정렬된, 전력 질주형 유형입니다.' },
]

function tier1For(driveIndex) {
  return TIER1_TABLE.find((t) => driveIndex < t.max)
}

// 2차 세부전략: 전문성 × 자본여력 매트릭스 (4분면)
function tier2For(sc) {
  const lowExp = sc.expertise <= 1
  const lowCap = sc.capital <= 1
  if (lowExp && lowCap) {
    return {
      name: '학습우선 전략',
      desc: '아직 경험도 자본도 크지 않은 단계입니다. 처음부터 크게 벌이기보다, 가장 작은 단위로 한 번 팔아보고 배우는 데 집중하세요.',
    }
  }
  if (lowExp && !lowCap) {
    return {
      name: '위탁·아웃소싱 활용 전략',
      desc: '경험은 부족하지만 초기 자본에 여유가 있습니다. 상세페이지·소싱처럼 시간이 많이 드는 영역은 외부 도구나 전문가 힘을 빌려 격차를 메우는 게 효율적입니다.',
    }
  }
  if (!lowExp && lowCap) {
    return {
      name: '역량 레버리지 전략',
      desc: '이미 쌓아둔 경험이 있는데 초기 자본은 크지 않습니다. 새로 배우는 데 시간을 쓰기보다, 이미 아는 채널·노하우를 그대로 재활용해 비용을 최소화하세요.',
    }
  }
  return {
    name: '정면 승부 전략',
    desc: '경험과 자본을 모두 갖춘 상태입니다. 소극적으로 접근하기보다, 처음부터 제대로 된 구조(상세페이지·소싱 계약·정산 체계)를 갖추고 시작해도 좋습니다.',
  }
}

export function buildDiagnosis(a) {
  const sc = computeScores(a)

  const driveIndex = sc.speed * 1.5 + sc.ambition * 1.3 + sc.capital * 0.7 - sc.stability * 1.0
  const tier1 = tier1For(driveIndex)
  const archetype = tier1.name
  const archetypeDesc = `${a.category} 카테고리 기준 — ${tier1.tone}`

  const tier2 = tier2For(sc)

  let prepBase = 9 - sc.speed * 1.1 - sc.expertise * 0.6
  prepBase = Math.max(3, Math.round(prepBase))
  const prepDays = `${prepBase}~${prepBase + 3}일`

  const costMap = {
    '100만원 이하': '30~90만원',
    '100 ~ 500만원': '100~300만원',
    '500 ~ 1,000만원': '300~700만원',
    '1,000만원 이상': '500만원~ (여유 있게 확장 가능)',
  }
  const initialCost = costMap[a.budget] || '100~300만원'

  const categoryStep = CATEGORY_STEP[a.category] || CATEGORY_STEP[CATEGORY_LIST[0]]
  const actions = [UNIVERSAL_STEP_1, categoryStep, UNIVERSAL_STEP_3, UNIVERSAL_STEP_4, UNIVERSAL_STEP_5]
  if (sc.riskNeed >= 3) {
    actions[1] = { ...categoryStep, title: '⚠ ' + categoryStep.title + ' (최우선)' }
  }

  const watchOuts = []
  if (sc.expertise === 0) {
    watchOuts.push('사업자등록·통신판매업 신고 절차를 놓치면 이후 정산에 지장이 생길 수 있어요')
  }
  if (sc.expertise <= 1 && a.category !== '아직 품목을 못 정했어요') {
    watchOuts.push('처음부터 다품종으로 시작하면 재고·마진 관리가 급격히 복잡해져요')
  }
  if (sc.expertise >= 2) {
    watchOuts.push('플랫폼 수수료가 변동되면 마진이 달라지니 정기적으로 재계산하는 습관을 들이세요')
  }
  if (sc.capital === 0) {
    watchOuts.push('초기 재고를 과도하게 확보하면 자금이 묶이니, 다품종보다 소품종 소량으로 시작하세요')
  } else if (sc.capital === 3) {
    watchOuts.push('초기 자본이 넉넉해도 검증 전 대량 발주는 피하고, 소량 테스트 후 순차적으로 확대하세요')
  }
  if (sc.riskNeed >= 3) {
    watchOuts.push('규제·인증 검토를 건너뛰고 판매부터 시작하면 이후 판매 중단 리스크가 커요 — 반드시 1단계에서 확인하세요')
  }
  if (watchOuts.length === 0) {
    watchOuts.push('현재 조합에서는 큰 리스크 신호가 없어요 — 다만 실행 속도 자체를 늦추지 않는 것이 관건입니다')
  }

  let recommendedFeatures
  if (sc.ambition >= 3) {
    recommendedFeatures = ['AI 정산·마진 대시보드', 'AI 트렌드·수요 리포트']
  } else if (sc.expertise === 0) {
    recommendedFeatures = ['AI 지원금 매칭', 'AI 상세페이지 생성기']
  } else {
    recommendedFeatures = ['AI 상세페이지 생성기', 'AI 정산·마진 대시보드']
  }

  return {
    archetype,
    archetype_description: archetypeDesc,
    substrategy: tier2.name,
    substrategy_description: tier2.desc,
    prep_days: prepDays,
    initial_cost_range: initialCost,
    cost_breakdown: costBreakdownFor(a.budget),
    actions,
    watch_outs: watchOuts,
    recommended_features: recommendedFeatures,
  }
}

export const DIAGNOSE_API_ENDPOINT = 'https://lumain-diagnosis-api.vercel.app/api/diagnose'

export async function callLiveDiagnosis(payload) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 12000)
  try {
    const response = await fetch(DIAGNOSE_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    clearTimeout(timeout)
    if (!response.ok) throw new Error(`API 응답 오류 (status ${response.status})`)
    const data = await response.json()
    if (!data.archetype || !data.actions) throw new Error('API 응답 형식이 올바르지 않습니다.')
    return data
  } finally {
    clearTimeout(timeout)
  }
}
