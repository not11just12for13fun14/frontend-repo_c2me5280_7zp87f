import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-30 bg-[conic-gradient(at_top,_#00E5FF,_#9B5CF6,_#00E5FF)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs tracking-wide text-white/80">Trencher Ant Cult Movement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Many tiny ants. One direction. Grow the $ANT pie.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/80"
        >
          Inspired by Korea’s Donghak Ants and the GameStop moment — small participants can shift markets when they coordinate instead of competing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://antcult.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition"
          >
            Visit antcult.com
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            Read the Manifesto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
