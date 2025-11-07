import React from 'react'
import Spline from '@splinetool/react-spline'

// Hero section with Spline scene and headline text
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to increase contrast but keep scene interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Headline */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 drop-shadow-2xl">
          Computer Engineering
        </h1>
        <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-indigo-100/90">
          PENS (Politeknik Elektronika Negeri Surabaya)
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-indigo-200/80">
          Jelajahi antariksa informasi Teknik Komputer. Navigasi dengan planet-planet interaktif untuk menemukan profil, kurikulum, dan kontak.
        </p>
      </div>
    </section>
  )
}
