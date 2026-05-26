---
name: Obsidian Command
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
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#fff3f2'
  on-tertiary: '#680019'
  tertiary-container: '#ffcdce'
  on-tertiary-container: '#bf0036'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b5'
  on-tertiary-fixed: '#40000c'
  on-tertiary-fixed-variant: '#920027'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

This design system is engineered for high-performance technical environments, prioritizing data density and rapid cognitive processing. The brand personality is clinical, precise, and authoritative—evoking the feeling of a mission control center or a high-fidelity system kernel.

The visual style merges **Minimalism** with **Glassmorphism** and a "Technical Brutalist" edge. It utilizes deep obsidian surfaces to minimize eye strain during long monitoring sessions, contrasted against vibrant neon status accents that pierce through the dark interface to signal system health. The aesthetic is "under-the-hood" engineering: raw enough to feel powerful, yet refined enough for enterprise administration.

## Colors

The palette is anchored by a deep obsidian (`#0B0B0C`) foundation. This "True Dark" base ensures that the high-chroma neon accents are reserved strictly for functional signaling and interactive states.

- **Primary (Cyber Blue):** Used for primary actions, active telemetry streams, and focus states.
- **Warning (Amber):** Reserved for non-blocking alerts and latency thresholds.
- **Critical (Red):** Used for system failures, packet loss, and destructive actions.
- **Success (Green):** Indicates operational health and completed deployments.
- **Neutral/Surface:** Tiered shades of grey-black provide structural depth without breaking the dark-room ergonomics.

## Typography

Typography is treated as a functional tool. We employ a dual-font strategy: **Inter** handles the UI scaffolding and structural hierarchy for readability, while **JetBrains Mono** is utilized for all variable data, logs, metrics, and terminal outputs.

- **Headlines:** Set in Inter with tight letter spacing for a compact, modern feel.
- **Data Tables:** Always use JetBrains Mono to ensure numerical alignment and character distinction (e.g., distinguishing `0` from `O`).
- **Labels:** Small, uppercase monospaced labels are used for metadata and hardware specifications to reinforce the technical aesthetic.

## Layout & Spacing

The layout utilizes a **Fluid Grid** model designed for high-density information displays. A strict 4px base unit ensures mathematical precision across all components.

- **Desktop:** 12-column grid with 16px gutters. Sidebars are typically fixed at 240px to maximize the central monitoring stage.
- **Density:** High. Padding within cards and tables is compressed to allow more data points to be visible above the fold.
- **Reflow:** On smaller screens, data-heavy tables transition into expandable list items. Dashboard widgets stack vertically while maintaining a 1:1 or 16:9 aspect ratio.

## Elevation & Depth

This system eschews traditional shadows in favor of **Tonal Layering** and **Glassmorphism**. 

- **Surfaces:** Use semi-transparent backgrounds (e.g., `rgba(22, 22, 24, 0.8)`) with a `20px` backdrop blur to create a sense of stacked glass panels.
- **Outlines:** Depth is primarily communicated through `1px` solid borders. Active or "elevated" elements use a slightly brighter border (`#3A3A3D`) or a subtle Cyber Blue inner glow.
- **Interaction:** Hovering over a module should increase the backdrop-blur intensity and brighten the border, rather than casting a shadow.

## Shapes

The shape language is "Soft-Technical." We use a conservative `4px` (Soft) radius for most UI components (buttons, input fields, cards). This provides enough geometric precision to feel engineered while avoiding the aggressive sharpness of pure brutalism.

- **Buttons/Inputs:** 4px radius.
- **Status Indicators:** Circles for binary states (On/Off), while hardware tags use a 2px "micro-radius."
- **Selection Brackets:** Use sharp right-angle corners for focus indicators to contrast with the soft-radius containers.

## Components

- **Buttons:** Primary buttons are ghost-styled with a 1px Cyber Blue border and a subtle cyan outer glow on hover. Text is always uppercase JetBrains Mono for a "command" feel.
- **Input Fields:** Darker than the surface (`#050506`) with a 1px muted border. Upon focus, the border transitions to Cyber Blue with a sharp vertical caret.
- **Data Tables:** Row-based hovering with a faint highlight. No vertical grid lines; only horizontal 1px separators to maintain clean scanning.
- **Status Chips:** High-chroma backgrounds with black text for maximum contrast. Used sparingly for state indicators like `CRITICAL`, `STABLE`, or `DEPLOYING`.
- **Telemetry Charts:** Use thin line weights (1px to 1.5px) for sparklines. Gradients should be used as "area fills" below lines with 10% opacity of the line color.
- **Terminal/Log Viewers:** Pure black background with no rounded corners on the internal scroll area to simulate a classic CLI environment.