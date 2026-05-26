---
name: Sav.pos Unified System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f87'
  primary: '#00091b'
  on-primary: '#ffffff'
  primary-container: '#002045'
  on-primary-container: '#7089b3'
  inverse-primary: '#aec7f5'
  secondary: '#0050cc'
  on-secondary: '#ffffff'
  secondary-container: '#0266ff'
  on-secondary-container: '#f9f7ff'
  tertiary: '#0f0700'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e1d00'
  on-tertiary-container: '#b67c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#dae1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#001849'
  on-secondary-fixed-variant: '#003fa4'
  tertiary-fixed: '#ffddaf'
  tertiary-fixed-dim: '#ffba43'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#614000'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for the high-stakes environment of point-of-sale operations and technical infrastructure management. It embodies a **Corporate/Modern** aesthetic characterized by precision, reliability, and high data density. The visual language prioritizes utility and clarity, ensuring that technicians and managers can process complex information at a glance without cognitive fatigue.

The emotional response is one of absolute control and stability. By utilizing a deep, authoritative color palette and a rigorous systematic layout, the UI evokes a "mission control" feel—professional, efficient, and technologically advanced.

## Colors

This design system utilizes a high-contrast palette designed for legibility across various hardware displays, from handheld technician devices to stationary POS terminals.

- **Primary (Deep Navy):** Used for structural elements, sidebars, and primary branding. It establishes the "grounded" feel of the system.
- **Secondary (Action Blue):** Reserved exclusively for interactive elements, primary buttons, and active states. It signals "this is tappable."
- **Tertiary (Amber/Gold):** A functional color used for alerts, pending status, or warnings. It provides a warm contrast to the cool-toned primary palette.
- **Neutral:** A range of slate greys used for borders, secondary text, and surface backgrounds to maintain a clean, professional hierarchy.

## Typography

The design system relies on **Inter** for its exceptional legibility in data-heavy contexts and its neutral, systematic character. 

- **Display & Headlines:** Use tighter letter spacing and heavier weights to create a strong hierarchy.
- **Body Text:** Standardized at 14px and 16px to ensure readability during fast-paced POS interactions.
- **Labels:** Uppercase styling with increased letter spacing is used for section headers and table column titles to differentiate them from actionable data.
- **Data Points:** For numeric values (currency, stock counts), maintain a medium or semibold weight to ensure they are the most prominent part of the interface.

## Layout & Spacing

The system follows a strict **8px grid** to ensure alignment across different screen resolutions.

- **POS Terminal:** Uses a 12-column fluid grid but prioritizes large, touch-target zones. Gutters are kept at 16px to maximize screen real estate for order items.
- **Technician App:** Mobile-first, 4-column layout. Spacing is tighter (8px between related fields) to allow for more technical data to be visible without scrolling.
- **Manager App:** 12-column fixed-width grid (max 1440px) with a persistent sidebar. It uses 24px margins to provide "breathing room" for complex analytics and reports.

Padding within containers should scale linearly: 8px for small components (chips), 16px for standard components (inputs), and 24px for large containers (cards).

## Elevation & Depth

To maintain a professional and clean look, the design system avoids heavy shadows, instead using **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Solid neutral gray (#F8FAFC).
- **Level 1 (Cards/Surfaces):** Pure white with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Dropdowns/Modals):** Pure white with a 1px border (#E2E8F0) and a soft, ambient shadow (0px 4px 12px rgba(0, 32, 69, 0.08)).
- **Active State:** Elements being dragged or interacted with use a slightly deeper shadow to indicate they are "lifted" from the plane.

Depth is primarily communicated through color shifts (darker backgrounds for sidebars) rather than physical distance.

## Shapes

The design system uses **Soft (Level 1)** roundedness. This 4px (0.25rem) base radius provides a modern touch while maintaining the structured, professional "grid" feel essential for enterprise software.

- **Standard Elements:** 4px radius (Buttons, Input fields, Checkboxes).
- **Large Containers:** 8px radius (Cards, Modals).
- **Interactive Feedback:** Focus states should follow the container's radius exactly with a 2px offset ring.

## Components

### Buttons
Primary buttons use the **Action Blue** background with white text. Secondary buttons use a transparent background with a 1px Navy border. For POS environments, buttons must have a minimum height of 48px to accommodate touch interaction.

### Input Fields
Fields feature a 1px slate border and 12px horizontal padding. The label sits above the field in **Label-MD** style. Active states are indicated by a 1px Action Blue border and a subtle glow.

### Cards
Cards are the primary container for data. They are flat (white background, light border) with a header section separated by a subtle 1px horizontal line.

### Chips & Badges
Used for status (e.g., "Active," "Offline"). They use a desaturated version of the status color (e.g., light gold background with dark amber text) to ensure readability without being distracting.

### Data Tables
The core of the Manager and Technician apps. Rows have a fixed height (48px for compact, 64px for standard). Use zebra-striping (F8FAFC) only when tables exceed 10 columns.

### Checkboxes & Radios
Custom-styled squares (4px radius) using Action Blue for the checked state. They must be accompanied by a minimum 16px hit area to ensure ease of use on mobile devices.