const DIAL_CIRC = 119.4 // 2 * PI * 19

export default function Dial({ pct = 0, lit = false, size = 52 }) {
  const clamped = Math.max(0, Math.min(1, pct))
  const offset = DIAL_CIRC * (1 - clamped)

  return (
    <div
      className="absolute top-8 right-8 md:top-10 md:right-11"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 52 52" className="w-full h-full block">
        <line x1="26" y1="2" x2="26" y2="6" stroke="var(--dial-tick,#1B1F29)" strokeWidth="1.5" strokeLinecap="round" className={lit ? 'stroke-noir-gold transition-colors duration-700' : 'stroke-noir-line transition-colors duration-700'} />
        <line x1="26" y1="46" x2="26" y2="50" strokeWidth="1.5" strokeLinecap="round" className={lit ? 'stroke-noir-gold transition-colors duration-700' : 'stroke-noir-line transition-colors duration-700'} />
        <line x1="2" y1="26" x2="6" y2="26" strokeWidth="1.5" strokeLinecap="round" className={lit ? 'stroke-noir-gold transition-colors duration-700' : 'stroke-noir-line transition-colors duration-700'} />
        <line x1="46" y1="26" x2="50" y2="26" strokeWidth="1.5" strokeLinecap="round" className={lit ? 'stroke-noir-gold transition-colors duration-700' : 'stroke-noir-line transition-colors duration-700'} />
        <circle cx="26" cy="26" r="19" fill="none" strokeWidth="1.5" className="stroke-noir-line" />
        <circle
          cx="26"
          cy="26"
          r="19"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={DIAL_CIRC}
          strokeDashoffset={offset}
          className="stroke-noir-gold origin-center -rotate-90 transition-[stroke-dashoffset] duration-1000 ease-out"
        />
        <circle cx="26" cy="26" r="3" className={`fill-noir-gold transition-opacity duration-700 ${lit ? 'opacity-100' : 'opacity-35'}`} />
      </svg>
    </div>
  )
}

export function PulseDial() {
  return (
    <svg viewBox="0 0 52 52" className="w-[60px] h-[60px]">
      <circle cx="26" cy="26" r="19" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1.5" />
      <circle
        cx="26"
        cy="26"
        r="19"
        fill="none"
        stroke="#D9B25C"
        strokeWidth="1.5"
        strokeDasharray="30 90"
        strokeLinecap="round"
        transform="rotate(-90 26 26)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="-90 26 26"
          to="270 26 26"
          dur="1.1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="26" cy="26" r="3" fill="#D9B25C" />
    </svg>
  )
}
