import React from 'react'

export default function Header() {
  const onClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="text-white font-semibold tracking-wide">
          TK PENS
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-indigo-100">
          {['home','about','courses','contact'].map((id) => (
            <button key={id} onClick={() => onClick(id)} className="hover:text-white transition-colors capitalize">
              {id}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
