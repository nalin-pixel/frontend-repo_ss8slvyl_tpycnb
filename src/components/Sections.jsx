import React from 'react'

export default function Sections() {
  return (
    <main className="relative z-10">
      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-20 sm:py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-indigo-200/90">
            Teknik Komputer PENS berfokus pada sistem tertanam, jaringan, dan komputasi modern. Kami menggabungkan
            teori dan praktik untuk menyiapkan lulusan siap industri dengan kemampuan problem solving dan kolaborasi.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="scroll-mt-24 py-20 sm:py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Courses</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Embedded Systems', d: 'Perancangan perangkat keras dan perangkat lunak tertanam.' },
              { t: 'Computer Networks', d: 'Protokol, routing, dan keamanan jaringan.' },
              { t: 'Operating Systems', d: 'Konsep kernel, proses, dan concurrency.' },
              { t: 'IoT & Edge', d: 'Arsitektur IoT, komunikasi, dan analitik edge.' },
              { t: 'AI Fundamentals', d: 'Dasar pembelajaran mesin untuk aplikasi praktis.' },
              { t: 'Web Technologies', d: 'Fondasi pengembangan layanan web modern.' },
            ].map((c) => (
              <div key={c.t} className="rounded-xl p-5 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-indigo-200/90">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-20 sm:py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
          <p className="mt-4 text-indigo-200/90">Tertarik untuk mengetahui lebih lanjut? Tinggalkan pesan Anda.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <input type="text" placeholder="Nama" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/60" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/60" />
            <textarea placeholder="Pesan" rows={4} className="sm:col-span-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/60" />
            <button type="button" onClick={() => window.alert('Terima kasih!')} className="sm:col-span-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
