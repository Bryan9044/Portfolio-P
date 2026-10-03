import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f7f8fc] text-slate-800 transition-colors dark:bg-[#0c1220] dark:text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-950/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[36rem] -z-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-950/30"
      />

      <button
        type="button"
        onClick={() => setIsDark((current) => !current)}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        aria-pressed={isDark}
        className="fixed right-4 top-4 z-20 flex min-h-12 min-w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-indigo-700"
      >
        {isDark ? <Sun aria-hidden="true" className="h-5 w-5" /> : <Moon aria-hidden="true" className="h-5 w-5" />}
      </button>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-12 pt-20 sm:gap-14 sm:px-8 sm:pt-24">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default App
