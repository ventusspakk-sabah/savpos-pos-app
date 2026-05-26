---
name: Professional POS Suite
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
  secondary: '#005db6'
  on-secondary: '#ffffff'
  secondary-container: '#63a1ff'
  on-secondary-container: '#00376f'
  tertiary: '#06090c'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2123'
  on-tertiary-container: '#85888b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c3c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
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
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  mono-md:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

The design system is engineered for high-stakes, fast-paced commercial environments where speed of recognition and precision are paramount. The brand personality is authoritative, systematic, and ultra-reliable. 

The aesthetic follows a **Corporate / Modern** approach with a focus on **High-Density Utility**. It prioritizes functional clarity over decorative flair, utilizing a structured grid and a rigorous hierarchy to minimize cognitive load for operators. The emotional response should be one of total control and professional confidence, ensuring that critical data—such as order status or payment processing—is never obscured.

## Colors

The palette is anchored by the deep navy primary color, used for core navigation and primary actions to establish a sense of stability. 

- **Primary (#002045):** Reserved for high-level branding, active navigation states, and primary "Commit" buttons.
- **Secondary (#005EB8):** Used for interactive elements like links and secondary toggles.
- **Surface & Neutrals:** A range of cool grays provides a clean backdrop for high-density data, ensuring that the primary navy doesn't overwhelm the interface.
- **Semantic Status:** Critical for POS functionality. Success (Green) indicates paid/completed, Warning (Amber) indicates expiring services or pending items, and Error (Red) indicates voided items or failed payments. 
- **Room/Service States:** Distinct tonal variations are used to signal room availability—deep navy for occupied, light slate for available, and soft blue for "needs cleaning" or "pending service."

## Typography

This design system utilizes **Inter** for all UI elements to ensure maximum legibility at small sizes and high-density layouts. 

- **Scale:** A tight scale is used to maximize information density. `body-md` (14px) is the standard for data grids and form fields.
- **Weight:** Semi-bold and Bold weights are used strategically for price points, table numbers, and countdown timers to make them scannable from a distance.
- **Monospacing:** JetBrains Mono is introduced as a utility font specifically for receipt previews, SKU numbers, and barcode-scannable inputs to prevent character confusion (e.g., 0 vs O).
- **Mobile:** On handheld POS devices, font sizes are slightly bumped or simplified to ensure touch targets remain clear while maintaining readability.

## Layout & Spacing

The system employs a **Fixed Grid** approach for consistency across terminal hardware. 

- **High-Density Grid:** A 12-column grid is used for desktop/tablet views. In order entry screens, a "Split Screen" model is preferred: Left 8 columns for item selection/room management, Right 4 columns for the persistent "Order Sidebar" or "Cart."
- **Touch-First Spacing:** Despite the high density, touch targets are strictly maintained at a minimum of 44x44px. 
- **Internal Spacing:** Use the 4px base unit. Most components use 12px (3 units) for internal padding to balance density with breathing room.
- **Scanning Context:** Barcode inputs and search bars are always pinned to the top of the interaction area for immediate accessibility.

## Elevation & Depth

To maintain a clean, professional look, the design system avoids heavy shadows, instead using **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** The base canvas, usually `$tertiary_color_hex`.
- **Level 1 (Cards/Containers):** Flat white surfaces with a 1px slate-200 border. No shadow.
- **Level 2 (Modals/Overlays):** Used for checkout flows or settings. These feature a soft, 16px blur ambient shadow with 10% opacity to separate the flow from the underlying data.
- **Active State:** Elements being dragged or high-priority alerts use a slight 2px vertical offset shadow to indicate they are "in-hand" or "top-of-mind."

## Shapes

The design system uses a **Soft (0.25rem)** roundedness profile. This creates a modern feel while retaining a structured, "grid-like" appearance that fits professional hardware. 

- **Standard Buttons/Inputs:** 4px radius.
- **Cards & Room Blocks:** 8px radius (`rounded-lg`) to provide a distinct container visual.
- **Active Selection:** Items selected in a list or active checkout steps use sharp interior corners when nested to emphasize the "locked-in" nature of the selection.

## Components

### Specialised POS Elements
- **Barcode Scannable Inputs:** Identified by a leading "Barcode" icon and a distinct background tint. These fields auto-focus on screen load and use monospaced typography.
- **Count-down Timers:** Used for service-based businesses (e.g., billiards, spa). These feature a "Traffic Light" system: Green (Normal), Amber (5 mins remaining), Red (Expired/Overtime).
- **Multi-step Checkout:** A linear progress bar at the top of the modal. Steps include: 1. Review Items, 2. Apply Discounts/Taxes, 3. Payment Method, 4. Receipt/Closing.

### Standard Components
- **Buttons:** Primary buttons are Navy with white text. Secondary buttons are outlined. Danger actions (Void/Delete) use a ghost-red style until hovered to prevent accidental clicks.
- **Chips:** Used for order modifiers (e.g., "Extra Sauce", "No Onions"). Modifiers are smaller than main items to maintain hierarchy.
- **Lists:** Data-heavy lists use zebra-striping (alternating row colors) for readability.
- **Cards:** Room or Table cards display: Table #, Occupancy Status, Current Total, and an active Timer if applicable.
- **Input Fields:** Use large, clear labels. In "Fast Pay" modes, inputs for currency should feature "Quick Cash" preset buttons (e.g., $10, $20, $50).