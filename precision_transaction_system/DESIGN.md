---
name: Precision Transaction System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f87'
  primary: '#00091b'
  on-primary: '#ffffff'
  primary-container: '#002045'
  on-primary-container: '#7089b3'
  inverse-primary: '#aec7f5'
  secondary: '#aa3000'
  on-secondary: '#ffffff'
  secondary-container: '#d53e00'
  on-secondary-container: '#fffbff'
  tertiary: '#070a0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e2123'
  on-tertiary-container: '#86888a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#3a0a00'
  on-secondary-fixed-variant: '#852400'
  tertiary-fixed: '#e1e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  error-alert: '#ba1a1a'
  surface-default: '#f7f9fb'
  outline-border: '#d8dadc'
  white: '#ffffff'
  success-green: '#2e7d32'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  price-display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-tablet: 24px
  touch-target-min: 48px
---

## Brand & Style

The design system is engineered for a high-stakes mobile Point-of-Sale (POS) environment where speed, reliability, and financial trust are paramount. The brand personality is authoritative yet approachable—functioning as a silent, efficient partner in a fast-paced retail or hospitality setting.

The visual style follows a **Corporate / Modern** aesthetic with a lean toward **Functional Minimalism**. It prioritizes extreme legibility and tap-target precision. The interface utilizes a structured grid and a restrained color palette to minimize cognitive load during busy shifts, ensuring that the "Action" is always the hero. The primary deep navy creates a sense of permanence and security, essential for software handling financial transactions.

## Colors

The palette is anchored by **Deep Navy (#002045)**, used for primary actions, navigation headers, and high-level branding to establish an immediate sense of institutional trust. 

- **Primary:** Deep Navy for key interactive elements and "Commit" actions.
- **Surface:** A cool, desaturated light gray-blue (#f7f9fb) is used for the application background to reduce screen glare during long shifts.
- **Outline:** A precise neutral gray (#d8dadc) defines boundaries without creating visual noise.
- **Error/Void:** A sharp, high-contrast red (#ba1a1a) is reserved strictly for destructive actions, refunds, and critical system alerts.
- **Secondary (Accent):** Drawing from industry standards, an optional high-visibility orange is available for secondary notifications or "Live" status indicators.

## Typography

This design system utilizes **Inter** exclusively to leverage its exceptional legibility and neutral, modern tone. 

- **Hierarchical Clarity:** Large "Price Display" styles are optimized for quick glances in varying light conditions. 
- **Functional Labels:** All labels use a slightly tighter letter-spacing and medium/semibold weights to ensure they are distinct from body copy. 
- **Mobile Optimization:** On mobile viewports, `display-lg` should scale down to `headline-lg` to preserve screen real estate for list items.
- **Numeric Clarity:** Inter's tabular lining figures should be enabled for all price-related data to ensure decimal points align perfectly in vertical lists.

## Layout & Spacing

The system is built on a strict **8px grid** (the "Base Unit"). All margins, paddings, and component heights must be multiples of 8px to ensure a rhythmic, predictable layout.

- **Grid Model:** A fluid grid with a 4-column layout for mobile and an 8-column layout for tablet. 
- **Tap Targets:** Every interactive element (buttons, list items, checkboxes) must maintain a minimum height of **48px** to accommodate fast-paced touch interaction.
- **Safe Areas:** Standard 16px horizontal margins apply to all mobile views, increasing to 24px on tablet to prevent "edge-fatigue."

## Elevation & Depth

Visual hierarchy is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows. This maintains a clean, "flat" appearance that feels professional and digital-first.

- **Base Layer:** The surface-default (#f7f9fb) acts as the canvas.
- **Raised Layer:** White (#ffffff) is used for cards, list items, and input containers to lift them visually from the background.
- **Structural Lines:** 1px borders in `outline-border` (#d8dadc) are used to separate items in lists and define input fields.
- **Focused Elevation:** A very subtle, diffused shadow (0px 4px 12px rgba(0, 32, 69, 0.08)) is permitted only for floating action buttons or active modal overlays to indicate their position at the top of the stack.

## Shapes

The design system employs a consistent **8px corner radius** (Level 2: Rounded) for all primary UI components. This choice balances the seriousness of the brand with the modern expectations of mobile software.

- **Standard Buttons & Inputs:** Always 8px.
- **Cards & Modals:** 12px (rounded-lg) to provide a softer containment for large groups of information.
- **Chips & Tags:** Use a fully rounded pill shape (Level 3) to differentiate them from interactive button elements.

## Components

### Buttons
- **Primary:** Deep Navy background, White text. 8px radius. High emphasis.
- **Secondary:** Outline (#d8dadc) with Navy text. Medium emphasis.
- **Danger (Void/Refund):** Solid Error Red (#ba1a1a) background with White text.

### Inputs & Fields
- Large tap areas (min 56px height for main inputs).
- Use a 1px border (#d8dadc) on a White background.
- Floating labels or clear top-aligned labels in `label-md` weight.

### List Items (The Transaction Feed)
- 64px minimum height. 
- White background with a 1px bottom border for separation.
- High-contrast price display on the right-hand side.

### Selection Controls
- **Checkboxes & Radios:** 24px x 24px targets. When active, use Deep Navy fill.
- **Switches:** Use a tactile, high-contrast toggle for binary settings like "Tax Exempt."

### Cards
- Used to group order details or customer profiles.
- Subtle 1px border (#d8dadc). No shadow by default.
- Header sections within cards should use the `neutral_color_hex` for a slight tonal shift.