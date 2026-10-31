import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Mail, MessagesSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support | Layer SMS',
  description: 'Get help with Layer SMS setup, the Android gateway, API and webhooks.',
  alternates: { canonical: 'https://layersms.com/support' },
}

export default function SupportPage() {
  return (
    <main className='min-h-screen bg-[#0B2E24] px-5 py-12 text-[#F2F5F3] sm:px-8'>
      <div className='mx-auto max-w-3xl'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm text-[#AFC8BC] transition hover:text-white'>
          <ArrowLeft className='h-4 w-4' /> Back to Layer SMS
        </Link>
        <div className='mt-16'>
          <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#124A3B] text-[#2ECC87]'>
            <MessagesSquare className='h-6 w-6' />
          </div>
          <p className='mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#79E5B5]'>Layer SMS support</p>
          <h1 className='mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>How can we help?</h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-[#C4D9CE]'>
            Get assistance with workspace setup, Android gateway pairing, API integration, message delivery and webhooks.
          </p>
        </div>
        <div className='mt-10 grid gap-4 sm:grid-cols-2'>
          <a href='mailto:support@layersms.com' className='rounded-2xl border border-[#2ECC87]/25 bg-[#124A3B]/55 p-6 transition hover:border-[#2ECC87]/60'>
            <Mail className='h-6 w-6 text-[#2ECC87]' />
            <h2 className='mt-5 font-semibold text-white'>Email support</h2>
            <p className='mt-2 text-sm leading-6 text-[#C4D9CE]'>Send a support request and include the affected device or API request details. Never include passwords or API secrets.</p>
            <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#79E5B5]'>support@layersms.com <ArrowUpRight className='h-4 w-4' /></span>
          </a>
          <a href='https://github.com/Victor-Kipruto-Rop/LAYERSMS/discussions' target='_blank' rel='noopener noreferrer' className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#2ECC87]/50'>
            <MessagesSquare className='h-6 w-6 text-[#2ECC87]' />
            <h2 className='mt-5 font-semibold text-white'>Community discussions</h2>
            <p className='mt-2 text-sm leading-6 text-[#C4D9CE]'>Ask implementation questions and share ideas with the Layer SMS project community.</p>
            <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#79E5B5]'>Open discussions <ArrowUpRight className='h-4 w-4' /></span>
          </a>
        </div>
        <p className='mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-[#AFC8BC]'>Layer SMS support will never ask you to disclose your password, one-time passcode, API key or Firebase private key.</p>
      </div>
    </main>
  )
}
