# Android Build Variants Setup (Dev vs Prod)

This document explains how to configure and build the Layer SMS Android gateway variants.

## Overview

- **Dev**: development and integration testing.
- **Prod**: production service identity and API origin.

## Key differences

| Feature | Dev | Prod |
|---|---|---|
| Application ID | `com.layersms.gateway.dev` | `com.layersms.gateway` |
| App name | Layer SMS Dev | Layer SMS Gateway |
| API base URL | `https://api-dev.layersms.com/api/v1/` | `https://api.layersms.com/api/v1/` |
| Firebase config | `app/src/dev/google-services.json` | `app/src/prod/google-services.json` |
| Version suffix | `-dev` | None |

## Firebase configuration

Create a Firebase Android app registration for each application ID. Download the matching `google-services.json` file and place it in the corresponding flavor directory:

- `android/app/src/dev/google-services.json`
- `android/app/src/prod/google-services.json`

The checked-in sample files are templates only. They are not valid Firebase credentials and must not be used for a release build.

## Build commands

Run from the `android/` directory:

```bash
./gradlew assembleDevDebug
./gradlew assembleProdDebug
./gradlew assembleDevRelease
./gradlew assembleProdRelease
```

Release builds must be signed with a dedicated Layer SMS release keystore. Never distribute a debug-signed APK as a production release. Keep keystore files and passwords out of Git and CI logs.

## Migration warning

The Layer SMS application IDs differ from the upstream TextBee IDs. Android treats Layer SMS as a separate app; it cannot update an existing installation that uses the old application ID. Users must install Layer SMS separately and register the device with the Layer SMS service.

## Release checklist

- [ ] Verify Firebase configuration matches the selected flavor's application ID.
- [ ] Verify the API origin points to the intended environment.
- [ ] Verify release signing uses the protected release keystore.
- [ ] Test install, registration, SMS permissions, background delivery and reboot recovery.
- [ ] Test the APK on supported Android versions and dual-SIM devices.
