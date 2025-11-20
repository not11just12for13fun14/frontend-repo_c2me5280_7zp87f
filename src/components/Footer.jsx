import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Trencher Ant Cult</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://antcult.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Website</a>
          <span className="text-white/20">•</span>
          <a href="#manifesto" className="text-white/70 hover:text-white">Manifesto</a>
        </div>
      </div>
    </footer>
  )
}
