# MultipleRide – Apple App Store Connect Privacy Questionnaire Checklist

> **Developer Notice:** This guide is intended for the engineering and release management team of **MultipleRide** (operated by **Nikhil Enterprises**). Do **NOT** rely on assumptions or hardcoded placeholder declarations when submitting the App Privacy questionnaire in App Store Connect. Apple requires disclosures to reflect the **actual runtime data collection and all embedded third-party SDKs** in the binary.

---

## 1. Statutory Ground Rules

1. **Own Practices + Third-Party SDKs**: You must disclose all data collected by your application code *and* any third-party frameworks/SDKs linked in the app (e.g., Firebase, Google Maps Platform, Razorpay, Crashlytics, Telephony).
2. **Data "Collected" Definition**: Data is considered "collected" if it is transmitted off the user device and retained for longer than the immediate time needed to service the request in real time.
3. **Data Linked to User**: Disclose whether identifiers (User ID, Phone Number, Device ID) link collected data (such as Geolocation or Trip History) to the user's identity.

---

## 2. Pre-Submission Technical Audit Checklist

Before completing App Store Connect questionnaires, execute this code & binary audit:

- [ ] **Location Telemetry**:
  - Does the mobile app request `NSLocationWhenInUseUsageDescription` or `NSLocationAlwaysAndWhenInUseUsageDescription`?
  - Are driver coordinates captured in the background while on active dispatch?
  - *App Store Category*: **Location** (`Precise Location`, `Coarse Location`).
  - *Purpose*: App Functionality (dispatching nearby carriers, calculating multi-drop ETAs, displaying live map tracking).

- [ ] **Contact Info**:
  - Does the app collect Name, Phone Number, or Email for OTP authentication, booking receipts, and waybills?
  - *App Store Category*: **Contact Info** (`Name`, `Email Address`, `Phone Number`).
  - *Purpose*: Account Management, App Functionality, Developer Communications.

- [ ] **Identifiers**:
  - Does the app capture Device ID, Vendor ID (`IDFV`), or Push Notification Tokens (`APNs` / `FCM`)?
  - *App Store Category*: **Identifiers** (`User ID`, `Device ID`).
  - *Purpose*: App Functionality, Fraud Prevention & Security.

- [ ] **Financial & Invoicing Data**:
  - Is payment handled via native in-app SDK (e.g., Razorpay / UPI intent) or web redirect?
  - *App Store Category*: **Financial Info** (`Payment Info`, `Purchase History`).
  - *Purpose*: Invoicing, GST tax compliance, transaction records.

- [ ] **Diagnostics & Crash Logs**:
  - Does the app include crash reporting (e.g. Firebase Crashlytics, Sentry)?
  - *App Store Category*: **Diagnostics** (`Crash Data`, `Performance Data`).
  - *Purpose*: Analytics, Performance Optimization.

---

## 3. Dedicated Web Destinations for App Store Review

Ensure the following URLs are configured in App Store Connect:

- **Support URL**: `https://multipleride.in/support`
  - *Status*: Publicly accessible without authentication, contains active email (`support@multipleride.in`), phone (`+91 291 274 0000`), and physical address in Jodhpur.
- **Privacy Policy URL**: `https://multipleride.in/privacy`
  - *Status*: Publicly accessible, HTTPS, covers location tracking, single pickup/multi-drop data, and retention guidelines.
- **Account Deletion URL**: `https://multipleride.in/delete-account`
  - *Status*: Meets Apple Guideline 5.1.1(v) for user-initiated account and data deletion.

---

## 4. Release Verification Sign-Off

- **Brand**: MultipleRide
- **Legal Operating Entity**: Nikhil Enterprises
- **Initial Territory**: Jodhpur, Rajasthan, India (Zone RJ-19)
- **Scope**: Physical Freight & Permitted Commercial Logistics (No passenger conveyance)
