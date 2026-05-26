---
name: Sav.pos Professional
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
  secondary: '#1960a3'
  on-secondary: '#ffffff'
  secondary-container: '#7db6ff'
  on-secondary-container: '#00477f'
  tertiary: '#000b05'
  on-tertiary: '#ffffff'
  tertiary-container: '#002617'
  on-tertiary-container: '#00b47d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#9bd3b4'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#195039'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-price:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  touch-target-min: 44px
---

## Brand & Style
Sav.pos is a high-end Point of Sale (POS) system designed for premium retail and boutique hospitality environments. The brand personality is **Precise, Efficient, and Sophisticated**. 

The design follows a **Corporate / Modern** aesthetic with a strong emphasis on functional clarity. It borrows heavily from Material 3 principles but introduces a more refined, tailored feel through specific color choices and high-quality imagery. The UI evokes a sense of reliability and speed, essential for high-volume service environments where every interaction must be intentional. Use of subtle motion (active scales) and deep contrast in the sidebar ensures the operator remains focused on the transaction.

## Colors
The palette is built on a foundation of deep, professional blues and functional greens. 

- **Primary (#002045)**: A deep navy used for branding, primary headers, and critical status indicators to convey authority and stability.
- **Secondary (#1960a3)**: A mid-tone blue utilized for interactive accents and secondary containers.
- **Tertiary (#003e28)**: A dark forest green reserved for "success" actions like Checkouts or "In Stock" indicators, providing a sophisticated alternative to standard bright greens.
- **Surface System**: Uses a cool-toned neutral gray scale (`#f7f9fb`) to maintain a clean, clinical environment that lets product photography stand out.

The design relies on "On-Color" pairings (e.g., `on-tertiary-container` on `tertiary-container`) to ensure AAA accessibility in high-glare retail environments.

## Typography
The typography system uses a dual-font approach:
1. **Inter** is the workhorse for all UI elements, headlines, and body text. It is chosen for its utilitarian clarity and excellent legibility at various weights.
2. **JetBrains Mono** is used for technical data, including item counts, currency, and status chips. This reinforces the "system" feel and makes alphanumeric data easier to scan quickly.

Note the use of negative letter-spacing on `display-price` to keep large numbers compact and impactful. `headline-lg` should downscale to `headline-lg-mobile` (24px) for handheld devices to maintain hierarchy without overwhelming the viewport.

## Layout & Spacing
The system uses a **Fluid Grid** model that transitions from a single-column layout on mobile to a 12-column grid on desktop.

- **Mobile**: Single column for the product feed with a persistent bottom-anchored "Order Sheet" that uses a `translate-y` peak-ahead pattern.
- **Desktop**: The layout splits into an 8 or 9-column main catalog and a 3 or 4-column fixed sidebar for order management.
- **Margins & Gutters**: Standardized at `24px` (`lg`) for desktop and `16px` (`md`) for mobile.
- **Touch Targets**: All interactive elements must adhere to a minimum height/width of `44px` to ensure usability in fast-paced physical environments.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**:

- **Level 0 (Background)**: `surface` (#f7f9fb).
- **Level 1 (Cards/Search)**: `surface-container-lowest` (#ffffff) with a `shadow-sm`.
- **Level 2 (Active Sidebar/Dialogs)**: `surface-container-low` (#f2f4f6) with `shadow-md` or `shadow-lg` to indicate high-z-index priority.
- **Glassmorphism**: Used sparingly for overlays (like price badges on images) using a `backdrop-blur` and `80-90%` opacity of the surface color to maintain context of the underlying image.
- **Shadow Character**: Shadows are soft, neutral, and low-opacity, avoiding heavy black tints to keep the UI light and airy.

## Shapes
The shape language is **Rounded**, balancing professional structure with modern approachability.

- **Standard Containers**: `1rem` (rounded-2xl) for cards and order panels.
- **Interactive Elements**: Buttons and Category Chips use `9999px` (full) roundedness to clearly differentiate them from static containers.
- **Inputs**: Rounded `0.75rem` (xl) for a soft but defined look.
- **Status Badges**: Small `0.5rem` (lg) or pill-shaped for compactness.

## Components
- **Buttons**:
  - *Primary Action*: High-contrast background (Tertiary Container), bold weight, icon-text pairing.
  - *Icon Buttons*: Circular, `44x44px` minimum, with subtle hover states (bg-surface-variant) and a `scale-95` active state.
- **Product Cards**:
  - Aspect ratio: 1:1 for images.
  - Features: Hover-scale transition on imagery (110%), price badge in top-right with backdrop-blur, and an immediate-action "Add" button in the footer.
- **Chips**:
  - *Filter Chips*: Full-pill shape, high-contrast for active states, `surface-container-high` for inactive.
  - *Status Chips*: Low-opacity tinted backgrounds (e.g., `tertiary-fixed/30`) with `label-sm` monospaced text.
- **Input Fields**:
  - Ghost-style with `surface-container-lowest` background, no borders, and `shadow-sm`. Focus state uses a `primary` 2px ring.
- **Order Sidebar**:
  - On mobile, this is a bottom sheet with a `32px` top corner radius and a visual "handle." On desktop, it is a rounded container fixed to the right-hand column.
- **Bottom Navigation**: 
  - Uses a "pill-highlight" active state (Material 3 style) where the active icon and label are encapsulated in a container.