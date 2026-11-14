import SEO from '../components/SEO'
import { UserCheck } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Athul Krishnan, an SEO Analyst and Digital Marketing Specialist with experience in technical audits, on-page optimization, and organic growth."
      />

      <section className="relative py-24 sm:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-medium">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <span>About Athul Krishnan</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            About Me
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Detailed biography, core competencies, career trajectory, toolstack, and strategic philosophies will be built here in the dedicated About step.
          </p>
        </div>
      </section>
    </>
  )
}
