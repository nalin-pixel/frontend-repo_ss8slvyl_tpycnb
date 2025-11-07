import React from 'react'

// A lightweight, performant starfield using layered CSS gradients + animations.
// Two layers of small dots drift slowly at different speeds to create parallax depth.
export default function BackgroundStars() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Far stars */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(1.5px 1.5px at 230px 120px, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(1px 1px at 340px 200px, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 55%)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px 600px',
          animation: 'drift1 120s linear infinite',
        }}
      />
      {/* Near stars */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(1.5px 1.5px at 50px 60px, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(1px 1px at 180px 140px, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(2px 2px at 300px 220px, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 55%),\n             radial-gradient(1px 1px at 420px 100px, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 55%)',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px 500px',
          animation: 'drift2 90s linear infinite',
        }}
      />
      {/* Soft space glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-black/20 to-indigo-900/50" />
      <style>
        {`
        @keyframes drift1 { from { background-position: 0 0; } to { background-position: 600px 600px; } }
        @keyframes drift2 { from { background-position: 0 0; } to { background-position: -500px -500px; } }
      `}
      </style>
    </div>
  )
}
