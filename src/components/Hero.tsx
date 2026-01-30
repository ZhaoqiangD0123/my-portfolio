import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SUBTITLE =
  "I'm a software engineer specializing in building exceptional digital experiences."

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function useTypewriter(text: string, speed = 60, startAfter = 800) {
  const [display, setDisplay] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = window.setTimeout(() => setStarted(true), startAfter)
    return () => clearTimeout(startTimer)
  }, [startAfter])

  useEffect(() => {
    if (!started) return
    if (display.length >= text.length) return
    const t = window.setTimeout(() => {
      setDisplay(text.slice(0, display.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [started, display, text, speed])

  return display
}

export default function Hero() {
  const typewriterText = useTypewriter(SUBTITLE, 50, 600)

  return (
    <section
      id="hero"
      className="flex min-h-[85vh] flex-col items-start justify-center gap-6 text-left md:min-h-[90vh] md:flex-row md:items-center md:gap-12"
    >
      {/* Left: copy */}
      <motion.div
        className="flex flex-1 flex-col gap-4 md:max-w-xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium text-teal-400 md:text-base"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl"
        >
          Your Name
        </motion.h1>
        <motion.p
          variants={item}
          className="min-h-[3rem] max-w-xl text-base text-gray-400 md:min-h-[3.5rem] md:text-lg"
          aria-live="polite"
        >
          <span>{typewriterText}</span>
          <span
            className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-teal-400 align-middle md:h-6"
            aria-hidden
          />
        </motion.p>
        <motion.a
          variants={item}
          href="#projects"
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:opacity-90 hover:shadow-lg hover:shadow-teal-400/20"
        >
          Check out my work
        </motion.a>
      </motion.div>

      {/* Right: code block illustration (pure CSS + SVG accent) */}
      <motion.div
        className="relative hidden w-full max-w-md flex-shrink-0 md:block"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="relative rounded-xl border border-slate-700/80 bg-slate-800/40 shadow-xl shadow-slate-900/50 backdrop-blur">
          {/* Window header */}
          <div className="flex items-center gap-2 border-b border-slate-700/80 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            <span className="ml-2 text-xs font-medium text-slate-500">
              index.tsx
            </span>
          </div>
          {/* Code lines */}
          <div className="font-mono text-xs leading-relaxed text-slate-400 md:text-sm">
            <div className="border-l-2 border-teal-400/80 bg-teal-400/5 px-4 py-2">
              <span className="text-teal-400">const</span>{' '}
              <span className="text-gray-300">greet</span>
              <span className="text-slate-500"> = </span>
              <span className="text-amber-300/90">()</span>
              <span className="text-slate-500"> =&gt;</span>{' '}
              <span className="text-gray-300">&#123;</span>
            </div>
            <div className="px-4 py-1 pl-6">
              <span className="text-teal-400">return</span>{' '}
              <span className="text-amber-300/90">&quot;Hello, World&quot;</span>
              <span className="text-gray-300">;</span>
            </div>
            <div className="px-4 py-1 pl-6">
              <span className="text-gray-300">&#125;</span>
            </div>
            <div className="px-4 py-2 pl-2">
              <span className="text-slate-500">// build things for the web</span>
            </div>
          </div>
        </div>
        {/* Decorative SVG glow */}
        <svg
          className="absolute -right-8 -top-4 h-32 w-32 opacity-20 md:-right-12 md:h-40 md:w-40"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="hero-glow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#hero-glow)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#hero-glow)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </section>
  )
}
