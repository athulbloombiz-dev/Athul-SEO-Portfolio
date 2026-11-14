import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08080c] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <ScrollToTop />
      <Header />

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
