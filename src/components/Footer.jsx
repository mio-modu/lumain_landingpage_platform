export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white border-t border-brand-ink/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-gradient" />
          <span className="font-extrabold text-brand-ink">Lumain</span>
        </div>
        <p className="text-xs text-brand-slate text-center md:text-left break-keep">루메인(Lumain)</p>
        <p className="text-xs text-brand-slate">© {year} Lumain. All rights reserved.</p>
      </div>
    </footer>
  )
}
