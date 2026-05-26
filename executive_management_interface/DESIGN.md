---
name: Executive Management Interface
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
  secondary: '#115cb9'
  on-secondary: '#ffffff'
  secondary-container: '#659dfe'
  on-secondary-container: '#003370'
  tertiary: '#000b05'
  on-tertiary: '#ffffff'
  tertiary-container: '#002617'
  on-tertiary-container: '#009b6b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#acc7ff'
  on-secondary-fixed: '#001a40'
  on-secondary-fixed-variant: '#004491'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
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
  xxl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system focuses on high-stakes reliability and data density for back-office operations. The brand personality is authoritative, precise, and systematic, targeting managers and owners who require immediate clarity on operational health.

The style is **Corporate / Modern** with a strong emphasis on information architecture over decorative elements. It utilizes a refined grayscale scale to support the deep navy brand color, ensuring that the interface feels like a sophisticated professional tool rather than a consumer app. Visual stress is minimized through generous whitespace and a rigid adherence to a systematic grid, allowing complex data visualizations to remain legible and actionable.

## Colors
The palette is anchored by the deep navy primary color (#002045), used for critical navigation elements and primary actions to establish brand authority. 

- **Primary (#002045):** Used for the sidebar, primary buttons, and heavy headers.
- **Secondary (#0056B3):** Utilized for interactive states, links, and secondary data points.
- **Tertiary (#10B981):** Reserved exclusively for positive performance indicators (revenue growth, active staff).
- **Semantic Accents:** Use high-visibility reds (#EF4444) for inventory alerts and system errors.
- **Neutral Scale:** A series of cool grays provides depth without introducing visual heat, keeping the focus on the data.

## Typography
This design system employs **Inter** for its neutral, highly legible characteristics across all UI tiers. For back-office management, a specialized `data-mono` (JetBrains Mono) tier is introduced for numerical strings, SKUs, and financial figures to ensure alignment and readability in dense tables.

Headlines use a tighter letter-spacing to maintain a "tight" professional feel. Labels utilize uppercase styling with increased tracking to differentiate them from interactive body text. Hierarchy is strictly enforced: `display-lg` is reserved for key performance indicators (KPIs), while `headline-sm` is used for card titles.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for the main content area to prevent line lengths from becoming unreadable on ultra-wide monitors.

- **Desktop (1440px+):** 12-column grid with a 240px fixed left navigation. Gutters are fixed at 24px.
- **Tablet (768px - 1439px):** 8-column fluid grid. Navigation collapses into a slim rail or hamburger menu.
- **Mobile (< 767px):** Single-column stack with 16px horizontal margins.

Spacing follows a 4px base scale. Use `lg` (24px) for the majority of container padding to ensure a breathable, high-end professional feel. Use `sm` (8px) for internal component grouping (e.g., label to input).

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and extremely subtle **Low-contrast outlines**. This system avoids heavy shadows to maintain a clean, flat aesthetic that feels efficient.

- **Level 0 (Canvas):** The background (#F8FAFC) serves as the lowest layer.
- **Level 1 (Cards/Tables):** White surfaces with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Popovers/Modals):** White surfaces with a soft, 12% opacity neutral shadow to provide separation from the management cards below.
- **Data Layers:** Use background tints (Primary at 5% opacity) to highlight active rows in management tables or selected configuration rules.

## Shapes
The shape language is **Soft**, utilizing a 4px (0.25rem) radius for most elements. This maintains a balance between the precision of sharp corners and the modern feel of rounded UI.

- **Standard Elements:** Inputs, buttons, and management cards use a 4px radius.
- **Large Containers:** Modals or large dashboard sections use 8px (`rounded-lg`).
- **Data Indicators:** Status chips (e.g., "Active", "Out of Stock") use a full pill-shape to distinguish them from interactive buttons.

## Components
### 1. Data Visualization
Charts must use a "Thin-Stroke" philosophy. Revenue line charts use a 2px stroke in `secondary` or `tertiary` colors. Performance bars use a 4px radius on the top corners only. Tooltips should be dark-themed (Primary color) with `body-md` typography.

### 2. Management Cards
Staff and Inventory cards follow a standardized layout: `headline-sm` for the name, `label-md` for the category/role, and a bottom utility bar for quick actions (Edit, Deactivate). Use a 1px subtle border for the card container.

### 3. Configuration Forms
Service rules and system settings are managed via "Sectional Forms." Group related fields into white cards with a gray header. Use 100% width for text areas and 50% width for standard inputs in a two-column grid.

### 4. Interactive Elements
- **Primary Buttons:** Solid Primary Navy with white text.
- **Secondary Buttons:** White background with 1px Navy border and Navy text.
- **Inputs:** 1px gray border (#E2E8F0) that transitions to Primary Navy on focus. Labels are always persistent above the field.

### 5. Status Indicators
Small, circular pips next to text labels (Green for 'Online', Amber for 'Low Stock', Red for 'Critical').