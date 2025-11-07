import React from 'react'
import BackgroundStars from './components/BackgroundStars'
import Hero from './components/Hero'
import PlanetNav from './components/PlanetNav'
import Sections from './components/Sections'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-400/40">
      {/* Background starfield and soft glows */}
      <BackgroundStars />

      {/* Top navigation */}
      <Header />

      {/* Hero with Spline scene and titles */}
      <Hero />

      {/* Interactive planet navigation */}
      <PlanetNav />

      {/* Content sections */}
      <Sections />

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-xs text-indigo-200/70">
        <span>© {new Date().getFullYear()} Teknik Komputer PENS — Made among the stars.</span>
      </footer>
    </div>
  )
}

export default App
