interface Project {
  name: string
  tagline: string
  description: string
  stat: string
}

const projects: Project[] = [
  {
    name: 'CORE',
    tagline: 'AI credit analysis agent · Macquarie Group',
    description:
      'An AI agent that monitors 500 companies on the SEC, scrapes filings on release, runs credit analysis, and delivers completed documents to analysts automatically.',
    stat: '15 min → 5 min per filing · $4 a document',
  },
  {
    name: 'AI Sales Pipeline',
    tagline: 'Multi-agent prospecting pipeline · SpringUp',
    description:
      'A multi-agent pipeline with separate agents handling prospecting, company research, and email drafting — with human review before sending. Built end-to-end to explore human-in-the-loop agent design.',
    stat: 'Prospecting · Research · Drafting · Human review',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-cyan-400/20 rounded-lg p-8 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="border-t-2 border-cyan-400 pt-4">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="text-cyan-400 text-sm mt-1">{project.tagline}</p>
      </div>
      <p className="text-gray-300 leading-relaxed flex-1">{project.description}</p>
      <p className="text-xs text-gray-500 font-mono">{project.stat}</p>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-10 md:px-20">
      <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-8">
        Work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
