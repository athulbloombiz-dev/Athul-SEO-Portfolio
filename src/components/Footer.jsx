import { Link } from 'react-router-dom'
import { Mail, TrendingUp } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const servicesList = [
  'Technical SEO Audits',
  'On-Page & Keyword Strategy',
  'Link Building & Authority',
  'Local & E-commerce SEO',
  'Analytics & Conversion Optimization',
]

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.37a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: LinkedInIcon,
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/',
    icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: GithubIcon,
  },
]

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative bg-[#060609] border-t border-white/10 text-slate-400 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] shadow-md shadow-purple-900/30">
                <div className="w-full h-full bg-[#0d0d14] rounded-[11px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Athul Krishnan
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  SEO Analyst | Digital Marketing Specialist
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md pt-1">
              Empowering brands to rank higher, convert smarter, and dominate organic search with data-backed technical SEO, high-impact content architecture, and strategic growth marketing.
            </p>

            <div className="pt-2">
              <a
                href="mailto:contact@athulkrishnan.com"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-purple-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <span>contact@athulkrishnan.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise / Services preview */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Core Expertise
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {servicesList.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Me
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {CURRENT_YEAR} Athul Krishnan. All rights reserved. Built for search engine excellence.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Available for freelance consulting & full-time roles</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
