import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section, Card } from './components/Sections'
import Footer from './components/Footer'

function App() {
  const experience = [
    {
      role: 'Business/Management Projects',
      org: 'Cranfield University',
      period: '2024 — Present',
      points: [
        'Led cross-functional coursework in strategy, operations and analytics',
        'Applied data-driven decision making to real-world case studies',
      ],
    },
  ]

  const projects = [
    {
      title: 'Portfolio Website',
      subtitle: 'React • Tailwind • 3D Spline',
      desc: 'An interactive personal site with a modern 3D hero, smooth sections, and responsive design.',
      link: '#',
    },
    {
      title: 'Strategy/Analytics Case Toolkit',
      subtitle: 'Notion • Excel • Frameworks',
      desc: 'Reusable templates for market sizing, competitor analysis, and hypothesis-driven problem solving.',
      link: '#',
    },
  ]

  const certifications = [
    { name: 'Google Data Analytics', org: 'Coursera', year: '2023' },
    { name: 'Project Management Foundations', org: 'LinkedIn Learning', year: '2022' },
  ]

  const achievements = [
    'Top performance in team-based consulting simulation (Cranfield)',
    'Student society contributor and event organizer',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),rgba(0,0,0,0))]" />

      <Navbar />
      <Hero />

      <main className="relative">
        <Section id="about" title="About">
          <Card heading="Hi, I’m an MSc Management student" sub="Cranfield University">
            <p>
              I’m currently studying MSc Management at Cranfield University. I love solving business
              problems with structured thinking, data, and practical execution. I’m exploring roles
              across strategy, operations, product, and business analysis.
            </p>
          </Card>
        </Section>

        <Section id="education" title="Education">
          <Card heading="Cranfield University" sub="MSc Management • 2024 — Present">
            <ul className="list-disc pl-5 space-y-1">
              <li>Core modules: Strategy, Finance, Operations, Marketing, Analytics</li>
              <li>Team case studies, presentations, and real-world business challenges</li>
            </ul>
          </Card>
        </Section>

        <Section id="experience" title="Work Experience">
          {experience.map((item, idx) => (
            <Card key={idx} heading={`${item.role} — ${item.org}`} sub={item.period}>
              <ul className="list-disc pl-5 space-y-1">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </Section>

        <Section id="projects" title="Personal Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-xs text-white/60 mt-1">{p.subtitle}</p>
                  </div>
                  <a href={p.link} className="text-sm text-cyan-300 hover:text-cyan-200">Preview</a>
                </div>
                <p className="mt-3 text-sm text-white/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certification Courses">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-medium">{c.name}</h4>
                <p className="text-sm text-white/70">{c.org} • {c.year}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <Card heading="Highlights">
            <ul className="list-disc pl-5 space-y-1">
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="resume" title="Resume">
          <Card heading="Grab a copy of my CV">
            <p className="mb-4 text-white/80">Download the latest version of my resume below.</p>
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
            >
              Download Resume
            </a>
          </Card>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
