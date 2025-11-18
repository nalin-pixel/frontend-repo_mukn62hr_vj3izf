export function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <div className="mt-8 grid gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Card({ heading, sub, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{heading}</h3>
          {sub && <p className="text-sm text-white/70 mt-1">{sub}</p>}
        </div>
      </div>
      <div className="mt-4 text-white/80 text-sm">
        {children}
      </div>
    </div>
  );
}
