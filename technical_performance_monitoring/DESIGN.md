---
name: Technical Performance Monitoring
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#cdc2da'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#978da3'
  outline-variant: '#4b4357'
  surface-tint: '#d5bbff'
  primary: '#d5bbff'
  on-primary: '#41008a'
  primary-container: '#7e00ff'
  on-primary-container: '#e6d3ff'
  inverse-primary: '#7c00fb'
  secondary: '#b0c6ff'
  on-secondary: '#002d6e'
  secondary-container: '#0068ed'
  on-secondary-container: '#f2f3ff'
  tertiary: '#ffb599'
  on-tertiary: '#5a1c00'
  tertiary-container: '#a93c00'
  on-tertiary-container: '#ffd1c1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ecdcff'
  primary-fixed-dim: '#d5bbff'
  on-primary-fixed: '#270057'
  on-primary-fixed-variant: '#5e00c1'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#00429b'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  success-green: '#00C853'
  critical-red: '#FF1744'
  processing-blue: '#2979FF'
  surface-elevated: '#1A1A1E'
  border-subtle: '#2D2D32'
typography:
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-tabular:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-header:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1600px
---

## Brand & Style

This design system is engineered for high-density information environments where reliability and analytical precision are paramount. The brand personality is authoritative, technical, and hyper-efficient, designed to convey trust during critical system stress tests. 

The aesthetic follows a **Technical Modern** approach: a fusion of minimalist layouts and data-heavy interfaces. It utilizes deep ebony surfaces contrasted with vibrant, glowing data accents to ensure that critical metrics are immediately glanceable. Every element is optimized for performance, prioritizing content legibility and systemic order over decorative flair.

## Colors

The color palette is anchored in a `dark` mode configuration to reduce eye strain during prolonged monitoring sessions. 

- **Primary:** A vibrant technical purple used for branding and primary interactions.
- **Semantic Accents:** Transactional states are strictly mapped—Success Green (#00C853) for completed cycles, Critical Red (#FF1744) for hardware or software failures, and Processing Blue (#2979FF) for active, non-blocking tasks.
- **Surface Strategy:** We use a tiered neutral system. The base background is near-black to maximize contrast with data visualizations. Elevated surfaces use subtle shifts in lightness rather than traditional shadows to maintain a clean, digital-first appearance.

## Typography

Typography in this design system is split between functional roles:

- **Headlines (Manrope):** Chosen for its modern, balanced geometry. It provides a professional and refined look for page titles and high-level dashboard summaries.
- **Body (Inter):** Utilized for descriptive text and general UI labels due to its exceptional legibility at small scales.
- **Data (JetBrains Mono):** The workhorse of the monitoring system. All tables, logs, and metric readouts use this monospaced typeface to ensure that numerical values align perfectly across rows, allowing users to scan for anomalies in high-density data grids without visual drift.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for dashboard stability. A 12-column system is used for desktop views to allow for complex modularity of monitoring widgets.

- **Rhythm:** An 8px base unit governs all padding and margins, ensuring a tight, high-density feel that maximizes "above the fold" information.
- **Responsiveness:**
  - **Desktop (1280px+):** 12 columns, 32px margins. Widgets can span 3, 4, 6, or 12 columns.
  - **Tablet (768px - 1279px):** 6 columns, 24px margins. Content reflows vertically; data tables transition to horizontal scroll containers.
  - **Mobile (< 768px):** 4 columns, 16px margins. Single column widget stacks are preferred to maintain readability of data points.

## Elevation & Depth

To maintain high performance and visual clarity, this design system avoids heavy, diffused shadows. Depth is communicated through:

- **Tonal Layers:** The UI is built on a "Step" system. Step 0 is the deep background (#0A0A0B). Step 1 is the widget container surface (#1A1A1E). Step 2 is for overlays or tooltips.
- **Low-Contrast Outlines:** Every container features a subtle 1px border (#2D2D32) to define structure without adding visual noise.
- **Vibrant Overlays:** For critical alerts, a semi-transparent blur (Backdrop Filter) is used to draw focus, tinted with the semantic `critical-red` or `processing-blue`.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This choice strikes a balance between the "sharpness" of industrial monitoring tools and the approachability of modern SaaS interfaces.

- **Buttons & Inputs:** Use the base 4px radius.
- **Large Containers/Widgets:** Use `rounded-lg` (8px) to provide a clear distinction between the global application frame and individual data modules.
- **Status Indicators:** Pills and chips use a full-rounded radius to distinguish them from interactive buttons.

## Components

- **Buttons:** High-contrast backgrounds using `primary` or `processing-blue`. For monitoring, "Action" buttons should be distinct from "Status" chips. Use all-caps for labels in JetBrains Mono for a terminal-inspired look.
- **Data Tables:** Zebra striping is discouraged; use subtle border-bottoms between rows. Headers must be JetBrains Mono with 5% letter spacing. Success/Failure states are indicated by 4px vertical status bars on the far left of the row.
- **Chips & Indicators:** Small, non-interactive badges. For "Critical" states, these should utilize a subtle pulse animation to draw immediate attention.
- **Input Fields:** Flat styling with a `border-subtle`. On focus, the border transitions to `secondary-color` with a 2px outer glow (0% blur).
- **Cards (Widgets):** Background: `surface-elevated`. These are the primary containers for charts and metric logs. Headers should include a "time-range" selector and a "refresh" indicator.
- **Log Streamer:** A specialized component using `data-tabular` typography. Every line should be timestamped, with the timestamp color-coded in a muted neutral and the message colored based on its semantic state.