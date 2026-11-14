import SEO from '../components/SEO'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Athul Krishnan - SEO Analyst and Digital Marketing Specialist helping businesses scale organic revenue through data-backed search strategies."
      />

      <section className="relative py-24 sm:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Architecture Initialized • Home Page Ready</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Athul Krishnan <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              SEO Analyst & Growth Specialist
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Scalable organic search optimization, technical SEO engineering, and precision data analytics. Ready for detailed section design in the next step.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-medium text-sm transition-all"
            >
              <span>About Athul</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
