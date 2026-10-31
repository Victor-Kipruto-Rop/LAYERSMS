const REPOSITORY = 'https://github.com/Victor-Kipruto-Rop/LAYERSMS'

export const Routes = {
  landingPage: REPOSITORY,
  contribute: `${REPOSITORY}/discussions`,
  useCases: `${REPOSITORY}#use-cases`,
  quickstart: `${REPOSITORY}#run-locally-with-docker`,
  login: '/login',
  register: '/register',
  logout: '/logout',
  resetPassword: '/reset-password',
  verifyEmail: '/verify-email',

  dashboard: '/dashboard',

  downloadAndroidApp: `${REPOSITORY}/releases`,
  // Replace these repository fallback links with the deployed Layer SMS legal
  // pages when the product domain and approved legal copy are configured.
  privacyPolicy: `${REPOSITORY}/blob/main/SECURITY.md`,
  refundPolicy: `${REPOSITORY}/blob/main/README.md#deployment-and-compatibility`,
  termsOfService: `${REPOSITORY}/blob/main/LICENSE`,
  statusPage: `${REPOSITORY}/issues`,
}
