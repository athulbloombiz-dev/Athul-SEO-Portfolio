import SEO from '../components/SEO'
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Athul Krishnan for SEO consulting, technical audits, or full-time digital marketing roles."
      />

      <section className="relative py-24 sm:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-medium">
            <Send className="w-4 h-4 text-emerald-400" />
            <span>Initiate Collaboration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Get In Touch
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Direct inquiry form, contact details, project intake questions, and scheduling links will be built in the dedicated Contact step.
          </p>
        </div>
      </section>
    </>
  )
}
