import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/legal-page'

export const metadata: Metadata = {
  title: 'Privacy | Layer SMS',
  description: 'Draft privacy information for Layer SMS.',
  alternates: { canonical: 'https://layersms.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title='Privacy policy'
      summary='Draft privacy information for Layer SMS. This document must be checked against the actual production infrastructure, analytics, service providers and retention configuration before publication.'
      sections={[
        { title: 'Information involved', body: <p>Depending on the features used, Layer SMS may process account contact details, authentication records, gateway device identifiers, API and webhook configuration, recipient phone numbers, message content, delivery states and technical request logs. Self-hosted deployments may have different operators and storage locations.</p> },
        { title: 'How information is used', body: <p>Information may be used to provide account access, connect gateway devices, route SMS requests, display message history, operate webhooks, protect the service and provide support.</p> },
        { title: 'Providers and retention', body: <p>Production service providers, processing locations, retention periods, deletion workflows and backup lifetimes must be confirmed from the deployed configuration and added before this becomes the operative policy.</p> },
      ]}
    />
  )
}
