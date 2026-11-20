# Harbour Link 🚢
### Modern Toronto Island Ferry Transit & Waterfront Tourism Portal

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://khageswararao-ship-it.github.io/harbour-link/)
[![Stack](https://img.shields.io/badge/Stack-HTML5_|_CSS3_|_Vanilla_JS-blue?style=for-the-badge)](https://khageswararao-ship-it.github.io/harbour-link/)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](#)

A high-performance, responsive web application engineered to streamline maritime transit, visitor navigation, ticket reservation, and recreational exploration across Toronto Harbour and the Toronto Islands.

Built adhering to modern living web standards with **HTML5, CSS3 Custom Properties, CSS Grid/Flexbox, and modular Vanilla JavaScript (ES6+)** with **zero external framework dependencies** for lightning-fast load times.

---

## 🌐 Live Application
Experience the live application deployed on GitHub Pages:  
👉 **[https://khageswararao-ship-it.github.io/harbour-link/](https://khageswararao-ship-it.github.io/harbour-link/)**

---

## ✨ Key Features & Architecture

### 1. Real-Time Operations & AIS Vessel Radar Dashboard (`dashboard.html`)
* **Simulated AIS Radar:** Visual circular radar sweep with animated vessel markers tracking active ferries in the harbour (*P.S. Trillium, Thomas Rennie, Sam McBride, William Inglis*).
* **Vessel Telemetry Inspector:** Real-time speed (knots), capacity metrics, captain data, and route status.
* **KPI Metrics Grid:** Active vessels (5/5), daily passenger throughput (16,420+), Jack Layton terminal load index (64%), and bike rental telemetry.
* **Marine Telemetry:** Real-time water temperature, wind speed, wave height, and visibility metrics.
* **Hourly Traffic Volume:** Custom CSS-rendered analytics chart visualizing passenger peak flow.

### 2. Interactive Ticket Booking Engine (`booking.html`)
* **4-Step Reactive Wizard:**
  1. *Trip & Date:* Route selection, date selection, and round-trip / one-way toggle.
  2. *Passenger Configuration:* Interactive counters (+/-) for Adult, Senior, Youth, and Child fare tiers.
  3. *Add-On Amenities:* Add-ons for amusement rides and bike rental passes.
  4. *Contact & Checkout:* Client-side form validation and instant fare computation (including Ontario HST 13%).
* **E-Ticket Generator:** Modal pass generator producing unique alphanumeric booking reference codes and turnstile-compatible QR passes.

### 3. Interactive Ferry Timetables & Live Departure Countdown (`ferry.html`)
* Dynamic route switching between Centre Island, Ward's Island, and Hanlan's Point.
* Day-type toggle for Weekday vs. Weekend/Holiday schedules.
* Live countdown timer displaying minutes and seconds remaining until the next scheduled departure.

### 4. Dynamic Destination & Event Discovery (`parks.html`, `events.html`)
* Real-time zero-latency tab filtering using pure JavaScript DOM manipulation without page reloads.
* Amenities directory with instant category filtering (beaches, trails, historic landmarks, dining).

---

## 🛠️ Technology Stack & Engineering Decisions

* **Semantic HTML5:** Full document hierarchy using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, and accessible modal `<dialog>` elements.
* **Modern CSS3:**
  * **Design Tokens (CSS Variables):** Consistent palette (Electric Blue, Vivid Cyan, Sunset Coral, Sun Gold, Deep Midnight Slate), spacing scales, and elevation shadows.
  * **Layouts:** Native **CSS Grid** for destination cards and dashboard KPIs; native **Flexbox** for responsive navigation and step wizards.
  * **Visual Design:** Backdrop-filter glassmorphism, animated neon status rings, and smooth hardware-accelerated transitions.
  * **Responsive Breakpoints:** Mobile-first approach at `1024px`, `768px`, and `480px`.
* **Vanilla JavaScript (ES6+):**
  * Modular architecture for sticky navigation, mobile drawer toggles, modal handling, dynamic route filters, and reactive booking state machine.

---

## 📁 Project Structure

```text
HarborLink/
├── index.html              # Home landing page with hero & quick trip finder
├── dashboard.html          # Real-time AIS vessel radar & operations dashboard
├── ferry.html              # Dynamic ferry schedules & live countdown timer
├── parks.html              # Island parks with instant category filter
├── recreation.html         # Equipment rentals & recreational activities
├── booking.html            # 4-step interactive ticket wizard & e-ticket modal
├── events.html             # Cultural festivals & regattas calendar
├── about.html              # Transit history, fleet specifications & green initiatives
├── contact.html            # Terminal GPS directions & interactive inquiry form
├── css/
│   ├── style.css           # Core design system, variables, layouts & animations
│   └── responsive.css      # Viewport media queries (desktop, tablet, mobile)
├── js/
│   ├── main.js             # Navigation drawers, sticky scroll, modal handlers
│   ├── dashboard.js        # Radar canvas/SVG animations, live clock, telemetry sync
│   ├── ferry.js            # Departure countdown & dynamic schedule renderer
│   ├── booking.js          # Booking state machine, fare engine & QR generator
│   └── filter.js           # Instant tab filtering engine
└── images/                 # Optimized SVG icons and photography assets
```

---

## 🚀 Local Installation & Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khageswararao-ship-it/harbour-link.git
   cd harbour-link
   ```

2. **Run locally:**
   * No compilation or build step required! Simply open `index.html` in any modern web browser:
     ```bash
     # Using Python built-in server (optional)
     python -m http.server 8000
     ```
   * Visit `http://localhost:8000` in your browser.

---

## 👤 Author
**Ravada Khageswararao**  
* Frontend & Mobile Developer  
* GitHub: [@khageswararao-ship-it](https://github.com/khageswararao-ship-it)
