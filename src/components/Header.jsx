import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, TrendingUp, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll for enhanced glassmorphism header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080c]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-[#08080c]/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Athul Krishnan Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] shadow-md shadow-purple-900/30 group-hover:shadow-purple-600/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0d0d14] rounded-[11px] flex items-center justify-center group-hover:bg-[#0d0d14]/80 transition-colors">
                <TrendingUp className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Athul Krishnan
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 group-hover:text-slate-300">
                SEO & Growth Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/10 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Button: Hire Me */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-purple-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0d14]/95 backdrop-blur-xl transition-all duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/15 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500">→</span>
              </NavLink>
            ))}

            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-600/30"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
