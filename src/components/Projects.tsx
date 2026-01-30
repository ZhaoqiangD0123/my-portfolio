import { motion } from 'framer-motion'
import { Folder, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../types'

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Site',
    description:
      'Personal portfolio built with React, TypeScript and Tailwind. Responsive layout with smooth animations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: '',
  },
  {
    id: 2,
    title: 'Task Manager',
    description:
      'A simple task management app with local storage. Add, complete and filter tasks.',
    techStack: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: '',
  },
  {
    id: 3,
    title: 'API Dashboard',
    description:
      'Dashboard for monitoring API health and response times. Real-time updates.',
    techStack: ['React', 'Node.js', 'WebSocket'],
    githubLink: 'https://github.com',
    image: '',
  },
  {
    id: 4,
    title: 'CLI Tool',
    description:
      'Command-line utility for scaffolding projects and generating config files.',
    techStack: ['TypeScript', 'Node.js', 'Commander'],
    githubLink: 'https://github.com',
    image: '',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          A selection of things I&apos;ve built.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-48px' }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={card}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800 transition-all duration-200 hover:-translate-y-2 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10"
          >
            {/* Cover area: Folder icon as default */}
            <div className="flex h-40 items-center justify-center border-b border-slate-700/80 bg-slate-800/80">
              <Folder
                className="h-16 w-16 text-slate-600"
                strokeWidth={1.2}
                aria-hidden
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Tech tags */}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <span className="rounded bg-slate-700/80 px-2 py-0.5 font-mono text-xs text-slate-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-teal-400"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" aria-hidden />
                  <span>Code</span>
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-teal-400"
                    aria-label={`Open ${project.title} demo`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
