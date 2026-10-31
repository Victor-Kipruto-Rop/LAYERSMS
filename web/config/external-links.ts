const POLAR_CUSTOMER_PORTAL_REQUEST_BASE =
  'https://polar.sh/layersms/portal/request'

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
  return `${SMS_PERMISSION_GUIDE}?utm_source=${source}&utm_medium=app&utm_campaign=sms_permission`
}

export const ExternalLinks = {
  patreon: 'https://layersms.com/community',
  github: 'https://github.com/Victor-Kipruto-Rop/LAYERSMS',
  discord: 'https://layersms.com/community',
  polar: 'https://layersms.com/billing',
  twitter: 'https://layersms.com/community',
  linkedin: 'https://layersms.com/about',
}
