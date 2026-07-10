export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white border-t border-brand-ink/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gradient" />
            <span className="font-extrabold text-brand-ink">Lumain</span>
          </div>
          <p className="text-xs text-brand-slate text-center md:text-left break-keep">루메인(Lumain)</p>
          <p className="text-xs text-brand-slate">© {year} Lumain. All rights reserved.</p>
        </div>

        <div className="mt-6 pt-6 border-t border-brand-ink/5 text-center md:text-left">
          <p className="text-[11px] text-brand-slate/80 leading-relaxed break-keep">
            상호: 루메인(Lumain) · 대표: 박성은 · 사업자등록번호: 261-13-02753
            <br />
            통신판매업신고: 제2026-대전유성-1227호 · 소재지: 대전광역시 유성구
          </p>
        </div>
      </div>
    </footer>
  )
}
