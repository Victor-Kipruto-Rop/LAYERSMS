import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/legal-page'

export const metadata: Metadata = {
  title: 'Terms of service | Layer SMS',
  description: 'Draft terms of service for Layer SMS.',
  alternates: { canonical: 'https://layersms.com/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title='Terms of service'
      summary='These are publication-stage draft terms. They must be reviewed against the final Layer SMS operating model before users are asked to accept them.'
      sections={[
        { title: 'Permitted use', body: <p>Users must use Layer SMS only for lawful messaging, obtain the permissions and consents required for recipients, and comply with applicable telecommunications, privacy, consumer-protection and anti-spam requirements.</p> },
        { title: 'Account and gateway security', body: <p>Users are responsible for protecting account credentials, API keys, gateway devices and SIM cards, and for investigating activity they do not recognize. Secrets must not be shared in support requests or public issue trackers.</p> },
        { title: 'Messaging responsibility', body: <p>Users are responsible for the content, recipients, timing and authorization of messages sent through their accounts, and for complying with carrier restrictions and mobile-operator terms.</p> },
        { title: 'Service and legal terms', body: <p>Service availability commitments, suspension procedures, warranties, liability limits, dispute handling, governing law, operator identity and effective date have not been finalized. They require explicit business and legal approval before publication.</p> },
      ]}
    />
  )
}
