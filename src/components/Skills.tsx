import { motion } from 'framer-motion'

type SkillCategory = {
  id: string
  title: string
  items: string[]
}

const categories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Python', 'Node.js', 'MongoDB'],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: ['Git', 'Docker', 'VS Code'],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 md:text-3xl">
          Skills
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Technologies and tools I work with.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-32px' }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={item}
            className="group relative rounded-xl bg-gradient-to-r from-teal-400/20 to-blue-500/20 p-px transition-shadow hover:shadow-lg hover:shadow-teal-400/10"
          >
            <div className="rounded-[11px] bg-slate-800/50 p-5 transition-colors group-hover:bg-slate-800/70">
              <h3 className="text-base font-semibold text-gray-100 md:text-lg">
                {category.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={category.title}>
                {category.items.map((skill) => (
                  <li key={skill}>
                    <span className="rounded-md bg-slate-700/60 px-2.5 py-1 font-mono text-sm text-slate-300 transition group-hover:bg-slate-700/80 hover:text-teal-400">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
