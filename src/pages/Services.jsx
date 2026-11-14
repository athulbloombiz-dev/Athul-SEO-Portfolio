import SEO from '../components/SEO'
import { Briefcase } from 'lucide-react'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive SEO and digital marketing services: Technical Audits, Keyword Strategy, On-Page SEO, Content Optimization, and Analytics Consulting."
      />

      <section className="relative py-24 sm:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>SEO & Growth Offerings</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SEO & Digital Marketing Services
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Technical audits, on-page architecture, link profile strengthening, local SEO, and conversion-focused content strategies will be detailed here.
          </p>
        </div>
      </section>
    </>
  )
}
