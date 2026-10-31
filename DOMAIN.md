# Layer SMS domain and deployment map

This is the canonical production domain plan for Layer SMS. Do not publish DNS changes until each hostname has a configured service origin and TLS certificate.

| Hostname | Purpose | Configuration |
|---|---|---|
| `layersms.com` | Public website, product pages, downloads and legal pages | Public website hosting |
| `www.layersms.com` | Redirect to the apex website | HTTPS redirect |
| `app.layersms.com` | Authenticated web console | Next.js web service |
| `api.layersms.com` | REST API and runtime Swagger UI | NestJS API service |
| `api-dev.layersms.com` | Development API | Development API service |
| `docs.layersms.com` | Developer documentation and published OpenAPI reference | Documentation hosting |
| `status.layersms.com` | Service availability and incident updates | Status-page hosting |
| `support.layersms.com` | Support entry point | Support system or redirect |

## Required production environment

### Web console

- `NEXT_PUBLIC_SITE_URL=https://app.layersms.com`
- `NEXTAUTH_URL=https://app.layersms.com`
- `NEXT_PUBLIC_API_BASE_URL=https://api.layersms.com/api/v1`
- `NEXT_PUBLIC_ATTRIBUTION_COOKIE_DOMAIN=.layersms.com`
- `NEXT_PUBLIC_PRIVACY_POLICY_URL=https://layersms.com/privacy`
- `NEXT_PUBLIC_TERMS_URL=https://layersms.com/terms`
- `NEXT_PUBLIC_REFUND_POLICY_URL=https://layersms.com/refunds`
- `NEXT_PUBLIC_STATUS_URL=https://status.layersms.com`

### API

- `FRONTEND_URL=https://app.layersms.com`
- `APP_PUBLIC_URL=https://app.layersms.com`
- `API_PUBLIC_URL=https://api.layersms.com`
- `SUPPORT_EMAIL=support@layersms.com`
- `MAIL_FROM_NOTIFICATIONS=Layer SMS <notifications@layersms.com>`
- `MAIL_REPLY_TO_NOTIFICATIONS=support@layersms.com`
- `APP_LOGO_URL=https://layersms.com/layer-sms-mark.svg`

### Android

- Production API: `https://api.layersms.com/api/v1/`
- Development API: `https://api-dev.layersms.com/api/v1/`

## DNS and TLS checklist

1. Add the apex and `www` records to the public website host.
2. Point `app`, `api`, `api-dev`, `docs`, `status`, and `support` to their respective hosting providers. Use the exact CNAME/A/AAAA targets supplied by those providers; do not guess origin records.
3. Enable HTTPS and verify certificate coverage for every hostname.
4. Configure CORS to allow the exact production console origin `https://app.layersms.com`.
5. Configure Google OAuth authorized origins and redirect URIs for the console.
6. Add the Android production and development package registrations to the correct Firebase projects and download matching `google-services.json` files.
7. Configure email SPF, DKIM and DMARC for `layersms.com` before sending production mail.
8. Verify all legal, download, docs, support and status routes exist before exposing their links.

## Compatibility and migration

The existing Android application IDs (`com.vernu.sms` and `com.vernu.sms.dev`) and published SDK package identifiers are retained in this identity release to avoid breaking installed applications and existing integrations. Changing an Android application ID requires a separately signed app migration and new Firebase registrations; changing SDK package names requires publishing and supporting new packages. Existing API routes are also retained.

The old TextBee-hosted API domains are replaced in the new Layer SMS build configuration. Keep old domains available with controlled redirects or compatibility proxying during the production cutover if existing installations still depend on them.

## Local development

The `.env.example` files retain localhost values for local Docker and test workflows. Use the production values above in the production deployment environment; do not commit production secrets.
