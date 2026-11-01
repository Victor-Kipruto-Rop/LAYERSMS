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

Layer SMS owns the product identity and this maintained fork's new brand assets and modifications. The upstream MIT copyright and licence must remain in distributed copies. Android IDs are now `com.layersms.gateway` and `com.layersms.gateway.dev`; the new app requires new Firebase registrations and is not an in-place update for older TextBee installations. Existing API routes and external TextBee SDK package names remain compatibility surfaces until Layer SMS SDK packages are published.
