const POLAR_CUSTOMER_PORTAL_REQUEST_BASE =
  process.env.NEXT_PUBLIC_POLAR_CUSTOMER_PORTAL_REQUEST_URL ||
  'https://app.layersms.com/dashboard/account/billing'

export function polarCustomerPortalRequestUrl(
  email?: string | null
): string {
  const trimmed = email?.trim()
  if (!trimmed) return POLAR_CUSTOMER_PORTAL_REQUEST_BASE
  return `${POLAR_CUSTOMER_PORTAL_REQUEST_BASE}?email=${encodeURIComponent(trimmed)}`
}

const SMS_PERMISSION_GUIDE =
  'https://docs.layersms.com/android/sms-permissions'

export function smsPermissionGuideUrl(source: string): string {
  return `${SMS_PERMISSION_GUIDE}?utm_source=${encodeURIComponent(source)}&utm_medium=app&utm_campaign=sms_permission`
}

export const ExternalLinks = {
  // The dedicated support host is not provisioned yet. Use the implemented
  // support page until support.layersms.com is configured as a redirect.
  patreon: 'https://layersms.com/support',
  github: 'https://github.com/Victor-Kipruto-Rop/LAYERSMS',
  discord: 'https://github.com/Victor-Kipruto-Rop/LAYERSMS/discussions',
  polar: 'https://app.layersms.com/dashboard/account/billing',
  twitter:
    'https://x.com/intent/post?text=Discover%20Layer%20SMS%20at%20https%3A%2F%2Flayersms.com',
  linkedin:
    'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Flayersms.com',
}
