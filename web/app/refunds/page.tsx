import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/legal-page'

export const metadata: Metadata = {
  title: 'Refund policy | Layer SMS',
  description: 'Draft refund information for Layer SMS.',
  alternates: { canonical: 'https://layersms.com/refunds' },
}

export default function RefundsPage() {
  return (
    <LegalPage
      title='Refund policy'
      summary='This is a draft placeholder. Refund rules must match the actual products, payment processor, billing model and applicable consumer law before Layer SMS accepts paid subscriptions or presents this as a final policy.'
      sections={[
        { title: 'Publication status', body: <p>Refund eligibility, cancellation deadlines, processing times and dispute procedures have not yet been finalized. No specific refund entitlement or restriction should be inferred from this draft.</p> },
        { title: 'Details required before launch', body: <p>The final policy must identify paid products and plans, billing intervals, payment processor, partial-period treatment, failed or duplicate charges, cancellation effects, request channel and expected processing timeline.</p> },
        { title: 'Billing questions', body: <p>For questions about a charge or billing record, contact support@layersms.com and include a transaction reference. Never send full payment-card details, passwords or API secrets by email.</p> },
      ]}
    />
  )
}
