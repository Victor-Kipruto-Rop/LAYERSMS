# Layer SMS brand system

## Positioning

**Messaging infrastructure, built for scale.** Layer SMS is the product identity for this Android-powered SMS gateway, REST API, web console, and webhook platform.

## Visual direction

Theme: **Dark Botanical / Emerald Ledger**. The identity should feel dependable, technical, calm, and infrastructure-grade—not playful or consumer-chat focused.

| Token | Hex | Usage |
|---|---|---|
| Forest | `#0B2E24` | Primary dark background, navigation, strong brand surfaces |
| Emerald | `#2ECC87` | Primary action, active state, highlights, focus |
| Secondary forest | `#124A3B` | Elevated panels, secondary surfaces |
| White | `#FFFFFF` | Light surfaces and contrast text |
| Mist | `#F2F5F3` | Light page background and subtle surfaces |

## Logo

The source-controlled mark is `web/public/layer-sms-mark.svg`. It uses three stacked emerald layers to communicate message infrastructure, routing, and a dependable delivery stack. Use the mark without distortion, preserve clear space, and use the forest background for dark placements.

## Product language

- Product: **Layer SMS**
- Web console: **Layer SMS Console**
- API: **Layer SMS API**
- Android app: **Layer SMS Gateway**
- Core line: **Messaging infrastructure, built for scale.**

Avoid claims of carrier-direct access, guaranteed delivery, or unsupported channel coverage. The current implementation sends and receives SMS through paired Android devices and their SIMs.

## Domain system

- Public website: `https://layersms.com`
- Web console: `https://app.layersms.com`
- Production API: `https://api.layersms.com`
- Development API: `https://api-dev.layersms.com`
- Developer documentation: `https://docs.layersms.com`
- Service status: `https://status.layersms.com`
- Support: `https://support.layersms.com`
- Email: `support@layersms.com` and `notifications@layersms.com`

See [DOMAIN.md](DOMAIN.md) for DNS, TLS, environment variables, OAuth, Firebase and cutover requirements. Hostnames are target configuration and must be provisioned with the relevant hosting providers before launch.

## Compatibility rule

A visual rebrand must not silently change API routes, Android application IDs, SDK package names, production hostnames, credentials, or signing keys. Coordinate those changes as a versioned migration with a documented compatibility window.
