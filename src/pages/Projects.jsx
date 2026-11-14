import SEO from '../components/SEO'
import { BarChart3 } from 'lucide-react'

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects & Case Studies"
        description="Explore SEO case studies, organic traffic growth milestones, and ranking transformations delivered by Athul Krishnan."
      />

      <section className="relative py-24 sm:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium">
            <BarChart3 className="w-4 h-4 text-indigo-400" />
            <span>Proven Track Record</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Projects & Case Studies
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Organic traffic graphs, ranking impact, technical problem-solving, and ROI case studies will be crafted in the dedicated Projects step.
          </p>
        </div>
      </section>
    </>
  )
}
