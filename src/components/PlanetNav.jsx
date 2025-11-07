import React, { useEffect, useRef } from 'react'
import { Home, Info, BookOpen, Mail } from 'lucide-react'

// Utility to map sections
const sections = [
  { id: 'home', label: 'Home', Icon: Home, color: 'from-fuchsia-400 to-purple-600' },
  { id: 'about', label: 'About', Icon: Info, color: 'from-cyan-400 to-blue-600' },
  { id: 'courses', label: 'Courses', Icon: BookOpen, color: 'from-amber-400 to-orange-600' },
  { id: 'contact', label: 'Contact', Icon: Mail, color: 'from-emerald-400 to-teal-600' },
]

// Single planet button
function Planet({ id, label, Icon, color, delay = 0, orbit = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    // Subtle rotation animation using requestAnimationFrame for smoothness
    let raf
    let angle = orbit
    const el = ref.current
    const animate = () => {
      angle += 0.0025 // rotation speed
      if (el) {
        el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [orbit])

  const onClick = (e) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      onClick={onClick}
      className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`${label} section`}
    >
      {/* Orbit ring */}
      <span className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ boxShadow: '0 0 40px 10px rgba(255,255,255,0.08), inset 0 0 30px rgba(255,255,255,0.05)' }}
      />

      {/* Planet */}
      <span
        ref={ref}
        className={`relative block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${color} shadow-[inset_-8px_-10px_20px_rgba(0,0,0,0.35),0_10px_25px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out group-hover:scale-110`}
        style={{
          filter: 'saturate(1.2)',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Planet ring */}
        <span className="absolute inset-0 rounded-full" style={{
          boxShadow: 'inset 12px 12px 28px rgba(0,0,0,0.35), inset -8px -8px 20px rgba(255,255,255,0.08)'
        }} />

        {/* Glow */}
        <span className="absolute -inset-1 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.45), rgba(255,255,255,0))' }}
        />

        {/* Icon + Label */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm font-medium flex items-center gap-1">
          <Icon size={16} className="drop-shadow" />
          <span className="hidden sm:inline">{label}</span>
        </span>
      </span>
    </button>
  )
}

// Layout the planets in aesthetic orbits around a center
export default function PlanetNav() {
  return (
    <section aria-label="planet navigation" className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] overflow-hidden">
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Planet buttons positioned on different radii */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
          {/* Inner ring */}
          <Planet {...sections[0]} delay={0} orbit={0} />
        </div>

        {/* Quadrant placements */}
        <div className="absolute left-[20%] top-[30%]">
          <Planet {...sections[1]} delay={120} orbit={0.3} />
        </div>
        <div className="absolute right-[18%] top-[35%]">
          <Planet {...sections[2]} delay={220} orbit={-0.5} />
        </div>
        <div className="absolute left-[35%] bottom-[18%]">
          <Planet {...sections[3]} delay={320} orbit={1.1} />
        </div>
      </div>
    </section>
  )
}
