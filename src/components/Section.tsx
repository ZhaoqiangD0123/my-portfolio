import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={['space-y-4', className].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  )
}

