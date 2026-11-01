import Link from 'next/link'
import type { ReactNode } from 'react'

type LegalSection = {
  title: string
  body: ReactNode
}

type LegalPageProps = {
  title: string
  summary: string
  updatedLabel?: string
  sections: LegalSection[]
}

export function LegalPage({
  title,
  summary,
  updatedLabel = 'Draft — publication review required',
  sections,
}: LegalPageProps) {
  return (
    <main className='min-h-screen bg-[#0B2E24] px-5 py-12 text-[#F2F5F3] sm:px-8'>
      <div className='mx-auto max-w-3xl'>
        <Link href='/' className='text-sm text-[#AFC8BC] transition hover:text-white'>
          ← Back to Layer SMS
        </Link>
        <p className='mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-[#79E5B5]'>
          Layer SMS · Legal information
        </p>
        <h1 className='mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
          {title}
        </h1>
        <p className='mt-5 text-lg leading-8 text-[#C4D9CE]'>{summary}</p>
        <p className='mt-6 inline-flex rounded-full border border-amber-300/30 bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-100'>
          {updatedLabel}
        </p>
        <div className='mt-10 space-y-8'>
          {sections.map((section) => (
            <section key={section.title} className='border-t border-white/10 pt-6'>
              <h2 className='text-lg font-semibold text-white'>{section.title}</h2>
              <div className='mt-3 space-y-3 text-sm leading-7 text-[#C4D9CE]'>
                {section.body}
              </div>
            </section>
          ))}
        </div>
        <p className='mt-12 border-t border-white/10 pt-6 text-sm leading-7 text-[#AFC8BC]'>
          Questions about these draft documents? Contact{' '}
          <a className='text-[#79E5B5] underline' href='mailto:support@layersms.com'>
            support@layersms.com
          </a>
          . Do not rely on these drafts as final legal terms until they have been reviewed and formally approved.
        </p>
      </div>
    </main>
  )
}
