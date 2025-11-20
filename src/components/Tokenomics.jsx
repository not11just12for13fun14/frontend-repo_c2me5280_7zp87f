import React from 'react'

const Stat = ({ label, value, sub }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
    <div className="text-3xl font-extrabold text-white">{value}</div>
    <div className="mt-1 text-sm uppercase tracking-wide text-white/60">{label}</div>
    {sub && <div className="mt-2 text-xs text-white/50">{sub}</div>}
  </div>
)

export default function Tokenomics() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How the pie grows</h2>
          <p className="mt-3 text-white/70">Alignment > extraction. Transparent, simple, community‑first.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Ticker" value="$ANT" />
          <Stat label="Supply" value="1,000,000,000" sub="Fixed" />
          <Stat label="Tax" value="0%" sub="No in/out tax" />
          <Stat label="Liquidity" value="Locked" sub="Community safety" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Coordinate</h3>
            <p className="mt-2 text-white/70">Share information, avoid zero‑sum behavior, and act with intent.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Recruit</h3>
            <p className="mt-2 text-white/70">Bring new ants into the colony and expand the base.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Sustain</h3>
            <p className="mt-2 text-white/70">Favor long‑term health over short‑term churn to grow the $ANT pie.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
