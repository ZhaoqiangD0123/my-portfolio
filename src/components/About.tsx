import { motion } from 'framer-motion'

const education = {
  school: 'Xidian University',
  college: 'School of Space Science and Technology',
  major: 'Aerospace / Control-related',
  courses: [
    'Guidance and Control',
    'Stochastic Processes',
    'Spacecraft Dynamics',
  ],
}

export default function About() {
  return (
    <section id="about" className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 md:text-3xl">
          About
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Who I am and where I&apos;m from.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-start">
        {/* Left: intro copy */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-base leading-relaxed text-gray-400 md:text-lg">
            I&apos;m a student at the{' '}
            <span className="font-medium text-teal-400">
              School of Space Science and Technology, Xidian University
            </span>
            , and a{' '}
            <span className="font-medium text-teal-400">Frontend Enthusiast</span>
            . I love building clean, fast interfaces and bringing the rigor I
            learn from space technology—precision, systems thinking, and
            reliability—into the way I design and ship for the web.
          </p>
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Whether it&apos;s guidance algorithms or UI components, I aim for
            clarity and maintainability. I&apos;m always exploring how to blend
            my background in control and dynamics with modern frontend
            development.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-teal-400/80 px-5 py-2.5 text-sm font-medium text-teal-400 transition hover:bg-teal-400/10 hover:border-teal-400"
          >
            下载完整简历 (Get Resume)
          </a>
        </motion.div>

        {/* Right: education milestone card */}
        <motion.div
          className="rounded-xl bg-gradient-to-r from-teal-400/15 to-blue-500/15 p-px"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="rounded-[11px] bg-slate-800/40 p-6">
            <h3 className="text-lg font-semibold text-gray-100">
              Education
            </h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-medium text-teal-400">{education.school}</p>
                <p className="text-sm text-gray-400">{education.college}</p>
              </div>
              <p className="text-sm text-gray-300">{education.major}</p>
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Core directions / courses
                </p>
                <ul className="space-y-1.5" aria-label="Relevant courses">
                  {education.courses.map((course) => (
                    <li
                      key={course}
                      className="font-mono text-sm text-slate-300"
                    >
                      · {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
