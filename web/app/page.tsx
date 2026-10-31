import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Code2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Webhook,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Layer SMS — Messaging infrastructure, built for scale',
  description:
    'Connect your applications to SMS through your own Android gateway, REST API and webhooks.',
  alternates: { canonical: 'https://layersms.com' },
}

const features = [
  {
    icon: Smartphone,
    title: 'Your Android gateway',
    description:
      'Pair an Android phone and SIM, then manage gateway health and message activity from one console.',
  },
  {
    icon: Code2,
    title: 'A straightforward REST API',
    description:
      'Integrate SMS sending and message history into your applications with API keys and clear request patterns.',
  },
  {
    icon: Webhook,
    title: 'Event-driven workflows',
    description:
      'Receive incoming-message and delivery-status events at your own webhook endpoints.',
  },
  {
    icon: ShieldCheck,
    title: 'Control and visibility',
    description:
      'Manage devices, API credentials, usage and message history from a single workspace.',
  },
]

export default function HomePage() {
  return (
    <main className='min-h-screen overflow-hidden bg-[#0B2E24] text-[#F2F5F3]'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(46,204,135,0.18),transparent_65%)]' />
      <header className='relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8'>
        <Link href='/' className='flex items-center gap-3' aria-label='Layer SMS home'>
          <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#124A3B] ring-1 ring-[#2ECC87]/30'>
            <Layers3 className='h-6 w-6 text-[#2ECC87]' />
          </span>
          <span className='text-lg font-semibold tracking-tight'>Layer SMS</span>
        </Link>
        <nav className='hidden items-center gap-8 text-sm text-white/70 md:flex'>
          <a href='#platform' className='transition hover:text-white'>Platform</a>
          <a href='#how-it-works' className='transition hover:text-white'>How it works</a>
          <a href='https://docs.layersms.com' className='transition hover:text-white'>Documentation</a>
        </nav>
        <div className='flex items-center gap-3'>
          <Link href='https://app.layersms.com/login' className='hidden rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white sm:inline-flex'>
            Sign in
          </Link>
          <Link href='https://app.layersms.com/register' className='inline-flex items-center gap-2 rounded-lg bg-[#2ECC87] px-4 py-2.5 text-sm font-semibold text-[#0B2E24] transition hover:bg-[#79E5B5]'>
            Get started <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </header>

      <section className='relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:pb-32 md:pt-24'>
        <div className='relative z-10'>
          <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-[#2ECC87]/25 bg-[#124A3B]/70 px-3 py-1.5 text-xs font-medium tracking-wide text-[#A7F3D0]'>
            <span className='h-2 w-2 rounded-full bg-[#2ECC87]' />
            SMS infrastructure for developers and businesses
          </div>
          <h1 className='max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl'>
            Messaging infrastructure,
            <span className='block text-[#2ECC87]'>built for scale.</span>
          </h1>
          <p className='mt-7 max-w-xl text-lg leading-8 text-[#D1E3D9]'>
            Connect your applications to SMS with an Android gateway, a clean REST API and event-driven webhooks. Keep your devices, credentials and message activity visible in one place.
          </p>
          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <Link href='https://app.layersms.com/register' className='inline-flex items-center justify-center gap-2 rounded-xl bg-[#2ECC87] px-6 py-3.5 font-semibold text-[#0B2E24] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#79E5B5]'>
              Create your workspace <ArrowRight className='h-4 w-4' />
            </Link>
            <Link href='https://docs.layersms.com/quickstart' className='inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-medium text-white transition hover:border-[#2ECC87]/50 hover:bg-white/[0.08]'>
              Explore the docs <Code2 className='h-4 w-4' />
            </Link>
          </div>
          <div className='mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#AFC8BC]'>
            <span className='inline-flex items-center gap-2'><ShieldCheck className='h-4 w-4 text-[#2ECC87]' /> API-key authentication</span>
            <span className='inline-flex items-center gap-2'><Activity className='h-4 w-4 text-[#2ECC87]' /> Device health visibility</span>
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-xl'>
          <div className='absolute -inset-8 rounded-[2rem] bg-[#2ECC87]/10 blur-3xl' />
          <div className='relative overflow-hidden rounded-3xl border border-[#5B9B7E]/30 bg-[#09271F] shadow-2xl shadow-black/40'>
            <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-[#124A3B] text-[#2ECC87]'><Layers3 className='h-5 w-5' /></div>
                <div><p className='text-sm font-semibold text-white'>Layer SMS Console</p><p className='text-xs text-[#9BB8AA]'>Messaging workspace</p></div>
              </div>
              <span className='rounded-full border border-[#2ECC87]/25 bg-[#2ECC87]/10 px-2.5 py-1 text-[11px] font-medium text-[#79E5B5]'>Gateway connected</span>
            </div>
            <div className='grid grid-cols-2 gap-3 p-5'>
              <div className='rounded-2xl border border-white/10 bg-[#124A3B]/55 p-4'>
                <p className='text-xs text-[#AFC8BC]'>Gateway devices</p><p className='mt-3 text-3xl font-semibold text-white'>01</p><p className='mt-1 text-xs text-[#79E5B5]'>Paired device</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-[#124A3B]/55 p-4'>
                <p className='text-xs text-[#AFC8BC]'>API status</p><p className='mt-3 text-3xl font-semibold text-white'>Ready</p><p className='mt-1 text-xs text-[#79E5B5]'>Authenticated requests</p>
              </div>
            </div>
            <div className='px-5 pb-5'>
              <div className='rounded-2xl border border-white/10 bg-[#071F18] p-4'>
                <div className='mb-4 flex items-center justify-between'><p className='text-xs font-medium text-white'>API request</p><span className='text-[10px] uppercase tracking-widest text-[#79E5B5]'>POST</span></div>
                <pre className='overflow-x-auto text-xs leading-6 text-[#B8D6C8]'><code>{`curl -X POST https://api.layersms.com/api/v1/gateway/sms \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{"to":"+2547XXXXXXXX","message":"Hello from Layer SMS"}'`}</code></pre>
              </div>
              <div className='mt-3 flex items-center gap-2 text-xs text-[#AFC8BC]'><Zap className='h-4 w-4 text-[#2ECC87]' /> Queue, route and monitor messages from your workspace</div>
            </div>
          </div>
        </div>
      </section>

      <section id='platform' className='relative border-y border-white/10 bg-[#F2F5F3] py-20 text-[#0B2E24] sm:py-24'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8'>
          <div className='max-w-2xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#15945F]'>One connected platform</p>
            <h2 className='mt-4 text-3xl font-semibold tracking-tight sm:text-4xl'>The tools to build on SMS.</h2>
            <p className='mt-4 text-base leading-7 text-[#52645D]'>Start with the gateway and API. Add your own workflows with webhooks, message history and operational visibility.</p>
          </div>
          <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map(({icon: Icon,title,description}) => (
              <article key={title} className='rounded-2xl border border-[#DCE7E1] bg-white p-6 shadow-sm'>
                <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F9EF] text-[#15945F]'><Icon className='h-5 w-5' /></span>
                <h3 className='mt-5 text-base font-semibold'>{title}</h3>
                <p className='mt-2 text-sm leading-6 text-[#52645D]'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='how-it-works' className='relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center md:py-24'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#79E5B5]'>How it works</p>
          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>Your phone. Your API. Your workflow.</h2>
          <p className='mt-5 max-w-xl leading-7 text-[#C4D9CE]'>Layer SMS connects software to an Android phone that you control. The API manages requests and message records, while the gateway app handles SMS through the phone’s SIM.</p>
        </div>
        <ol className='space-y-4'>
          {[
            ['01','Create a workspace','Register and create an API key in the Layer SMS Console.'],
            ['02','Pair an Android device','Install Layer SMS Gateway and connect it to your workspace.'],
            ['03','Integrate and monitor','Send requests, receive webhook events and inspect message history.'],
          ].map(([number,title,description]) => (
            <li key={number} className='flex gap-4 rounded-2xl border border-white/10 bg-[#124A3B]/45 p-5'>
              <span className='font-mono text-sm text-[#2ECC87]'>{number}</span>
              <div><h3 className='font-semibold text-white'>{title}</h3><p className='mt-1 text-sm leading-6 text-[#B8D6C8]'>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className='mx-auto max-w-7xl px-5 pb-24 sm:px-8'>
        <div className='flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#2ECC87]/20 bg-gradient-to-br from-[#124A3B] to-[#071F18] p-8 sm:p-12 md:flex-row md:items-center'>
          <div><h2 className='text-2xl font-semibold text-white sm:text-3xl'>Build your next messaging workflow.</h2><p className='mt-3 max-w-xl text-sm leading-6 text-[#C4D9CE]'>Create a workspace and connect your first Android gateway.</p></div>
          <Link href='https://app.layersms.com/register' className='inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#2ECC87] px-6 py-3.5 font-semibold text-[#0B2E24] transition hover:bg-[#79E5B5]'>Get started <ArrowRight className='h-4 w-4' /></Link>
        </div>
      </section>

      <footer className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#AFC8BC] sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <span>© {new Date().getFullYear()} Layer SMS. Messaging infrastructure, built for scale.</span>
          <nav className='flex flex-wrap gap-5'><a href='https://layersms.com/privacy' className='hover:text-white'>Privacy</a><a href='https://layersms.com/terms' className='hover:text-white'>Terms</a><a href='https://status.layersms.com' className='hover:text-white'>Status</a><a href='https://support.layersms.com' className='hover:text-white'>Support</a></nav>
        </div>
      </footer>
    </main>
  )
}
