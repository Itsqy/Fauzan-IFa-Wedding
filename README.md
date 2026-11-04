# The Wedding of Fauzan & Ifa — Neon Butterfly Celebration

A luxurious, interactive Indonesian wedding invitation website celebrating Fauzan & Ifa, pairing their portrait backdrop with dynamic neon-pink butterfly swarms on RSVP hover, scroll-driven blossoming butterflies ("kupu-kupu bermekaran"), live countdown, traditional Akad & Resepsi itineraries, venue navigation, love story gallery, and digital wedding gift registries.

## User Review & Critical Decisions

> [!IMPORTANT]
> The architectural plan integrates all user choices gathered during clarification and incorporates the photo backdrop with luminous neon pink butterfly interactive effects.

- **Couple & Details**: Fauzan & Ifa with live countdown timer and ceremony schedule.
- **Language & Cultural Tone**: Bahasa Indonesia with graceful traditional phrasing (Salam, Basmalah, Ayat Ar-Rum 21, Akad Nikah & Resepsi).
- **Core Interactive Features**:
  1. Dynamic neon pink butterfly swarm flying across the screen on RSVP button hover.
  2. Scroll-driven "kupu-kupu bermekaran" (wings blossoming and morphing into radiant particle trails as the user navigates sections).
  3. Interactive RSVP modal with attendance confirmation and guest blessings ledger.
  4. Akad & Resepsi itineraries with Google Maps venue guide and "Add to Calendar" (.ics generation / Google Calendar link).
  5. Love story timeline & photo gallery with lightbox modal.
  6. Digital wedding gift & bank transfer cards with instant 1-click account copy and QRIS placeholder.
  7. Optional ambient audio player toggle (romantic gamelan/acoustic harmony) with floating control.

---

## 1. Overview & Core Concept

- **What It Does**: Presents a personalized, animated digital wedding invitation for Fauzan & Ifa. Guests experience an opening envelope/curtain transition, followed by an editorial layout over the couple's portrait. Neon pink butterflies flutter across the screen when hovering over the RSVP call-to-action, while scrolling blooms butterflies with glowing light effects. Guests can RSVP, send digital prayer wishes, check schedules, navigate to the venue, and copy bank/gift details.
- **Target Audience / Persona**: Family, close friends, colleagues, and invited guests accessing via mobile phones or desktop browsers.
- **Key Value**: Delivers a memorable celebration portal that blends traditional Indonesian warmth with modern, enchanting neon-pink motion design and zero friction for RSVPs and venue discovery.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Aesthetic Direction**: Romantic editorial luxury meets luminous ethereal nightglow. Soft warm dark tones (`#0a080c` to `#160f1c`) complemented by delicate champagne gold typography (`#f5e6d3`), rose quartz accents, and electric neon pink highlights (`#ff2d87`, `#ff1493`, `#ff70a6`).
- **Color Palette & Mood**:
  - Dominant Neutral Canvas (60%): Deep velvet espresso/charcoal (`#0d0b10`, `#140f18`) with the couple's portrait subtly filtered and gradient-scrimmed for contrast.
  - Structural Surfaces (30%): Translucent obsidian card glass (`rgba(28, 20, 34, 0.72)`) with delicate hairline borders (`rgba(255, 45, 135, 0.18)` and `rgba(245, 230, 211, 0.15)`).
  - High-Intent Neon Pink Accent (10%): Electric Neon Pink (`#ff2d87` / `#ff007f`) with CSS bloom filters (`drop-shadow(0 0 14px rgba(255, 45, 135, 0.85))`) dedicated to interactive butterflies, button glows, and highlights.
- **Typography & Hierarchy**:
  - Display & Headings: Elegant luxury serif (`Playfair Display` or `Cormorant Garamond`) with balanced tracking for names and section titles.
  - Subheaders & Arabic: Traditional Calligraphic Arabic style for *Bismillahirrahmanirrahim* and Ar-Rum 21 quote.
  - Body & Form Controls: Clean geometric sans (`Plus Jakarta Sans`) for dates, schedules, location details, and form fields.
  - Numerals: Tabular figures (`tabular-nums`) for the live wedding countdown clock.

### Key Interactive Motion & Butterfly Systems
1. **RSVP Hover Swarm (Flight Across Screen)**:
   - When hovering over the primary RSVP button, an animated canvas / Framer Motion particle engine releases 16–24 neon pink glowing butterflies that flutter and weave along bezier trajectory curves across the entire screen from the button outward.
   - Fluttering wing-beat cycles (120ms CSS 3D rotateY oscillation) create realistic organic movement.
2. **Scroll-Driven Butterfly Blooming ("Kupu-kupu Bermekaran")**:
   - A dedicated fixed-canvas / scroll-synchronized SVG butterfly in the viewport centers or margins that gradually spreads its neon wings, morphs from chrysalis/folded silhouette into an open glowing butterfly, emitting floating pink pollen/dust particles as scroll progress advances from 0% to 100%.
3. **Interactive RSVP & Guest Wishes**:
   - RSVP modal with guest name, attendance status (Hadir / Tidak Hadir / Masih Ragu), number of attendees, and prayer message (Ucapan & Doa Restu).
   - Saved entries persist locally with instant optimistic update in the public wishes feed.
4. **Venue & Calendar Sync**:
   - Direct button to open Google Maps navigation to the venue.
   - 1-click "Simpan ke Kalender" (Google Calendar link and .ics download).
5. **Digital Gift & Amplop Digital**:
   - Copy-to-clipboard buttons with immediate tactile toast feedback ("Nomor rekening berhasil disalin!").

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Canvas + SVG Hybrid for Neon Butterflies**:
  - *Chosen Approach*: Lightweight HTML5 Canvas for the high-velocity RSVP hover swarm (60fps without DOM thrashing) paired with an SVG path-morph / 3D transform element for the scroll-driven blooming butterfly.
  - *Why*: Ensures butter-smooth 60fps animations on both mobile devices and high-refresh desktop monitors without lag or battery drain.
  - *Alternatives Considered*: Pure CSS DOM nodes (causes lag when spawning 25+ simultaneous butterflies) or Three.js WebGL (adds 600KB+ bundle overhead for 2D/isometric butterfly art).
- **Decision 2: Couple Portrait Presentation**:
  - *Chosen Approach*: Use the local image `/public/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG` as the high-impact hero visual and subtle atmospheric parallax background, with an intelligent vignette scrim so that all white/gold text achieves WCAG AAA contrast ratio.
  - *Why*: Honors the couple's traditional lace umbrella portrait without obscuring important invitation information.
- **Decision 3: Local Storage Persistence for RSVP & Wishes**:
  - *Chosen Approach*: In-browser `localStorage` backed by initial warm blessings from family members, with an easy reset option.
  - *Why*: Zero backend delay, completely reliable for user demonstration, and works offline or in sandboxes without authentication hurdles.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Root Controller)                       │
│  - Active Section Observer & Scroll Progress Engine (0.0 -> 1.0)       │
│  - Neon Butterfly Particle Canvas (RSVP Swarm & Ambient Sparkles)       │
│  - Scroll Blooming Butterfly ("Kupu-kupu Bermekaran" SVG Controller)  │
│  - Background Music Audio Engine (Optional romantic backing track)     │
└───────────────┬────────────────────────────────────────┬───────────────┘
                │                                        │
                ▼                                        ▼
┌───────────────────────────────────┐    ┌───────────────────────────────────┐
│        Hero & Cover Section       │    │     Akad & Resepsi Event Strip    │
│ - Photo Backdrop: fauzan_ifa...JPG│    │ - Countdown Clock (Days, Hr, Min) │
│ - Islamic Blessing (Ar-Rum 21)    │    │ - Ceremony Schedule (Akad Nikah)  │
│ - Couple Typography (Fauzan & Ifa)│    │ - Reception Schedule (Resepsi)    │
│ - "Buka Undangan" Curtain Trigger │    │ - Google Maps & Add to Calendar   │
└───────────────┬───────────────────┘    └───────────────┬───────────────────┘
                │                                        │
                ▼                                        ▼
┌───────────────────────────────────┐    ┌───────────────────────────────────┐
│     Love Story & Gallery Bento    │    │    Digital Gift & Amplop Section  │
│ - Timeline: Pertemuan, Lamaran... │    │ - BCA / Mandiri / BSI Account Card│
│ - Photo Gallery Grid + Lightbox   │    │ - 1-Click Copy with Toast Alert   │
│ - Romantic Quote & Dedication     │    │ - Konfirmasi Kirim Hadiah         │
└───────────────┬───────────────────┘    └───────────────┬───────────────────┘
                │                                        │
                ▼                                        ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 RSVP & Buku Tamu (Guestbook) Section                   │
│ - RSVP Trigger Button (Triggers Neon Pink Butterfly Flight Swarm)      │
│ - Attendance Form Modal (Nama, Konfirmasi Hadir, Jumlah Tamu, Doa)     │
│ - Real-time Wishes Feed with timestamp and attendance badges           │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State

```typescript
interface GuestWish {
  id: string;
  name: string;
  status: 'hadir' | 'tidak_hadir' | 'ragu';
  attendeesCount: number;
  message: string;
  timestamp: string;
}

interface WeddingEventDetails {
  groom: { name: string; fullName: string; parents: string };
  bride: { name: string; fullName: string; parents: string };
  akad: { date: string; time: string; venue: string; address: string; mapUrl: string };
  resepsi: { date: string; time: string; venue: string; address: string; mapUrl: string };
  bankAccounts: Array<{ bank: string; accountNo: string; holder: string }>;
}
```

### Verification & Implementation Plan
1. Configure metadata and index.html headers with proper Indonesian wedding titles and Google Fonts (`Playfair Display` + `Plus Jakarta Sans`).
2. Build the particle physics and wing-flapping canvas system for neon pink butterfly swarms on RSVP button hover.
3. Build the scroll-synchronized "kupu-kupu bermekaran" animation component with glowing pink neon wings.
4. Construct the complete Indonesian wedding flow: Cover curtain, Hero with portrait backdrop, Ayat Suci, Mempelai profiles, Countdown & Event cards, Maps navigation, Love Story bento gallery, RSVP form with live wishes ledger, and Digital Bank Gift copy interaction.
5. Verify zero errors with `compile_applet` and `lint_applet`.

## Deployment on Vercel

This project is fully configured and ready for 1-click deployment on [Vercel](https://vercel.com):

1. **Import the repository** in your Vercel Dashboard: `Itsqy/Fauzan-IFa-Wedding`.
2. **Framework Preset**: Vercel automatically detects **Vite**.
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`
6. `vercel.json` is included for SPA routing and asset caching.
