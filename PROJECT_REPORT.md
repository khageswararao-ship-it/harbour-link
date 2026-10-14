# Detailed Project Report: Harbour Link
## Modern Toronto Island Ferry Transit & Waterfront Tourism Portal

---

### 1. Executive Summary
**Harbour Link** is a comprehensive, modern web portal designed to streamline ferry transit, visitor navigation, ticket booking, and recreational exploration across the Toronto Harbour and Toronto Islands. Built using modern living web standards—**HTML5, CSS3 (Custom Properties & Flexbox/Grid), and modern Vanilla JavaScript (ES6+)**—without third-party frontend frameworks, this project delivers high-performance page loads, fluid responsive UI, accessibility, and interactive features including a real-time operations dashboard with simulated AIS vessel radar.

---

### 2. Problem Statement & Motivation
The Toronto Islands attract over 1.4 million visitors annually. However, visitors frequently encounter several hurdles:
1. **Scattered Information:** Ferry timetables, park amenities, bike rentals, and island festival details are traditionally scattered across disparate sites.
2. **Terminal Congestion:** Peak summer weekends cause long ticketing queues at Jack Layton Terminal.
3. **Lack of Live Operational Transparency:** Commuters and tourists have minimal visibility into lake conditions, queue wait times, or vessel positions.

**The Solution:** Harbour Link unites all maritime transit, park amenities, gear rentals, event schedules, and paperless digital ticketing under one unified, mobile-responsive, vibrant web platform.

---

### 3. Technology Stack & Design Decisions
* **HTML5 (Living Standard):** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<summary>`, `<footer>`, modal dialogs) providing SEO optimization, accessibility, and structured document hierarchy.
* **Modern CSS3:**
  * **CSS Custom Properties (Variables):** Theme colors (Electric Blue, Vivid Cyan, Sunset Coral, Sun Gold, Deep Midnight Slate), spacing tokens, typography, and elevation shadows.
  * **Layouts:** Native **CSS Grid** for destination cards, schedules, and dashboard KPI grids; native **CSS Flexbox** for responsive navbars, step wizards, and status bars.
  * **Design Trends:** Glassmorphism (`backdrop-filter: blur()`), animated neon glows, radar rotation keyframes, and smooth card transitions.
  * **Responsiveness:** Mobile-first approach using media queries at `1024px`, `768px`, and `480px`.
* **Vanilla JavaScript (ES6+):**
  * Modular logic for sticky scroll detection, mobile hamburger drawer toggling, dynamic route filtering, active navigation pills, and modal window handling.
  * **State Management:** Pure JS reactive state for the 4-step ticket booking wizard, passenger counters, and Ontario HST (13%) price calculation.
  * **Simulated Telemetry:** Real-time clock and animated SVG radar coordinates mimicking Automatic Identification System (AIS) vessel movements.

---

### 4. System Architecture & Directory Structure
```text
HarborLink/
├── index.html              # Home page with hero, quick trip finder & destination highlights
├── dashboard.html          # Real-time operations & passenger radar command dashboard
├── ferry.html              # Interactive ferry timetables, countdown timer & fare pricing
├── parks.html              # Island parks & botanical gardens with category filters
├── recreation.html         # Bike, quad, kayak rentals, disc golf & amusement attractions
├── booking.html            # 4-step interactive ticket wizard with QR code e-ticket modal
├── events.html             # Cultural festivals, boat regattas & live music calendar
├── about.html              # Island transit history (since 1833), fleet specs & green initiatives
├── contact.html            # Terminal directions, GPS coordinates, interactive form & FAQs
├── css/
│   ├── style.css           # Complete design system, themes, layouts, animations
│   └── responsive.css      # Breakpoints for desktop, tablet, and mobile viewports
├── js/
│   ├── main.js             # Sticky header, mobile drawer, modal handlers, year updater
│   ├── dashboard.js        # Vessel radar animation, live clock, telemetry sync
│   ├── ferry.js            # Live departure countdown & schedule rendering
│   ├── booking.js          # Wizard steps, passenger counter, fare engine & E-ticket generator
│   └── filter.js           # Instant interactive category tab filtering
└── images/                 # Optimized local photography & SVG icon assets
```

---

### 5. Detailed Module & Feature Breakdown

#### 5.1. Home Page (`index.html`)
* **Hero Banner:** Immersive waterfront photography overlay with high-contrast glowing typography and call-to-actions.
* **Quick Trip Finder:** Interactive booking widget allowing visitors to choose departure dock, destination, and travel date with instant routing to checkout.
* **Destinations Grid:** Comprehensive visual profiles for Centre Island, Ward's Island, and Hanlan's Point.
* **Operations Spotlight:** Banner directing users to the live radar dashboard.

#### 5.2. Live Operations Dashboard (`dashboard.html`)
* **Simulated AIS Radar:** Visual circular radar with sweeping radar line and 4 active moving ferry blips (*P.S. Trillium, Thomas Rennie, Sam McBride, William Inglis*).
* **Vessel Telemetry Inspector:** Clicking any vessel blip reveals speed (knots), current passenger capacity, captain name, and route status.
* **4 Radiant KPI Cards:** Live active vessels (5/5), daily passenger count (16,420+), Jack Layton terminal load percentage (64%), and island bike rentals active (348).
* **Marine Telemetry:** Real-time Lake Ontario water temperature (18.5°C), wind speed (11 kts NW), waves (0.2m), and visibility.
* **Hourly Volume Chart:** CSS-rendered analytics bar chart displaying traffic curves across peak hours.

#### 5.3. Ferry Schedules & Fares (`ferry.html`)
* **Route Switching Tabs:** Instant toggle between Centre Island, Ward's Island, and Hanlan's Point timetables.
* **Day Type Toggle:** Filter for Monday–Friday vs. Saturday/Sunday/Holidays.
* **Live Departure Timer:** Countdown clock displaying time remaining until the next upcoming departure.
* **Fare Cards:** Transparent pricing breakdown for Adults ($9.11), Seniors ($5.86), Youths ($5.86), and Children ($4.29).

#### 5.4. Online Ticket Booking Wizard (`booking.html`)
* **4-Step Guided Flow:**
  1. *Trip & Date:* Route selection, date picker, and round-trip vs. one-way toggle.
  2. *Passengers:* Interactive counters (+/-) for Adult, Senior, Youth, Child, and Infant tickets.
  3. *Add-Ons:* Optional passes for Centreville amusement rides ($35) and 2-hour bike rentals ($15).
  4. *Contact & Checkout:* Passenger validation and instant pass generation.
* **E-Ticket Pass Modal:** Generates a unique booking reference code (e.g., `HL-938210`), route details, passenger breakdown, and a printable simulated turnstile QR code.

#### 5.5. Parks & Trails (`parks.html`) & Events (`events.html`)
* Powered by `filter.js` for instant, zero-latency category filtering without reloading the page.
* Detailed tags for beaches, historic landmarks, nature trails, family fun, and food amenities.

#### 5.6. Contact & FAQs (`contact.html`)
* Interactive inquiry form with reference number generator and client-side validation.
* Terminal GPS coordinates, TTC public transit subway/streetcar connections, and expandable `<details>` FAQ accordion.

---

### 6. Key Learnings & Skills Demonstrated
1. **Modern Frontend Mastery:** Deepened expertise in modern semantic HTML5, pure CSS custom property design systems, and responsive layouts without relying on heavy frameworks.
2. **State & DOM Logic in Vanilla JS:** Architected an interactive multi-step booking wizard with dynamic arithmetic calculations (tax, subtotals, passenger totals) and modal workflows.
3. **Real-Time Data Simulation:** Designed animated radar telemetry and dynamic counters replicating real-world AIS vessel tracking.
4. **UI/UX & Accessibility:** Implemented high-contrast color palettes, readable font hierarchies (*Outfit* & *Plus Jakarta Sans*), keyboard navigation support, and mobile-friendly touch targets.

---

### 7. Conclusion
Harbour Link demonstrates a modern, end-to-end frontend web solution that bridges public transit utility with rich tourism marketing. The codebase is clean, modular, performant, and fully deployable on static hosting platforms.
