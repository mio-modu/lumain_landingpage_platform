import { useState } from 'react'

const categories = ['식품/농산물', '패션/의류', '뷰티/화장품', '리빙/생활용품', '디지털/전자기기', '기타']

const initialForm = { name: '', email: '', phone: '', category: '' }

export default function CTAForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lumain 베타 신청:', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="beta-form" className="py-24 bg-brand-ink">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand-mint uppercase tracking-wider">Beta Program</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            베타 테스터 선착순 모집
          </h2>
          <p className="mt-4 text-white/60">
            지금 신청하면 정식 출시 전 Lumain을 가장 먼저 경험할 수 있습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 rounded-3xl bg-white p-8 md:p-10 shadow-card-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-brand-ink mb-2">이름</label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                className="w-full rounded-xl border border-brand-ink/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-ink mb-2">이메일</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-brand-ink/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-ink mb-2">연락처</label>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="w-full rounded-xl border border-brand-ink/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-ink mb-2">판매 희망 품목</label>
              <select
                required
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-brand-ink/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
              >
                <option value="" disabled>
                  선택해주세요
                </option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-brand-gradient text-white font-semibold py-4 shadow-card hover:opacity-90 transition-opacity"
          >
            베타 테스터 무료 신청
          </button>

          {submitted && (
            <p className="mt-4 text-center text-sm font-medium text-brand-mint">
              신청이 접수되었습니다. 곧 연락드리겠습니다!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
