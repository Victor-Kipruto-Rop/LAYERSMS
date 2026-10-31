# Layer SMS

**Messaging infrastructure, built for scale.**

Layer SMS is an open-source SMS gateway built around an Android phone and SIM. Applications integrate through a REST API; the Android gateway handles carrier delivery and reports message status. The repository contains the web console, NestJS API, Kotlin Android gateway, webhooks, and a self-hostable Docker stack.

Layer SMS is an independently maintained product built from the MIT-licensed TextBee codebase. The public identity, web/API package names, Android application IDs, default database name, email identity, assets, and production domain are being migrated to Layer SMS. Existing API routes remain compatible. The published `@textbee/sdk` and `textbee` Python packages remain available as legacy compatibility clients until Layer SMS packages are published.

## Product components

- **Layer SMS Console** — manage gateway devices, API keys, message history, usage, and webhooks.
- **Layer SMS API** — REST API for sending and receiving SMS.
- **Layer SMS Gateway** — Android application that sends and receives SMS through a paired device and SIM.
- **Layer SMS Webhooks** — signed event delivery for incoming messages and message status changes.

## Architecture

1. An application sends an authenticated request to the REST API.
2. The API validates the key, checks account limits, stores the message, and queues delivery.
3. Firebase Cloud Messaging wakes the paired Android device.
4. The device sends the SMS through its selected SIM and reports delivery state.
5. Incoming SMS and status changes are exposed through the API, console, and configured webhooks.

## Technology

| Component | Stack |
|---|---|
| API | NestJS, TypeScript, MongoDB, Redis, Bull |
| Web console | Next.js, React, Tailwind CSS |
| Android gateway | Kotlin, Jetpack Compose, WorkManager |
| Local infrastructure | Docker Compose, MongoDB, Redis |

## Run locally

Requirements: Docker Desktop or Docker Engine with the Compose plugin.

```bash
cp api/.env.example api/.env
cp web/.env.example web/.env
```

Configure the required variables in both files, including database credentials, JWT and NextAuth secrets, Firebase service-account values, SMTP settings, and frontend/API origins. Then start the stack:

```bash
docker compose up --build -d
```

Open the console at `http://localhost:3000` and the API/OpenAPI endpoint at `http://localhost:3001`.

## Run without Docker

API:

```bash
cd api
cp .env.example .env
pnpm install
pnpm start:dev
```

Web console:

```bash
cd web
cp .env.example .env
pnpm install
pnpm dev
```

Android: open `android/` in Android Studio, configure Firebase and the API base URL for your deployment, then build the required `dev` or `prod` variant.

## Development checks

```bash
cd api && pnpm test && pnpm build
cd ../web && pnpm test && pnpm typecheck && pnpm build
```

## Brand and deployment

See [BRAND.md](BRAND.md) for the Layer SMS logo, colors, and usage rules. The production domain plan is `layersms.com`, with the console at `app.layersms.com`, API at `api.layersms.com`, development API at `api-dev.layersms.com`, docs at `docs.layersms.com`, status at `status.layersms.com`, and support at `support.layersms.com`. See [DOMAIN.md](DOMAIN.md) for DNS, TLS, OAuth, Firebase, email and deployment configuration. These hostnames must be provisioned and verified before launch.

The Android application IDs are now `com.layersms.gateway` and `com.layersms.gateway.dev`. This is a new Android app identity: existing TextBee installs cannot receive an in-place update from Layer SMS. Register new Firebase Android apps and use matching `google-services.json` files before building. See [DOMAIN.md](DOMAIN.md) for the database, app identity, DNS and production cutover steps.

## Security and license

Never commit environment files, Firebase service-account files, signing keys, or production credentials. Use HTTPS for public services and rotate exposed secrets immediately.

This repository retains its existing MIT license and upstream notices. See [LICENSE](LICENSE) for applicable terms.
