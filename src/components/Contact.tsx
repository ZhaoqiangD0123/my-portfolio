import { useState } from 'react'
import { motion } from 'framer-motion'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSuccess(false)
    setTimeout(() => {
      setSending(false)
      setSuccess(true)
      setForm(initialForm)
      alert('消息已发送！')
    }, 2000)
  }

  return (
    <section id="contact" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Send me a message and I&apos;ll get back to you.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-6 shadow-lg md:p-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-48px' }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-300">姓名 Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-slate-800/60 px-3 py-2 text-gray-100 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-300">邮箱 Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-slate-800/60 px-3 py-2 text-gray-100 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="mt-5 flex flex-col gap-1.5">
          <span className="text-sm font-medium text-gray-300">主题 Subject</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-600 bg-slate-800/60 px-3 py-2 text-gray-100 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50"
            placeholder="What is this about?"
          />
        </label>

        <label className="mt-5 flex flex-col gap-1.5">
          <span className="text-sm font-medium text-gray-300">留言 Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="resize-none rounded-lg border border-slate-600 bg-slate-800/60 px-3 py-2 text-gray-100 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50"
            placeholder="Your message..."
          />
        </label>

        {success && (
          <p className="mt-4 text-sm font-medium text-teal-400">
            消息已发送！
          </p>
        )}

        <div className="mt-6">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-2.5 text-sm font-medium text-slate-900 transition hover:opacity-90 hover:shadow-lg hover:shadow-teal-400/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sending ? 'Sending...' : '发送 Send'}
          </button>
        </div>
      </motion.form>
    </section>
  )
}
