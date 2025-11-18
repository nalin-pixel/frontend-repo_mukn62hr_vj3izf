import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships & graduate roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            MSC Management student at Cranfield University
          </h1>
          <p className="mt-4 text-lg text-white/80">
            I blend business insight with hands-on projects in strategy, analytics, and product. Explore my work, experience, and achievements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40">
              View Projects
            </a>
            <a href="#resume" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950/80" />
    </section>
  );
}
