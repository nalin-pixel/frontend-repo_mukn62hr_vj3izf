export default function Footer(){
  return (
    <footer id="contact" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex justify-start md:justify-end gap-3">
            <a href="mailto:you@example.com" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">Email</a>
            <a href="https://www.linkedin.com" target="_blank" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
