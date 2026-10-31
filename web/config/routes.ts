const SITE = 'https://layersms.com'
const DOCS = 'https://docs.layersms.com'

export const Routes = {
  landingPage: SITE,
  contribute: `${SITE}/community`,
  useCases: `${SITE}/solutions`,
  quickstart: `${DOCS}/quickstart`,
  login: '/login',
  register: '/register',
  logout: '/logout',
  resetPassword: '/reset-password',
  verifyEmail: '/verify-email',

  dashboard: '/dashboard',

  downloadAndroidApp: `${SITE}/download`,
  // Replace these repository fallback links with the deployed Layer SMS legal
  // pages when the product domain and approved legal copy are configured.
  privacyPolicy: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL || `${SITE}/privacy`,
  refundPolicy: process.env.NEXT_PUBLIC_REFUND_POLICY_URL || `${SITE}/refunds`,
  termsOfService: process.env.NEXT_PUBLIC_TERMS_URL || `${SITE}/terms`,
  statusPage: process.env.NEXT_PUBLIC_STATUS_URL || 'https://status.layersms.com',
}
